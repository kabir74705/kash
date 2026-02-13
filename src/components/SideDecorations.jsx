// src/components/SideDecorations.jsx
import { useState } from "react";

export default function SideDecorations() {
  const [bursts, setBursts] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = e.clientY;

    const particles = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() * 80 - 40),
      y: y + (Math.random() * 60 - 30),
      delay: i * 0.08,
    }));

    setBursts((prev) => [...prev, ...particles]);

    setTimeout(() => {
      setBursts((prev) =>
        prev.filter((b) => !particles.some((p) => p.id === b.id))
      );
    }, 2000);
  };

  const SideColumn = ({ position }) => (
    <div
      className={`side-column ${position}`}
      onClick={handleClick}
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="side-item"
          style={{ animationDelay: `${i * 0.8}s` }}
        >
          <div className="rose">🌹</div>
          <div className="floating-heart">💖</div>
          <div className="gold-spark">✨</div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <SideColumn position="left" />
      <SideColumn position="right" />

      {bursts.map((b) => (
        <div
          key={b.id}
          className="burst-particle"
          style={{
            left: b.x,
            top: b.y,
            animationDelay: `${b.delay}s`,
          }}
        >
          ✨
        </div>
      ))}
    </>
  );
}
