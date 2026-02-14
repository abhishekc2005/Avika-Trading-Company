import { Leaf, Shield, Heart } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "100% Organic",
    description:
      "Our honey is sourced from pristine, chemical-free environments ensuring the purest quality.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description:
      "Every batch undergoes rigorous testing to meet the highest FMCG standards.",
  },
  {
    icon: Heart,
    title: "Sustainably Sourced",
    description:
      "We work directly with local beekeepers to support ethical and sustainable practices.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase font-body">
            Our Story
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            Rooted in Quality, Driven by Trust
          </h2>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            AVIKA Trading Company was born out of a passion for authentic, 
            organic food products. Based in Indore, Madhya Pradesh, we are 
            committed to bringing nature's finest honey to health-conscious 
            consumers and wholesale buyers across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="group rounded-2xl bg-card p-8 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-honey-cream text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                {v.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
