import type { Metadata } from "next";
import { Acme, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const gnuhrFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-gnuhr",
  display: "swap",
});

const logoFont = Acme({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GOD OF CUE TIP",
  description: "專業撞球皮頭展示",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${gnuhrFont.variable} ${logoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
