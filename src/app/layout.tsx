import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export const metadata: Metadata = {
  title: "Sanket Mane",
  description: "Full-Stack web developer",
  openGraph: {
    title: "Sanket Mane",
    description: "Full-Stack web developer",
    url: "https://yourdomain.com", // replace with your deployed domain
    siteName: "Sanket Mane",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // full URL to your OG image
        width: 1200,
        height: 630,
        alt: "Sanket Mane Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanket Mane",
    description: "Full-Stack web developer",
    images: ["https://yourdomain.com/og-image.png"], // same as OG image
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
