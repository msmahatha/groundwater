import React from 'react';
import { Droplets } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Droplets className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-semibold text-blue-900">Hydrovision</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#map" className="text-gray-600 hover:text-blue-500">Water Map</a>
            <a href="#predictions" className="text-gray-600 hover:text-blue-500">Predictions</a>
            <a href="#vegetation" className="text-gray-600 hover:text-blue-500">Vegetation</a>
            <a href="#alerts" className="text-gray-600 hover:text-blue-500">Alerts</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;