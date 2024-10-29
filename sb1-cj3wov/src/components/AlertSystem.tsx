import React from 'react';
import { AlertTriangle, Bell } from 'lucide-react';

const AlertSystem = () => {
  const alerts = [
    {
      type: 'warning',
      message: 'Water table approaching critical level in North-East region',
      time: '2h ago'
    },
    {
      type: 'info',
      message: 'Optimal planting period for drought-resistant crops approaching',
      time: '5h ago'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Bell className="w-6 h-6 text-orange-500 mr-2" />
        Alert System
      </h2>
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg flex items-start space-x-3 ${
              alert.type === 'warning' ? 'bg-orange-50' : 'bg-blue-50'
            }`}
          >
            <AlertTriangle className={`w-5 h-5 ${
              alert.type === 'warning' ? 'text-orange-500' : 'text-blue-500'
            }`} />
            <div className="flex-1">
              <p className="text-gray-800">{alert.message}</p>
              <p className="text-sm text-gray-500 mt-1">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertSystem;