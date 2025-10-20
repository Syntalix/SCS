"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

/**
 * ThemeToggle component that provides a button to cycle through theme options.
 *
 * Features:
 * - Cycles through three themes: Light → Dark → System (Auto)
 * - Shows appropriate icon for current theme state
 * - System mode automatically follows OS/browser preference
 * - Includes accessibility labels and tooltips
 * - Prevents hydration issues with mounted state check
 *
 * Theme cycle:
 * - Light: Shows sun icon, forces light theme
 * - Dark: Shows moon icon, forces dark theme
 * - System: Shows monitor icon, follows system preference
 *
 * @returns {JSX.Element|null} Theme toggle button or null during SSR
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getCurrentIcon = () => {
    if (theme === "system") {
      return <Monitor className="h-[1.2rem] w-[1.2rem] transition-all" />;
    } else if (theme === "dark") {
      return <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />;
    } else {
      return <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />;
    }
  };

  const getThemeLabel = () => {
    if (theme === "system") {
      return `Auto (${resolvedTheme === "dark" ? "Dark" : "Light"})`;
    }
    return theme === "dark" ? "Dark" : "Light";
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={cycleTheme}
        className="relative inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        aria-label={`Current theme: ${getThemeLabel()}. Click to cycle themes.`}
        title={`Theme: ${getThemeLabel()}`}
      >
        {getCurrentIcon()}
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
}
