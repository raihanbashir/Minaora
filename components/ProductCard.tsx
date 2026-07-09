'use client';

import Link from 'next/link';
import type { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { formatINR } from '@/lib/currency';

type ProductCardProps = {
  product: Product;
  showQuickAdd?: boolean;
};

export default function ProductCard({ product, showQuickAdd = true }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <div className="aspect-square w-full bg-gray-100 overflow-hidden mb-4 relative">
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${
              product.hoverImage ? 'group-hover:opacity-0' : ''
            }`}
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} alternate view`}
              className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
            />
          )}
        </Link>
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[#111111] text-white text-[9px] uppercase tracking-widest px-2 py-1 font-light pointer-events-none">
            New
          </span>
        )}
        {showQuickAdd && (
          <button
            onClick={() => addItem(product)}
            className="absolute bottom-4 left-4 right-4 bg-[#FAF7F0]/90 backdrop-blur-sm text-[#111111] py-3 text-[10px] uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:bg-[#111111] hover:text-white z-10"
          >
            + Quick Add
          </button>
        )}
      </div>

      <Link href={`/product/${product.slug}`} className="block">
        <div className="flex justify-between items-start text-xs">
          <div>
            <h4 className="font-medium tracking-wide group-hover:text-[#C5A880] transition-colors">
              {product.name}
            </h4>
            <p className="text-[11px] text-gray-400 mt-0.5">{product.material}</p>
          </div>
          <span className="font-medium text-[#C5A880]">{formatINR(product.price)}</span>
        </div>
      </Link>
    </div>
  );
}
