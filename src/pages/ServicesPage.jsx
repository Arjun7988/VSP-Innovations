import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMicrophone, FaRobot, FaCogs, FaChartLine, FaWhatsapp, 
  FaGlobe, FaMobile, FaSearch, FaArrowRight 
} from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaMicrophone className="text-6xl text-primary-600" />,
      title: 'AI Voice Agents',
      description: 'Advanced voice agents powered by natural language processing for seamless customer interactions.',
      features: [
        'Natural Language Understanding',
        '24/7 Availability',
        'Multi-language Support',
        'Real-time Response Generation',
        'Voice Pattern Recognition',
        'Sentiment Analysis'
      ],
      path: '/services/ai-voice-agents'
    },
    {
      icon: <FaRobot className="text-6xl text-primary-600" />,
      title: 'Custom AI Solutions',
      description: 'Tailored artificial intelligence solutions designed to meet your specific business requirements.',
      features: [
        'Personalized Development',
        'Scalable Architecture',
        'Integration Support',
        'Custom Model Training',
        'API Development',
        'Performance Monitoring'
      ],
      path: '/services/custom-ai-solutions'
    },
    {
      icon: <FaCogs className="text-6xl text-primary-600" />,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: [
        'Process Optimization',
        'Task Automation',
        'Performance Analytics',
        'Custom Workflow Design',
        'Integration with Existing Systems',
        'Real-time Monitoring'
      ],
      path: '/services/workflow-automation'
    },
    {
      icon: <FaChartLine className="text-6xl text-primary-600" />,
      title: 'AI Marketing Automation',
      description: 'Data-driven marketing automation powered by artificial intelligence.',
      features: [
        'Predictive Analytics',
        'Campaign Optimization',
        'Customer Insights',
        'Automated Segmentation',
        'Personalized Content',
        'Performance Tracking'
      ],
      path: '/services/ai-marketing-automation'
    },
    {
      icon: <FaRobot className="text-6xl text-primary-600" />,
      title: 'AI Chatbots',
      description: 'Intelligent chatbots that provide instant customer support and engagement across multiple platforms.',
      features: [
        'Contextual Understanding',
        'Multi-platform Integration',
        'Custom Training',
        'Analytics Dashboard',
        'Automated Responses',
        'Easy Deployment'
      ],
      path: '/services/ai-chatbots'
    },
    {
      icon: <FaWhatsapp className="text-6xl text-primary-600" />,
      title: 'WhatsApp Personal Assistant',
      description: 'AI-powered WhatsApp assistant for automated customer service and business communication.',
      features: [
        'Business Account Integration',
        'Automated Responses',
        'Media Handling',
        'Quick Replies',
        'Contact Management',
        'Message Broadcasting'
      ],
      path: '/services/whatsapp-assistant'
    },
    {
      icon: <FaGlobe className="text-6xl text-primary-600" />,
      title: 'Web Application Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'API Integration',
        'Database Design',
        'Security Implementation',
        'Performance Optimization'
      ],
      path: '/services/web-development'
    },
    {
      icon: <FaMobile className="text-6xl text-primary-600" />,
      title: 'Native Mobile App Development',
      description: 'Native mobile applications for iOS and Android platforms with seamless user experience.',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Performance Monitoring'
      ],
      path: '/services/mobile-development'
    },
    {
      icon: <FaSearch className="text-6xl text-primary-600" />,
      title: 'AI SEO Automation',
      description: 'Automated SEO optimization powered by artificial intelligence for better search rankings.',
      features: [
        'Keyword Analysis',
        'Content Optimization',
        'Backlink Management',
        'Performance Tracking',
        'Competitor Analysis',
        'Automated Reporting'
      ],
      path: '/services/ai-seo'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-100">
              Comprehensive AI solutions to transform your business operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  borderColor: "rgba(124, 58, 237, 0.5)"
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 
                           transform-gpu transition-all duration-300
                           border-2 border-transparent
                           hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]
                           relative overflow-hidden
                           before:absolute before:inset-0 before:bg-gradient-to-r 
                           before:from-purple-600/5 before:to-indigo-600/5 before:opacity-0
                           hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                <div className="flex items-start gap-6 relative z-10">
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                      className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md
                                 ring-1 ring-purple-600/20 hover:ring-purple-600/40
                                 transition-all duration-300"
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  
                  <div className="flex-grow">
                    <motion.h3 
                      className="text-2xl font-bold mb-4 text-gray-900 dark:text-white
                                 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text
                                 hover:text-transparent transition-all duration-300"
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ 
                            delay: index * 0.1 + featureIndex * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-400
                                   hover:text-primary-600 dark:hover:text-primary-400
                                   transition-colors duration-300"
                        >
                          <motion.span
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.5, backgroundColor: "#7C3AED" }}
                            className="w-1.5 h-1.5 bg-primary-600 rounded-full"
                          />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                    
                    <Link
                      to={service.path}
                      className="group inline-flex items-center gap-2 py-2 px-6
                               bg-gradient-to-r from-purple-600 to-indigo-600 
                               text-white rounded-lg font-medium
                               transform-gpu transition-all duration-300
                               hover:shadow-lg hover:shadow-purple-600/20
                               hover:scale-105 active:scale-95
                               relative overflow-hidden"
                    >
                      <span className="relative z-10">View More</span>
                      <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20
                                 transition-opacity duration-300"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;