import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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
                  Welcome to VSP Innovations. Please read these Terms of Service ("Terms") carefully as they contain important information about your legal rights, remedies, and obligations. By accessing or using the VSP Innovations website or services, you agree to comply with and be bound by these Terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  By accessing or using our website and services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our website or services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Changes to Terms</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We reserve the right to modify these Terms at any time. We will provide notice of any material changes by updating the "Last Updated" date at the top of these Terms. Your continued use of our website or services after such changes constitutes your acceptance of the new Terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Services</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  VSP Innovations provides AI-powered solutions including AI Voice Agents, Custom AI Solutions, Workflow Automation, and AI Marketing Automation. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. User Accounts</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. Intellectual Property Rights</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by VSP Innovations, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  These Terms permit you to use the website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. User Content</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our website may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the website, including its legality, reliability, and appropriateness.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  By posting content to the website, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the website. You retain any and all of your rights to any content you submit, post, or display on or through the website and you are responsible for protecting those rights.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. Prohibited Uses</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  You may use the website only for lawful purposes and in accordance with these Terms. You agree not to use the website:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
                  <li className="mb-2">In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li className="mb-2">To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
                  <li className="mb-2">To impersonate or attempt to impersonate VSP Innovations, a VSP Innovations employee, another user, or any other person or entity</li>
                  <li className="mb-2">To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website, or which, as determined by us, may harm VSP Innovations or users of the website or expose them to liability</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. Disclaimer of Warranties</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  THE WEBSITE AND ITS CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER VSP INNOVATIONS NOR ANY PERSON ASSOCIATED WITH VSP INNOVATIONS MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  IN NO EVENT WILL VSP INNOVATIONS, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. Indemnification</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  You agree to defend, indemnify, and hold harmless VSP Innovations, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">11. Governing Law and Jurisdiction</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation shall be governed by and construed in accordance with the laws of India, without giving effect to any choice or conflict of law provision or rule.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">12. Severability</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">13. Entire Agreement</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The Terms constitute the sole and entire agreement between you and VSP Innovations regarding the website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">14. Contact Us</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;