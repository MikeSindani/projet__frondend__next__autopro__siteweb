import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer"

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Home | Autopro ",
  description: "Site de vente des voitures occasion et neuve a lubumbashi/RD Congo",
  keywords:['auto','voiture occassion','voiture neuf','congo',"rdc",'congo-kinshasa','lubumbashi','haut-katanga',"toyota"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
      <main>
       {children}
      </main>
        <Footer/>
      </body>
    </html>
  );
}
