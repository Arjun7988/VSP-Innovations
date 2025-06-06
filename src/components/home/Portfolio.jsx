import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaUser } from 'react-icons/fa';
import { supabase } from '../../lib/supabaseClient';

const Portfolio = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
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
        .order('created_at', { ascending: false })
        .limit(4);

      if (error) throw error;
      setFeaturedProjects(data || []);
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return null;
  }

  if (!featuredProjects.length) {
    return null;
  }

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
            Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our innovative AI solutions and success stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
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
                  src={project.image_url}
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
                
                {/* Client Info */}
                {project.client_name && (
                  <div className="flex items-center gap-3 mb-4">
                    {project.client_image_url ? (
                      <img 
                        src={project.client_image_url} 
                        alt={project.client_name}
                        className="w-6 h-6 object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                        <FaUser className="text-purple-600 dark:text-purple-400 text-xs" />
                      </div>
                    )}
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {project.client_name}
                    </span>
                  </div>
                )}
                
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 px-8 py-4
                       bg-gradient-to-r from-purple-600 to-indigo-600 
                       text-white rounded-xl font-semibold
                       hover:shadow-lg hover:shadow-purple-500/20
                       transform-gpu transition-all duration-300
                       hover:scale-105 active:scale-95"
            >
              View All
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;