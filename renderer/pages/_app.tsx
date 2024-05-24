import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Outfit, JetBrains_Mono } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${outfit.variable} ${jetBrainsMono.variable} font-sans text-text-1`}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
