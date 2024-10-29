import React from 'react';
import { Sprout, Droplets } from 'lucide-react';

const VegetationGuide = () => {
  const recommendations = [
    {
      name: 'Drought-Resistant Wheat',
      waterNeed: 'Low',
      suitability: 'High',
      season: 'Winter'
    },
    {
      name: 'Millet',
      waterNeed: 'Very Low',
      suitability: 'Very High',
      season: 'Summer'
    },
    {
      name: 'Sorghum',
      waterNeed: 'Low',
      suitability: 'High',
      season: 'Summer'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Sprout className="w-6 h-6 text-green-500 mr-2" />
        Vegetation Recommendations
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {recommendations.map((crop, index) => (
          <div key={index} className="p-4 border border-green-100 rounded-lg">
            <h3 className="text-lg font-medium mb-2">{crop.name}</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Droplets className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-sm text-gray-600">Water Need: {crop.waterNeed}</span>
              </div>
              <div className="text-sm text-gray-600">Suitability: {crop.suitability}</div>
              <div className="text-sm text-gray-600">Best Season: {crop.season}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VegetationGuide;