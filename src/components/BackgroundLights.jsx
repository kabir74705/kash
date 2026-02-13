// components/BackgroundLights.jsx
export default function BackgroundLights() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full twinkle" style={{animationDelay: '0.3s'}}></div>
      <div className="absolute top-40 right-16 w-2 h-2 bg-pink-300 rounded-full twinkle" style={{animationDelay: '1.8s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-rose-200 rounded-full twinkle" style={{animationDelay: '0.9s'}}></div>
      <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-purple-300 rounded-full twinkle" style={{animationDelay: '2.4s'}}></div>
    </div>
  );
}