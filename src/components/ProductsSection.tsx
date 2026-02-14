import honeyRaw from "@/assets/honey-raw.jpg";
import honeyOrganic from "@/assets/honey-organic.jpg";
import honeyMultiflora from "@/assets/honey-multiflora.jpg";

const products = [
  {
    name: "Pure Raw Honey",
    description:
      "Unprocessed, unfiltered raw honey straight from the hive. Rich in enzymes and nutrients.",
    image: honeyRaw,
    tag: "Best Seller",
  },
  {
    name: "Organic Wildflower Honey",
    description:
      "Collected from wildflower meadows, this honey offers a complex, floral flavour profile.",
    image: honeyOrganic,
    tag: "Organic",
  },
  {
    name: "Multiflora Honey",
    description:
      "A smooth, versatile honey sourced from diverse flora — perfect for everyday use.",
    image: honeyMultiflora,
    tag: "Premium",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-honey-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase font-body">
            Our Range
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            Premium Honey Products
          </h2>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            Discover our curated selection of organic and natural honey, 
            each crafted to bring you the authentic taste of nature.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl bg-background overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground font-body">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {p.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-honey-amber transition-colors font-body"
                >
                  Order on WhatsApp →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
