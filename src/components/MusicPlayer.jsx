// components/MusicPlayer.jsx
import { useState, useRef } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3');
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        console.log("Click again to allow music to play");
      });
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={toggleMusic}
        className="w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-3xl border border-white/20 transition-all active:scale-95"
      >
        {isPlaying ? (
          <i className="fa-solid fa-pause text-pink-300"></i>
        ) : (
          <i className="fa-solid fa-music text-pink-300"></i>
        )}
      </button>
    </div>
  );
}