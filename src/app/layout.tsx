import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "KHQ Lawyers | Award-winning boutique top-tier law firm",
  description:
    "KHQ Lawyers is a different style of law firm, a 'boutique top-tier' firm. One that combines the best of relationship-driven 'boutique' service with top-tier expertise and talent.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-navy font-sans">
        <Header />
        {children}
        <Footer />
        <EnquireModal />
      </body>
    </html>
  );
}
