import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_hl25s8e",
        "template_uxq8loi",
        e.currentTarget,
        "Blh8gMgPbrasbh03t"
      );

      console.log("Email sent successfully:", result);

      setSubmitted(true);
      e.currentTarget.reset();

    } catch (error) {
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase font-body">
            Reach Out
          </span>

          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            Get in Touch
          </h2>

          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            Have a question or want to place a bulk order? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-honey-cream flex items-center justify-center text-primary">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <h4 className="font-display font-semibold text-foreground">
                  Address
                </h4>

                <p className="text-muted-foreground font-body text-sm">
                  Indore, Madhya Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-honey-cream flex items-center justify-center text-primary">
                <Phone className="h-5 w-5" />
              </div>

              <div>
                <h4 className="font-display font-semibold text-foreground">
                  WhatsApp / Phone
                </h4>

                <a
                  href="https://wa.me/918770552411"
                  className="text-primary font-body text-sm hover:underline"
                >
                  +91 8770552411
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-honey-cream flex items-center justify-center text-primary">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <h4 className="font-display font-semibold text-foreground">
                  Email
                </h4>

                <a
                  href="mailto:abhishekchoudharyorg@gmail.com"
                  className="text-primary font-body text-sm hover:underline"
                >
                  abhishekchoudharyorg@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="flex items-center justify-center rounded-2xl bg-card p-8 shadow-card text-center">
              <div>

                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Send className="h-6 w-6" />
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Thank You!
                </h3>

                <p className="text-muted-foreground font-body text-sm">
                  We'll get back to you shortly.
                </p>

              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-card p-8 shadow-card space-y-5"
            >

              <div>
                <label className="block text-sm font-medium text-foreground font-body mb-1.5">
                  Name
                </label>

                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground font-body mb-1.5">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground font-body mb-1.5">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-warm px-6 py-3 text-sm font-bold text-primary-foreground shadow-honey hover:opacity-90 transition-opacity font-body"
              >
                Send Message
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;