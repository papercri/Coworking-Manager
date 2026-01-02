import type { Metadata } from "next";
import { Lato } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], 
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Coworking Manager",
  description: "Coworking Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} font-sans antialiased min-h-[100dvh] flex flex-col bg-gray-100 text-gray-900`}>
       <Header />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}