import React from 'react';
import { User, Package, MapPin, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="grid md:grid-cols-4 gap-8">
        <aside className="space-y-2">
          <button className="w-full flex items-center gap-2 p-2 bg-blue-50 text-blue-600 rounded">
            <User className="h-5 w-5" />
            Profile
          </button>
          <button
            className="w-full flex items-center gap-2 p-2 hover:bg-gray-50 rounded"
            onClick={() => navigate('/orders')}
          >
            <Package className="h-5 w-5" />
            Orders
          </button>
          <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
            <MapPin className="h-5 w-5" />
            Addresses
          </button>
          <button className="w-full flex items-center gap-2 p-2 text-red-600 hover:bg-red-50 rounded">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </aside>

        <div className="md:col-span-3">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Profile Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-md border p-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="rounded-md border p-2"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border p-2"
              />
              <Button type="submit">Update Profile</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};