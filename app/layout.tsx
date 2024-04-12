import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Sidebar from "@/app/components/Sidebars/Sidebar";
import Breadcrumb from "@/app/components/Commons/Breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <main>
          <div className="flex flex-wrap">
            <Sidebar />
            <div className="w-full max-w-[calc(100%-300px)] h-[calc(100vh-60px)] p-10 overflow-y-auto">
              <Breadcrumb />
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
