import type { Metadata, Viewport } from "next";
import { Caveat, Lora, Nunito } from "next/font/google";
import "./globals.css";
import MusicPlayer from "./components/MusicPlayer";

const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-nunito",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Багш нарын баярын мэнд! 💖",
  description: "Багш танд зориулсан шавь нарын чин сэтгэлийн захидлууд.",
};

export const viewport: Viewport = {
  themeColor: "#fff4e8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn">
      <body
        className={`${nunito.variable} ${lora.variable} ${caveat.variable} font-sans antialiased`}
      >
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
