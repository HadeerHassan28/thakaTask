import NavBar from "@/components/navBar/navBar";
import { Cairo } from "next/font/google";
import "./globals.css";

const inter = Cairo({ subsets: ["latin"], weight: ["700", "400"] });

export const metadata = {
  title: "Thaka Task",
  description: "Landing Page for a task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={inter.className}>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
