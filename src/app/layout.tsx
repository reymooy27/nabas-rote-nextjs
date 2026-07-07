import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nabas Rote Mengkudu Oeba — Rumah Makan Khas Rote di Kupang, NTT",
  description:
    "Nabas Rote Mengkudu Oeba, rumah makan khas Rote di jantung Kota Kupang, NTT. Cita rasa autentik, porsi besar, harga terjangkau. Buka setiap hari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}