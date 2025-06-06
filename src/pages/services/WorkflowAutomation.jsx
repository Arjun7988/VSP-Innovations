import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCogs, FaBolt, FaRobot, FaChartLine,
  FaRegClock, FaRegCheckCircle, FaRegChartBar, FaRegLightbulb
} from 'react-icons/fa';

const WorkflowAutomation = () => {
  const features = [
    {
      icon: <FaRegClock />,
      title: "Process Automation",
      description: "Automate repetitive tasks and streamline complex business processes."
    },
    {
      icon: <FaRegCheckCircle />,
      title: "Smart Workflows",
      description: "AI-powered decision making for intelligent process routing."
    },
    {
      icon: <FaRegChartBar />,
      title: "Real-time Monitoring",
      description: "Live tracking and analytics of workflow performance."
    },
    {
      icon: <FaRegLightbulb />,
      title: "Intelligent Optimization",
      description: "Continuous improvement through machine learning algorithms."
    }
  ];

  const benefits = [
    {
      icon: <FaCogs />,
      title: "Increased Efficiency",
      description: "Reduce manual work and streamline operations for better productivity.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaBolt />,
      title: "Faster Processing",
      description: "Accelerate task completion with automated workflows.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaRobot />,
      title: "Error Reduction",
      description: "Minimize human error through automated validation and checks.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaChartLine />,
      title: "Better Analytics",
      description: "Gain insights through comprehensive workflow analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80"
            alt="Workflow Automation"
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
              Workflow Automation
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your business operations with intelligent automation solutions that streamline processes and boost efficiency.
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
              Transforming Business Operations Through Intelligent Automation
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>In today's rapidly evolving business landscape, workflow automation is a powerful strategy for enhancing productivity and efficiency. By automating repetitive tasks and streamlining processes, companies can minimize human error, improve collaboration, and redirect resources toward strategic initiatives. This article will explore workflow automation, detailing its key benefits, applications, and practical tips for successful implementation.</p>

<h2>What Is Workflow Automation?</h2>
<p>Workflow automation refers to the use of technology and software tools to automate routine business processes and tasks. It involves defining, organizing, and executing tasks systematically without manual intervention, ensuring processes flow smoothly from start to finish.</p>

<h3>Core Elements of Workflow Automation</h3>
<p>A successful workflow automation solution typically includes:</p>
<ul>
  <li><strong>Task Automation</strong>: Automating repetitive tasks such as data entry, invoicing, and report generation.</li>
  <li><strong>Integration Capabilities</strong>: Seamlessly integrating various software and systems, allowing easy data flow between platforms.</li>
  <li><strong>Workflow Management Software</strong>: Tools like ClickUp, Make.com, and n8n, designed to build, visualize, and manage automated workflows.</li>
</ul>

<h2>Benefits of Workflow Automation for Businesses</h2>

<h3>Increased Productivity</h3>
<p>Workflow automation eliminates manual tasks, freeing employees to focus on high-value activities. This increase in productivity enhances overall business performance and efficiency.</p>

<h3>Reduction of Errors</h3>
<p>Automated workflows significantly reduce human error associated with manual data entry and repetitive tasks. Improved accuracy leads to higher-quality outcomes and fewer operational disruptions.</p>

<h3>Cost Efficiency</h3>
<p>Automating workflows lowers operational costs by minimizing labor-intensive processes. Businesses benefit from optimized resource allocation, reducing overhead expenses and improving profitability.</p>

<h3>Enhanced Collaboration and Transparency</h3>
<p>Workflow automation promotes collaboration by clearly defining roles, responsibilities, and process visibility. This clarity ensures all team members understand their tasks and deadlines, enhancing accountability.</p>

<h2>Popular Applications of Workflow Automation</h2>

<h3>Marketing and Sales</h3>
<p>Automation helps manage leads, customer interactions, email marketing campaigns, and CRM activities, enabling timely follow-ups and personalized customer experiences.</p>

<h3>Human Resources Management</h3>
<p>HR processes like onboarding, payroll, leave management, and performance evaluations can benefit significantly from automation, ensuring consistency and compliance.</p>

<h3>Customer Service</h3>
<p>Automated customer support workflows streamline ticket handling, issue resolution, and follow-ups, improving response times and overall customer satisfaction.</p>

<h3>Finance and Accounting</h3>
<p>Financial operations, including invoice processing, expense tracking, budgeting, and reporting, are effectively automated, reducing manual effort and ensuring accuracy.</p>

<h2>Steps to Implement Workflow Automation Successfully</h2>

<h3>Identify and Analyze Processes</h3>
<p>Start by clearly identifying repetitive, high-volume processes suitable for automation. Analyze existing workflows to pinpoint areas where automation will have the greatest impact.</p>

<h3>Select the Right Automation Tools</h3>
<p>Choose robust workflow automation software or platforms like Make.com, ClickUp, or Zapier that fit your organization's specific needs. Consider factors like scalability, integration options, and user-friendliness.</p>

<h3>Map and Test the Workflow</h3>
<p>Develop detailed workflow diagrams and process maps before deployment. Testing ensures that automation runs smoothly and aligns precisely with your business processes.</p>

<h3>Monitor, Optimize, and Scale</h3>
<p>Continually track the performance of your automated workflows. Regular monitoring helps optimize processes and make adjustments to meet evolving business requirements.</p>

<h2>Future Trends in Workflow Automation</h2>
<ul>
  <li><strong>Artificial Intelligence Integration</strong>: AI-powered automation enhances intelligent decision-making capabilities, allowing workflows to adapt dynamically.</li>
  <li><strong>Robotic Process Automation (RPA)</strong>: Growing adoption of RPA to automate complex tasks and integrate legacy systems seamlessly.</li>
  <li><strong>Enhanced Analytics and Reporting</strong>: Improved data analytics within automated workflows to provide insightful reporting and predictive capabilities.</li>
</ul>

<h2>Conclusion: Unlocking Business Potential with Workflow Automation</h2>
<p>Workflow automation empowers businesses to achieve greater operational efficiency, reduced costs, and improved accuracy. By automating repetitive tasks and processes, organizations position themselves for sustained growth and innovation. Embrace workflow automation today to revolutionize your business operations and drive competitive success.</p>

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
              Our workflow automation platform combines AI-powered intelligence with robust process management capabilities.
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

export default WorkflowAutomation;