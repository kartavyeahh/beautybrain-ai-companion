import { Search, Shield, Camera, Scan, Droplets, Sparkles } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "price detective",
    description: "compare prices across platforms and find legitimate deals",
  },
  {
    icon: Shield,
    title: "smart deals",
    description: "auto-apply coupons and catch seasonal offers",
  },
  {
    icon: Sparkles,
    title: "personalized picks",
    description: "products matched to your skin type and preferences",
  },
  {
    icon: Camera,
    title: "visual ai brain",
    description: "snap products for instant insights and recommendations",
  },
  {
    icon: Scan,
    title: "qr authenticity",
    description: "verify product details and authenticity instantly",
  },
  {
    icon: Droplets,
    title: "fragrance finder",
    description: "discover perfumes that match your personality",
  },
];

const Features = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            <span className="text-gradient bg-gradient-hero bg-300% animate-gradient-shift">
              six superpowers
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300"
              >
                <div className="space-y-4">
                  <Icon className="w-8 h-8 text-foreground" />
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
