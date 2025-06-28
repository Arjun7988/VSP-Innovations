import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaComments, FaChartLine, FaCog, FaBrain, FaGlobe } from 'react-icons/fa';

const AIChatbots = () => {
  const features = [
    {
      icon: <FaBrain />,
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for understanding user intent and context."
    },
    {
      icon: <FaGlobe />,
      title: "Multi-platform Integration",
      description: "Seamless integration with websites, mobile apps, and messaging platforms."
    },
    {
      icon: <FaCog />,
      title: "Custom Training",
      description: "Tailored chatbot training based on your business needs and data."
    },
    {
      icon: <FaChartLine />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics for monitoring chatbot performance."
    }
  ];

  const benefits = [
    {
      icon: <FaRobot />,
      title: "24/7 Availability",
      description: "Round-the-clock customer support without human limitations.",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaComments />,
      title: "Instant Responses",
      description: "Immediate answers to customer queries and support requests.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaChartLine />,
      title: "Scalable Solution",
      description: "Handle multiple conversations simultaneously without quality loss.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaCog />,
      title: "Easy Integration",
      description: "Simple integration with existing systems and workflows.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80"
            alt="AI Chatbots"
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
              AI Chatbots
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Intelligent conversational agents that provide instant support and enhance customer engagement
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
              Transforming Customer Engagement with AI Chatbots
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>AI chatbots have become essential tools for businesses aiming to enhance customer interactions, streamline operations, and deliver consistent, high-quality customer service. Leveraging advanced artificial intelligence, these chatbots effectively simulate human conversations, improving engagement, reducing operational costs, and driving growth. In this article, we’ll explore the benefits, practical applications, and strategies for successfully implementing AI chatbots.</p>

<h2>What Are AI Chatbots?</h2>
<p>AI chatbots are intelligent software applications designed to simulate human-like conversations using artificial intelligence techniques such as Natural Language Processing (NLP), machine learning, and conversational AI. Unlike traditional bots, AI chatbots interpret context, handle complex queries, and continuously improve their responses based on interactions.</p>

<h3>Key Components of AI Chatbots</h3>
<p>Successful AI chatbot systems typically include:</p>
<ul>
  <li><strong>Natural Language Processing (NLP)</strong>: Helps chatbots interpret, understand, and generate human language accurately.</li>
  <li><strong>Machine Learning (ML)</strong>: Enables chatbots to learn from interactions, improving accuracy and response quality over time.</li>
  <li><strong>Conversational AI</strong>: Allows for more natural, human-like interactions, understanding nuances and context in conversations.</li>
</ul>

<h2>Benefits of AI Chatbots for Businesses</h2>

<h3>Enhanced Customer Service</h3>
<p>AI chatbots offer instant, round-the-clock customer support, resolving queries efficiently and effectively, significantly boosting customer satisfaction.</p>

<h3>Cost Savings and Efficiency</h3>
<p>By automating repetitive and routine customer interactions, chatbots significantly reduce operational costs, allowing human staff to focus on more strategic tasks.</p>

<h3>Improved Customer Engagement and Retention</h3>
<p>Personalized interactions provided by AI chatbots create deeper customer engagement, enhance user experiences, and increase customer retention rates.</p>

<h3>Data-Driven Insights</h3>
<p>AI chatbots gather and analyze valuable customer data, providing businesses insights into customer preferences, behaviors, and pain points, thus informing strategic decisions.</p>

<h2>Applications of AI Chatbots Across Industries</h2>

<h3>E-commerce and Retail</h3>
<p>AI chatbots assist customers with product recommendations, order tracking, returns, and customer inquiries, creating seamless shopping experiences and boosting sales.</p>

<h3>Banking and Finance</h3>
<p>Financial institutions deploy chatbots to manage customer queries related to transactions, account balance inquiries, fraud detection, and automated financial advice, enhancing security and convenience.</p>

<h3>Healthcare and Telemedicine</h3>
<p>In healthcare, AI chatbots schedule patient appointments, provide medical information, manage medication reminders, and assist with symptom-checking, significantly improving patient engagement and healthcare accessibility.</p>

<h3>Hospitality and Travel</h3>
<p>Chatbots streamline hotel reservations, customer inquiries, travel planning, and customer support, ensuring convenience, personalized experiences, and high customer satisfaction levels.</p>

<h2>Best Practices for Implementing AI Chatbots</h2>

<h3>Clearly Define Objectives</h3>
<p>Set clear, measurable goals for your chatbot implementation. Determine whether your primary goal is customer support, lead generation, sales enhancement, or customer engagement.</p>

<h3>Choose the Right Chatbot Platform</h3>
<p>Select platforms like ManyChat, Flowise AI, or Dialogflow based on factors such as ease of integration, scalability, analytics capability, and user-friendliness.</p>

<h3>Prioritize User Experience (UX)</h3>
<p>Ensure your chatbot interface is user-friendly, conversational, and intuitive. Good UX design enhances customer interactions, encouraging continued use.</p>

<h3>Continuous Testing and Optimization</h3>
<p>Regularly test and refine your chatbot’s performance, adapting responses based on user feedback, interaction data, and performance metrics.</p>

<h2>Future Trends in AI Chatbot Technology</h2>
<ul>
  <li><strong>Advanced Emotional Intelligence</strong>: Future chatbots will detect and respond appropriately to emotional cues, providing more empathetic and personalized interactions.</li>
  <li><strong>Voice Integration and Speech Recognition</strong>: Enhanced voice integration will enable chatbots to offer seamless voice-based conversations across multiple devices.</li>
  <li><strong>Integration with IoT and Smart Devices</strong>: Chatbots will increasingly connect with IoT devices, creating seamless, context-aware interactions within smart homes, vehicles, and workplaces.</li>
</ul>

<h2>Conclusion: Leverage AI Chatbots to Drive Business Success</h2>
<p>AI chatbots provide businesses with powerful tools to enhance customer engagement, improve operational efficiency, and deliver high-quality, personalized experiences. By strategically integrating chatbots into your customer service and marketing strategies, you can significantly boost customer satisfaction, reduce costs, and position your business for sustainable growth. Embrace AI chatbot technology today and unlock unprecedented opportunities for your organization.</p>

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
              Our AI chatbots combine advanced technology with intuitive design for superior customer engagement.
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

export default AIChatbots;