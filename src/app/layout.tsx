import type { Metadata } from 'next';
import { Work_Sans, Libre_Franklin } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tanize Simioni Carloto',
  description: 'Mentora de gestão operacional e financeira',
};

const workSans = Work_Sans({ subsets: ['latin'] });
const libreFranklin = Libre_Franklin({ subsets: ['latin'] });
export const libreFranklinClassName = libreFranklin.className;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${workSans.className} antialiased`}>{children}</body>
    </html>
  );
}
