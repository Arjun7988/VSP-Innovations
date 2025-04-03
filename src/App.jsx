import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ChatBot from './components/ChatBot';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import BookingDetailsPage from './pages/BookingDetailsPage';
import AIVoiceAgents from './pages/services/AIVoiceAgents';
import AIChatbots from './pages/services/AIChatbots';
import WhatsAppAssistant from './pages/services/WhatsAppAssistant';
import WebDevelopment from './pages/services/WebDevelopment';
import MobileDevelopment from './pages/services/MobileDevelopment';
import AISEO from './pages/services/AISEO';
import CustomAISolutions from './pages/services/CustomAISolutions';
import WorkflowAutomation from './pages/services/WorkflowAutomation';
import AIMarketingAutomation from './pages/services/AIMarketingAutomation';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/bookings/:bookingUid" element={<BookingDetailsPage />} />
              <Route path="/services/ai-voice-agents" element={<AIVoiceAgents />} />
              <Route path="/services/ai-chatbots" element={<AIChatbots />} />
              <Route path="/services/whatsapp-assistant" element={<WhatsAppAssistant />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/mobile-development" element={<MobileDevelopment />} />
              <Route path="/services/ai-seo" element={<AISEO />} />
              <Route path="/services/custom-ai-solutions" element={<CustomAISolutions />} />
              <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
              <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
          <ChatBot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;