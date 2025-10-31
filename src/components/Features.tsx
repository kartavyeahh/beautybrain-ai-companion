import { Shield, Sparkles, Camera, Heart, TrendingDown, QrCode } from "lucide-react";

const features = [
  {
    icon: TrendingDown,
    title: "Smart Price Comparison",
    description: "Find the best deals across platforms with automatic coupon application and legitimacy scores.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Authenticity Verification",
    description: "Scan QR codes and verify product authenticity with brand-verified batch and expiry information.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Sparkles,
    title: "AI Personalization",
    description: "Get product recommendations tailored to your skin type, preferences, and beauty goals.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Camera,
    title: "Visual Intelligence",
    description: "Upload product images to receive insights on usage, layering suggestions, and alternatives.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Perfume Profiling",
    description: "Discover fragrances that match your mood and personality with intelligent note matching.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: QrCode,
    title: "Routine Builder",
    description: "Auto-categorize products by time of use and get smart reminders for your perfect routine.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Intelligence meets beauty
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to shop smart, shine naturally, and feel confident in every beauty decision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-card backdrop-blur-sm rounded-3xl p-8 border border-border shadow-soft hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by beauty enthusiasts who value quality</p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-60">
            <div className="text-2xl font-bold text-foreground">🌿 Natural</div>
            <div className="text-2xl font-bold text-foreground">✨ Empowering</div>
            <div className="text-2xl font-bold text-foreground">💫 Confident</div>
            <div className="text-2xl font-bold text-foreground">🌸 Curious</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
