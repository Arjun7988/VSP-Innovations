import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPizzaSlice, FaHeadset, FaCut, FaTooth, FaShoppingCart, FaPlane } from 'react-icons/fa';

const UseCases = () => {
  const [playingAudio, setPlayingAudio] = useState(null);
  const [audioLoaded, setAudioLoaded] = useState({});
  const [currentTimes, setCurrentTimes] = useState({});
  const [durations, setDurations] = useState({});
  const audioRefs = useRef({});
  const animationFrameRef = useRef();

  const useCases = [
    {
      icon: <FaHeadset />,
      title: 'Front Desk',
      description: 'Handle customer inquiries, appointments, and general assistance with natural conversation flow.',
      audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2447/2447-preview.mp3',
      sampleText: "Hello! Welcome to VSP Innovations. How may I assist you today? I can help you with scheduling appointments, answering questions, or connecting you with our team."
    },
    {
      icon: <FaPizzaSlice />,
      title: 'Food Ordering',
      description: 'Take food orders, customize menu items, and handle payment processing seamlessly.',
      audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2448/2448-preview.mp3',
      sampleText: "Welcome to Quick Bites! I'd be happy to take your order. Would you like to hear about our daily specials, or would you like to place an order right away?"
    },
    {
      icon: <FaCut />,
      title: 'Salon Booking',
      description: 'Schedule appointments, manage stylist availability, and handle service inquiries.',
      audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2449/2449-preview.mp3',
      sampleText: "Thank you for calling Style Studio. I can help you book an appointment with your preferred stylist. What type of service are you looking for today?"
    },
    {
      icon: <FaTooth />,
      title: 'Dental Clinic',
      description: 'Book dental appointments, handle emergency requests, and provide care instructions.',
      audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2450/2450-preview.mp3',
      sampleText: "Welcome to Bright Smiles Dental. Are you calling to schedule a routine check-up, or do you have a specific dental concern you'd like to discuss?"
    },
    {
      icon: <FaShoppingCart />,
      title: 'Retail Support',
      description: 'Assist with product inquiries, order status, and customer service requests.',
      audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2451/2451-preview.mp3',
      sampleText: "Hello, welcome to Shop Smart customer service. I can help you track your order, process returns, or answer any questions about our products."
    },
    {
      icon: <FaPlane />,
      title: 'Travel Booking',
      description: 'Help with travel reservations, itinerary planning, and travel support.',
      audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2452/2452-preview.mp3',
      sampleText: "Welcome to Travel Easy! I can assist you with booking flights, hotels, or planning your entire trip. Where would you like to travel to?"
    }
  ];

  useEffect(() => {
    // Preload all audio files
    useCases.forEach((useCase, index) => {
      const audio = new Audio();
      
      audio.preload = 'auto';
      
      audio.onloadedmetadata = () => {
        setDurations(prev => ({ ...prev, [index]: audio.duration }));
      };
      
      audio.oncanplaythrough = () => {
        setAudioLoaded(prev => ({ ...prev, [index]: true }));
      };
      
      audio.onended = () => {
        setPlayingAudio(null);
        setCurrentTimes(prev => ({ ...prev, [index]: 0 }));
      };
      
      audio.onerror = (e) => {
        console.warn(`Failed to load audio for ${useCase.title}:`, e);
        setAudioLoaded(prev => ({ ...prev, [index]: false }));
      };

      audio.src = useCase.audioUrl;
      audioRefs.current[index] = audio;
    });

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) {
          audio.pause();
          audio.src = '';
          audio.load();
        }
      });
    };
  }, []);

  const formatTime = (time) => {
    if (!time) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const updateTime = () => {
    if (playingAudio !== null) {
      const audio = audioRefs.current[playingAudio];
      if (audio) {
        setCurrentTimes(prev => ({ ...prev, [playingAudio]: audio.currentTime }));
      }
      animationFrameRef.current = requestAnimationFrame(updateTime);
    }
  };

  const stopAllAudio = async () => {
    cancelAnimationFrame(animationFrameRef.current);
    const stopPromises = Object.values(audioRefs.current).map(audio => {
      if (audio) {
        return new Promise(resolve => {
          const handlePause = () => {
            audio.removeEventListener('pause', handlePause);
            resolve();
          };
          audio.addEventListener('pause', handlePause);
          audio.pause();
          audio.currentTime = 0;
        });
      }
      return Promise.resolve();
    });

    await Promise.all(stopPromises);
    setPlayingAudio(null);
    setCurrentTimes({});
  };

  const handlePlay = async (index) => {
    try {
      if (!audioLoaded[index]) {
        console.warn('Audio not loaded yet');
        return;
      }

      if (playingAudio !== null) {
        await stopAllAudio();
      }

      const audio = audioRefs.current[index];
      if (audio) {
        audio.currentTime = 0;
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          setPlayingAudio(index);
          animationFrameRef.current = requestAnimationFrame(updateTime);
        }
      }
    } catch (error) {
      console.warn('Error playing audio:', error);
      setPlayingAudio(null);
    }
  };

  const handlePause = async (index) => {
    try {
      cancelAnimationFrame(animationFrameRef.current);
      const audio = audioRefs.current[index];
      if (audio) {
        const pausePromise = new Promise(resolve => {
          const handlePause = () => {
            audio.removeEventListener('pause', handlePause);
            resolve();
          };
          audio.addEventListener('pause', handlePause);
          audio.pause();
        });
        
        await pausePromise;
        audio.currentTime = 0;
        setPlayingAudio(null);
        setCurrentTimes(prev => ({ ...prev, [index]: 0 }));
      }
    } catch (error) {
      console.warn('Error pausing audio:', error);
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Built for every use-case
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI automates callings and takes care of your front-desk assistants, appointments,
            food ordering, customer support, outbound sales, lead generations, surveys, etc.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl
                       transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 text-2xl">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {useCase.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {useCase.description}
              </p>

              <div className="relative">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      if (playingAudio === index) {
                        handlePause(index);
                      } else {
                        handlePlay(index);
                      }
                    }}
                    disabled={!audioLoaded[index]}
                    className={`p-3 rounded-full transition-colors duration-300 focus:outline-none 
                              focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                              ${audioLoaded[index]
                                ? 'bg-purple-600 text-white hover:bg-purple-700'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                  >
                    {playingAudio === index ? (
                      <motion.span
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.2 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                      >
                        ⏸
                      </motion.span>
                    ) : (
                      "▶"
                    )}
                  </button>
                  <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-purple-600"
                      initial={{ width: "0%" }}
                      animate={{
                        width: playingAudio === index
                          ? "100%"
                          : `${(currentTimes[index] || 0) / (durations[index] || 1) * 100}%`
                      }}
                      transition={{
                        duration: playingAudio === index ? durations[index] || 0 : 0,
                        ease: "linear"
                      }}
                    />
                  </div>
                  <div className="min-w-[80px] text-sm text-gray-600 dark:text-gray-400 text-right">
                    {formatTime(currentTimes[index])} / {formatTime(durations[index])}
                  </div>
                </div>
                
                {/* Sample Text Preview */}
                {playingAudio === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-300"
                  >
                    "{useCase.sampleText}"
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;