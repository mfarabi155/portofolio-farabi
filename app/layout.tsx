import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // Import Provider kita

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | Muhammad Farabi Ismail",
  description: "Portofolio Senior System Analyst & Full-Stack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Tambahkan suppressHydrationWarning di sini
    <html lang="id" suppressHydrationWarning> 
      <body className={inter.className}>
        {/* Bungkus children dengan Providers */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}