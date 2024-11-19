import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import Player from "@/components/Player";
import { AudioProvider } from "@/content/AudioContext";
import "@/public/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "HearEase";
const APP_DEFAULT_TITLE = "HearEase - Manage Your Tinnitus";
const APP_TITLE_TEMPLATE = "%s - HearEase";
const APP_DESCRIPTION =
  "HearEase is a team Project by Harshita, Dhanya, Sthuthi,Raksha  and assisted by Gauresh and designed to help manage tinnitus with soothing sounds and valuable information.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#22415c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="lg:overflow-y">
        <Navbar />
        <Analytics/>
        <div className="mainbody overflow-auto">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="content overflow-auto">
            <AudioProvider>
              <div className="children overflow-auto">{children}</div>
              <Player />
            </AudioProvider>
          </div>
        </div>
      </body>
    </html>
  );
}