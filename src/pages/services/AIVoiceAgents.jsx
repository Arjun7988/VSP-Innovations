import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMicrophone, FaGlobe, FaBrain, FaChartLine, FaRobot, FaHeadset, FaShieldAlt, FaClock, FaComments, FaPhone, FaNetworkWired, FaCogs 
} from 'react-icons/fa';

const AIVoiceAgents = () => {
  const features = [
    {
      icon: <FaMicrophone />,
      title: "Advanced Speech Recognition",
      description: "Industry-leading speech recognition with 99% accuracy across multiple accents and dialects."
    },
    {
      icon: <FaGlobe />,
      title: "Multilingual Support",
      description: "Support for 40+ languages and regional variations, enabling global customer service coverage."
    },
    {
      icon: <FaBrain />,
      title: "Contextual Understanding",
      description: "Deep learning algorithms that understand context and maintain conversation coherence."
    },
    {
      icon: <FaChartLine />,
      title: "Real-time Analytics",
      description: "Comprehensive analytics dashboard for monitoring performance and customer interactions."
    }
  ];

  const benefits = [
    {
      icon: <FaRobot />,
      title: "24/7 Availability",
      description: "Provide round-the-clock customer support without human limitations.",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaHeadset />,
      title: "Improved Customer Experience",
      description: "Consistent, personalized service delivery with minimal wait times.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaShieldAlt />,
      title: "Enhanced Security",
      description: "Advanced voice biometrics and authentication protocols for secure interactions.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaClock />,
      title: "Reduced Response Time",
      description: "Immediate response to customer queries, reducing average handling time by 60%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    }
  ];

  const ecosystem = [
    {
      title: 'House of AI',
      description: 'Advanced artificial intelligence core powering intelligent decision-making and natural interactions',
      icon: <FaRobot />,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      title: 'Customer Experience Management',
      description: 'Comprehensive platform for managing and optimizing customer interactions across all channels',
      icon: <FaHeadset />,
      color: 'from-indigo-600 to-blue-600'
    },
    {
      title: 'Customer Engagement Components',
      description: 'Modular components for seamless integration of AI capabilities into existing systems',
      icon: <FaComments />,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Voice & Messaging APIs',
      description: 'Robust APIs for voice and messaging integration across multiple platforms',
      icon: <FaPhone />,
      color: 'from-cyan-600 to-teal-600'
    },
    {
      title: 'Mission-critical Connectivity',
      description: 'Enterprise-grade infrastructure ensuring reliable and secure communications',
      icon: <FaNetworkWired />,
      color: 'from-teal-600 to-green-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
            alt="AI Voice Agents"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Voice Agents
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your customer service with intelligent voice agents that understand and respond naturally, providing 24/7 support across multiple languages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed AI Voice Agents Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              The Evolution of Customer Communication
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>In today's fast-paced digital landscape, AI voice agents have emerged as essential tools for enhancing customer interactions. By leveraging advanced artificial intelligence, these voice-based systems streamline communication, offer immediate responses, and significantly boost customer satisfaction. This article explores how AI voice agents function, their primary benefits, and practical applications across various industries.</p>

<h2>What are AI Voice Agents?</h2>
<p>AI voice agents, also known as voice assistants or conversational AI, use artificial intelligence technologies like Natural Language Processing (NLP) and machine learning algorithms to understand, interpret, and respond to human speech. These sophisticated agents go beyond traditional automated systems, offering conversational experiences that mimic human-like interactions.</p>

<h3>Core Technologies Behind AI Voice Agents</h3>
<p>AI voice agents integrate several key technologies, including:</p>
<ul>
  <li><strong>Natural Language Processing (NLP)</strong>: Allows voice agents to interpret human speech accurately.</li>
  <li><strong>Speech Recognition</strong>: Converts spoken words into text, enabling real-time interaction.</li>
  <li><strong>Text-to-Speech (TTS)</strong>: Generates natural-sounding voice responses, ensuring seamless communication.</li>
</ul>

<h2>Benefits of Using AI Voice Agents</h2>

<h3>Enhanced Customer Experience</h3>
<p>AI voice agents provide immediate assistance, resolving queries quickly and efficiently. This results in a significantly enhanced customer experience through prompt, accurate responses that are available 24/7.</p>

<h3>Improved Efficiency and Cost Reduction</h3>
<p>By automating routine customer interactions, AI voice agents reduce the workload on human customer service teams. This efficiency leads to substantial cost savings, allowing businesses to allocate resources strategically to more complex tasks.</p>

<h3>Scalability and Availability</h3>
<p>AI voice agents easily handle large volumes of customer inquiries simultaneously, without compromising quality. This scalability ensures uninterrupted service even during peak times, maintaining high levels of customer satisfaction.</p>

<h2>Applications of AI Voice Agents Across Industries</h2>

<h3>Retail and E-commerce</h3>
<p>In retail, voice agents assist customers in navigating product catalogs, tracking orders, and handling returns. This personalized, immediate service boosts engagement and loyalty.</p>

<h3>Healthcare Industry</h3>
<p>Healthcare providers use AI voice agents to schedule appointments, provide medical information, and manage patient communications, enhancing patient satisfaction and operational efficiency.</p>

<h3>Banking and Financial Services</h3>
<p>AI voice assistants streamline financial transactions, balance inquiries, fraud detection, and customer onboarding processes, greatly enhancing convenience and security.</p>

<h2>Future Trends in AI Voice Technology</h2>
<p>Looking ahead, AI voice agents are set to become increasingly intelligent and adaptive. Emerging trends include:</p>
<ul>
  <li><strong>Emotion Detection and Response</strong>: Future voice agents will detect emotional nuances in speech, enabling more empathetic and personalized interactions.</li>
  <li><strong>Integration with IoT Devices</strong>: Expanded capabilities through IoT integration will enable voice agents to control smart home devices, vehicles, and wearable technology seamlessly.</li>
</ul>

<h2>Conclusion: Embracing AI Voice Agents for Better Business Outcomes</h2>
<p>AI voice agents represent a pivotal shift in customer engagement strategies, enabling businesses to deliver efficient, personalized experiences at scale. Organizations investing in voice technology today will position themselves ahead in an increasingly competitive market. Adopt AI voice agents to transform customer interactions and unlock new avenues for growth.</p>

            </div>
          </motion.div>
        </div>
      </section>

      {/* New Content Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Transforming Business Communication
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how our AI Voice Agents are revolutionizing customer interactions and business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 
                       dark:from-purple-900/10 dark:to-indigo-900/10 p-8 shadow-lg hover:shadow-xl 
                       transition-all duration-300 border border-transparent hover:border-purple-500/20"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl 
                           group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl 
                           flex items-center justify-center text-white text-3xl shadow-lg"
                >
                  <FaRobot />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 
                             bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  Revolutionizing Customer Interactions
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  AI Voice Agents represent a paradigm shift in customer service and business communication. By leveraging advanced natural language processing and machine learning algorithms, these intelligent agents can understand, process, and respond to customer inquiries with remarkable accuracy and human-like naturalness.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 
                       dark:from-purple-900/10 dark:to-indigo-900/10 p-8 shadow-lg hover:shadow-xl 
                       transition-all duration-300 border border-transparent hover:border-purple-500/20"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl 
                           group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl 
                           flex items-center justify-center text-white text-3xl shadow-lg"
                >
                  <FaChartLine />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 
                             bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  Enhanced Efficiency & Scalability
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our AI Voice Agents are designed to handle multiple conversations simultaneously, ensuring zero wait times and 24/7 availability. This scalability allows businesses to maintain consistent service quality during peak hours and across different time zones without the need for additional human resources.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 
                       dark:from-purple-900/10 dark:to-indigo-900/10 p-8 shadow-lg hover:shadow-xl 
                       transition-all duration-300 border border-transparent hover:border-purple-500/20"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl 
                           group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl 
                           flex items-center justify-center text-white text-3xl shadow-lg"
                >
                  <FaCogs />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 
                             bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  Seamless Integration
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Integration flexibility is at the core of our AI Voice Agents solution. The system seamlessly integrates with existing business systems, including CRM platforms, knowledge bases, and customer service tools, creating a unified and efficient workflow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Advanced Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our AI Voice Agents combine cutting-edge technology with intuitive design to deliver exceptional customer experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg
                         hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                  className="text-4xl text-purple-600 mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Key Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg
                         hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Background */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20" />
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10
                      }}
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 
                               rounded-xl flex items-center justify-center text-white text-2xl
                               shadow-lg shadow-purple-600/20 group-hover:shadow-purple-600/40
                               transition-all duration-300"
                    >
                      {benefit.icon}
                    </motion.div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white
                                   group-hover:bg-gradient-to-r from-purple-600 to-indigo-600 
                                   group-hover:bg-clip-text group-hover:text-transparent
                                   transition-all duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Ecosystem Section */}
      <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              AI-powered Communication Ecosystem
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade communication infrastructure built for scalability and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-full min-h-[600px] lg:min-h-full"
            >
              <div className="relative h-full rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                  alt="AI Communication Ecosystem"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-600/20 mix-blend-multiply" />
                
                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"
                />
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-xl"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="text-7xl mb-6"
                    >
                      <FaRobot />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-3xl font-bold mb-4"
                    >
                      Unified AI Platform
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl text-white/80 max-w-md mx-auto"
                    >
                      Powering the next generation of intelligent communication
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Features List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {ecosystem.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6
                           transform hover:-translate-x-2 transition-transform duration-300
                           border border-transparent hover:border-purple-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-4 bg-gradient-to-r ${layer.color} rounded-lg text-white text-xl`}>
                      {layer.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {layer.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceAgents;