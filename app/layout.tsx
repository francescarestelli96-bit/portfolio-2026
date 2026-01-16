import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Francesca Restelli | Portfolio",
  description: "HR Management, Web Development & Moto Content Creation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}