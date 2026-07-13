import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Pankaj Dixit | AI Engineer & Full-Stack Developer",
  description:
    "AI Engineer helping teams adopt, configure, and troubleshoot AI developer tools: GitHub Copilot, MCP servers, and GenAI automation. 10+ years of production engineering, currently on the Microsoft Xbox account at Tech Mahindra. Remote-first, open to hybrid or on-site.",
  keywords: [
    "AI Tools Support Engineer",
    "AI Support Engineer",
    "Copilot Enablement",
    "AI Adoption",
    "Developer Tooling Support",
    "Remote AI Engineer",
    "AI Engineer",
    "GenAI",
    "Generative AI",
    "MCP",
    "Model Context Protocol",
    "GitHub Copilot",
    "LLM applications",
    "Full-Stack Developer",
    "Python",
    "Machine Learning",
    "React",
    "Next.js",
    "Azure",
    "Pankaj Dixit",
  ],
  openGraph: {
    title: "Pankaj Dixit | AI Engineer & Full-Stack Developer",
    description:
      "Helping engineering teams adopt and troubleshoot AI developer tools (MCP servers, Copilot enablement, GenAI automation) on an 10+ year full-stack engineering foundation. Remote-first.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
