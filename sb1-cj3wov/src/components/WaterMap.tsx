import React from 'react';
import { MapPin } from 'lucide-react';

const WaterMap = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <MapPin className="w-6 h-6 text-blue-500 mr-2" />
        Water Table Map
      </h2>
      <div className="aspect-video bg-gray-100 rounded-lg mb-4 relative">
        {/* Map placeholder - Replace with actual map implementation */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Interactive Map View
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-sm text-gray-500">Current Level</div>
          <div className="text-xl font-semibold text-blue-600">45.2m</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Historical Avg</div>
          <div className="text-xl font-semibold text-blue-600">48.7m</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Trend</div>
          <div className="text-xl font-semibold text-orange-500">-2.1%</div>
        </div>
      </div>
    </div>
  );
};

export default WaterMap;