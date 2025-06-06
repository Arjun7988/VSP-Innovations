import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCogs, FaCode, FaChartLine, FaBrain, FaCloud, FaShieldAlt, FaTools } from 'react-icons/fa';

const CustomAISolutions = () => {
  const features = [
    {
      icon: <FaBrain />,
      title: "Custom AI Models",
      description: "Tailored machine learning models designed specifically for your business needs and data."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      description: "Seamless integration with major cloud platforms for scalable and reliable deployment."
    },
    {
      icon: <FaShieldAlt />,
      title: "Enterprise Security",
      description: "Advanced security protocols and compliance measures to protect sensitive data."
    },
    {
      icon: <FaTools />,
      title: "API Development",
      description: "Custom APIs for easy integration with existing systems and applications."
    }
  ];

  const benefits = [
    {
      icon: <FaRobot />,
      title: "Tailored Solutions",
      description: "AI solutions designed specifically for your unique business challenges.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaCogs />,
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business needs.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaCode />,
      title: "Seamless Integration",
      description: "Easy integration with your existing systems and workflows.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaChartLine />,
      title: "Performance Metrics",
      description: "Comprehensive analytics and reporting for data-driven decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
            alt="Custom AI Solutions"
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
              Custom AI Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Harness the power of artificial intelligence with custom solutions tailored to your specific business needs and objectives.
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
              Tailored AI Solutions for Business Transformation
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>In today's competitive landscape, custom AI solutions have become essential tools for businesses seeking tailored technology to address specific operational challenges. Unlike off-the-shelf AI products, custom AI solutions are designed explicitly around an organization's unique requirements, driving efficiency, innovation, and competitive advantage. In this article, we'll explore the benefits, applications, and critical considerations involved in implementing custom AI solutions.</p>

<h2>What Are Custom AI Solutions?</h2>
<p>Custom AI solutions refer to artificial intelligence systems specifically developed to meet the distinct goals and processes of a particular organization. By leveraging machine learning algorithms, natural language processing, computer vision, and data analytics, these solutions enhance business productivity and streamline workflows.</p>

<h3>Key Components of Custom AI Solutions</h3>
<p>An effective custom AI solution typically includes:</p>
<ul>
  <li><strong>Machine Learning Models</strong>: Tailored algorithms trained on company-specific datasets to solve particular business problems.</li>
  <li><strong>Natural Language Processing (NLP)</strong>: Customized NLP solutions that improve customer service, chatbots, and virtual assistants.</li>
  <li><strong>Computer Vision</strong>: AI models built to analyze images and videos, aiding industries like healthcare, retail, and manufacturing.</li>
</ul>

<h2>Benefits of Implementing Custom AI Solutions</h2>

<h3>Enhanced Operational Efficiency</h3>
<p>Custom AI solutions automate repetitive tasks, reducing manual workload and minimizing errors. Tailored solutions align precisely with existing workflows, enhancing overall productivity and operational effectiveness.</p>

<h3>Competitive Advantage</h3>
<p>By developing unique AI capabilities tailored to their industry niche, companies differentiate themselves from competitors. Custom AI solutions enable businesses to deliver innovative products and personalized customer experiences that generic AI tools cannot match.</p>

<h3>Scalability and Adaptability</h3>
<p>Unlike standard products, custom AI solutions can easily scale with business growth. These tailored systems adapt rapidly to changing business needs, offering flexible and future-proof technology investment.</p>

<h2>Real-World Applications of Custom AI Solutions</h2>

<h3>Healthcare and Medical Diagnostics</h3>
<p>In healthcare, custom AI solutions analyze medical images, patient records, and clinical data to support diagnostics, personalized medicine, and predictive healthcare services.</p>

<h3>Financial Services and Fraud Detection</h3>
<p>Financial institutions utilize customized AI-driven fraud detection systems that analyze transaction patterns, significantly reducing risks and protecting customer accounts.</p>

<h3>Retail and Personalized Customer Experiences</h3>
<p>Retailers benefit from customized AI solutions for targeted marketing campaigns, demand forecasting, inventory management, and personalized customer recommendations, boosting sales and loyalty.</p>

<h2>Critical Considerations for Implementing Custom AI Solutions</h2>

<h3>Clearly Defined Objectives</h3>
<p>Identify precise business goals and expectations from the AI solution. Clearly defined objectives guide AI development and ensure measurable results.</p>

<h3>Quality and Availability of Data</h3>
<p>Custom AI solutions heavily depend on data quality. Ensure access to accurate, well-structured data for model training, leading to effective AI outcomes.</p>

<h3>Collaboration and Expertise</h3>
<p>Partnering with experienced AI developers and specialists is critical. Collaboration ensures the successful integration of AI systems into existing workflows and technologies.</p>

<h2>Future Trends in Custom AI Solutions</h2>
<p>The evolving landscape of custom AI includes:</p>
<ul>
  <li><strong>Increased Use of AI-as-a-Service (AIaaS)</strong>: Businesses opting for scalable and managed custom AI services.</li>
  <li><strong>Advanced Integration Capabilities</strong>: Growing focus on seamless integration of custom AI solutions with existing enterprise software and IoT infrastructure.</li>
</ul>

<h2>Conclusion: Harnessing Custom AI Solutions for Growth</h2>
<p>Investing in custom AI solutions allows businesses to leverage technology uniquely aligned with their specific goals, ensuring sustained competitive advantage and long-term growth. By embracing tailored AI strategies, companies can maximize efficiency, innovation, and customer satisfaction, positioning themselves as leaders in their respective industries.</p>

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
              Core Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our custom AI solutions are built with cutting-edge technology and industry best practices.
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

export default CustomAISolutions;