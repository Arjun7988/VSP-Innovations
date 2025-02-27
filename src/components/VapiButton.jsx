import React, { useEffect } from 'react';

const VapiButton = () => {
  useEffect(() => {
    let vapiInstance = null;
    const assistant = "67aa37c9-1def-4aa4-b9f1-0ca33213336f";
    const apiKey = "b96b2b92-b3b2-4268-b061-ecd39ee3796b";
    const buttonConfig = {
      position: "bottom-left",
      offset: "40px",
      width: "50px",
      height: "50px",
      idle: {
        color: `rgb(93, 254, 202)`,
        type: "pill",
        title: "Have a quick question?",
        subtitle: "Talk with our AI assistant",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
      },
      loading: {
        color: `rgb(93, 124, 202)`,
        type: "pill",
        title: "Connecting...",
        subtitle: "Please wait",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
      },
      active: {
        color: `rgb(255, 0, 0)`,
        type: "pill",
        title: "Call is in progress...",
        subtitle: "End the call.",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
      },
    };

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;

    script.onload = function () {
      try {
        vapiInstance = window.vapiSDK.run({
          apiKey,
          assistant,
          config: buttonConfig,
        });
      } catch (error) {
        console.error("Error initializing Vapi:", error);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default VapiButton;