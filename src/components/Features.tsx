import { Shield, Sparkles, Camera, Heart, TrendingDown, QrCode } from "lucide-react";

const features = [
  {
    icon: TrendingDown,
    title: "price match magic",
    description: "we scan every platform to find you the best deals + auto-apply coupons. no cap, just savings.",
    gradient: "from-primary to-secondary",
    emoji: "💰"
  },
  {
    icon: Shield,
    title: "authenticity checker",
    description: "scan QR codes and verify products instantly. fake products? not in our house.",
    gradient: "from-accent to-primary",
    emoji: "🔐"
  },
  {
    icon: Sparkles,
    title: "AI that gets you",
    description: "personalized recs based on your skin type, vibe, and goals. it's giving main character energy.",
    gradient: "from-secondary to-accent",
    emoji: "✨"
  },
  {
    icon: Camera,
    title: "visual intelligence",
    description: "snap a pic of any product and get instant insights, usage tips, and similar products.",
    gradient: "from-primary to-accent",
    emoji: "📸"
  },
  {
    icon: Heart,
    title: "scent profiling",
    description: "find fragrances that match your personality and mood. woodsy? floral? we got you.",
    gradient: "from-secondary to-primary",
    emoji: "💐"
  },
  {
    icon: QrCode,
    title: "routine builder",
    description: "auto-organize products by morning/night + get reminders. consistency is key bestie.",
    gradient: "from-accent to-secondary",
    emoji: "📅"
  },
];

const Features = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-effect border border-primary/30 mb-6">
            <span className="text-xl">🚀</span>
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">features that hit different</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block text-gradient bg-gradient-hero bg-300% animate-gradient-shift">
              shop smarter,
            </span>
            <span className="block text-foreground mt-2">
              shine brighter
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            everything you need to level up your beauty game
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-effect rounded-3xl p-8 border border-primary/20 hover:border-primary/50 shadow-glow hover:shadow-premium transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-4xl animate-float">{feature.emoji}</span>
                </div>
                
                <h3 className="text-2xl font-black mb-3 text-foreground lowercase">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust section */}
        <div className="mt-24 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
            trusted by the beauty community
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              { emoji: "🌿", text: "natural vibes" },
              { emoji: "✨", text: "empowering af" },
              { emoji: "💫", text: "confidence boost" },
              { emoji: "🌸", text: "stay curious" }
            ].map((item, i) => (
              <div 
                key={i}
                className="glass-effect px-6 py-3 rounded-full border border-primary/30 hover:border-primary/50 hover:scale-110 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-125 transition-transform">{item.emoji}</span>
                  <span className="text-base font-bold lowercase text-foreground">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
