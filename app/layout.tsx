import type { Metadata } from "next";
import "./globals.css";
import Providers from "./components/themeProvider";
import { Outfit, DM_Serif_Text } from "next/font/google";
import { ThemeModeProvider } from "@/libs/ThemeModeProvider";

export const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Eva Sabrina",
  description:
    "Personal portfolio of a programmer, UI/UX designer, and code Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>

      <body
        className={` relative bg-multi-gradient bg-background text-foreground ${dmSerif.variable} ${outfit.className}`}
      >
        <Providers>
          <ThemeModeProvider>{children}</ThemeModeProvider>
        </Providers>
      </body>
    </html>
  );
}
