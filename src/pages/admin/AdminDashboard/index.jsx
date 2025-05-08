import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaTachometerAlt, FaTags, FaNewspaper, FaImage, 
  FaChartLine, FaSignOutAlt,
  FaComments, FaCommentDots, FaBriefcase, FaUsers
} from 'react-icons/fa';
import { supabase } from '../../../lib/supabaseClient';
import CategoryManagement from '../../../components/admin/CategoryManagement';
import CommentManagement from '../../../components/admin/CommentManagement';
import BlogPostManagement from '../../../components/admin/BlogPostManagement';
import TestimonialManagement from '../../../components/admin/TestimonialManagement';
import PortfolioManagement from '../../../components/admin/PortfolioManagement';
import TeamManagement from '../../../components/admin/TeamManagement';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { id: 'categories', label: 'Blog Categories', icon: <FaTags /> },
    { id: 'posts', label: 'Blog Post Management', icon: <FaNewspaper /> },
    { id: 'comments', label: 'Comments Management', icon: <FaComments /> },
    { id: 'testimonials', label: 'Testimonials', icon: <FaCommentDots /> },
    { id: 'portfolio', label: 'Portfolio', icon: <FaBriefcase /> },
    { id: 'team', label: 'Team Members', icon: <FaUsers /> }
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'categories':
        return <CategoryManagement />;
      case 'comments':
        return <CommentManagement />;
      case 'posts':
        return <BlogPostManagement />;
      case 'testimonials':
        return <TestimonialManagement />;
      case 'portfolio':
        return <PortfolioManagement />;
      case 'team':
        return <TeamManagement />;
      case 'dashboard':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.filter(item => item.id !== 'dashboard').map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveSection(item.id)}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg
                           cursor-pointer transition-all duration-300 border border-gray-100 dark:border-gray-600"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 text-xl">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {item.label}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-white dark:bg-gray-800 shadow-lg">
          <nav className="mt-8 px-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left
                           transition-colors duration-200
                           ${activeSection === item.id
                             ? 'bg-purple-600 text-white'
                             : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                           }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              ))}

              {/* Logout Button */}
              <motion.button
                onClick={handleLogout}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left
                         text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20
                         transition-colors duration-200"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </motion.button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;