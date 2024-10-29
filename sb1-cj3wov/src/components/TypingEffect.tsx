import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (typed.length < text.length) {
      const timeout = setTimeout(() => {
        setTyped(text.slice(0, typed.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typed, text]);

  return <div className="font-mono text-lg mb-4">{typed}</div>;
};

export default TypingEffect;