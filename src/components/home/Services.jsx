import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMicrophone, FaRobot, FaCogs, FaChartLine, FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaMicrophone className="text-5xl text-primary-600" />,
      title: 'AI Voice Agents',
      description: 'Advanced voice agents powered by natural language processing for seamless customer interactions.',
      features: ['Natural Language Understanding', '24/7 Availability', 'Multi-language Support'],
      path: '/services/ai-voice-agents'
    },
    {
      icon: <FaRobot className="text-5xl text-primary-600" />,
      title: 'Custom AI Solutions',
      description: 'Tailored artificial intelligence solutions designed to meet your specific business requirements.',
      features: ['Personalized Development', 'Scalable Architecture', 'Integration Support'],
      path: '/services/custom-ai-solutions'
    },
    {
      icon: <FaCogs className="text-5xl text-primary-600" />,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Process Optimization', 'Task Automation', 'Performance Analytics'],
      path: '/services/workflow-automation'
    },
    {
      icon: <FaChartLine className="text-5xl text-primary-600" />,
      title: 'AI Marketing Automation',
      description: 'Data-driven marketing automation powered by artificial intelligence.',
      features: ['Predictive Analytics', 'Campaign Optimization', 'Customer Insights'],
      path: '/services/ai-marketing-automation'
    },
  ];

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transforming businesses through innovative AI solutions and intelligent automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: index * 0.2
                }
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { 
                  type: "spring", 
                  stiffness: 400,
                  damping: 10
                }
              }}
              onClick={() => handleServiceClick(service.path)}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg
                       hover:shadow-xl transition-all duration-300
                       transform-gpu border border-transparent
                       hover:border-purple-500/20 cursor-pointer
                       relative group overflow-hidden"
            >
              {/* Gradient Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5"
              />

              {/* Floating Animation for Icon */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex justify-center mb-6 relative z-10"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                  className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 
                           dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl
                           group-hover:from-purple-100 group-hover:to-indigo-100
                           dark:group-hover:from-purple-900/30 dark:group-hover:to-indigo-900/30
                           transition-colors duration-300"
                >
                  {service.icon}
                </motion.div>
              </motion.div>

              <motion.h3 
                className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white
                         bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text
                         group-hover:text-transparent transition-colors duration-300"
              >
                {service.title}
              </motion.h3>

              <p className="text-gray-600 dark:text-gray-300 text-center mb-6 text-sm relative z-10">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-300
                             group-hover:text-gray-800 dark:group-hover:text-gray-200
                             transition-colors duration-300"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"
                      whileHover={{ scale: 1.5 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <div className="text-center relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm
                           bg-gradient-to-r from-purple-600 to-indigo-600 
                           text-white rounded-lg transition-all duration-300
                           hover:shadow-lg hover:shadow-purple-500/20"
                >
                  View More
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-8 py-4
                     bg-gradient-to-r from-purple-600 to-indigo-600 
                     text-white rounded-xl font-semibold
                     hover:shadow-lg hover:shadow-purple-500/20
                     transform-gpu transition-all duration-300
                     hover:scale-105 active:scale-95"
          >
            View All Services
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;