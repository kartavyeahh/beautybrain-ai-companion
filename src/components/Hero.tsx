import { Button } from "@/components/ui/button";
import { Sparkles, Camera } from "lucide-react";
import heroImage from "@/assets/hero-beauty.jpg";

interface HeroProps {
  onStartChat: () => void;
}

const Hero = ({ onStartChat }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-glow" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-card backdrop-blur-sm border border-border shadow-soft">
              <Sparkles className="w-4 h-4 text-primary animate-glow" />
              <span className="text-sm font-medium text-muted-foreground">Your AI Beauty Companion</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Your glow,
              </span>
              <br />
              <span className="text-foreground">guided by intelligence.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Make smart, personalized beauty decisions. Compare prices, verify authenticity, 
              and discover products that truly match your unique needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-hero text-white border-0 shadow-glow hover:scale-105 transition-all text-lg px-8 py-6 rounded-full"
                onClick={onStartChat}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/20 bg-card/80 backdrop-blur-sm hover:bg-gradient-card hover:border-primary/40 text-lg px-8 py-6 rounded-full transition-all"
              >
                <Camera className="w-5 h-5 mr-2" />
                Scan a Product
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-glow" />
                <span>Trusted Sellers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-glow" />
                <span>Personalized</span>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Beautiful self-care products" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-gradient-card backdrop-blur-md rounded-2xl p-4 shadow-glow animate-float border border-border">
              <div className="text-xs text-muted-foreground mb-1">Legitimacy Score</div>
              <div className="text-2xl font-bold text-accent">98%</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-card backdrop-blur-md rounded-2xl p-4 shadow-glow animate-float border border-border" style={{ animationDelay: "1s" }}>
              <div className="text-xs text-muted-foreground mb-1">You Saved</div>
              <div className="text-2xl font-bold text-primary">$47</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
