'use client';

import { useCart } from '@/context/CartContext';
import { formatINR } from '@/lib/currency';

export default function CartDrawer() {
  const { items, isOpen, itemCount, subtotal, closeCart, removeItem, updateQuantity } =
    useCart();

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#FAF7F0] shadow-2xl flex flex-col transition-transform duration-500 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-8 pb-6 border-b border-[#111111]/10">
          <h2 className="font-serif text-xl tracking-wide uppercase">
            Your Bag ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="text-sm uppercase tracking-widest hover:text-[#C5A880] transition"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8">
          {items.length === 0 ? (
            <div className="py-24 text-center text-gray-400 font-light text-sm">
              Your shopping bag is currently empty.
            </div>
          ) : (
            <div className="py-6 space-y-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 border-b border-[#111111]/10 pb-6"
                >
                  <div
                    className="w-20 h-20 bg-gray-200 bg-cover bg-center shrink-0"
                    style={{ backgroundImage: `url('${item.product.image}')` }}
                  />
                  <div className="flex-1 text-sm min-w-0">
                    <h4 className="font-medium truncate">{item.product.name}</h4>
                    <p className="text-xs text-gray-400 mt-1">{item.product.material}</p>
                    <p className="text-[#C5A880] mt-2 font-medium">
                      {formatINR(item.product.price * item.quantity)}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-[#111111]/20">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center hover:bg-[#111111]/5 transition text-sm"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-xs">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center hover:bg-[#111111]/5 transition text-sm"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-[#111111] transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#111111]/10 p-8">
            <div className="flex justify-between text-sm tracking-wide mb-4">
              <span>Subtotal</span>
              <span className="font-medium">{formatINR(subtotal)}</span>
            </div>
            <p className="text-[10px] text-gray-400 mb-4 tracking-wide">
              Delivery charges and GST calculated at checkout.
            </p>
            <button className="w-full bg-[#111111] text-white text-xs uppercase tracking-widest py-4 font-medium hover:bg-[#C5A880] transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
