import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DAVNEWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
