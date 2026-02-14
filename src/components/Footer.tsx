const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4 text-center">
        <span className="font-display text-xl font-bold text-primary-foreground">
          AVIKA
        </span>
        <span className="ml-1 text-xs tracking-widest text-primary-foreground/60 uppercase font-body">
          Trading Company
        </span>
        <p className="mt-3 text-sm text-primary-foreground/50 font-body">
          Premium Organic Honey · Indore, MP, India
        </p>
        <p className="mt-6 text-xs text-primary-foreground/30 font-body">
          © {new Date().getFullYear()} AVIKA Trading Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
