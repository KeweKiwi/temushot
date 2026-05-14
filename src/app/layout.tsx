import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Temu Shot | Happy Gut, Happy Tummy",
  description:
    "Temu Shot adalah minuman herbal modern berbahan temulawak dalam bentuk one shot drink yang praktis untuk gaya hidup aktif."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <head>
        <link rel="stylesheet" href="/site.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
