import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebars/Sidebar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        <main>
          <div className="flex flex-wrap">
            <Sidebar className="w-full max-w-[300px] md:min-h-screen" />
            <div className="w-full max-w-[calc(100%-300px)] p-5 overflow-y-auto">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}