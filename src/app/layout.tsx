import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { restaurant } from "@/data/menu";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${restaurant.name} | Menú`,
  description: `${restaurant.tagline}. Consulta nuestro menú, horarios y ubicación.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
