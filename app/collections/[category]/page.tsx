import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import {
  CATEGORIES,
  getProductsByCategory,
  getCategoryLabel,
  type Category,
} from '@/lib/products';

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const label = getCategoryLabel(category as Category);
  return {
    title: `${label} | MINAORA`,
    description: `Shop ${label.toLowerCase()} from MINAORA fine jewelry.`,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { category } = await params;
  const validCategory = CATEGORIES.find((c) => c.slug === category);

  if (!validCategory) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category as Category);
  const label = getCategoryLabel(category as Category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 block mb-2 font-medium">
          Collection
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl tracking-wide font-light">
          {label}
        </h1>
        <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4" />
        <p className="text-sm text-gray-400 mt-4 font-light">
          {categoryProducts.length} piece{categoryProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {categoryProducts.length === 0 ? (
        <div className="text-center py-24 text-gray-400 font-light text-sm">
          No pieces in this collection yet. Check back soon.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
