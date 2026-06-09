import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SIMCA Soluciones Industriales — Ingeniería & Arquitectura',
  description:
    'Empresa mexicana especializada en mantenimiento industrial, obra civil, maniobras con grúas, instalaciones y fabricación de ductos. Alta calidad en materiales y mano de obra.',
  keywords:
    'SIMCA, soluciones industriales, mantenimiento industrial, obra civil, grúas, ductos, ingeniería, arquitectura, Querétaro, México',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='es'
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col' style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
