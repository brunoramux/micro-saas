import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "App IN Bio",
  description: "App IN Bio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
