import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Camera, Sparkles, Bot, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! 🌸 I'm your BeautyBrain assistant. I'm here to help you discover the perfect beauty products, verify authenticity, find the best deals, and create personalized routines. How can I help you shine today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I understand you're looking for beauty recommendations. While I'm still learning to provide real-time insights, I'm designed to help you with price comparisons, authenticity verification, and personalized product suggestions. Connect me to AI services for full functionality! 💫",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "Image received! 📸",
        description: "AI product analysis coming soon. Connect AI services to unlock this feature.",
      });
    }
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-glow">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gradient-card backdrop-blur-xl rounded-3xl shadow-glow border border-border overflow-hidden">
          {/* Header */}
          <div className="border-b border-border bg-card/50 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center shadow-soft">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">BeautyBrain Assistant</h2>
                <p className="text-sm text-muted-foreground">Your intelligent beauty companion</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="h-[500px] p-6">
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === "user"
                        ? "bg-primary/20"
                        : "bg-gradient-hero shadow-soft"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-5 h-5 text-primary" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-gradient-hero text-white shadow-soft"
                        : "bg-card border border-border"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center shadow-soft">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-card border border-border rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t border-border bg-card/50 backdrop-blur-sm p-6">
            <div className="flex gap-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-primary/20 hover:border-primary/40 hover:bg-gradient-card"
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera className="w-5 h-5" />
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about products, prices, or routines..."
                className="flex-1 rounded-full border-2 border-border bg-background/50 backdrop-blur-sm focus:border-primary/40 px-6"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                className="rounded-full bg-gradient-hero text-white shadow-soft hover:scale-105 transition-all"
                size="icon"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
