import React from 'react';
import { ProductGrid } from '../components/product/ProductGrid';
import { ProductFilters } from '../components/product/ProductFilters';
import { products } from '../data/mockData';

export const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-64">
          <ProductFilters />
        </aside>
        
        <main className="flex-1">
          <ProductGrid products={products} />
        </main>
      </div>
    </div>
  );
};