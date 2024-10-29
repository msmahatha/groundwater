import React from 'react';

interface SkillCategoryProps {
  category: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => (
  <div className="tech-border p-6 bg-gray-800/50">
    <h4 className="text-xl font-bold mb-4">{category}</h4>
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="relative">
          <div className="h-2 bg-gray-700 rounded">
            <div className="h-full bg-orange-500 rounded animate-pulse" 
                 style={{width: `${Math.random() * 40 + 60}%`}}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillCategory;