import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, FaBullseye, FaUsers, FaRobot, 
  FaRegChartBar, FaRegLightbulb, FaRegComments, FaRegClock
} from 'react-icons/fa';

const AIMarketingAutomation = () => {
  const features = [
    {
      icon: <FaRegChartBar />,
      title: "Predictive Analytics",
      description: "Advanced algorithms to forecast trends and customer behavior with high accuracy."
    },
    {
      icon: <FaRegLightbulb />,
      title: "Smart Segmentation",
      description: "AI-powered customer segmentation for targeted marketing campaigns."
    },
    {
      icon: <FaRegComments />,
      title: "Content Optimization",
      description: "Automated content suggestions and optimization for better engagement."
    },
    {
      icon: <FaRegClock />,
      title: "Real-time Personalization",
      description: "Dynamic content adaptation based on user behavior and preferences."
    }
  ];

  const benefits = [
    {
      icon: <FaChartLine />,
      title: "Increased ROI",
      description: "Maximize marketing returns through data-driven decision making.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaBullseye />,
      title: "Better Targeting",
      description: "Reach the right audience with precision targeting capabilities.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaUsers />,
      title: "Enhanced Engagement",
      description: "Improve customer engagement with personalized experiences.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaRobot />,
      title: "Automation Efficiency",
      description: "Save time and resources with intelligent marketing automation.",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            alt="AI Marketing Automation"
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
              AI Marketing Automation
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your marketing strategy with intelligent automation and data-driven insights that drive growth and engagement.
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
              Revolutionizing Marketing with AI-Powered Automation
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>In the evolving digital landscape, AI marketing automation has become a critical driver for businesses seeking to optimize marketing strategies, enhance customer experiences, and boost efficiency. By leveraging artificial intelligence, companies can automate complex marketing tasks, personalize customer interactions, and gain valuable insights from data-driven analytics. This article explores the benefits, applications, and best practices for implementing AI marketing automation effectively.</p>

<h2>What is AI Marketing Automation?</h2>
<p>AI marketing automation integrates artificial intelligence technologies, such as machine learning, natural language processing, and predictive analytics, with marketing automation tools. This approach allows businesses to automate marketing campaigns, personalize customer engagements, and analyze large datasets to drive strategic decision-making and optimize marketing outcomes.</p>

<h3>Key Technologies Behind AI Marketing Automation</h3>
<p>Effective AI marketing automation incorporates several essential technologies:</p>
<ul>
  <li><strong>Machine Learning</strong>: Algorithms that analyze customer behavior patterns and predict future actions.</li>
  <li><strong>Natural Language Processing (NLP)</strong>: Enhances customer interactions through personalized messaging and automated responses.</li>
  <li><strong>Predictive Analytics</strong>: Uses historical data to forecast future marketing trends and optimize campaign effectiveness.</li>
</ul>

<h2>Benefits of AI Marketing Automation</h2>

<h3>Personalized Customer Experiences</h3>
<p>AI-powered automation enables personalized marketing at scale, delivering targeted messages based on individual customer preferences, behaviors, and past interactions, significantly enhancing customer engagement.</p>

<h3>Improved Marketing Efficiency</h3>
<p>Automating repetitive marketing tasks such as email campaigns, social media posting, and lead nurturing frees marketers to focus on strategic planning and creative tasks, boosting overall efficiency.</p>

<h3>Data-Driven Decision Making</h3>
<p>AI tools provide deep insights into customer behaviors, marketing performance, and campaign effectiveness, empowering businesses with actionable data to refine their marketing strategies continuously.</p>

<h3>Increased ROI and Cost Savings</h3>
<p>Through targeted and automated marketing initiatives, businesses achieve higher conversion rates, reduced costs per lead, and improved return on investment (ROI), maximizing marketing budgets effectively.</p>

<h2>Practical Applications of AI Marketing Automation</h2>

<h3>Email Marketing and Lead Nurturing</h3>
<p>AI-driven email automation personalizes content and optimizes email delivery times, significantly improving open rates, click-through rates, and customer retention.</p>

<h3>Social Media Management</h3>
<p>AI tools automate content scheduling, optimize posting times, and analyze social media performance, ensuring consistent brand messaging and higher engagement rates.</p>

<h3>Content Marketing Optimization</h3>
<p>AI marketing automation platforms help identify trending topics, suggest keyword strategies, and automatically generate SEO-optimized content, boosting organic traffic and visibility.</p>

<h3>Chatbots and Customer Support</h3>
<p>AI-powered chatbots automate customer interactions, answer frequently asked questions, and provide 24/7 support, enhancing customer satisfaction and engagement.</p>

<h2>Best Practices for Implementing AI Marketing Automation</h2>

<h3>Define Clear Marketing Objectives</h3>
<p>Establish specific goals, such as increasing conversions, improving customer retention, or enhancing lead quality. Clear objectives ensure effective utilization of AI marketing tools.</p>

<h3>Choose the Right AI Automation Platform</h3>
<p>Select platforms such as HubSpot, Marketo, or Salesforce Marketing Cloud based on your business needs. Evaluate features such as ease of integration, scalability, analytics capabilities, and personalization options.</p>

<h3>Integrate Data Sources Seamlessly</h3>
<p>Integrating CRM systems, website analytics, and social media platforms provides a unified view of customer data, enabling more accurate and effective marketing automation.</p>

<h3>Continuously Monitor and Optimize</h3>
<p>Regularly analyze campaign performance metrics to refine strategies. Leveraging AI analytics allows continuous improvement, leading to better results over time.</p>

<h2>The Future of AI Marketing Automation</h2>
<p>AI marketing automation continues to evolve rapidly, with future trends including:</p>
<ul>
  <li><strong>Voice and Visual Search Optimization</strong>: Enhancing marketing strategies to leverage voice and image-based search capabilities.</li>
  <li><strong>Advanced Predictive Capabilities</strong>: Improved predictive analytics will allow even more precise customer targeting and higher conversion rates.</li>
  <li><strong>Enhanced Customer Journey Mapping</strong>: AI will enable comprehensive, real-time mapping of customer journeys, providing deeper insights and more tailored marketing initiatives.</li>
</ul>

<h2>Conclusion: Embrace AI Marketing Automation for Sustainable Growth</h2>
<p>AI marketing automation is no longer optional but essential for businesses aiming for growth and sustained success. By automating routine tasks, personalizing customer interactions, and utilizing data-driven insights, companies can stay competitive and significantly boost their marketing effectiveness. Invest in AI marketing automation today and position your business for future success.</p>

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
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our AI marketing automation platform combines advanced analytics with intelligent automation to deliver exceptional results.
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
    </div>
  );
};

export default AIMarketingAutomation;