import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Sparkles } from "lucide-react";

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
      content: "hey! i'm your BeautyBrain assistant. i'm here to help you discover products that match your vibe. what are you looking for?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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
        content: "i'm designed to help you with price comparisons, authenticity checks, and personalized product recommendations.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="border border-border rounded-2xl overflow-hidden">
            <div className="border-b border-border p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-foreground" />
                <div>
                  <h3 className="text-lg font-bold text-foreground">beauty brain</h3>
                  <p className="text-sm text-muted-foreground">your personal assistant</p>
                </div>
              </div>
            </div>

            <ScrollArea className="h-[500px] p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-5 py-3 rounded-2xl ${
                        message.role === "user"
                          ? "bg-foreground text-background"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted px-5 py-3 rounded-2xl">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-foreground/40 animate-scale-pulse" />
                        <div className="w-2 h-2 rounded-full bg-foreground/40 animate-scale-pulse" style={{ animationDelay: "0.2s" }} />
                        <div className="w-2 h-2 rounded-full bg-foreground/40 animate-scale-pulse" style={{ animationDelay: "0.4s" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-6 border-t border-border">
              <div className="flex gap-3">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="ask me anything..."
                  className="flex-1 px-5 py-3 bg-background border border-border rounded-full focus:outline-none focus:border-foreground transition-colors text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all disabled:opacity-50"
                  size="icon"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
