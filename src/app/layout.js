import { Archivo_Black, Space_Mono, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { CTASection } from "@/components/home";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const archivo = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "NAUTICA BEACH AT",
  description:
    "Welcome to an exciting ATV experience by the beach — perfect for friends, families, and group outings looking for adventure and fun.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-brand-orange text-brand-black">
        <SmoothScroll>
          <Navbar />
          {children}
          <CTASection />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
