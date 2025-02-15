import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { fontSans, geistSans, geistMono } from "@/config/fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head>
        <link rel="preload" href={fontSans.style.fontFamily} as="font" />
      </head>
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable, geistMono.variable, geistSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "system" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
