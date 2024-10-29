import React from 'react';
import { Project } from '../types';

const ProjectCard: React.FC<Project> = ({ title, description, tech, image }) => (
  <div className="tech-border p-6 bg-gray-800/50 backdrop-blur group hover:bg-gray-800/80 transition-all duration-300">
    <div className="relative overflow-hidden mb-4">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <h4 className="text-xl font-bold mb-2 glitch" data-text={title}>{title}</h4>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((item, i) => (
        <span key={i} className="px-3 py-1 bg-orange-500/10 text-orange-500 text-sm rounded">
          {item}
        </span>
      ))}
    </div>
  </div>
)

export default ProjectCard;