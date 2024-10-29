import React from 'react';
import TypingEffect from './TypingEffect';

const Hero = () => (
  <section className="container mx-auto px-6 py-20">
    <div className="tech-border p-8 bg-gray-900/50 backdrop-blur">
      <TypingEffect text="> Initializing cybernetic interface..." />
      <h2 className="text-5xl font-bold mb-6 glitch" data-text="Full Stack Cyber Developer">
        Full Stack Cyber Developer
      </h2>
      <p className="text-gray-400 max-w-2xl">
        Crafting digital experiences at the intersection of technology and cyberpunk aesthetics.
        Specialized in neural interfaces and quantum-resistant systems.
      </p>
    </div>
  </section>
)

export default Hero;