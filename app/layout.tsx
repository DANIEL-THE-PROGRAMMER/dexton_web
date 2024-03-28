import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/views/nav";
import { BgGradient, Blurrybg } from "./components/bggradient";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Nav />
        <div className="h-[1px] w-full bg-lblue2"></div>
        <div className="flex relative">
          <BgGradient />
          <div className="w-[280px] relative z-20 border-r-lblue2 border-r-[1px]"></div>
          <div className="grow-[1] relative z-30 basis-[400px]">{children}
          </div>
          <div className="w-[280px] relative z-20  border-l-lblue2 border-l-[1px]"></div>
        </div>
      </body>
    </html>
  );
}
