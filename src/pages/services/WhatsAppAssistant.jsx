import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaRobot, FaComments, FaBrain, FaChartLine, FaBroadcastTower } from 'react-icons/fa';

const WhatsAppAssistant = () => {
  const features = [
    {
      icon: <FaBrain />,
      title: "Smart Responses",
      description: "AI-powered responses that understand context and user intent."
    },
    {
      icon: <FaComments />,
      title: "Multi-Media Support",
      description: "Handle text, images, documents, and other media types."
    },
    {
      icon: <FaBroadcastTower />,
      title: "Broadcast Messages",
      description: "Send automated broadcasts to customer segments."
    },
    {
      icon: <FaChartLine />,
      title: "Analytics Dashboard",
      description: "Track engagement metrics and conversation analytics."
    }
  ];

  const benefits = [
    {
      icon: <FaWhatsapp />,
      title: "Business Integration",
      description: "Seamless integration with WhatsApp Business API.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaRobot />,
      title: "Automated Support",
      description: "24/7 automated customer support on WhatsApp.",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaComments />,
      title: "Quick Responses",
      description: "Instant replies to common customer queries.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaChartLine />,
      title: "Performance Tracking",
      description: "Monitor and optimize conversation performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
            alt="WhatsApp Assistant"
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
              WhatsApp Personal Assistant
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              AI-powered WhatsApp automation for seamless business communication
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Revolutionizing Business Communication with WhatsApp Automation
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>AI assistants are redefining the way individuals and businesses interact with technology. These intelligent, conversational tools help automate tasks, provide real-time support, and deliver personalized experiences—making them essential for improving productivity, efficiency, and user satisfaction. In this article, we’ll explore what AI assistants are, their benefits, key use cases, and how to effectively integrate them into your business operations.</p>

<h2>What Are AI Assistants?</h2>
<p>AI assistants are software-powered virtual entities that use artificial intelligence—particularly natural language processing (NLP), machine learning, and automation—to understand, interpret, and respond to user commands or queries. Unlike traditional bots, AI assistants can manage complex tasks, learn from user interactions, and provide context-aware responses across various communication channels.</p>

<h3>Types of AI Assistants</h3>
<ul>
  <li><strong>Virtual Personal Assistants</strong>: Tools like Siri, Alexa, and Google Assistant designed to help individuals with scheduling, reminders, or general queries.</li>
  <li><strong>Business AI Assistants</strong>: Custom-built tools that assist with customer service, sales, marketing, or internal business tasks like data entry or employee support.</li>
</ul>

<h2>Key Benefits of AI Assistants</h2>

<h3>1. Increased Productivity</h3>
<p>AI assistants automate repetitive and time-consuming tasks, such as setting meetings, sending emails, or managing CRM entries, allowing employees to focus on high-value work.</p>

<h3>2. 24/7 Availability and Real-Time Support</h3>
<p>Unlike human teams, AI assistants work around the clock, offering consistent support and faster resolution to customer queries across time zones.</p>

<h3>3. Personalized User Interactions</h3>
<p>AI assistants analyze user behavior and preferences to deliver customized responses, product recommendations, and reminders, leading to a more engaging experience.</p>

<h3>4. Cost Reduction and Operational Efficiency</h3>
<p>By automating support and routine tasks, businesses can reduce overhead costs and improve operational workflows without compromising service quality.</p>

<h2>Top Use Cases of AI Assistants in Business</h2>

<h3>Customer Service</h3>
<p>AI assistants answer FAQs, resolve common issues, escalate complex cases, and even handle multilingual support—improving customer satisfaction and reducing wait times.</p>

<h3>Sales and Lead Qualification</h3>
<p>AI assistants can engage leads, qualify them through intelligent conversations, and schedule appointments, helping sales teams prioritize hot prospects.</p>

<h3>Marketing Automation</h3>
<p>AI assistants support campaign scheduling, audience segmentation, personalized messaging, and real-time engagement across channels like email, chat, and social media.</p>

<h3>Internal Team Support</h3>
<p>AI assistants serve employees by answering HR-related questions, assisting in onboarding, scheduling meetings, and retrieving internal documentation, thus boosting internal productivity.</p>

<h2>How to Successfully Implement AI Assistants</h2>

<h3>Define Clear Use Cases</h3>
<p>Identify specific tasks or workflows where AI assistants can add the most value—whether it’s customer interaction, lead generation, or internal task automation.</p>

<h3>Choose the Right AI Platform</h3>
<p>Select platforms like ChatGPT, IBM Watson Assistant, Microsoft Copilot, or custom GPT-based assistants depending on your business scale, use case, and integration needs.</p>

<h3>Ensure Seamless Integration</h3>
<p>Integrate your AI assistant with tools like Slack, CRM systems, email platforms, or websites to create a unified and efficient user experience.</p>

<h3>Monitor, Train, and Improve</h3>
<p>Continuously analyze performance metrics and user feedback to refine the assistant’s language model, accuracy, and ability to handle evolving queries.</p>

<h2>Future of AI Assistants</h2>
<ul>
  <li><strong>Voice and Multimodal Capabilities</strong>: AI assistants are evolving to support voice, image, and video interactions, offering richer, more intuitive experiences.</li>
  <li><strong>Contextual Memory</strong>: Advanced assistants will retain context over longer conversations, enabling more human-like continuity in support and task execution.</li>
  <li><strong>Autonomous Decision Making</strong>: Future AI assistants will proactively perform tasks based on predictive behavior analysis and past patterns.</li>
</ul>

<h2>Conclusion: Leverage AI Assistants for Smarter Workflows</h2>
<p>AI assistants are no longer just futuristic concepts—they are transforming how businesses operate, serve customers, and support teams. By implementing AI assistants strategically, companies can boost productivity, cut costs, and provide exceptional user experiences. Whether for customer service, marketing, or internal support, adopting AI assistants today positions your business for long-term success in a digital-first world.</p>

            </div>
          </motion.div>
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
              Key Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transform your WhatsApp business communication with intelligent automation.
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
    </div>
  );
};

export default WhatsAppAssistant;