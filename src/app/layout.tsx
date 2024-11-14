import type { Metadata } from "next";
import { Inter, DynaPuff } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const dynapuff = DynaPuff({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dynapuff',
});

export const metadata: Metadata = {
  title: "Pawsitively Perfect Grooming",
  description: "Pawsitively Perfect Grooming provides top-quality dog grooming services in a caring, pet-friendly environment. Specializing in gentle baths, haircuts, nail trims, and deshedding treatments, we ensure every pet leaves looking and feeling their best. Trusted by pet owners for our exceptional service and professional team, we handle each furry friend with compassion and expertise. Book an appointment today for your pet's best grooming experience!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-inter ${inter.variable} ${dynapuff.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
