import { useState } from 'react';

export default function SideRoses() {
  const [bursts, setBursts] = useState([]);

  const handleClick = (e, side) => {
    const id = Date.now();
    const x = e.clientX;
    const y = e.clientY;

    setBursts(prev => [...prev, { id, x, y }]);

    setTimeout(() => setBursts(prev => prev.filter(b => b.id !== id)), 1800);
  };

  return (
    <>
      <div className="fixed top-1/4 left-6 hidden lg:block z-20 pointer-events-auto" onClick={(e) => handleClick(e, 'left')}>
        <div className="text-8xl transition-all hover:scale-125 hover:brightness-150 glow-rose cursor-pointer">🌹</div>
      </div>

      <div className="fixed top-1/4 right-6 hidden lg:block z-20 pointer-events-auto" onClick={(e) => handleClick(e, 'right')}>
        <div className="text-8xl transition-all hover:scale-125 hover:brightness-150 glow-rose cursor-pointer">🌹</div>
      </div>

      {bursts.map(b => (
        <div
          key={b.id}
          className="fixed pointer-events-none z-30 text-5xl animate-[heartBurst_1.6s_ease-out_forwards]"
          style={{ left: b.x, top: b.y, transform: 'translate(-50%, -50%)' }}
        >
          💞
        </div>
      ))}
    </>
  );
}