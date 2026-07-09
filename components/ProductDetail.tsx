'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { formatINR, FREE_DELIVERY_THRESHOLD } from '@/lib/currency';

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="text-[10px] uppercase tracking-widest text-gray-400 mb-8">
        <Link href="/" className="hover:text-[#C5A880] transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/collections/${product.category}`}
          className="hover:text-[#C5A880] transition"
        >
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#111111]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <div className="aspect-square bg-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          {product.isNew && (
            <span className="text-[9px] uppercase tracking-widest text-[#C5A880] font-medium mb-3">
              New Arrival
            </span>
          )}
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wide font-light mb-2">
            {product.name}
          </h1>
          <p className="text-sm text-gray-400 mb-6">{product.material}</p>
          <p className="text-2xl font-medium text-[#C5A880] mb-8">{formatINR(product.price)}</p>
          <p className="text-sm text-gray-500 leading-relaxed mb-10 font-light">
            {product.description}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs uppercase tracking-widest font-medium">Quantity</span>
            <div className="flex items-center border border-[#111111]/20">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-[#111111]/5 transition"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-12 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-[#111111]/5 transition"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-[#111111] text-white text-xs uppercase tracking-widest py-4 font-medium hover:bg-[#C5A880] transition duration-300 mb-4"
          >
            Add to Bag — {formatINR(product.price * quantity)}
          </button>

          <p className="text-[10px] text-gray-400 tracking-wide text-center">
            Complimentary delivery on orders above {formatINR(FREE_DELIVERY_THRESHOLD)}
          </p>
        </div>
      </div>
    </div>
  );
}
