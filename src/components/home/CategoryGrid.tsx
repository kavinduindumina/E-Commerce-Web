import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661' },
  { name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050' },
  { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a' },
];

export const CategoryGrid: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="mb-8 text-3xl font-bold">Shop by Category</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products?category=${encodeURIComponent(category.name)}`}
            className="group relative h-64 overflow-hidden rounded-lg"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};