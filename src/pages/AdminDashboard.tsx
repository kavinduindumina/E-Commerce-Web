import React from 'react';
import { BarChart, Package, Users, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { products } from '../data/mockData';
import { formatPrice } from '../lib/utils';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-green-500" />
            <div>
              <h3 className="text-sm text-gray-500">Total Sales</h3>
              <p className="text-2xl font-bold">LKR 12,345</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <Package className="h-8 w-8 text-blue-500" />
            <div>
              <h3 className="text-sm text-gray-500">Products</h3>
              <p className="text-2xl font-bold">{products.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-purple-500" />
            <div>
              <h3 className="text-sm text-gray-500">Customers</h3>
              <p className="text-2xl font-bold">2</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <BarChart className="h-8 w-8 text-yellow-500" />
            <div>
              <h3 className="text-sm text-gray-500">Orders</h3>
              <p className="text-2xl font-bold">8</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Products</h2>
            <Button>Add Product</Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{formatPrice(product.price)}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    <Button variant="secondary" size="sm">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};