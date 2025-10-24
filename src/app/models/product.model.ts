export interface Product {
  id: string;
  name: string;
  category: string;
  description?: string;
  images: string[];
  slug: string;
  specifications?: ProductSpecification[];
  features?: string[];
  applications?: string[];
}

export interface ProductSpecification {
  name: string;
  value: string;
  unit?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  products: Product[];
}