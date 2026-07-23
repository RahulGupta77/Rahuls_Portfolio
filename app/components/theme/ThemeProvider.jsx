"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ThemeHorizonWipe from "./ThemeHorizonWipe";

const STORAGE_KEY = "rahulspace-theme";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
  isTransitioning: false,
});

function readPreferredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore */
  }
  return "dark";
}

function applyThemeClass(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("dark");
  const [wipe, setWipe] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pendingTheme = useRef(null);

  useEffect(() => {
    const initial = readPreferredTheme();
    setThemeState(initial);
    applyThemeClass(initial);
  }, []);

  const commitTheme = useCallback((next) => {
    setThemeState(next);
    applyThemeClass(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
      localStorage.removeItem("theme");
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = useCallback(
    (event) => {
      const next = theme === "dark" ? "light" : "dark";
      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduce || isTransitioning) {
        commitTheme(next);
        return;
      }

      const x = event?.clientX ?? window.innerWidth - 48;
      const y = event?.clientY ?? 28;
      pendingTheme.current = next;
      setIsTransitioning(true);
      setWipe({
        id: Date.now(),
        next,
        x,
        y,
        from: theme,
      });
    },
    [theme, isTransitioning, commitTheme]
  );

  const handleWipeMidpoint = useCallback(() => {
    if (pendingTheme.current) {
      commitTheme(pendingTheme.current);
    }
  }, [commitTheme]);

  const handleWipeComplete = useCallback(() => {
    pendingTheme.current = null;
    setWipe(null);
    setIsTransitioning(false);
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme, isTransitioning }),
    [theme, toggleTheme, isTransitioning]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
      {wipe && (
        <ThemeHorizonWipe
          key={wipe.id}
          next={wipe.next}
          x={wipe.x}
          y={wipe.y}
          onMidpoint={handleWipeMidpoint}
          onComplete={handleWipeComplete}
        />
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
