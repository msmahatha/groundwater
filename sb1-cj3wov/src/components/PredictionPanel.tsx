import React from 'react';
import { TrendingDown, BarChart2 } from 'lucide-react';

const PredictionPanel = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <BarChart2 className="w-6 h-6 text-blue-500 mr-2" />
        Water Level Prediction
      </h2>
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">3-Month Forecast</h3>
          <div className="flex items-center space-x-2">
            <TrendingDown className="w-5 h-5 text-orange-500" />
            <span className="text-gray-600">Expected decline of 1.2m by September</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {['1 Month', '2 Months', '3 Months'].map((period, index) => (
            <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">{period}</div>
              <div className="text-lg font-semibold text-blue-600">
                {44 - index * 0.4}m
              </div>
            </div>
          ))}
        </div>
        <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          View Detailed Analysis
        </button>
      </div>
    </div>
  );
};

export default PredictionPanel;