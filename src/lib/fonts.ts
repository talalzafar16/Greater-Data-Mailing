import { Inter } from "next/font/google";
import localFont from "next/font/local";

// Body font.
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Headings font. Not on Google Fonts, so the woff2 is vendored in `src/fonts/`.
export const generalSans = localFont({
  src: "../fonts/GeneralSans-Variable.woff2",
  weight: "200 700",
  style: "normal",
  display: "swap",
  variable: "--font-general-sans",
  fallback: ["Inter", "system-ui", "sans-serif"],
});

export const fontVariables = `${inter.variable} ${generalSans.variable}`;
