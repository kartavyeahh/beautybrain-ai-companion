import { useState } from "react";
import Hero from "@/components/Hero";
import ChatInterface from "@/components/ChatInterface";
import Features from "@/components/Features";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  const handleStartChat = () => {
    setShowChat(true);
    // Smooth scroll to chat
    setTimeout(() => {
      document.getElementById("chat-section")?.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onStartChat={handleStartChat} />
      <Features />
      {showChat && (
        <div id="chat-section">
          <ChatInterface />
        </div>
      )}
    </div>
  );
};

export default Index;
