import React from 'react';
import { MapPin, Droplets, Sprout, AlertTriangle } from 'lucide-react';
import Header from './components/Header';
import WaterMap from './components/WaterMap';
import PredictionPanel from './components/PredictionPanel';
import VegetationGuide from './components/VegetationGuide';
import AlertSystem from './components/AlertSystem';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Groundwater Insights Platform
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced monitoring and prediction system for groundwater levels, 
            vegetation recommendations, and environmental alerts
          </p>
        </div>

        {/* Main Dashboard */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <WaterMap />
          <PredictionPanel />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Droplets className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Water Level Monitoring</h3>
            <p className="text-gray-600">Real-time tracking and historical analysis of groundwater levels</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Sprout className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vegetation Advisory</h3>
            <p className="text-gray-600">Smart recommendations for sustainable crop selection</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <AlertTriangle className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Early Warning System</h3>
            <p className="text-gray-600">Proactive alerts for critical water table conditions</p>
          </div>
        </div>

        {/* Vegetation Guide Section */}
        <VegetationGuide />

        {/* Alert System */}
        <AlertSystem />
      </section>
    </div>
  );
}

export default App;