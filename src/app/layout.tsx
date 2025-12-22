import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Alpha Corp",
  description: "Alpha Janitorial Services Corporation Professional cleaning with guaranteed quality",
  openGraph: {
    title: "Alpha Corp",
    description: "Alpha Janitorial Services Corporation Professional cleaning with guaranteed quality",
    url: "https://www.alphajanitorialcorp.com/",
    siteName: "Alpha Corp",
    images: [
      {
        url: "../assets/logo/logo-1.png",
        width: 1200,
        height: 630,
        alt: "Alpha Corp - Professional Cleaning Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} antialiased `}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
