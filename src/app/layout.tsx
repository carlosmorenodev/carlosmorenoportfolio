import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Carlos Moreno Martín | Dentro del DOM",
  description:
    "Desarrollador Fullstack especializado en Next.js, TypeScript y arquitecturas interactivas. Creador de Nexus Engine.",
  keywords: [
    "Fullstack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Carlos Moreno Martín",
    "Nexus Engine",
  ],
  authors: [{ name: "Carlos Moreno Martín" }],
  openGraph: {
    title: "Carlos Moreno Martín | Portfolio",
    description:
      "Explora mis proyectos de narrativa interactiva y desarrollo web.",
    url: "https://tu-dominio.com",
    siteName: "Dentro del DOM",
    images: [
      {
        url: "/user-img.png", // La imagen que saldrá al compartir el link
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Moreno Martín | Dev",
    description: "Desarrollador Fullstack & Creador de Mundos.",
    images: ["/user-img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
