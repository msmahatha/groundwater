import React from 'react';
import { Code2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Neural Network Visualizer',
    description: 'Real-time AI system visualization with WebGL',
    tech: ['React', 'WebGL', 'TensorFlow.js'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Quantum Data Encryption',
    description: 'Post-quantum cryptography implementation',
    tech: ['TypeScript', 'Node.js', 'WebAssembly'],
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=500'
  }
];

const Projects = () => (
  <section id="projects" className="container mx-auto px-6 py-20">
    <h3 className="text-3xl font-bold mb-12 flex items-center">
      <Code2 className="mr-2" />
      Active Projects
    </h3>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;