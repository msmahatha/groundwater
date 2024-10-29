import React from 'react';
import { Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="container mx-auto px-6 py-20">
    <div className="tech-border p-8 bg-gray-800/50">
      <h3 className="text-3xl font-bold mb-8 flex items-center">
        <Send className="mr-2" />
        Initialize Connection
      </h3>
      <div className="flex flex-wrap gap-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 hover:text-purple-500 transition-colors">
          <Github />
          GitHub
          <ExternalLink size={16} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 hover:text-purple-500 transition-colors">
          <Linkedin />
          LinkedIn
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;