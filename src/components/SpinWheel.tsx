
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const prizes = [
  { id: 1, text: '১০০ টাকা', color: 'from-yellow-400 to-orange-500' },
  { id: 2, text: '৫০০ টাকা', color: 'from-red-400 to-pink-500' },
  { id: 3, text: '১০০০ টাকা', color: 'from-blue-400 to-cyan-500' },
  { id: 4, text: '২০০ টাকা', color: 'from-green-400 to-emerald-500' },
  { id: 5, text: '৭৫০ টাকা', color: 'from-purple-400 to-violet-500' },
  { id: 6, text: '১৫০০ টাকা', color: 'from-orange-400 to-red-500' },
  { id: 7, text: '৩০০ টাকা', color: 'from-teal-400 to-blue-500' },
  { id: 8, text: '২০০০ টাকা', color: 'from-indigo-400 to-purple-500' }
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
        
        {/* Wheel container */}
        <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-yellow-400 shadow-2xl">
          <div 
            className={`w-full h-full relative transition-transform duration-3000 ease-out ${isSpinning ? 'animate-spin' : ''}`}
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {prizes.map((prize, index) => {
              const angle = (360 / prizes.length) * index;
              return (
                <div
                  key={prize.id}
                  className={`absolute w-full h-full bg-gradient-to-r ${prize.color}`}
                  style={{
                    transform: `rotate(${angle}deg)`,
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((360 / prizes.length) * Math.PI / 180)}% ${50 - 50 * Math.sin((360 / prizes.length) * Math.PI / 180)}%)`
                  }}
                >
                  <div 
                    className="absolute text-white font-bold text-lg"
                    style={{
                      top: '20%',
                      left: '50%',
                      transform: `translateX(-50%) rotate(${360 / prizes.length / 2}deg)`,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}
                  >
                    {prize.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Center pointer */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10"></div>
        
        {/* Pointer arrow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-yellow-400 drop-shadow-lg"></div>
        </div>
      </div>

      {/* Spin button */}
      <Button 
        onClick={spinWheel}
        disabled={isSpinning}
        className="px-12 py-4 text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSpinning ? 'ঘুরছে...' : 'এখনই ঘুরান!'}
      </Button>

      {/* Winner display */}
      {winner && (
        <div className="text-center p-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-xl animate-bounce">
          <h3 className="text-2xl font-bold text-black mb-2">অভিনন্দন! 🎉</h3>
          <p className="text-xl font-semibold text-black">আপনি জিতেছেন: {winner}</p>
        </div>
      )}
    </div>
  );
};

export default SpinWheel;
