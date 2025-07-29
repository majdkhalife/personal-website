import { useEffect, useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import {
  DynamicBackground,
  LightBackground,
} from "../components/DynamicBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsAndSkillsSection } from "../components/ProjectsAndSkillsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      return stored === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply theme on change
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${
        isDarkMode ? "bg-background text-foreground" : "bg-white text-black"
      }`}
    >
      <ThemeToggle
        isDarkMode={isDarkMode}
        toggle={() => setIsDarkMode((v) => !v)}
      />

      {/* Render appropriate background */}
      {isDarkMode ? <DynamicBackground /> : <LightBackground />}

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsAndSkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};
