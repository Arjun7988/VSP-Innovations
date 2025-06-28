import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            About VSP Innovations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pioneering the future of AI technology with innovative solutions that transform businesses
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-600/20 mix-blend-multiply" />
              
              {/* Animated Floating Elements */}
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-xl"
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
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-500 rounded-full opacity-20 blur-xl"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 
                         p-6 rounded-xl transform-gpu transition-all duration-300
                         hover:shadow-lg hover:shadow-purple-500/10 border border-transparent
                         hover:border-purple-500/20"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To revolutionize businesses through cutting-edge AI solutions, making advanced technology accessible and impactful for organizations of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 
                         p-6 rounded-xl transform-gpu transition-all duration-300
                         hover:shadow-lg hover:shadow-purple-500/10 border border-transparent
                         hover:border-purple-500/20"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the global leader in AI innovation, driving digital transformation and creating sustainable value for our clients and society.
              </p>
            </motion.div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: <FaLightbulb />, label: 'Innovative Solutions' },
                { icon: <FaRocket />, label: 'Fast Delivery' },
                { icon: <FaUsers />, label: 'Expert Team' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(124, 58, 237, 0.1)",
                  }}
                  transition={{ 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl
                           border border-purple-100 dark:border-purple-900/20
                           transform-gpu transition-all duration-300
                           hover:border-purple-500/20"
                >
                  <motion.div 
                    className="text-2xl text-purple-600 mb-2"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: 'Innovation',
              description: 'Pushing boundaries with cutting-edge AI solutions',
              gradient: 'from-purple-600 to-indigo-600'
            },
            {
              title: 'Excellence',
              description: 'Delivering exceptional quality in every project',
              gradient: 'from-pink-600 to-purple-600'
            },
            {
              title: 'Partnership',
              description: 'Building lasting relationships with our clients',
              gradient: 'from-indigo-600 to-blue-600'
            }
          ].map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${point.gradient} opacity-5 blur-xl 
                          group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg
                           border border-transparent hover:border-purple-500/10
                           transform-gpu transition-all duration-300">
                <h4 className={`text-xl font-bold mb-2 bg-gradient-to-r ${point.gradient} 
                              bg-clip-text text-transparent`}>
                  {point.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;