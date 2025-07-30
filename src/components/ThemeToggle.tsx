// components/ThemeToggle.tsx

import { Sun, Moon } from "lucide-react";

export const ThemeToggle = ({
  isDarkMode,
  toggle,
}: {
  isDarkMode: boolean;
  toggle: () => void;
}) => (
  <button
    onClick={toggle}
    className="fixed top-4 right-4 md:right-8 lg:right-12  p -2 z-50 p-1 rounded-full transition-colors duration-300 focus:outline-none top-safe right-safe"
  >
    {isDarkMode ? (
      <Sun className="h-6 w-6 text-yellow-500" />
    ) : (
      <Moon className="h-6 w-6 text-blue-900" />
    )}
  </button>
);
