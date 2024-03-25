import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Center",
  description: "This is online shop center.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
