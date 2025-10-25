import type { Metadata, Viewport } from "next";
import "@/styles/globals.scss";
import { Nav } from "@/components/Nav";
import { ScrollEffects } from "@/components/ScrollEffects";

export const viewport: Viewport = { themeColor: "#1a1a1a" };

export const metadata: Metadata = {
  title: "Alex — Software Engineer",
  description: "Portfolio of Alex — Software Engineer. Building Clearbook (multi-tenant booking SaaS) and more.",
  // ✅ add this:
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    title: "Alex — Software Engineer",
    url: "/",
    images: [{ url: "/images/og.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <ScrollEffects />
        <main>{children}</main>
      </body>
    </html>
  );
}
