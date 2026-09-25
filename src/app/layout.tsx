import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  alternates: { canonical: "https://shottify.vercel.app/" },
  metadataBase: new URL("https://shottify.vercel.app/"),
  authors: [{ name: "Sandhit Karmakar", url: "https://github.com/Sandhit06" }],
  creator: "Sandhit Karmakar",
  twitter: {
    card: "summary",
    title: "Shotify | Website Screenshot Tool by Sandhit Karmakar",
    description: "Capture website screenshots with Shotify, a web tool by Sandhit Karmakar. Enter a website URL to generate a screenshot.",
  },
  title: "Shotify | Website Screenshot Tool by Sandhit Karmakar",
  description: "Capture website screenshots with Shotify, a web tool by Sandhit Karmakar. Enter a website URL to generate a screenshot.",
  icons: {
    icon: "/favicon.ico",
  },
  //Opengraph
  openGraph: {
    type: "website",
    url: "https://shottify.vercel.app/",
    title: "Shotify | Website Screenshot Tool by Sandhit Karmakar",
    description: "Capture website screenshots with Shotify, a web tool by Sandhit Karmakar. Enter a website URL to generate a screenshot.",
    images: [
      {
        url: "https://i.postimg.cc/63ZfYZwG/529shots-so.webp",
        width: 1200,
        height: 630,
        alt: "Shotify website screenshot tool",
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
