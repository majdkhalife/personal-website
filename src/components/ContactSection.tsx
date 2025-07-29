import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("mkgzbapy");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thanks for reaching out!
          </h2>
          <p className="text-muted-foreground">
            I appreciate your message and will get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 text-center max-w-xl mx-auto">
          Have a project in mind or want to collaborate? I'm always open to
          discussing new ideas and opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <ContactItem
                icon={<Mail />}
                label="Email"
                value="majd.skhalife@gmail.com"
              />
              <ContactItem
                icon={<Phone />}
                label="Phone"
                value="+1 (438) 870-8068"
              />
              <ContactItem
                icon={<MapPin />}
                label="Location"
                value="Montreal, QC, Canada"
              />
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-2">Connect With Me</h4>
              <div className="flex justify-center gap-4 text-primary">
                <a
                  href="https://linkedin.com/in/majd.khalife"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/majd-khalife"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form using Formspree */}
          <form
            onSubmit={handleSubmit}
            className="bg-background/80 border border-border rounded-lg p-6 space-y-6 shadow-md"
          >
            <div>
              <label className="block mb-2 text-sm font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Majd Khalife"
                className="w-full rounded-md bg-background border border-border px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md bg-background border border-border px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Your Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Let's work together on..."
                className="w-full rounded-md bg-background border border-border px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 px-6 rounded-md bg-primary text-white hover:bg-primary/90 transition-all duration-300 flex justify-center items-center gap-2"
            >
              {state.submitting ? "Sending..." : "Send Message ✉️"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// 🔹 Reusable Contact Info Item
const ContactItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-primary/10 text-primary">{icon}</div>
    <div>
      <h4 className="text-sm font-medium text-muted-foreground">{label}</h4>
      <p className="text-base text-foreground">{value}</p>
    </div>
  </div>
);
