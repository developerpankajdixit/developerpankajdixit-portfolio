import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { Toaster } from "react-hot-toast";
<<<<<<< HEAD
import { Analytics } from "@vercel/analytics/react";
=======
import { SpeedInsights } from "@vercel/speed-insights/next";
>>>>>>> origin/main
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
  title: "Pankaj Dixit | AI Engineer & Full-Stack Developer",
  description:
    "AI Engineer and full-stack developer building GenAI automation, MCP servers, and Copilot-driven developer tooling. 11+ years of production engineering, currently on the Microsoft Xbox account at Tech Mahindra.",
  keywords: [
    "AI Engineer",
    "GenAI",
    "Generative AI",
    "MCP",
    "Model Context Protocol",
    "GitHub Copilot",
    "LLM applications",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Azure",
    "Pankaj Dixit",
  ],
  openGraph: {
    title: "Pankaj Dixit | AI Engineer & Full-Stack Developer",
    description:
      "Building AI-powered products and developer tooling (MCP servers, Copilot enablement, and GenAI automation) on an 11+ year full-stack engineering foundation.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AI engineering and developer tooling workspace",
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
      data-scroll-behavior="smooth"
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
        <SiteFooter />
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
                primary: "#10b981",
                secondary: "#000",
              },
            },
          }}
        />
<<<<<<< HEAD
        <Analytics />
=======
        <SpeedInsights />
>>>>>>> origin/main
      </body>
    </html>
  );
}
