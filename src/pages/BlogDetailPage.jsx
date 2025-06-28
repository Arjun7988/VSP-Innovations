import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowRight, FaCalendar, FaUser, FaTag, FaFacebook, 
  FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaShare 
} from 'react-icons/fa';
import { format } from 'date-fns';
import { supabase } from '../lib/supabaseClient';
import BlogNewsletter from '../components/BlogNewsletter';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Function to validate UUID format
  const isValidUUID = (uuid) => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  };

  // Fetch blog post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!isValidUUID(id)) throw new Error('Invalid post ID');

        const { data: post, error: postFetchError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', id)
          .maybeSingle();

        if (postFetchError || !post) throw postFetchError || new Error('Post not found');

        setPost(post);
        setError(null);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(err.message);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  
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

  const getShareUrls = () => {
    const currentUrl = window.location.href;
    const title = post?.title || 'Blog Post';
    
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${currentUrl}`)}`,
    };
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (!isValidUUID(id)) {
        throw new Error('Invalid post ID format');
      }

      // First check if the post exists
      const { data: posts, error: postError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id);

      if (postError) throw postError;
      if (!posts || posts.length === 0) throw new Error('Post not found');
      if (posts.length > 1) throw new Error('Multiple posts found with same ID');

      const post = posts[0];

      const { data, error } = await supabase
        .from('blog_comments')
        .insert([{
          post_id: id,
          name: formData.name,
          email: formData.email,
          comment: formData.comment
        }])
        .select();

      if (error) throw error;

      // Add the new comment to the list (assume first item if array exists)
      if (data?.length) {
        setComments(prev => [...prev, data[0]]);
      }

      // Add the new comment to the local state with is_approved false
      setComments(prev => [...prev, data]);
      setFormData({ name: '', email: '', comment: '' });
      
      // Show success message
      alert('Comment submitted successfully! It will be visible after approval.');
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert(`Error submitting comment: ${error.message}`);
    }
  };

  const fetchComments = async () => {
    try {
      if (!isValidUUID(id)) {
        throw new Error('Invalid post ID format');
      }

      const { data, error } = await supabase
        .from('blog_comments')
        .select('*')
        .eq('post_id', id)
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    if (id && isValidUUID(id)) {
      fetchComments();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const socialLinks = [
    { platform: 'Facebook', icon: <FaFacebook />, count: '5K', type: 'Likes', action: 'Like', color: 'bg-blue-600', url: 'https://www.facebook.com/vspinnovationscompany' },
    { platform: 'X', icon: <span className="inline-block w-4 h-4">𝕏</span>, count: '2K', type: 'Followers', action: 'Follow', color: 'bg-black', url: 'https://x.com/vspinnovations' },
    { platform: 'LinkedIn', icon: <FaLinkedin />, count: '8K', type: 'Connections', action: 'Connect', color: 'bg-blue-700', url: 'https://www.linkedin.com/company/vsp-innovations/' },
    { platform: 'YouTube', icon: <FaYoutube />, count: '3K', type: 'Subscribers', action: 'Subscribe', color: 'bg-red-600', url: 'https://www.youtube.com/c/VspinnovationsCompany' },
    { platform: 'Instagram', icon: <FaInstagram />, count: '1K', type: 'Followers', action: 'Follow', color: 'bg-pink-600', url: 'https://www.instagram.com/vspinnovations/' }
  ];

  if (loading) {
    return (
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-20 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error: {error || 'Post not found'}</h1>
        <Link
          to="/blog"
          className="text-purple-600 hover:text-purple-700 transition-colors"
        >
          ← Back to Newsletters
        </Link>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  const shareUrls = getShareUrls();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6
                       transition-colors duration-300"
            >
              <span className="text-sm">← Back to Newsletters</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{format(new Date(post.created_at), 'MMMM d, yyyy')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>VSP Innovations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:w-3/4">
              {/* Featured Image */}
              {post.image_url && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              )}

              {/* Social Share */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-12 justify-center"
              >
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium">
                  <FaShare className="text-purple-600" /> Share:
                </span>
                <a
                  href={shareUrls.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href={shareUrls.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <span className="inline-block w-4 h-4">𝕏</span>
                </a>
                <a
                  href={shareUrls.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={shareUrls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <FaWhatsapp />
                </a>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-lg dark:prose-invert max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Comments Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-16 space-y-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                  Comments ({comments.length})
                </h2>

                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Leave a Comment
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                               focus:ring-2 focus:ring-purple-500 focus:border-transparent
                               dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                               focus:ring-2 focus:ring-purple-500 focus:border-transparent
                               dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Comment *
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows="4"
                      value={formData.comment}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent
                             dark:bg-gray-700 dark:text-white"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600
                             text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Post Comment
                    </motion.button>
                  </div>
                </form>

                {/* Comments List */}
                {comments.length > 0 && (
                  <div className="space-y-8 mt-12">
                    {comments.map((comment) => (
                      <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">
                              {comment.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {comment.created_at ? format(new Date(comment.created_at), 'MMMM d, yyyy') : 'Unknown Date'}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {comment.comment}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
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
                               ${cat.id === post.category_id ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' : ''}`}
                    >
                      <Link to={`/blog?category=${encodeURIComponent(cat.id)}`} className="flex items-center gap-2 w-full">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;