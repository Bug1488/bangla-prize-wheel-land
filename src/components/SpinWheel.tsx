
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const prizes = [
  { id: 1, text: '100₽', color: 'from-yellow-400 to-orange-500' },
  { id: 2, text: '500₽', color: 'from-red-400 to-pink-500' },
  { id: 3, text: '1000₽', color: 'from-blue-400 to-cyan-500' },
  { id: 4, text: '200₽', color: 'from-green-400 to-emerald-500' },
  { id: 5, text: '750₽', color: 'from-purple-400 to-violet-500' },
  { id: 6, text: '1500₽', color: 'from-orange-400 to-red-500' },
  { id: 7, text: '300₽', color: 'from-teal-400 to-blue-500' },
  { id: 8, text: '2000₽', color: 'from-indigo-400 to-purple-500' }
];

const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setWinner(null);
    
    // Random rotation between 1440 and 2880 degrees (4-8 full rotations)
    const randomRotation = Math.floor(Math.random() * 1440) + 1440;
    const finalRotation = rotation + randomRotation;
    
    setRotation(finalRotation);
    
    // Calculate winner based on final position
    const segmentAngle = 360 / prizes.length;
    const normalizedRotation = (360 - (finalRotation % 360)) % 360;
    const winnerIndex = Math.floor(normalizedRotation / segmentAngle);
    
    setTimeout(() => {
      setIsSpinning(false);
      setWinner(prizes[winnerIndex].text);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-xl opacity-50 animate-pulse"></div>
        
        {/* 3D Frame effect */}
        <div className="absolute inset-0 rounded-full border-[16px] border-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-2xl">
          <div className="absolute inset-2 rounded-full border-8 border-yellow-600 shadow-inner"></div>
          {/* Light dots around the frame */}
          {[...Array(24)].map((_, i) => {
            const angle = (360 / 24) * i;
            return (
              <div
                key={i}
                className="absolute w-3 h-3 bg-white rounded-full shadow-lg animate-pulse"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-155px)`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            );
          })}
        </div>
        
        {/* Wheel container */}
        <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl z-10">
          <div 
            className={`w-full h-full relative transition-transform duration-3000 ease-out ${isSpinning ? 'animate-spin' : ''}`}
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {prizes.map((prize, index) => {
              const angle = (360 / prizes.length) * index;
              return (
                <div
                  key={prize.id}
                  className={`absolute w-full h-full bg-gradient-to-r ${prize.color} border-2 border-yellow-300`}
                  style={{
                    transform: `rotate(${angle}deg)`,
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((360 / prizes.length) * Math.PI / 180)}% ${50 - 50 * Math.sin((360 / prizes.length) * Math.PI / 180)}%)`
                  }}
                >
                  <div 
                    className="absolute text-white font-bold text-xl drop-shadow-lg"
                    style={{
                      top: '25%',
                      left: '50%',
                      transform: `translateX(-50%) rotate(${360 / prizes.length / 2}deg)`,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                    }}
                  >
                    {prize.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Center button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-4 border-white shadow-lg z-20"></div>
        
        {/* Red arrow pointer pointing down */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-30">
          <div className="relative">
            {/* Arrow shadow */}
            <div className="absolute top-1 left-1 w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-gray-800 opacity-50"></div>
            {/* Main arrow */}
            <div className="w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-red-600 drop-shadow-xl"></div>
            {/* Arrow highlight */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-8 border-l-transparent border-r-transparent border-b-red-400"></div>
          </div>
        </div>
      </div>

      {/* Spin button */}
      <Button 
        onClick={spinWheel}
        disabled={isSpinning}
        className="px-12 py-4 text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSpinning ? 'Крутится...' : 'Крутить колесо!'}
      </Button>

      {/* Winner display */}
      {winner && (
        <div className="text-center p-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-xl animate-bounce">
          <h3 className="text-2xl font-bold text-black mb-2">Поздравляем! 🎉</h3>
          <p className="text-xl font-semibold text-black">Вы выиграли: {winner}</p>
        </div>
      )}
    </div>
  );
};

export default SpinWheel;
