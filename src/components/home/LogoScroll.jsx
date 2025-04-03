import React from 'react';
import { motion } from 'framer-motion';

const LogoScroll = () => {
  const logos = [
    {
      name: 'OpenAI',
      image: '/images/logos/openai-logo.png',
      invert: true
    },
    {
      name: 'Anthropic',
      image: '/images/logos/anthropic-logo.png',
      invert: true
    },
    {
      name: 'Google Cloud',
      image: '/images/logos/google-cloud-logo.png',
      invert: false
    },
    {
      name: 'Microsoft',
      image: '/images/logos/microsoft-logo.png',
      invert: true
    },
    {
      name: 'AWS',
      image: '/images/logos/aws-logo.png',
      invert: false
    },
    {
      name: 'NVIDIA',
      image: '/images/logos/nvidia-logo.png',
      invert: true
    },
    {
      name: 'IBM',
      image: '/images/logos/ibm-logo.png',
      invert: true
    },
    {
      name: 'Meta',
      image: '/images/logos/meta-logo.png',
      invert: true
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We partner with leading technology companies to deliver cutting-edge AI solutions
          </p>
        </motion.div>
      </div>

      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>

        {/* First Row - Left to Right */}
        <div className="flex space-x-12 animate-scroll-left py-8">
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              whileHover={{ scale: 1.1 }}
              className="flex-shrink-0 h-12 w-32 flex items-center justify-center"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className={`h-8 object-contain ${logo.invert ? 'dark:invert' : ''}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex space-x-12 animate-scroll-right py-8">
          {[...logos.reverse(), ...logos].map((logo, index) => (
            <motion.div
              key={`${logo.name}-reverse-${index}`}
              whileHover={{ scale: 1.1 }}
              className="flex-shrink-0 h-12 w-32 flex items-center justify-center"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className={`h-8 object-contain ${logo.invert ? 'dark:invert' : ''}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoScroll;