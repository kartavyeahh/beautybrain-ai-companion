import { Button } from "@/components/ui/button";
import { Sparkles, Camera, ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-beauty.jpg";

interface HeroProps {
  onStartChat: () => void;
}

const Hero = ({ onStartChat }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute inset-0 bg-gradient-glow" />
      
      {/* Floating orbs with glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: "4s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border-2 border-primary/30 shadow-neon animate-border-glow">
              <Zap className="w-5 h-5 text-primary animate-glow-pulse" />
              <span className="text-sm font-bold tracking-wider uppercase bg-gradient-hero bg-clip-text text-transparent bg-300% animate-gradient-shift">
                AI-Powered Beauty Intelligence
              </span>
            </div>
            
            {/* Hero headline */}
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
              <span className="block text-gradient bg-gradient-hero bg-300% animate-gradient-shift">
                your glow,
              </span>
              <span className="block text-foreground mt-2">
                guided by
              </span>
              <span className="block text-gradient bg-gradient-secondary bg-300% animate-gradient-shift">
                intelligence
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed">
              stop guessing. start glowing. discover beauty products that actually match your vibe ✨
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group relative bg-gradient-hero text-white font-bold text-lg px-10 py-7 rounded-full overflow-hidden shadow-neon hover:shadow-premium hover:scale-105 transition-all duration-300"
                onClick={onStartChat}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  let's glow up
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group glass-effect border-2 border-primary/40 hover:border-primary hover:bg-primary/10 font-bold text-lg px-10 py-7 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Camera className="w-6 h-6 mr-3" />
                scan product
                <div className="ml-2 w-2 h-2 rounded-full bg-primary animate-scale-pulse" />
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              {[
                { icon: "🔒", text: "100% secure" },
                { icon: "⚡", text: "instant results" },
                { icon: "✨", text: "ai-powered" }
              ].map((badge, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20"
                >
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right image with premium effects */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-premium border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 group">
              <img 
                src={heroImage} 
                alt="Premium beauty products" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay" />
            </div>
            
            {/* Floating stats cards with glassmorphism */}
            <div className="absolute -top-6 -right-6 glass-effect rounded-3xl p-6 shadow-neon animate-float border border-primary/30">
              <div className="text-xs text-muted-foreground mb-2 font-bold uppercase tracking-wider">trust score</div>
              <div className="text-4xl font-black bg-gradient-hero bg-clip-text text-transparent">98%</div>
              <div className="text-xs text-accent mt-1 font-semibold">verified ✓</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-effect rounded-3xl p-6 shadow-glow animate-float border border-secondary/30" style={{ animationDelay: "1s" }}>
              <div className="text-xs text-muted-foreground mb-2 font-bold uppercase tracking-wider">you saved</div>
              <div className="text-4xl font-black bg-gradient-secondary bg-clip-text text-transparent">$247</div>
              <div className="text-xs text-primary mt-1 font-semibold">this month 🔥</div>
            </div>

            <div className="absolute top-1/2 -right-4 glass-effect rounded-2xl p-4 shadow-glow animate-float" style={{ animationDelay: "2.5s" }}>
              <div className="text-2xl">✨</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
