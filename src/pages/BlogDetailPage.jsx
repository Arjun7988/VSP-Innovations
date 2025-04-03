import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Blog posts data
  const blogPosts = {
    'ai-voice-agents': {
      title: 'The Future of AI Voice Agents in Customer Service',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
      category: 'AI Voice Agents',
      content: `
        <p class="lead">Artificial Intelligence (AI) voice agents are revolutionizing the customer service industry, offering unprecedented levels of efficiency and availability. These intelligent systems are capable of understanding natural language, processing complex queries, and providing accurate responses in real-time.</p>

        <h2>The Evolution of Customer Service</h2>
        <p>Traditional customer service models have relied heavily on human agents, leading to limitations in scalability and availability. AI voice agents address these challenges by providing:</p>
        <ul>
          <li>24/7 availability without human limitations</li>
          <li>Consistent service quality across all interactions</li>
          <li>Multilingual support capabilities</li>
          <li>Instant response times</li>
        </ul>

        <h2>Key Benefits of AI Voice Agents</h2>
        <p>The implementation of AI voice agents brings numerous advantages to businesses:</p>
        <ul>
          <li>Reduced operational costs</li>
          <li>Improved customer satisfaction</li>
          <li>Scalable customer support</li>
          <li>Data-driven insights</li>
        </ul>

        <h2>Real-World Applications</h2>
        <p>AI voice agents are being successfully deployed across various industries:</p>
        <ul>
          <li>Healthcare appointment scheduling</li>
          <li>Banking services</li>
          <li>Travel and hospitality</li>
          <li>Retail customer support</li>
        </ul>

        <h2>The Future Outlook</h2>
        <p>As AI technology continues to evolve, we can expect to see even more sophisticated voice agents that can:</p>
        <ul>
          <li>Handle complex emotional interactions</li>
          <li>Provide more personalized experiences</li>
          <li>Integrate with advanced business systems</li>
          <li>Offer predictive customer service</li>
        </ul>

        <p>The future of customer service lies in the successful integration of AI voice agents with human agents, creating a hybrid model that leverages the strengths of both to deliver exceptional customer experiences.</p>
      `,
      tags: ['AI', 'Customer Service', 'Voice Agents', 'Technology'],
      relatedPosts: [
        {
          id: 'ai-chatbots',
          title: 'The Power of AI Chatbots in Customer Support',
          image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80'
        },
        {
          id: 'whatsapp-ai',
          title: 'WhatsApp Business Integration with AI',
          image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80'
        },
        {
          id: 'custom-ai',
          title: 'Custom AI Solutions: A Game Changer for Businesses',
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
        }
      ]
    },
    'workflow-automation': {
      title: 'Implementing Workflow Automation for Business Efficiency',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80',
      category: 'Workflow Automation',
      content: `
        <p class="lead">Workflow automation is transforming how businesses operate, bringing unprecedented levels of efficiency and productivity. By automating repetitive tasks and streamlining complex processes, organizations can focus on strategic initiatives and innovation.</p>

        <h2>Understanding Workflow Automation</h2>
        <p>Workflow automation involves using technology to automate business processes, reducing manual intervention and improving efficiency. Key aspects include:</p>
        <ul>
          <li>Process mapping and optimization</li>
          <li>Task automation and scheduling</li>
          <li>Integration with existing systems</li>
          <li>Performance monitoring and analytics</li>
        </ul>

        <h2>Benefits of Automation</h2>
        <p>Implementing workflow automation brings several advantages:</p>
        <ul>
          <li>Increased productivity</li>
          <li>Reduced errors</li>
          <li>Cost savings</li>
          <li>Improved compliance</li>
        </ul>

        <h2>Implementation Strategies</h2>
        <p>Successful workflow automation requires careful planning and execution:</p>
        <ul>
          <li>Process analysis and mapping</li>
          <li>Technology selection</li>
          <li>Change management</li>
          <li>Employee training</li>
        </ul>

        <h2>Future Trends</h2>
        <p>The future of workflow automation will be shaped by:</p>
        <ul>
          <li>AI and machine learning integration</li>
          <li>Advanced analytics capabilities</li>
          <li>Low-code/no-code platforms</li>
          <li>Enhanced collaboration tools</li>
        </ul>
      `,
      tags: ['Automation', 'Business Efficiency', 'Workflow', 'Technology'],
      relatedPosts: [
        {
          id: 'ai-marketing',
          title: 'The Rise of AI Marketing Automation',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
        },
        {
          id: 'custom-ai',
          title: 'Custom AI Solutions: A Game Changer for Businesses',
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
        },
        {
          id: 'ai-voice-agents',
          title: 'The Future of AI Voice Agents in Customer Service',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
        }
      ]
    },
    'ai-marketing': {
      title: 'The Rise of AI Marketing Automation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      category: 'AI Marketing',
      content: `
        <p class="lead">AI marketing automation is revolutionizing how businesses connect with their customers, enabling personalized experiences at scale. This technology is transforming traditional marketing approaches into data-driven, intelligent campaigns.</p>

        <h2>The Power of AI in Marketing</h2>
        <p>AI marketing automation brings several key capabilities to modern marketing:</p>
        <ul>
          <li>Predictive analytics for customer behavior</li>
          <li>Automated campaign optimization</li>
          <li>Real-time personalization</li>
          <li>Advanced customer segmentation</li>
        </ul>

        <h2>Key Benefits</h2>
        <p>Businesses implementing AI marketing automation experience:</p>
        <ul>
          <li>Increased conversion rates</li>
          <li>Improved customer engagement</li>
          <li>Better ROI on marketing spend</li>
          <li>Enhanced customer insights</li>
        </ul>

        <h2>Implementation Strategies</h2>
        <p>Successful AI marketing automation requires:</p>
        <ul>
          <li>Clear marketing objectives</li>
          <li>Quality data collection</li>
          <li>Integration with existing tools</li>
          <li>Continuous optimization</li>
        </ul>

        <h2>Future Trends</h2>
        <p>The future of AI marketing automation includes:</p>
        <ul>
          <li>Advanced personalization capabilities</li>
          <li>Cross-channel automation</li>
          <li>Predictive analytics improvements</li>
          <li>Enhanced customer journey mapping</li>
        </ul>
      `,
      tags: ['AI', 'Marketing', 'Automation', 'Technology'],
      relatedPosts: [
        {
          id: 'workflow-automation',
          title: 'Implementing Workflow Automation for Business Efficiency',
          image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80'
        },
        {
          id: 'custom-ai',
          title: 'Custom AI Solutions: A Game Changer for Businesses',
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
        },
        {
          id: 'ai-voice-agents',
          title: 'The Future of AI Voice Agents in Customer Service',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
        }
      ]
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Post Not Found
          </h1>
          <Link
            to="/blog"
            className="text-purple-600 dark:text-purple-400 hover:underline"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${window.location.href}`)}`
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: comments.length + 1,
      name: e.target.name.value,
      email: e.target.email.value,
      comment: comment,
      date: new Date().toISOString()
    };
    setComments([...comments, newComment]);
    setComment('');
    e.target.reset();
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6
                         transition-colors duration-300"
              >
                <span className="text-sm">← Back to Blog</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
              
              {/* Category Badge */}
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full">
                {post.category}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Blog Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </motion.div>

            {/* Social Share Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 mb-12 justify-center"
            >
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
                className="p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
              >
                <FaTwitter />
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

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 mb-12 justify-center"
            >
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full
                           text-sm text-gray-700 dark:text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>

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
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent
                             dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600
                             text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Post Comment
                  </button>
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
                            {new Date(comment.date).toLocaleDateString()}
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
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Related Articles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {post.relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg
                         hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/blog/${relatedPost.id}`} className="block">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white
                                 hover:text-purple-600 dark:hover:text-purple-400
                                 transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;