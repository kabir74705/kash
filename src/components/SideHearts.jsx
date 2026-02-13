import { useState } from 'react';

export default function SideHearts() {
  const [flying, setFlying] = useState([]);

  const handleClick = (e, side) => {
    const id = Date.now();
    const startX = e.clientX;
    const startY = e.clientY;

    // Fly to center of screen (approx gift position)
    const targetX = window.innerWidth / 2;
    const targetY = window.innerHeight / 2 - 100;

    const tx = targetX - startX;
    const ty = targetY - startY;

    setFlying(prev => [...prev, { id, startX, startY, tx, ty }]);

    // Create sparkles around click
    for (let i = 0; i < 12; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = startX + (Math.random() * 80 - 40) + 'px';
      sparkle.style.top = startY + (Math.random() * 80 - 40) + 'px';
      sparkle.style.animationDelay = `${Math.random() * 0.3}s`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 900);
    }

    setTimeout(() => setFlying(prev => prev.filter(f => f.id !== id)), 1400);
  };

  return (
    <>
      {/* Left side */}
      <div className="fixed top-1/4 bottom-1/4 left-8 hidden lg:flex flex-col justify-around z-30 pointer-events-auto">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            onClick={(e) => handleClick(e, 'left')}
            className="glowing-heart text-6xl cursor-pointer transition-all active:scale-90"
          >
            💛
          </div>
        ))}
      </div>

      {/* Right side */}
      <div className="fixed top-1/4 bottom-1/4 right-8 hidden lg:flex flex-col justify-around z-30 pointer-events-auto">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            onClick={(e) => handleClick(e, 'right')}
            className="glowing-heart text-6xl cursor-pointer transition-all active:scale-90"
          >
            💛
          </div>
        ))}
      </div>

      {/* Flying hearts */}
      {flying.map(f => (
        <div
          key={f.id}
          className="flying-heart"
          style={{
            left: f.startX,
            top: f.startY,
            '--tx': `${f.tx}px`,
            '--ty': `${f.ty}px`
          }}
        >
          💛
        </div>
      ))}
    </>
  );
}