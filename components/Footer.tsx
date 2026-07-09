import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 text-[11px] tracking-widest font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <h4 className="font-serif text-base font-light tracking-[0.2em] mb-4 uppercase">
            MINAORA
          </h4>
          <p className="text-gray-400 leading-relaxed">
            Crafting contemporary jewelry meant to last generations, utilizing
            ethical sourcing and refined aesthetics.
          </p>
        </div>
        <div>
          <h4 className="uppercase tracking-widest font-medium mb-4 text-[#C5A880]">
            Shop
          </h4>
          <ul className="space-y-2 text-gray-400">
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/collections/${cat.slug}`}
                  className="hover:text-white transition"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-widest font-medium mb-4 text-[#C5A880]">
            Customer Care
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Delivery &amp; Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Pan-India Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-widest font-medium mb-4 text-[#C5A880]">
            Newsletter
          </h4>
          <p className="text-gray-400 mb-4">
            Subscribe to receive updates on collections and exclusive access.
          </p>
          <div className="flex border-b border-white/20 pb-1">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent text-white placeholder-gray-600 focus:outline-none w-full text-xs"
            />
            <button className="text-[10px] uppercase tracking-widest font-medium text-[#C5A880] hover:text-white transition">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/10 text-center text-gray-500 text-[10px] flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; 2026 MINAORA Studio. Powered by Shopify Prototype.</p>
        <div className="space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
