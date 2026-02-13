export default function GiftBox({ isOpen, onOpen }) {
  return (
    <div className="gift-wrapper" onClick={onOpen}>
      <div className={`gift ${isOpen ? "open" : ""}`}>
        🎁
      </div>
      
    </div>
  );
}
