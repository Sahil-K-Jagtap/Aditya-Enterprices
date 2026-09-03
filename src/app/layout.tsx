import type { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar } from "../components/site/Navbar";
import { WhatsAppButton } from "../components/site/WhatsAppButton";
import "../styles.css";

export const metadata: Metadata = {
  title: "Aditya Enterprises — Precision Anodizing & Metal Finishing in Pune",
  description: "Industrial-scale aluminium anodizing, bright dip, hard anodising, chromating and glass bead blasting services in Pune.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <Providers>
          <Navbar />
          {children}
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
