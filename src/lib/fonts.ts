import { Inter } from "next/font/google";
import localFont from "next/font/local";

/**
 * Body — Inter (variable, self-hosted by next/font).
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Headings — General Sans (Fontshare).
 *
 * Not a Google font, so the variable woff2 is vendored into `src/fonts/`
 * and self-hosted through `next/font/local`.
 */
export const generalSans = localFont({
  src: "../fonts/GeneralSans-Variable.woff2",
  weight: "200 700",
  style: "normal",
  display: "swap",
  variable: "--font-general-sans",
  fallback: ["Inter", "system-ui", "sans-serif"],
});

export const fontVariables = `${inter.variable} ${generalSans.variable}`;
