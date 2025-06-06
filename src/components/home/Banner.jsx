import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaPlay, FaTimes } from 'react-icons/fa';
import { getCalApi } from "@calcom/embed-react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  const slides = [
    {
      title: 'AI Voice Agents',
      subheading: 'Natural Language Processing for Seamless Communication',
      description: 'Transform your customer service with AI-powered voice agents that understand and respond naturally.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
      secondaryCta: 'Watch Video',
      videoUrl: 'https://www.youtube.com/watch?v=aUpy8YuzJvk'
    },
    {
      title: 'AI Chatbots',
      subheading: 'Intelligent Conversational Agents',
      description: 'Enhance customer engagement with smart chatbots that provide instant support.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80'
    },
    {
      title: 'WhatsApp Personal Assistant',
      subheading: 'Business Communication Made Simple',
      description: 'Automate your WhatsApp business communication with AI-powered assistance.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80'
    },
    {
      title: 'Custom AI Solutions',
      subheading: 'Tailored Intelligence for Your Business Needs',
      description: 'Leverage cutting-edge AI technology to automate and optimize your business processes.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80'
    },
    {
      title: 'Workflow Automation',
      subheading: 'Streamline Operations with Intelligent Processes',
      description: 'Boost productivity and reduce costs with our smart workflow automation solutions.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=80'
    },
    {
      title: 'AI Marketing Automation',
      subheading: 'Data-Driven Marketing Excellence',
      description: 'Transform your marketing strategy with AI-powered automation and analytics.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Slider {...settings} className="banner-slider">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
            <motion.img
              src={slide.src}
              alt={slide.title}
              initial={{ scale: 1.1 }}
              animate={{ 
                scale: currentSlide === index ? 1 : 1.1,
                filter: showVideo ? 'blur(10px)' : 'blur(0px)'
              }}
              transition={{ duration: 6, ease: 'easeOut' }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block text-primary-400 font-semibold mb-4 tracking-wider uppercase"
                  >
                    {slide.subheading}
                  </motion.span>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-white"
                  >
                    {slide.title}
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-gray-200 mb-8"
                  >
                    {slide.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    {index === 0 && (
                      <motion.button 
                        onClick={() => setShowVideo(true)}
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg 
                                 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2
                                 focus:outline-none focus:ring-2 focus:ring-white/50
                                 transform hover:-translate-y-0.5 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaPlay className="group-hover:scale-110 transition-transform" />
                        {slide.secondaryCta}
                      </motion.button>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            >
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2 bg-black/50 rounded-full"
              >
                <FaTimes />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/aUpy8YuzJvk"
                title="AI Voice Agents Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Banner;