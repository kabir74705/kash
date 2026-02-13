import { useState, useEffect } from "react";
import "./App.css";

import AmbientGlow from "./components/AmbientGlow";
import FloatingPetals from "./components/FloatingPetals";
import SideDecorations from "./components/SideDecorations";
import GiftBox from "./components/GiftBox";
import LoveNoteModal from "./components/LoveNoteModal";

function App() {
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  const handleOpenGift = () => {
    if (isGiftOpen) return;
    setIsGiftOpen(true);
    setTimeout(() => setShowNote(true), 1200);
  };
  const handleCloseNote = () => {
  // Close the modal first
  setShowNote(false);

  // Reset gift after a small delay (so animation feels smooth)
  setTimeout(() => {
    setIsGiftOpen(false);
  }, 300);
};


  return (
    <div className="app-container">

      {/* Background Layers */}
      <AmbientGlow />
      <FloatingPetals />
      <SideDecorations />

      {/* Subtle Animated Star Layer */}
      <div className="star-layer"></div>

      {/* Main Content */}
      <main className={`main-content ${isLoaded ? "fade-in" : ""}`}>
        
        <header className="hero">
          <div className="hero-box">

            <span className="hero-heart">💖</span>

            <h1 className="title">
              Merii    Kassu <span className="highlight">Motii</span>
            </h1>

            <span className="hero-heart">💖</span>

          </div>

          <p className="date">Happy Valentines Day</p>
        </header>

        {/* Gift Section */}
        <section className="gift-section">
           <GiftBox isOpen={isGiftOpen} onOpen={handleOpenGift} />
        </section>

      </main>

      {/* Modal */}
     <LoveNoteModal className="" isOpen={showNote} onClose={handleCloseNote} />

      {/* Footer */}
      <footer className="footer">
  <div className="footer-line"></div>

  <div className="footer-hearts">
    <span>💖</span>
    <span>✨</span>
    <span>🌹</span>
    <span>💫</span>
    <span>💕</span>
  </div>

  <div className="footer-glow"></div>
</footer>

    </div>
  );
}

export default App;
