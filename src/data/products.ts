export interface Product {
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  badgeVariant?: "primary" | "red" | "yellow" | "green";
  description: string;
}

const products: Product[] = [
  {
    name: "Chorizo Suelto",
    slug: "chorizo-suelto",
    category: "Carnes",
    categorySlug: "carnes",
    price: 10,
    originalPrice: 12,
    badge: "Oferta",
    badgeVariant: "red",
    description: "Chorizo hondureño suelto, ideal para tus desayunos y comidas. Sabor auténtico catracho con la sazón tradicional de Honduras.",
  },
  {
    name: "Mantequilla Sula",
    slug: "mantequilla-sula",
    category: "Lácteos",
    categorySlug: "lacteos",
    price: 11,
    description: "Mantequilla Sula, la mantequilla clásica de Honduras. Perfecta para untar en tus tortillas y panes favoritos.",
  },
  {
    name: "Mantequilla Rala",
    slug: "mantequilla-rala",
    category: "Lácteos",
    categorySlug: "lacteos",
    price: 11,
    description: "Mantequilla Rala de Honduras, cremosa y deliciosa para cocinar y untar. Un básico en la cocina catracha.",
  },
  {
    name: "Mantequilla",
    slug: "mantequilla",
    category: "Lácteos",
    categorySlug: "lacteos",
    price: 11,
    description: "Mantequilla tradicional hondureña, ideal para tus recetas de cocina y repostería. Sabor auténtico.",
  },
  {
    name: "Cerveza Imperial",
    slug: "cerveza-imperial",
    category: "Bebidas",
    categorySlug: "bebidas",
    price: 5,
    originalPrice: 6,
    badge: "Oferta",
    badgeVariant: "green",
    description: "La cerveza #1 de Honduras. Imperial, el sabor que une a los catrachos dentro y fuera del país.",
  },
  {
    name: "Cerveza Salva Vida",
    slug: "cerveza-salva-vida",
    category: "Bebidas",
    categorySlug: "bebidas",
    price: 4,
    description: "Salva Vida, la cerveza original de Honduras desde 1916. Refrescante y con el sabor de la tierra catracha.",
  },
  {
    name: "Libra de Frijoles",
    slug: "libra-de-frijoles",
    category: "Frijoles y Arroz",
    categorySlug: "frijoles-y-arroz",
    price: 4,
    badge: "Más vendido",
    badgeVariant: "primary",
    description: "Frijoles hondureños de la mejor calidad. Perfectos para cocer y preparar tus comidas tradicionales favoritas.",
  },
  {
    name: "Libra de Maíz",
    slug: "libra-de-maiz",
    category: "Frijoles y Arroz",
    categorySlug: "frijoles-y-arroz",
    price: 4,
    description: "Maíz blanco hondureño, ideal para hacer tus propias tortillas, tamales y demás comidas típicas.",
  },
  {
    name: "Jugos Naturales",
    slug: "jugos-naturales",
    category: "Refrescos Naturales",
    categorySlug: "refrescos-naturales",
    price: 3,
    badge: "Nuevo",
    badgeVariant: "green",
    description: "Jugos naturales hondureños, refrescantes y llenos de sabor. Hechos con frutas frescas de la mejor calidad.",
  },
  {
    name: "Refresco Tropical Uva",
    slug: "refresco-tropical-uva",
    category: "Refrescos Naturales",
    categorySlug: "refrescos-naturales",
    price: 10,
    description: "Refresco Tropical sabor uva, un clásico hondureño que no puede faltar en tu mesa. Sabor inigualable.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getAllCategorySlugs(): string[] {
  return [...new Set(products.map((p) => p.categorySlug))];
}

export function getCategoryName(slug: string): string {
  const product = products.find((p) => p.categorySlug === slug);
  return product?.category ?? slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export function getAllCategories(): { name: string; slug: string }[] {
  const map = new Map<string, string>();
  products.forEach((p) => {
    if (!map.has(p.categorySlug)) {
      map.set(p.categorySlug, p.category);
    }
  });
  return Array.from(map.entries()).map(([slug, name]) => ({ name, slug }));
}

export default products;
