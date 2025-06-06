import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaGlobe, FaGithub, FaUser, FaQuoteRight } from 'react-icons/fa';
import { supabase } from '../lib/supabaseClient';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setPortfolioItems(data || []);
      
      // Extract unique categories
      const uniqueCategories = [...new Set(data.map(item => item.category))];
      setCategories([
        { id: 'all', name: 'All Projects' },
        ...uniqueCategories.map(category => ({ id: category, name: category }))
      ]);
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(project => project.category === filter);

  if (loading) {
    return (
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

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
                key={project.id}
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
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3
                               group-hover:bg-gradient-to-r from-purple-600 to-indigo-600 
                               group-hover:bg-clip-text group-hover:text-transparent">
                    {project.title}
                  </h3>
                  
                  {/* Client Info */}
                  {project.client_name && (
                    <div className="flex items-center gap-3 mb-4">
                      {project.client_image_url ? (
                        <img 
                          src={project.client_image_url} 
                          alt={project.client_name}
                          className="w-8 h-8 object-cover rounded-full"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                          <FaUser className="text-purple-600 dark:text-purple-400" />
                        </div>
                      )}
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {project.client_name}
                      </span>
                    </div>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Comments */}
                  {project.comments && (
                    <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                      <div className="flex items-start gap-2">
                        <FaQuoteRight className="text-purple-400 flex-shrink-0 mt-1" />
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                          {project.comments}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    {project.website_url && (
                      <a
                        href={project.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <FaGlobe /> Website
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No projects found in this category. Please check back later or select a different category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;