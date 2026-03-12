import type { Metadata } from "next";
import { Playfair_Display, DM_Mono, Syne } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Tena — Products That Think. Interfaces That Feel.",
  description: "Products That Think. Interfaces That Feel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmMono.variable} ${syne.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Cursor />
        <Navbar />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              color: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontFamily: 'var(--font-dm-mono)',
              borderRadius: '0px',
            },
          }}
        />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
