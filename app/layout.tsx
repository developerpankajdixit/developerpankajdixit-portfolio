import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Pankaj Dixit | Frontend Lead & Next.js Developer",
  description:
    "Client-ready portfolio for Pankaj Dixit, focused on React, Next.js, TypeScript, frontend architecture, and measurable product delivery.",
  openGraph: {
    title: "Pankaj Dixit | Frontend Lead & Next.js Developer",
    description:
      "React, Next.js, and TypeScript portfolio with selected work, case studies, and delivery impact.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Modern workspace for frontend product delivery",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="app-bg min-h-full text-zinc-950"
        suppressHydrationWarning={true}
      >
        <div className="section-shell pt-4">
          <SiteHeader />
        </div>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#18181b",
              color: "#fff",
              border: "1px solid #3f3f46",
              padding: "16px 20px",
              fontSize: "15px",
              borderRadius: "10px",
            },
            success: {
              iconTheme: {
                primary: "#84cc16",
                secondary: "#000",
              },
            },
          }}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
