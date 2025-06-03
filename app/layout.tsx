import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Maven_Pro } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const mavenPro = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-maven-pro',
});

export const metadata: Metadata = {
  title: 'ExamGo - Simulation List',
  description: 'Practice with timed simulations for your exams',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${mavenPro.variable} font-poppins`}>{children}</body>
    </html>
  );
}