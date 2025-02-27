import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaLink, FaGithub, FaRobot, FaCode, FaCogs, FaChartLine } from 'react-icons/fa';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai-voice', name: 'AI Voice Agents' },
    { id: 'automation', name: 'Automation' },
    { id: 'custom-ai', name: 'Custom AI' },
  ];

  const projects = [
    {
      title: 'AI Voice Assistant for Healthcare',
      category: 'ai-voice',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
      description: 'Advanced AI-powered voice assistant for healthcare providers, handling appointment scheduling and patient inquiries.',
      client: 'Major Healthcare Provider',
      duration: '6 months',
      impact: '45% reduction in call handling time',
      icon: <FaRobot />
    },
    {
      title: 'Automated Customer Support System',
      category: 'automation',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
      description: 'End-to-end customer support automation system with intelligent ticket routing and response generation.',
      client: 'E-commerce Platform',
      duration: '4 months',
      impact: '60% faster response times',
      icon: <FaCogs />
    },
    {
      title: 'Predictive Analytics Platform',
      category: 'custom-ai',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      description: 'Custom AI solution for predicting market trends and customer behavior patterns.',
      client: 'Retail Chain',
      duration: '8 months',
      impact: '25% increase in sales',
      icon: <FaChartLine />
    },
    {
      title: 'Intelligent Document Processing',
      category: 'custom-ai',
      image: 'https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?auto=format&fit=crop&q=80',
      description: 'AI-powered document processing system with advanced OCR and data extraction capabilities.',
      client: 'Legal Firm',
      duration: '5 months',
      impact: '80% faster document processing',
      icon: <FaCode />
    },
    {
      title: 'Multilingual Customer Service Bot',
      category: 'ai-voice',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80',
      description: 'AI voice bot supporting multiple languages for international customer service.',
      client: 'International Hotel Chain',
      duration: '7 months',
      impact: '24/7 support in 12 languages',
      icon: <FaRobot />
    },
    {
      title: 'Workflow Automation Suite',
      category: 'automation',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80',
      description: 'Comprehensive workflow automation solution for business process optimization.',
      client: 'Manufacturing Company',
      duration: '9 months',
      impact: '40% efficiency improvement',
      icon: <FaCogs />
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Portfolio Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Explore our innovative AI solutions and success stories that have transformed businesses across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                          ${filter === category.id
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg
                         hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <span className="text-white text-sm bg-purple-600/80 px-3 py-1 rounded-full">
                        {project.duration}
                      </span>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <FaLink />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <FaGithub />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 text-xl">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400">
                        {project.client}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-3">                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Duration: {project.duration}
                        </div>
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                          <FaChartLine />
                          <span className="text-sm font-medium">{project.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Build Something Amazing?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold
                       hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;