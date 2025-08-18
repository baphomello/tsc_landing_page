import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanize Simioni Carloto",
  description: "Mentora de gestão operacional e financeira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
