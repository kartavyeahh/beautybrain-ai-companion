import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Camera, Sparkles, Bot, User, Zap } from "lucide-react";
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
      content: "hey bestie! 🌸 i'm your BeautyBrain assistant and i'm here to help you discover products that actually slap. let's find your perfect match - authenticity verified, best prices locked in. what are you looking for?",
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
        content: "love that energy! 💫 i'm designed to help you with price comparisons, authenticity checks, and personalized product recs. connect me to AI services and i'll show you the magic ✨",
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
        title: "image received! 📸",
        description: "visual AI analysis coming soon - connect AI to unlock this feature",
      });
    }
  };

  return (
    <section className="min-h-screen py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="glass-effect rounded-[2rem] shadow-premium border-2 border-primary/30 overflow-hidden">
          {/* Header */}
          <div className="border-b border-primary/20 glass-effect p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-neon">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background animate-scale-pulse" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-black text-foreground">BeautyBrain</h2>
                <p className="text-sm text-muted-foreground font-semibold">your AI beauty bestie • online</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/30">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">powered by AI</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="h-[550px] p-6 bg-background/40">
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-4 ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      message.role === "user"
                        ? "bg-gradient-secondary shadow-glow"
                        : "bg-gradient-hero shadow-neon"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-6 h-6 text-white" />
                    ) : (
                      <Bot className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div
                    className={`rounded-3xl px-6 py-4 max-w-[75%] ${
                      message.role === "user"
                        ? "bg-gradient-secondary text-white shadow-glow font-semibold"
                        : "glass-effect border border-primary/20 text-foreground"
                    }`}
                  >
                    <p className="text-base leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-neon">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="glass-effect border border-primary/20 rounded-3xl px-6 py-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
                      <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
                      <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t border-primary/20 glass-effect p-6">
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
                className="rounded-2xl glass-effect border-2 border-primary/30 hover:border-primary hover:bg-primary/20 hover:scale-110 transition-all w-14 h-14"
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera className="w-6 h-6" />
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="ask me anything about beauty products..."
                className="flex-1 rounded-2xl glass-effect border-2 border-primary/30 focus:border-primary bg-background/50 backdrop-blur-xl px-6 h-14 text-base font-medium placeholder:text-muted-foreground/70"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                className="group rounded-2xl bg-gradient-hero text-white font-bold shadow-neon hover:shadow-premium hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed w-14 h-14"
                size="icon"
              >
                <Send className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
            
            {/* Quick actions */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["best skincare deals", "verify this product", "perfume for summer vibes"].map((action, i) => (
                <button
                  key={i}
                  onClick={() => setInput(action)}
                  className="px-4 py-2 rounded-full glass-effect border border-primary/20 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:border-primary/50 hover:text-foreground hover:scale-105 transition-all"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
