import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import Player from '@/components/Player';
import '@/public/styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hearease",
  description: "Miniproject website by Harshita Dhanya and team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mainbody">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="content">
            <div className="children">
              {children}
            </div>
            <Player/>
          </div>
        </div>
      </body>
    </html>
  );
}
