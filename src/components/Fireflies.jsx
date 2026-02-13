import { useEffect, useRef } from 'react';

export default function Fireflies() {
  const container = useRef(null);

  useEffect(() => {
    const createFirefly = () => {
      const fly = document.createElement('div');
      fly.className = 'firefly';
      fly.style.left = Math.random() * 100 + 'vw';
      fly.style.top = Math.random() * 100 + 'vh';
      fly.style.animationDuration = (Math.random() * 6 + 7) + 's';
      fly.style.animationDelay = Math.random() * -10 + 's';
      container.current?.appendChild(fly);

      setTimeout(() => fly.remove(), 20000);
    };

    for (let i = 0; i < 25; i++) createFirefly();
    const interval = setInterval(createFirefly, 800);
    return () => clearInterval(interval);
  }, []);

  return <div ref={container} className="fixed inset-0 pointer-events-none z-5" />;
}