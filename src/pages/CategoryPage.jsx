import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowRight, FaCalendar, FaUser, FaTag, FaFacebook, 
  FaLinkedin, FaInstagram, FaYoutube
} from 'react-icons/fa';
import { supabase } from '../lib/supabaseClient';
import BlogNewsletter from '../components/BlogNewsletter';

const CategoryPage = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Add MailerLite Universal script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '1451105');
    `;
    document.head.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .eq('is_active', true)
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const categoryPosts = [
    {
      id: '1',
      title: 'AI Voice Agents Revolutionizing Customer Service',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      date: 'June 10, 2024',
      author: 'VSP Innovations',
      excerpt: 'Discover how AI-powered voice agents are transforming customer service operations and improving business efficiency.',
      category: 'AI Voice Agents'
    },
    {
      id: '2',
      title: 'The Impact of AI on Workflow Automation',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
      date: 'June 5, 2024',
      author: 'VSP Innovations',
      excerpt: 'Learn about the revolutionary changes AI is bringing to workflow automation and business processes.',
      category: 'Workflow Automation'
    },
    {
      id: '3',
      title: 'Custom AI Solutions for Enterprise',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg',
      date: 'June 1, 2024',
      author: 'VSP Innovations',
      excerpt: 'Explore how custom AI solutions are helping enterprises achieve their business goals.',
      category: 'Custom AI Solutions'
    }
  ];

  const socialLinks = [
    { platform: 'Facebook', icon: <FaFacebook />, count: '5K', type: 'Likes', action: 'Like', color: 'bg-blue-600', url: 'https://www.facebook.com/vspinnovationscompany' },
    { platform: 'X', icon: <span className="inline-block w-4 h-4">𝕏</span>, count: '2K', type: 'Followers', action: 'Follow', color: 'bg-black', url: 'https://x.com/vspinnovations' },
    { platform: 'LinkedIn', icon: <FaLinkedin />, count: '8K', type: 'Connections', action: 'Connect', color: 'bg-blue-700', url: 'https://www.linkedin.com/company/vsp-innovations/' },
    { platform: 'YouTube', icon: <FaYoutube />, count: '3K', type: 'Subscribers', action: 'Subscribe', color: 'bg-red-600', url: 'https://www.youtube.com/c/VspinnovationsCompany' },
    { platform: 'Instagram', icon: <FaInstagram />, count: '1K', type: 'Followers', action: 'Follow', color: 'bg-pink-600', url: 'https://www.instagram.com/vspinnovations/' }
  ];

  const trendingPosts = [
    { title: 'The Future of AI in Business', link: '/blog/future-of-ai' },
    { title: '5 Ways to Automate Your Workflow with AI', link: '/blog/automate-workflow' },
    { title: 'Understanding AI Voice Agents', link: '/blog/understanding-ai-voice' },
    { title: 'AI Marketing Automation Guide', link: '/blog/ai-marketing-guide' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category}</h1>
            <p className="text-xl text-gray-100">
              Latest articles in {category}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Posts */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 gap-8">
              {categoryPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg 
                           hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-2">
                          <FaCalendar className="text-purple-400" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-2">
                          <FaUser className="text-purple-400" />
                          {post.author}
                        </span>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white
                                   group-hover:text-purple-600 dark:group-hover:text-purple-400 
                                   transition-colors duration-300">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700
                               dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                      >
                        Read More
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            {/* Newsletter Subscription */}
            <BlogNewsletter />
            
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl 
                       transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 
                           bg-clip-text text-transparent">
                Categories
              </h3>
              <div className="space-y-4">
                {categories.map((cat) => (
                  <motion.div
                    key={cat.id}
                    whileHover={{ x: 5 }}
                    className={`flex items-center justify-between p-2 rounded-lg
                             hover:bg-purple-50 dark:hover:bg-purple-900/20
                             text-gray-600 dark:text-gray-300
                             hover:text-purple-600 dark:hover:text-purple-400 
                             transition-all duration-300
                             ${cat.name === category ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' : ''}`}
                  >
                    <Link to={`/category/${cat.name}`} className="flex items-center gap-2 w-full">
                      <FaTag className="text-purple-400" />
                      {cat.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl 
                       transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 
                           bg-clip-text text-transparent">
                Follow us on
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.platform}
                    whileHover={{ scale: 1.02 }}
                    className={`${social.color} bg-opacity-10 dark:bg-opacity-20 p-4 rounded-xl
                             hover:bg-opacity-20 dark:hover:bg-opacity-30 
                             transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <a 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`text-xl ${social.color.replace('bg-', 'text-')}`}
                        >
                          {social.icon}
                        </a>
                        <div>
                          <span className="font-bold">{social.count}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                            {social.type}
                          </span>
                        </div>
                      </div>
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm ${social.color.replace('bg-', 'text-')} 
                                 hover:opacity-80 transition-opacity`}
                      >
                        {social.action}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Week Trending */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl 
                       transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 
                           bg-clip-text text-transparent flex items-center gap-2">
                <FaCalendar className="text-purple-600" />
                WEEK TRENDING
              </h3>
              <div className="space-y-4">
                {trendingPosts.map((post, index) => (
                  <Link
                    key={index}
                    to={post.link}
                    className="group flex items-center gap-4 p-3 rounded-xl
                             bg-gray-50 dark:bg-gray-700/50
                             hover:bg-purple-50 dark:hover:bg-purple-900/20 
                             transition-all duration-300"
                  >
                    <FaArrowRight className="text-purple-600 opacity-0 group-hover:opacity-100 
                                         transition-all duration-300" />
                    <p className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 
                                dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;