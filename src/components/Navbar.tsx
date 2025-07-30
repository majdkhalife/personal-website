// components/Navbar.tsx
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return { id: item.href, offset: rect.top };
      });

      const visibleSection = sections
        .filter(Boolean)
        .find(
          (sec) => sec!.offset >= 0 && sec!.offset < window.innerHeight / 2
        );

      if (visibleSection) setActiveSection(visibleSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between px-4 md-8 lg:px-12">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Majd Khalife's</span>{" "}
            Portfolio
          </span>
        </a>

        <div className="hidden md:flex space-x-8 pr-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "transition-colors duration-300",
                activeSection === item.href
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "transition-colors duration-300",
                  activeSection === item.href
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
