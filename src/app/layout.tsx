import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shotify | Website Screenshot Tool",
  description: "Take screenshots of websites with ease.",
  icons: {
    icon: "/favicon.ico",
  },
  //Opengraph
  openGraph: {
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/63ZfYZwG/529shots-so.webp",
        width: 1200,
        height: 630,
        alt: "SnapSite",
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
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
