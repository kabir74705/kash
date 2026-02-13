export default function LoveNoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>To My Forever 💖</h2>
        <p className="">

          Chari finally apna pehla bina ldai vala valentines day aa gya. Dhor thankuu tune mera ye week bhott bhott special bnane ke lie, tera chocolates bheja tera vo pyara sa teddy sb bhott pyara thaa, Mere lie lifetime memorable moments rhege sb . Gdhi me bhot lucky hu ki tu meri life partner h , Tu sath h to sb special h. 
        </p>

      </div>
    </div>
  );
}
