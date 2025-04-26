import type { Metadata } from "next";
import localFont from "next/font/local"; // 👈 import localFont
import "./globals.css";
import Header from "@/app/ui/header";

const mabryPro = localFont({
    src: [
        {
            path: "./fonts/MabryPro-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/MabryPro-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/MabryPro-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/MabryPro-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/MabryPro-Black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-mabry-pro",
    display: "swap",
});


export const metadata: Metadata = {
  title: "CPE Les Petits Lutins",
  description: "CPE Les Petits Lutins situé à Montréal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mabryPro.variable} antialiased`}
      >
      <Header/>
        {children}
      </body>
    </html>
  );
}
