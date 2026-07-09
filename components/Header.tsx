'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CATEGORIES } from '@/lib/products';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (slug: string) =>
    pathname === `/collections/${slug}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F0]/90 backdrop-blur-md border-b border-[#111111]/10">
      <div className="relative max-w-[90rem] mx-auto pl-4 sm:pl-6 lg:pl-8 xl:pl-10 pr-6 sm:pr-10 lg:pr-16 xl:pr-24 h-20 flex items-center">
        {/* Left: Navigation — compact cluster on the far left */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-xs uppercase tracking-[0.2em] font-medium w-max shrink-0">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className={`transition-colors duration-300 ${
                isActive(cat.slug)
                  ? 'text-[#C5A880]'
                  : 'hover:text-[#C5A880]'
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-xs uppercase tracking-widest font-medium hover:text-[#C5A880] transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Center: Logo — absolutely centered so it stands apart */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-center cursor-pointer group z-10"
        >
          <h1 className="font-serif text-2xl font-light tracking-[0.3em] uppercase transition-all duration-500 group-hover:tracking-[0.35em]">
            MINAORA
          </h1>
          <span className="text-[8px] tracking-[0.4em] text-gray-400 uppercase block -mt-0.5">
            Fine Jewelry
          </span>
        </Link>

        {/* Right: Actions — anchored to the far right */}
        <div className="flex items-center gap-6 lg:gap-8 text-xs uppercase tracking-widest font-medium w-max shrink-0 ml-auto">
          <button className="hover:text-[#C5A880] transition hidden sm:inline-block">
            Search
          </button>
          <button
            onClick={openCart}
            className="relative hover:text-[#C5A880] transition flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
          >
            Cart
            {itemCount > 0 && (
              <span className="bg-[#111111] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-[#111111]/10 bg-[#FAF7F0] px-6 py-4 space-y-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-xs uppercase tracking-[0.2em] font-medium py-2 transition-colors ${
                isActive(cat.slug)
                  ? 'text-[#C5A880]'
                  : 'hover:text-[#C5A880]'
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
