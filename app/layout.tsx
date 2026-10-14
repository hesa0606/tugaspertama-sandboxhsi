import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hesa Print Online",
  description: "Website untuk memesan layanan print online",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <nav className="flex gap-4 border-b p-4">
          <Link href="/">Beranda</Link>
          <Link href="/tentang">Tentang</Link>
          <Link href="/etalasetoko">Etalase Toko</Link>
          <Link href="/kontak">Kontak</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
