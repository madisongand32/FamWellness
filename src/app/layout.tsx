import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./styles/styles.scss";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import ContentfulPreview from "./components/ContentfulPreview";
import { draftMode } from 'next/headers';

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
  title: "Family Friendly Wellness",
  description: "A family friendly general practicioner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const isDraftMode = draftMode().isEnabled;

    return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <ContentfulPreview isEnabled={isDraftMode}>
          {children}
        </ContentfulPreview>
      </body>
      <Footer/>
    </html>
  );
}
