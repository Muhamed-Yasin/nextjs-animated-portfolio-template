import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yasin.is-a.dev'),
  title: "Muhamed Yasin | Full Stack Developer",
  description: "Portfolio of Muhamed Yasin, a Full Stack Software Engineer from Kochi specializing in .NET, React, and Next.js.",
  keywords: ["Muhamed Yasin", "Full Stack Developer", "Backend Developer", ".NET Developer", "React", "Next.js", "Kochi", "Kerala"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Muhamed Yasin | Full Stack Developer",
    description: "Portfolio of Muhamed Yasin, a Full Stack Software Engineer.",
    url: "https://yasin.is-a.dev",
    siteName: "Muhamed Yasin Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
        alt: "Muhamed Yasin - Full Stack Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhamed Yasin",
    "jobTitle": "Full Stack Developer",
    "url": "https://yasin.is-a.dev",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/Muhamed-Yasin",
      "https://www.linkedin.com/in/muhamed-yasin",
      "https://medium.com/@yasinmanath"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor></CustomCursor> 
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}