import React from 'react';
import { Cpu } from 'lucide-react';
import SkillCategory from './SkillCategory';

const categories = ['Frontend', 'Backend', 'DevOps'];

const Skills = () => (
  <section id="skills" className="container mx-auto px-6 py-20">
    <h3 className="text-3xl font-bold mb-12 flex items-center">
      <Cpu className="mr-2" />
      System Capabilities
    </h3>
    <div className="grid md:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <SkillCategory key={index} category={category} />
      ))}
    </div>
  </section>
);

export default Skills;