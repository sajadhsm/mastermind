import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(getInitialThemeValue());

  useEffect(() => applyTheme(theme), [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}

function getInitialThemeValue(): Theme {
  const isDark =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return isDark ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  localStorage.theme = theme;

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
