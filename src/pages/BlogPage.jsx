import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 'ai-voice-agents',
      title: 'The Future of AI Voice Agents in Customer Service',
      excerpt: 'Explore how AI-powered voice agents are revolutionizing customer service and transforming business communication.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
      category: 'AI Voice Agents'
    },
    {
      id: 'workflow-automation',
      title: 'Implementing Workflow Automation for Business Efficiency',
      excerpt: 'Learn how workflow automation can streamline your business processes and boost operational efficiency.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80',
      category: 'Workflow Automation'
    },
    {
      id: 'ai-marketing',
      title: 'The Rise of AI Marketing Automation',
      excerpt: 'Discover how AI is transforming marketing strategies and enabling personalized customer experiences.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      category: 'AI Marketing'
    },
    {
      id: 'custom-ai',
      title: 'Custom AI Solutions: A Game Changer for Businesses',
      excerpt: 'Understanding the impact of tailored AI solutions on business growth and innovation.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
      category: 'Custom AI'
    },
    {
      id: 'whatsapp-ai',
      title: 'WhatsApp Business Integration with AI',
      excerpt: 'How AI-powered WhatsApp automation is transforming business communication.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
      category: 'WhatsApp Assistant'
    },
    {
      id: 'ai-chatbots',
      title: 'The Power of AI Chatbots in Customer Support',
      excerpt: 'Exploring the benefits of AI chatbots in modern customer support systems.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
      category: 'AI Chatbots'
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-100">
              Insights and updates from the world of AI and technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden
                         shadow-lg hover:shadow-xl transition-all duration-300
                         border border-transparent hover:border-purple-500/20"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  {/* Image Container */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-purple-600/90 text-white text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white
                                group-hover:bg-gradient-to-r from-purple-600 to-indigo-600 
                                group-hover:bg-clip-text group-hover:text-transparent
                                transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400
                                  group-hover:text-purple-700 dark:group-hover:text-purple-300
                                  transition-colors duration-300">
                      <span className="font-medium">Read More</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;