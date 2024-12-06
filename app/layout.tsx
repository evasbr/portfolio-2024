import type { Metadata } from "next";
import "./globals.css";
import Providers from "./components/themeProvider";

export const metadata: Metadata = {
  title: "Portfolio Eva Sabrina",
  description: "Personal portfolio of a programmer, UI/UX designer, and code Enthusiast",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return ( 
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body style={{ fontFamily: 'IBM Plex Mono, monospace' }} className="bg-background text-foreground">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
