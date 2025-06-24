// lib/ThemeModeContext.tsx
"use client";
import { useTheme } from "next-themes";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const ThemeModeContext = createContext<"light" | "dark" | undefined>(undefined);

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mode, setMode] = useState<"light" | "dark" | undefined>(undefined);

  useEffect(() => {
    if (resolvedTheme) setMode(resolvedTheme as "light" | "dark");
  }, [resolvedTheme]);

  return (
    <ThemeModeContext.Provider value={mode}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  return useContext(ThemeModeContext);
}
