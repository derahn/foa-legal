import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FOA Legal | Barristers, Solicitors & Notary Public",
  description:
    "FOA Legal is a modern, client-focused law firm providing strategic, compassionate, and results-driven legal services in Immigration Law, Family Law, Wills & Estates, and Contract Law.",
  keywords: [
    "FOA Legal",
    "immigration law",
    "family law",
    "wills and estates",
    "Hamilton Ontario",
    "Farihat Adewuyi",
    "law firm Ontario",
  ],
  openGraph: {
    title: "FOA Legal | Barristers, Solicitors & Notary Public",
    description:
      "Strategic, compassionate, and results-driven legal services in Hamilton, Ontario.",
    type: "website",
    url: "https://www.foalegal.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
