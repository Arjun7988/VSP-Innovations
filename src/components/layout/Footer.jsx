import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'AI Voice Agents', path: '/services/ai-voice-agents' },
    { name: 'Custom AI Solutions', path: '/services/custom-ai-solutions' },
    { name: 'Workflow Automation', path: '/services/workflow-automation' },
    { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation' },
    { name: 'AI Chatbots', path: '/services/ai-chatbots' },
    { name: 'WhatsApp Assistant', path: '/services/whatsapp-assistant' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile Development', path: '/services/mobile-development' },
    { name: 'AI SEO Automation', path: '/services/ai-seo' }
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: '+91 88861-00028', href: 'tel:+918886100028' },
    { icon: <FaEnvelope />, text: 'arjun.devireddy@vspinnovations.com', href: 'mailto:arjun.devireddy@vspinnovations.com' },
    { icon: <FaMapMarkerAlt />, text: 'Hyderabad, India.', href: 'https://maps.google.com' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://www.facebook.com/vspinnovationscompany', label: 'Facebook' },
    { icon: <FaTwitter />, href: 'https://x.com/vspinnovations', label: 'Twitter' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/vsp-innovations/', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/vspinnovations/', label: 'Instagram' },
    { icon: <FaYoutube />, href: 'https://www.youtube.com/c/VspinnovationsCompany', label: 'Youtube' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="relative">
                <img src="/images/vsp_logo.png" width="200px" height="100px" alt="VSP Innovations Logo" />
              </div>
            </Link>
            <p className="text-gray-400">
              Transforming businesses with cutting-edge AI solutions. We specialize in creating innovative 
              technology solutions that drive growth and efficiency.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="transform transition-transform"
                >
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <div className="grid grid-cols-1 gap-3">
              {services.slice(0, 5).map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="transform transition-transform"
                >
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    {service.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* More Services and Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">More Services</h4>
            <div className="grid grid-cols-1 gap-3 mb-8">
              {services.slice(5).map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="transform transition-transform"
                >
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    {service.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-gray-400"
                >
                  <span className="mt-1">{info.icon}</span>
                  <a 
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {info.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} VSP Innovations. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;