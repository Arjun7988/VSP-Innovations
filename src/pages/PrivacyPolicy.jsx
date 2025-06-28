import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-100">
              Last Updated: June 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="lead text-gray-600 dark:text-gray-300 mb-8">
                  At VSP Innovations, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Information We Collect</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">We may collect several types of information from and about users of our website, including:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
                  <li className="mb-2"><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when filling out forms on our website, subscribing to our services, or requesting further information.</li>
                  <li className="mb-2"><strong>Usage Data:</strong> Information about how you use our website, including your browsing actions and patterns.</li>
                  <li className="mb-2"><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.</li>
                  <li className="mb-2"><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">We use the information we collect about you for various purposes, including:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
                  <li className="mb-2">To provide and maintain our services</li>
                  <li className="mb-2">To notify you about changes to our services</li>
                  <li className="mb-2">To allow you to participate in interactive features of our services</li>
                  <li className="mb-2">To provide customer support</li>
                  <li className="mb-2">To gather analysis or valuable information so that we can improve our services</li>
                  <li className="mb-2">To monitor the usage of our services</li>
                  <li className="mb-2">To detect, prevent and address technical issues</li>
                  <li className="mb-2">To provide you with news, special offers and general information about other goods, services and events which we offer</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Disclosure of Your Information</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">We may disclose personal information that we collect or you provide:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
                  <li className="mb-2">To our subsidiaries and affiliates</li>
                  <li className="mb-2">To contractors, service providers, and other third parties we use to support our business</li>
                  <li className="mb-2">To fulfill the purpose for which you provide it</li>
                  <li className="mb-2">For any other purpose disclosed by us when you provide the information</li>
                  <li className="mb-2">With your consent</li>
                  <li className="mb-2">To comply with any court order, law, or legal process, including to respond to any government or regulatory request</li>
                  <li className="mb-2">If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of VSP Innovations, our customers, or others</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Data Security</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls. Any payment transactions will be encrypted using SSL technology.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Your Rights</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, such as:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
                  <li className="mb-2">The right to access personal information we hold about you</li>
                  <li className="mb-2">The right to request correction of inaccurate personal information</li>
                  <li className="mb-2">The right to request deletion of your personal information</li>
                  <li className="mb-2">The right to object to processing of your personal information</li>
                  <li className="mb-2">The right to request restriction of processing of your personal information</li>
                  <li className="mb-2">The right to data portability</li>
                  <li className="mb-2">The right to withdraw consent</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Children's Privacy</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Changes to Our Privacy Policy</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">VSP Innovations</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Email: arjun.devireddy@vspinnovations.com</p>
                  <p className="text-gray-700 dark:text-gray-300">Phone: +91 88861-00028</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;