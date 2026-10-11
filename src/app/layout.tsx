import React from 'react';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Black&family=Bangers&family=Manrope:wght@400;600;800&family=Permanent+Marker&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
