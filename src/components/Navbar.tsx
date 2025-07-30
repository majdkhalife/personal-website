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

  /* ───────────────────────── scroll‑spy / shadow ────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const visible = navItems
        .map((item) => {
          const el = document.querySelector(item.href);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id: item.href, offset: rect.top };
        })
        .filter(Boolean)
        .find(
          (sec) => sec!.offset >= 0 && sec!.offset < window.innerHeight / 2
        );

      if (visible) setActiveSection(visible.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ─────────────────────────────── render ──────────────────────────────── */
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 lg:px-12">
        {/* ─── Logo ─── */}
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Majd Khalife’s</span>{" "}
            Portfolio
          </span>
        </a>

        {/* ─── Desktop nav links ─── */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
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

        {/* ─── Mobile hamburger (shifted left so it no longer collides
               with the fixed ThemeToggle in the top‑right corner) ─── */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className={cn(
            "md:hidden p-2 text-foreground z-50",
            /* shift only on small screens; reset at md */
            "mr-14 md:mr-0"
          )}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* ─── Mobile full‑screen overlay ─── */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
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
