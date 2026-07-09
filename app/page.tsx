import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products, CATEGORIES } from '@/lib/products';

export default function Home() {
  const newProducts = products.filter((p) => p.isNew);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] bg-gray-900 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80"
          alt="Minaora Editorial"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.85]"
        />
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-[10px] uppercase tracking-[0.5em] block mb-4 opacity-80 font-light">
            The Aura Collection
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-wide mb-8 leading-tight">
            Timeless Pieces For <br />
            <span className="italic font-normal text-gray-100">Every Occasion</span>
          </h2>
          <Link
            href="/collections/new-in"
            className="inline-block bg-[#FAF7F0] text-[#111111] px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#111111] hover:text-white transition duration-500 shadow-sm"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="font-serif text-2xl sm:text-3xl tracking-wide font-light">
            Shop by Category
          </h3>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.filter((c) => c.slug !== 'new-in').map((cat) => {
            const sample = products.find((p) => p.category === cat.slug);
            return (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                className="group cursor-pointer text-center"
              >
                <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-4 relative">
                  {sample && (
                    <img
                      src={sample.image}
                      alt={cat.label}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                    />
                  )}
                </div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-medium group-hover:text-[#C5A880] transition-colors">
                  {cat.label}
                </h4>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Newly Launched */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex justify-between items-end mb-12 border-b border-[#111111]/10 pb-4">
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 block mb-1 font-medium">
              Curated Essentials
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl tracking-wide font-light">
              Newly Launched
            </h3>
          </div>
          <Link
            href="/collections/new-in"
            className="text-xs uppercase tracking-widest text-[#C5A880] hover:text-[#111111] transition-colors pb-1"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
