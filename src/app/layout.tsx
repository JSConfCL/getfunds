import "./globals.css";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="flex h-full flex-col !scroll-smooth">
      <body className={classNames(inter.className, "h-full flex flex-col")}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
