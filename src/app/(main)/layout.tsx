import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexoris Client Portal",
  description:
    "Nexoris Client Portal - Your gateway to seamless project management and collaboration.",
};

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
        <main className="bg-[#EAE8F7] min-h-screen">
          <div className="max-w-[1600px] mx-auto flex gap-6">
            <Sidebar />
            <div className="mt-[22px] w-[1260px] ml-[20rem]">
              <Navbar />
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
