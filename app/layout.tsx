import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'MINAORA | Fine Jewelry',
  description: 'Contemporary fine jewelry crafted for every occasion.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <div className="min-h-screen text-[#111111] antialiased bg-[#FAF7F0] font-sans selection:bg-[#C5A880]/30 flex flex-col">
            <AnnouncementBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
