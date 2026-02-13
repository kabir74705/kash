// src/components/SideVelvetRoses.jsx
import { useState } from 'react';

export default function SideVelvetRoses() {
  const [kisses, setKisses] = useState([]);

  const handleRoseClick = (e, side) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const startX = side === 'left' ? rect.right - 40 : rect.left + 40;
    const startY = rect.top + rect.height / 2;

    const id = Date.now();
    const kiss = {
      id,
      startX,
      startY,
      // Target = center of gift box
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight * 0.45,
    };

    setKisses(prev => [...prev, kiss]);

    // Remove after animation
    setTimeout(() => {
      setKisses(prev => prev.filter(k => k.id !== id));
    }, 2500);
  };

  return (
    <>
      {/* Left Rose */}
      <div
        className="fixed top-1/3 -translate-y-1/3 left-8 hidden lg:block z-30"
        onClick={(e) => handleRoseClick(e, 'left')}
      >
        <div className="side-rose text-[7rem] transition-all">🌹</div>
        <div className="absolute -top-6 -left-4 text-4xl text-gold">✨</div>
      </div>

      {/* Right Rose */}
      <div
        className="fixed top-1/3 -translate-y-1/3 right-8 hidden lg:block z-30"
        onClick={(e) => handleRoseClick(e, 'right')}
      >
        <div className="side-rose text-[7rem] transition-all">🌹</div>
        <div className="absolute -top-6 -right-4 text-4xl text-gold">✨</div>
      </div>

      {/* Flying kisses */}
      {kisses.map(kiss => (
        <div
          key={kiss.id}
          className="flying-kiss"
          style={{
            left: kiss.startX,
            top: kiss.startY,
            '--tx': `${kiss.targetX - kiss.startX}px`,
            '--ty': `${kiss.targetY - kiss.startY}px`,
          }}
        >
          💋
        </div>
      ))}
    </>
  );
}