import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Cal from "@calcom/embed-react";

const ContactPage = () => {
  useEffect(() => {
    let vapiInstance = null;
    const assistant = import.meta.env.VITE_VAPI_ASSISTANT_ID;
    const apiKey = import.meta.env.VITE_VAPI_API_KEY;
    
    // Don't initialize if API key is the placeholder value
    if (!apiKey || apiKey === 'YOUR_VAPI_API_KEY_HERE') {
      console.warn('Vapi API key not properly configured');
      return;
    }
    
    const buttonConfig = {
      position: "bottom-left", // Changed from bottom-right to bottom-left
      offset: "40px",
      width: "50px",
      height: "50px",
      idle: {
        color: `rgb(93, 254, 202)`,
        type: "pill",
        title: "Have a quick question?",
        subtitle: "Talk with our AI assistant",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
      },
      loading: {
        color: `rgb(93, 124, 202)`,
        type: "pill",
        title: "Connecting...",
        subtitle: "Please wait",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
      },
      active: {
        color: `rgb(255, 0, 0)`,
        type: "pill",
        title: "Call is in progress...",
        subtitle: "End the call.",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
      },
    };

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;

    script.onload = function () {
      try {
        vapiInstance = window.vapiSDK.run({
          apiKey,
          assistant,
          config: buttonConfig,
        });
      } catch (error) {
        console.error("Error initializing Vapi:", error);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      // Clean up Vapi instance if it exists
      if (vapiInstance && typeof vapiInstance.destroy === 'function') {
        try {
          vapiInstance.destroy();
        } catch (error) {
          console.error("Error destroying Vapi instance:", error);
        }
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone',
      content: '+91 88861-00028',
      link: 'tel:+918886100028'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      content: 'arjun.devireddy@vspinnovations.com',
      link: 'mailto:arjun.devireddy@vspinnovations.com'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Location',
      content: 'Hyderabad, TS-500072',
      link: 'https://maps.google.com'
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: null
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-100">
              Get in touch with us for any inquiries or support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg
                         hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Schedule a Meeting
              </h2>
              <div className="h-[600px]">
                <Cal
                  namespace="30min"
                  calLink="vsp-innovations/30min"
                  style={{width:"100%", height:"100%", overflow:"scroll"}}
                  config={{
                    layout: "month_view",
                    cssVarsPerTheme: {
                      light: { "cal-brand": "#7C3AED" },
                      dark: { "cal-brand": "#8B5CF6" }
                    },
                    hideEventTypeDetails: false
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;