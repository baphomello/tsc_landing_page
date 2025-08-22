import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tanize Simioni Carloto',
  description: 'Mentora de gestão operacional e financeira',
};

const workSans = Work_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${workSans.className} antialiased`}>{children}</body>
    </html>
  );
}
