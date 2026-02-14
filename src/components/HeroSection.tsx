import heroImage from "@/assets/hero-honey.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero pt-16"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div className="space-y-6 md:space-y-8">
          <div className="inline-block rounded-full bg-honey-cream px-4 py-1.5 text-xs font-semibold tracking-wider text-honey-amber uppercase font-body">
            Premium Organic Honey
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Pure & Natural{" "}
            <span className="text-gradient-honey">Honey</span>{" "}
            <br className="hidden sm:block" />
            From Nature's Heart
          </h1>
          <p className="text-lg text-muted-foreground font-body max-w-md leading-relaxed">
            AVIKA Trading Company brings you the finest organic honey — 
            sourced sustainably, packed with care, and delivered with trust 
            from the heartlands of India.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center rounded-full bg-gradient-warm px-7 py-3 text-sm font-bold text-primary-foreground shadow-honey hover:opacity-90 transition-opacity font-body"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border-2 border-primary px-7 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-body"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-4 bg-gradient-honey rounded-3xl opacity-20 blur-2xl" />
            <img
              src={heroImage}
              alt="Premium organic honey jar with honeycomb"
              className="relative w-full rounded-2xl shadow-elevated object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
