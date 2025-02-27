import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaUser, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';

const BookingDetailsPage = () => {
  const { bookingUid } = useParams();

  // This is a placeholder booking data structure
  // In a real application, you would fetch this data based on the bookingUid
  const bookingDetails = {
    id: bookingUid,
    status: 'confirmed',
    date: '2024-03-25',
    time: '10:00 AM',
    duration: '30 minutes',
    customer: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567'
    },
    notes: 'Discussion about AI Voice Agents implementation'
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Booking Details
            </h1>
            <p className="text-lg text-gray-100">
              Booking Reference: {bookingUid}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Details Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              {/* Status Banner */}
              <div className="bg-green-500 text-white px-6 py-3 text-center">
                <span className="font-semibold uppercase tracking-wide">
                  {bookingDetails.status}
                </span>
              </div>

              {/* Details Grid */}
              <div className="p-6 space-y-6">
                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <FaCalendar className="text-2xl text-primary-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Date</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {bookingDetails.date}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <FaClock className="text-2xl text-primary-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Time</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {bookingDetails.time} ({bookingDetails.duration})
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Customer Information */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Customer Information
                  </h3>
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <FaUser className="text-2xl text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Name</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {bookingDetails.customer.name}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <FaEnvelope className="text-2xl text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {bookingDetails.customer.email}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <FaPhone className="text-2xl text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {bookingDetails.customer.phone}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Notes */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <FaComments className="text-2xl text-primary-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Notes</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {bookingDetails.notes}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-6">
                <div className="flex flex-wrap gap-4 justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg
                             hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    Cancel Booking
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg
                             hover:opacity-90 transition-opacity duration-300"
                  >
                    Reschedule
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingDetailsPage;