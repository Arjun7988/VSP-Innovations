import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const featuredProjects = [
    {
      title: 'AI Customer Service Bot',
      description: 'Advanced AI-powered customer service bot with natural language processing capabilities.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80'
    },
    {
      title: 'Workflow Automation Suite',
      description: 'End-to-end workflow automation solution for enterprise businesses.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80'
    },
    {
      title: 'Custom AI Recommendation Engine',
      description: 'Personalized recommendation system using machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80'
    },
    {
      title: 'AI Marketing Platform',
      description: 'Data-driven marketing automation platform powered by artificial intelligence.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our innovative AI solutions and success stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { 
                  type: "spring", 
                  stiffness: 400,
                  damping: 10
                }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg
                       hover:shadow-xl transition-all duration-300
                       border border-transparent hover:border-purple-500/20"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white
                             group-hover:bg-gradient-to-r from-purple-600 to-indigo-600 
                             group-hover:bg-clip-text group-hover:text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;