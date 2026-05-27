import type { Metadata } from "next";
import { Acme, IBM_Plex_Mono, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const gnuhrFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-gnuhr",
  display: "swap",
});

const uiFont = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-noto",
  display: "swap",
});

const logoFont = Acme({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "acuetips.com",
  description: "A CUE TIPS — 專業撞球皮頭，Take Your Adventure To The Next Level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${gnuhrFont.variable} ${uiFont.variable} ${logoFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
