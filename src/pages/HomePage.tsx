import React from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { Newsletter } from '../components/home/Newsletter';
import { ProductCard } from '../components/product/ProductCard';

// Mock data for featured products
const featuredProducts = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    rating: 4,
    category: 'Electronics',
    description: 'High-quality wireless headphones',
    stock: 10,
  },
  // Add more mock products...
  {
    id: '3',
    name: 'Wireless Mouse',
    price: 2490,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    category: 'Electronics',
    description: 'High-quality wireless mouse',
    stock: 10,
  },
  {
    id: '4',
    name: 'T-shirt',
    price: 990,
    image: 'https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4,
    category: 'Fashion',
    description: 'High-quality branded fashion t-shirt',
    stock: 10,
  },
  {
    id: '5',
    name: 'Office Chair',
    price: 7450,
    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYWlyfGVufDB8fDB8fHww',
    rating: 4,
    category: 'Home & Living',
    description: 'High-quality office chair',
    stock: 10,
  },
];

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      <HeroBanner />
      
      <section className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <CategoryGrid />
      <Newsletter />
    </div>
  );
};