"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeDecorProps {
  darkSrc: string;
  lightSrc: string;
  alt?: string;
  className?: string;
}

export default function Decor({
  darkSrc,
  lightSrc,
  alt = "",
  className = "",
}: ThemeDecorProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const src = resolvedTheme === "dark" ? darkSrc : lightSrc;

  return <img src={src} alt={alt} className={className} />;
}
