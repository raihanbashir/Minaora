export type Category = 'new-in' | 'earrings' | 'necklaces' | 'rings' | 'bracelets';

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  material: string;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
};

export const CATEGORIES: { slug: Category; label: string }[] = [
  { slug: 'new-in', label: 'New In' },
  { slug: 'earrings', label: 'Earrings' },
  { slug: 'necklaces', label: 'Necklaces' },
  { slug: 'rings', label: 'Rings' },
  { slug: 'bracelets', label: 'Bracelets' },
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'aura-statement-bangle',
    name: 'Aura Statement Bangle',
    description: 'A sculptural bangle with a fluid silhouette, finished in warm 18k gold plating over brass.',
    price: 6999,
    category: 'bracelets',
    material: 'Gold Plated Brass',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80',
    isNew: true,
  },
  {
    id: '2',
    slug: 'aura-organic-hoops',
    name: 'Aura Organic Hoops',
    description: 'Hand-finished hoops with an organic curve, crafted in solid 14k gold for everyday elegance.',
    price: 15999,
    category: 'earrings',
    material: '14k Solid Gold',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
    isNew: true,
  },
  {
    id: '3',
    slug: 'aura-sculpted-ring',
    name: 'Aura Sculpted Ring',
    description: 'A bold statement ring with a tapered band and polished sterling silver finish.',
    price: 8999,
    category: 'rings',
    material: 'Sterling Silver',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
    isNew: true,
  },
  {
    id: '4',
    slug: 'noire-pearl-drop',
    name: 'Noire Pearl Drop',
    description: 'Elegant drop earrings featuring lustrous freshwater pearls on a delicate gold chain.',
    price: 10999,
    category: 'earrings',
    material: 'Freshwater Pearl',
    image: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&w=600&q=80',
    isNew: true,
  },
  {
    id: '5',
    slug: 'luna-chain-necklace',
    name: 'Luna Chain Necklace',
    description: 'A delicate layered chain necklace with a subtle crescent pendant.',
    price: 9999,
    category: 'necklaces',
    material: 'Gold Vermeil',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '6',
    slug: 'solstice-stacking-rings',
    name: 'Solstice Stacking Rings',
    description: 'A set of three minimalist bands designed to be worn together or separately.',
    price: 7999,
    category: 'rings',
    material: 'Gold Plated Silver',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '7',
    slug: 'celestial-stud-earrings',
    name: 'Celestial Stud Earrings',
    description: 'Tiny star-shaped studs with a brushed gold finish for understated sparkle.',
    price: 5499,
    category: 'earrings',
    material: '18k Gold Plated',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '8',
    slug: 'woven-cuff-bracelet',
    name: 'Woven Cuff Bracelet',
    description: 'An open cuff with a woven texture, inspired by artisan metalwork traditions.',
    price: 11999,
    category: 'bracelets',
    material: 'Sterling Silver',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b1a30a8a3a?auto=format&fit=crop&w=600&q=80',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  if (category === 'new-in') {
    return products.filter((p) => p.isNew);
  }
  return products.filter((p) => p.category === category);
}

export function getCategoryLabel(slug: Category): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}
