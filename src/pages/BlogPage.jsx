import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaArrowRight, FaCalendar, FaUser, FaTag, FaFacebook, 
  FaLinkedin, FaInstagram, FaYoutube, FaCode, FaRobot, 
  FaBrain, FaDatabase, FaCloud, FaCogs, FaChartLine, FaMicrochip,
  FaServer, FaNetworkWired, FaLaptopCode, FaMobile
} from 'react-icons/fa';
import Slider from 'react-slick';
import { format } from 'date-fns';
import { supabase } from '../lib/supabaseClient';
import BlogNewsletter from '../components/BlogNewsletter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlogPage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const selectedCategoryFromURL = searchParams.get('category');

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
    fetchPosts();

    if (selectedCategoryFromURL) {
      setSelectedCategory(selectedCategoryFromURL);
    }
  }, [selectedCategoryFromURL]);

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

  const fetchPosts = async () => {
    try {
      const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (posts) {
        const authorIds = [...new Set(posts.map(p => p.author_id))];

        const { data: authors } = await supabase
          .from('author_profiles')
          .select('id, email, raw_user_meta_data')
          .in('id', authorIds);

        const authorMap = {};
        authors?.forEach(author => {
          authorMap[author.id] = author;
        });

        const postsWithAuthors = posts.map(post => ({
          ...post,
          author: authorMap[post.author_id] || null
        }));

        setPosts(postsWithAuthors);
        setFeaturedPosts(postsWithAuthors.slice(0, 2));
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  const techIcons = [
    { icon: <FaCode />, name: 'Development' },
    { icon: <FaRobot />, name: 'AI' },
    { icon: <FaBrain />, name: 'Machine Learning' },
    { icon: <FaDatabase />, name: 'Big Data' },
    { icon: <FaCloud />, name: 'Cloud Computing' },
    { icon: <FaCogs />, name: 'Automation' },
    { icon: <FaChartLine />, name: 'Analytics' },
    { icon: <FaMicrochip />, name: 'IoT' },
    { icon: <FaServer />, name: 'Infrastructure' },
    { icon: <FaNetworkWired />, name: 'Networking' },
    { icon: <FaLaptopCode />, name: 'Software' },
    { icon: <FaMobile />, name: 'Mobile' }
  ];

  const scrollingIcons = [...techIcons, ...techIcons];

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

  if (error) {
    return (
      <div className="pt-20 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error: {error}</h1>
      </div>
    );
  }

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category_ids?.includes(selectedCategory));

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Newsletters</h1>
            <p className="text-xl text-gray-100">
              Insights and updates from the world of AI and technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Icons Banner */}
      <div className="bg-gray-50 dark:bg-gray-800 py-4 overflow-hidden">
        <div className="flex animate-scroll-left">
          {scrollingIcons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, y: -5 }}
              className="flex-shrink-0 mx-8 text-center group cursor-pointer"
            >
              <div className="text-2xl text-purple-600 dark:text-purple-400 mb-1
                           group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
                           transition-colors duration-300">
                {item.icon}
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-300
                           group-hover:text-purple-600 dark:group-hover:text-purple-400 
                           transition-colors duration-300">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Posts */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 gap-8">
              {filteredPosts.map((post) => (
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
                        src={post.image_url || 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-2">
                          <FaCalendar className="text-purple-400" />
                          {format(new Date(post.created_at), 'MMMM d, yyyy')}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-2">
                          <FaUser className="text-purple-400" />
                          {post.author?.raw_user_meta_data?.username || 'VSP Innovations'}
                        </span>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white
                                   group-hover:text-purple-600 dark:group-hover:text-purple-400 
                                   transition-colors duration-300">
                          {post.title}
                        </h2>
                      </Link>
                      <div 
                        className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3"
                        dangerouslySetInnerHTML={{ 
                          __html: post.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...'
                        }}
                      />
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
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center justify-between p-2 rounded-lg
                           hover:bg-purple-50 dark:hover:bg-purple-900/20
                           text-gray-600 dark:text-gray-300
                           hover:text-purple-600 dark:hover:text-purple-400 
                           transition-all duration-300
                           ${selectedCategory === 'all' ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' : ''}`}
                >
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="flex items-center gap-2 w-full"
                  >
                    <FaTag className="text-purple-400" />
                    All Categories
                  </button>
                </motion.div>
                {categories.map((cat) => (
                  <motion.div
                    key={cat.id}
                    whileHover={{ x: 5 }}
                    className={`flex items-center justify-between p-2 rounded-lg
                             hover:bg-purple-50 dark:hover:bg-purple-900/20
                             text-gray-600 dark:text-gray-300
                             hover:text-purple-600 dark:hover:text-purple-400 
                             transition-all duration-300
                             ${cat.id === selectedCategory ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' : ''}`}
                  >
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className="flex items-center gap-2 w-full"
                    >
                      <FaTag className="text-purple-400" />
                      {cat.name}
                    </button>
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
    </div>
  );
};

export default BlogPage;