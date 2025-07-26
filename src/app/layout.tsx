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
  title: 'TestMachine - 산업용 정밀기계 전문기업',
  description: '30년 경험의 산업기계 제조 전문기업. 1000톤 초고압 프레스, CNC 머시닝센터 등 최첨단 기계',
  keywords: '산업기계, CNC, 자동화, 프레스, 정밀가공',
  openGraph: {
    title: 'TestMachine - 산업용 정밀기계',
    description: '극한 성능의 산업용 정밀기계 전문기업',
    type: 'website',
  }
}

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
