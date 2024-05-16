"use client";

import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { FC } from "react";

const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  // Determine the initial state of the switch based on the current theme
  const isDarkMode = theme === "light";

  return (
    <div className="flex flex-row items-center md:justify-start md:space-x-2 w-full">
      {isDarkMode ? (
        <Sun className="w-4 h-4 shrink-0" />
      ) : (
        <Moon className="w-4 h-4 shrink-0" />
      )}

      <div className="flex flex-row items-center w-full justify-between">
        <p className="text-sm">{isDarkMode ? "Light" : "Dark"}</p>
        <Switch
          aria-label="theme-toggle"
          className="transition-all duration-150 ease-in-out"
          checked={isDarkMode}
          onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
