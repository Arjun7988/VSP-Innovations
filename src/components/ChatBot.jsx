import React from 'react';
import { BubbleChat } from 'flowise-embed-react';

const ChatBot = () => {
  const chatflowId = import.meta.env.VITE_FLOWISE_CHATFLOW_ID;
  const apiHost = import.meta.env.VITE_FLOWISE_API_HOST;

  return (
    <BubbleChat
      chatflowid={chatflowId}
      apiHost={apiHost}
      theme={{    
        button: {
          backgroundColor: '#7C3AED',
          right: 20,
          bottom: 20,
          size: 48,
          dragAndDrop: true,
          iconColor: 'white',
          customIconSrc: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="40" font-weight="bold" fill="white">VSP</text></svg>',
          autoWindowOpen: {
            autoOpen: true,
            openDelay: 2,
            autoOpenOnMobile: false
          }
        },
        tooltip: {
          showTooltip: true,
          tooltipMessage: 'Hi There 👋!',
          tooltipBackgroundColor: '#7C3AED',
          tooltipTextColor: 'white',
          tooltipFontSize: 16
        },
        disclaimer: {
          title: 'Welcome to VSP Innovations',
          message: "How can I assist you today?",
          textColor: '#303235',
          buttonColor: '#7C3AED',
          buttonText: 'Start Chatting',
          buttonTextColor: 'white',
          blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
          backgroundColor: 'white'
        },
        chatWindow: {
          showTitle: true,
          showAgentMessages: true,
          title: 'VSP AI Assistant',
          titleAvatarSrc: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="40" font-weight="bold" fill="%237C3AED">VSP</text></svg>',
          welcomeMessage: 'Hello! How can I help you today?',
          errorMessage: 'I apologize, but I encountered an error. Please try again.',
          backgroundColor: '#ffffff',
          height: 500,
          width: 400,
          fontSize: 16,
          starterPrompts: [
            "What services do you offer?"
          ],
          starterPromptFontSize: 15,
          clearChatOnReload: false,
          renderHTML: true,
          botMessage: {
            backgroundColor: '#f7f8ff',
            textColor: '#303235',
            showAvatar: true,
            avatarSrc: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="40" font-weight="bold" fill="%237C3AED">VSP</text></svg>'
          },
          userMessage: {
            backgroundColor: '#7C3AED',
            textColor: '#ffffff',
            showAvatar: true,
            avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
          },
          textInput: {
            placeholder: 'Type your message...',
            backgroundColor: '#ffffff',
            textColor: '#303235',
            sendButtonColor: '#7C3AED',
            maxChars: 1000,
            maxCharsWarningMessage: 'Message is too long. Please keep it under 1000 characters.',
            autoFocus: true,
            sendMessageSound: true,
            receiveMessageSound: true
          },
          feedback: {
            color: '#303235'
          },
          dateTimeToggle: {
            date: true,
            time: true
          },
          footer: {
            textColor: '#303235',
            text: 'Powered by',
            company: 'VSP Innovations',
            companyLink: 'https://vspinnovations.com'
          }
        }
      }}
    />
  );
};

export default ChatBot;