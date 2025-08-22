import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Libre_Franklin } from 'next/font/google';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const libreFranklin = Libre_Franklin({ subsets: ['latin'] });
export const libreFranklinClassName = libreFranklin.className;
