import type { Metadata } from 'next';
import {Red_Hat_Display} from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  
};

const font = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap',
}) 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <head><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/></head>
      <body>{children}</body>
    </html>
  );
}
