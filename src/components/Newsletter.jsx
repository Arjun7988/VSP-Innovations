import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const {
      data: { user },
      error: userError
    } = await supabase.auth.getUser();

    if (userError) throw userError;

    // 🆕 Upsert into author_profiles to ensure author exists
    await supabase
      .from('author_profiles')
      .upsert({
        id: user.id,
        email: user.email,
        raw_user_meta_data: user.user_metadata
      }, { onConflict: 'id' });

    const postData = {
      ...formData,
      author_id: user.id
    };

    let response;
    if (initialData?.id) {
      response = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', initialData.id)
        .select()
        .single();
    } else {
      response = await supabase
        .from('blog_posts')
        .insert([postData])
        .select()
        .single();
    }

    if (response.error) {
      console.error('Supabase Update Error:', response.error);
      alert(`Supabase error: ${response.error.message}`);
      return;
    }

    if (onSubmit) {
      onSubmit(response.data);
    }
  } catch (error) {
    console.error('Error saving blog post:', error);
    alert(`Unexpected error: ${error.message}`);
  }
};


  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-600 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Stay updated with our latest news, updates, and cutting-edge AI innovations
            </p>

            <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 
                           rounded-full text-white placeholder-white/60
                           focus:outline-none focus:border-white/40
                           text-lg"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 
                           px-6 py-2 bg-white rounded-full text-purple-600
                           hover:bg-opacity-90 transition-colors duration-300
                           flex items-center gap-2 font-medium"
                >
                  Subscribe
                  <FaPaperPlane className="text-sm" />
                </motion.button>
              </div>

              {subscribeStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute mt-2 text-green-300"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
              {subscribeStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute mt-2 text-red-300"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>

            <p className="text-sm text-white/60">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;