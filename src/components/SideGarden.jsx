import { useState } from 'react';

export default function SideGarden() {
  const [blooms, setBlooms] = useState([]);

  const handleClick = (e, side) => {
    const messages = ["You are my home ❤️", "Forever starts with you", "My soul chose you"];
    const msg = messages[Math.floor(Math.random() * 3)];

    const id = Date.now();
    setBlooms(prev => [...prev, { id, x: e.clientX, y: e.clientY, msg, side }]);

    setTimeout(() => setBlooms(prev => prev.filter(b => b.id !== id)), 2800);
  };

  return (
    <>
      {/* Left Garden */}
      <div className="fixed top-0 bottom-0 left-4 w-24 hidden xl:block z-20 pointer-events-auto" onClick={(e) => handleClick(e, 'left')}>
        <div className="relative h-full">
          <div className="absolute top-20 glowing-lantern text-5xl">🏮</div>
          <div className="absolute top-1/3 text-6xl transition-all hover:scale-125">🌹</div>
          <div className="absolute bottom-32 glowing-lantern text-5xl">🏮</div>
        </div>
      </div>

      {/* Right Garden */}
      <div className="fixed top-0 bottom-0 right-4 w-24 hidden xl:block z-20 pointer-events-auto" onClick={(e) => handleClick(e, 'right')}>
        <div className="relative h-full">
          <div className="absolute top-24 glowing-lantern text-5xl">🏮</div>
          <div className="absolute top-2/3 text-6xl transition-all hover:scale-125">🌹</div>
          <div className="absolute bottom-20 glowing-lantern text-5xl">🏮</div>
        </div>
      </div>

      {/* Bloom effects */}
      {blooms.map(b => (
        <div key={b.id} className="fixed text-4xl pointer-events-none z-30 love-burst" style={{ left: b.x, top: b.y }}>
          💞<br/>
          <span className="text-sm bg-black/60 px-4 py-1 rounded-full backdrop-blur-md mt-2 block">{b.msg}</span>
        </div>
      ))}
    </>
  );
}