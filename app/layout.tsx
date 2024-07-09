import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import '@/public/styles/globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hearease",
  description: "Miniproject website by harshita dhanya and team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
