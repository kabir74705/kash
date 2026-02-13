import { useEffect } from 'react';

export default function FloatingPetals() {
  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'fixed inset-0 pointer-events-none z-5';
    document.body.appendChild(container);

    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'absolute text-4xl md:text-5xl opacity-40 animate-[floatUp_18s_linear_infinite]';
      petal.textContent = ['🌸', '🌹', '💗'][Math.floor(Math.random() * 3)];
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.animationDuration = (16 + Math.random() * 14) + 's';
      petal.style.animationDelay = '-' + Math.random() * 25 + 's';
      petal.style.filter = 'drop-shadow(0 0 12px #ff6b9d)';
      container.appendChild(petal);

      setTimeout(() => petal.remove(), 45000);
    };

    for (let i = 0; i < 20; i++) setTimeout(createPetal, i * 500);
    const interval = setInterval(createPetal, 2800);

    return () => {
      clearInterval(interval);
      container.remove();
    };
  }, []);

  return null;
}