import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
          { key: "X-XSS-Protection", value: "0" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' https:; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://cdn.vercel-insights.com https://*.vercel-insights.com; style-src 'self' 'unsafe-inline' https:; font-src 'self' https: data:; frame-ancestors 'none';",
          },
          {
            key: "Content-Security-Policy-Report-Only",
            value:
              "default-src 'self' https:; img-src 'self' data: https:; script-src 'self' https://cdn.vercel-insights.com https://*.vercel-insights.com; style-src 'self' https:; font-src 'self' https: data:; frame-ancestors 'none'; report-uri /api/csp-report;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
