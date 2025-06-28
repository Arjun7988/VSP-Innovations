import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaMobile, FaCode, FaDatabase, FaLock, FaRocket } from 'react-icons/fa';

const WebDevelopment = () => {
  const features = [
    {
      icon: <FaMobile />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display on all devices."
    },
    {
      icon: <FaCode />,
      title: "Modern Technologies",
      description: "Latest web technologies and frameworks for optimal performance."
    },
    {
      icon: <FaDatabase />,
      title: "Scalable Architecture",
      description: "Robust backend systems that grow with your business."
    },
    {
      icon: <FaLock />,
      title: "Security First",
      description: "Advanced security measures to protect your application."
    }
  ];

  const benefits = [
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      description: "Reach customers worldwide with a powerful web presence.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaMobile />,
      title: "Cross-Platform",
      description: "Seamless experience across all devices and platforms.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description: "Optimized for speed and user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaCode />,
      title: "Custom Solutions",
      description: "Tailored development to meet your specific needs.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80"
            alt="Web Development"
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
              Web Application Development
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Custom web solutions built with modern technologies and best practices
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
              Building Powerful Web Applications for the Modern Era
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>In the age of digital transformation, <strong>web application development</strong> has become the cornerstone of delivering scalable and accessible software services. Among the most popular models is <strong>SaaS (Software as a Service)</strong>, which allows businesses to offer web-based applications to users without requiring downloads or installations. This article dives deep into the world of web application development for SaaS—exploring its benefits, essential components, and best practices to build high-performance solutions.</p>

<h2>What Is Web Application Development for SaaS?</h2>
<p>Web application development for SaaS involves designing and deploying software applications hosted on the cloud, accessible through a web browser. These apps deliver value as services, typically through subscription-based pricing. Examples include project management tools, CRMs, marketing automation platforms, and accounting systems.</p>

<h3>Core Characteristics of SaaS Applications</h3>
<ul>
  <li><strong>Multi-Tenancy Architecture</strong>: One codebase serves multiple customers with isolated data.</li>
  <li><strong>Cloud Hosting</strong>: Hosted on scalable cloud infrastructure like AWS, Google Cloud, or Azure.</li>
  <li><strong>Subscription-Based Model</strong>: Revenue is generated through monthly or annual subscriptions.</li>
  <li><strong>Browser Accessibility</strong>: Users can access the application from any device with internet access.</li>
</ul>

<h2>Benefits of Building SaaS Web Applications</h2>

<h3>1. Scalability and Flexibility</h3>
<p>SaaS apps are designed to scale with demand, allowing businesses to grow their user base without major architectural changes.</p>

<h3>2. Reduced Deployment Time</h3>
<p>Because SaaS apps are centrally hosted, updates and features can be rolled out instantly to all users without individual installation.</p>

<h3>3. Lower Maintenance Costs</h3>
<p>SaaS providers manage backend maintenance, performance monitoring, and bug fixes—reducing the need for IT resources on the client side.</p>

<h3>4. Recurring Revenue Model</h3>
<p>Subscription billing enables predictable revenue streams and long-term customer retention strategies.</p>

<h2>Key Technologies for SaaS Web Development</h2>

<h3>Frontend Frameworks</h3>
<ul>
  <li><strong>React.js</strong>, <strong>Vue.js</strong>, <strong>Angular</strong> – Used for creating responsive, dynamic user interfaces.</li>
</ul>

<h3>Backend Technologies</h3>
<ul>
  <li><strong>Node.js</strong>, <strong>Ruby on Rails</strong>, <strong>Django</strong>, <strong>Laravel</strong> – Handle logic, APIs, and data operations.</li>
</ul>

<h3>Databases</h3>
<ul>
  <li><strong>PostgreSQL</strong>, <strong>MongoDB</strong>, <strong>MySQL</strong>, <strong>Firebase</strong> – Store and manage user and application data.</li>
</ul>

<h3>Authentication and Security</h3>
<ul>
  <li>OAuth 2.0, JWT, Multi-Factor Authentication (MFA), and data encryption standards (AES, SSL) to ensure user data protection.</li>
</ul>

<h3>Deployment Platforms</h3>
<ul>
  <li><strong>Vercel</strong>, <strong>Netlify</strong>, <strong>Heroku</strong>, <strong>Render</strong>, <strong>DigitalOcean</strong>, or <strong>Kubernetes</strong> on cloud providers for DevOps automation and CI/CD pipelines.</li>
</ul>

<h2>Essential Features of a Successful SaaS Web Application</h2>

<h3>User Management</h3>
<p>Role-based access controls, secure onboarding, and profile management ensure a secure and customized user experience.</p>

<h3>Subscription & Billing</h3>
<p>Integration with Stripe, Paddle, or PayPal for managing subscriptions, invoices, and trials.</p>

<h3>Analytics and Reporting</h3>
<p>Real-time dashboards and reporting tools help users gain insights and make data-driven decisions.</p>

<h3>Responsive Design</h3>
<p>Ensure your application works seamlessly across all devices—mobile, tablet, and desktop.</p>

<h3>APIs and Integrations</h3>
<p>Allow external services to connect easily—CRMs, marketing tools, or payment gateways.</p>

<h2>Best Practices for Web App SaaS Development</h2>

<h3>Adopt Agile Methodologies</h3>
<p>Use agile or Scrum to break development into iterations, allowing faster feature releases and feedback loops.</p>

<h3>Focus on User-Centric Design</h3>
<p>Prioritize UX/UI design for ease of use and seamless onboarding. Conduct usability testing regularly.</p>

<h3>Implement Robust Security Measures</h3>
<p>Ensure data security through encryption, secure APIs, and compliance with standards like GDPR and SOC 2.</p>

<h3>Optimize for Performance and SEO</h3>
<p>Use techniques like lazy loading, code splitting, and server-side rendering (SSR) for fast performance and better search visibility.</p>

<h3>Monitor and Scale Efficiently</h3>
<p>Use tools like Datadog, Sentry, and AWS CloudWatch to monitor errors and auto-scale based on traffic and usage.</p>

<h2>Future Trends in SaaS Web App Development</h2>
<ul>
  <li><strong>AI-Powered Features</strong>: Smart suggestions, chatbots, and personalized experiences.</li>
  <li><strong>No-Code/Low-Code Tools</strong>: Faster prototyping with platforms like Bubble or Webflow.</li>
  <li><strong>Progressive Web Apps (PWAs)</strong>: Delivering app-like performance with web accessibility.</li>
  <li><strong>Data Privacy & Compliance</strong>: Emphasis on user data rights and international compliance.</li>
</ul>

<h2>Conclusion: Build the Future with SaaS Web Applications</h2>
<p>Web application development for SaaS is the backbone of modern digital services. It empowers businesses to deliver scalable, secure, and efficient platforms that serve users globally. By following best practices, leveraging the right tech stack, and prioritizing user experience, developers can build SaaS applications that are not only robust but also positioned for long-term success in a competitive digital economy.</p>

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
              Modern web development solutions tailored to your business needs.
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

export default WebDevelopment;