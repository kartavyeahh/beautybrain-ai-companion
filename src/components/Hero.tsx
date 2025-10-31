import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

interface HeroProps {
  onStartChat: () => void;
}

const Hero = ({ onStartChat }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Hero headline */}
          <h1 className="text-7xl md:text-9xl font-black leading-[0.9] tracking-tight">
            <span className="block text-gradient bg-gradient-hero bg-300% animate-gradient-shift">
              your glow,
            </span>
            <span className="block text-foreground mt-4">
              guided by
            </span>
            <span className="block text-gradient bg-gradient-secondary bg-300% animate-gradient-shift mt-4">
              intelligence
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
            stop guessing. start glowing. discover beauty products that actually match your vibe
          </p>
          
          {/* CTA Button */}
          <div>
            <Button 
              size="lg" 
              className="group relative bg-foreground text-background hover:bg-foreground/90 font-bold text-lg px-12 py-8 rounded-full transition-all duration-300 hover:scale-105"
              onClick={onStartChat}
            >
              <span className="flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                let's glow up
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
