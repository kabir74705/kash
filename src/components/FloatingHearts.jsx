import { useEffect } from 'react';

export default function FloatingHearts() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'absolute text-4xl pointer-events-none';
      heart.textContent = ['❤️','💛','🌹','✨'][Math.floor(Math.random()*4)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.top = '120vh';
      heart.style.opacity = 0.25 + Math.random() * 0.4;
      heart.style.animation = `floatUp ${18 + Math.random() * 25}s linear infinite`;
      heart.style.animationDelay = `-${Math.random() * 25}s`;
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 50000);
    };

    for (let i = 0; i < 22; i++) createHeart();
    const interval = setInterval(createHeart, 1400);
    return () => clearInterval(interval);
  }, []);

  return null;
}