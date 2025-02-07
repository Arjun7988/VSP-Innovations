import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaHeadset, FaComments, FaPhone, FaNetworkWired } from 'react-icons/fa';

const AIEcosystem = () => {
  const layers = [
    {
      title: 'House of AI',
      description: 'Advanced artificial intelligence core powering intelligent decision-making and natural interactions',
      icon: <FaRobot />,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      title: 'Customer Experience Management',
      description: 'Comprehensive platform for managing and optimizing customer interactions across all channels',
      icon: <FaHeadset />,
      color: 'from-indigo-600 to-blue-600'
    },
    {
      title: 'Customer Engagement Components',
      description: 'Modular components for seamless integration of AI capabilities into existing systems',
      icon: <FaComments />,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Voice & Messaging APIs',
      description: 'Robust APIs for voice and messaging integration across multiple platforms',
      icon: <FaPhone />,
      color: 'from-cyan-600 to-teal-600'
    },
    {
      title: 'Mission-critical Connectivity',
      description: 'Enterprise-grade infrastructure ensuring reliable and secure communications',
      icon: <FaNetworkWired />,
      color: 'from-teal-600 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            AI-powered Communication Ecosystem
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade communication infrastructure built for scalability and reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-full min-h-[600px] lg:min-h-full"
          >
            <div className="relative h-full rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                alt="AI Communication Ecosystem"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-600/20 mix-blend-multiply" />
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-xl"
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="text-7xl mb-6"
                  >
                    <FaRobot />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold mb-4"
                  >
                    Unified AI Platform
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-white/80 max-w-md mx-auto"
                  >
                    Powering the next generation of intelligent communication
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {layers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6
                         transform hover:-translate-x-2 transition-transform duration-300
                         border border-transparent hover:border-purple-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 bg-gradient-to-r ${layer.color} rounded-lg text-white text-xl`}>
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {layer.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIEcosystem;