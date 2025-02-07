import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {
        "cssVarsPerTheme": {
          "light": {"cal-brand": "#7C3AED"},
          "dark": {"cal-brand": "#8B5CF6"}
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="relative group">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              VSP INNOVATIONS
            </h1>
            <span className="text-sm text-gray-600 dark:text-gray-400 absolute top-1/2 mt-4">
              AI AGENCY
            </span>
          </div>
        </Link>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Portfolio
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Contact Us
            </Link>
            <button 
              data-cal-namespace="30min"
              data-cal-link="vsp-innovations/30min"
              data-cal-config='{"layout":"month_view"}'
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Book Appointment
            </button>
          </nav>
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;