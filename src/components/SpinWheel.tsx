
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const prizes = [
  { id: 1, text: '100₽', color: '#FF6B6B', textColor: 'white' },
  { id: 2, text: '500₽', color: '#4ECDC4', textColor: 'white' },
  { id: 3, text: '1000₽', color: '#45B7D1', textColor: 'white' },
  { id: 4, text: '200₽', color: '#96CEB4', textColor: 'white' },
  { id: 5, text: '750₽', color: '#FFEAA7', textColor: 'black' },
  { id: 6, text: '1500₽', color: '#DDA0DD', textColor: 'white' },
  { id: 7, text: '300₽', color: '#98D8C8', textColor: 'black' },
  { id: 8, text: '2000₽', color: '#A29BFE', textColor: 'white' }
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
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-xl opacity-30 animate-pulse"></div>
        
        {/* Main wheel container */}
        <div className="relative w-96 h-96 rounded-full shadow-2xl">
          {/* White border frame */}
          <div className="absolute inset-0 rounded-full bg-white p-2 shadow-xl">
            {/* Inner wheel container */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <div 
                className={`w-full h-full relative transition-transform duration-3000 ease-out`}
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {prizes.map((prize, index) => {
                  const angle = (360 / prizes.length) * index;
                  const segmentAngle = 360 / prizes.length;
                  
                  return (
                    <div
                      key={prize.id}
                      className="absolute w-full h-full"
                      style={{
                        transform: `rotate(${angle}deg)`,
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((segmentAngle * Math.PI) / 180)}% ${50 - 50 * Math.sin((segmentAngle * Math.PI) / 180)}%)`
                      }}
                    >
                      <div 
                        className="w-full h-full"
                        style={{ backgroundColor: prize.color }}
                      >
                        <div 
                          className="absolute font-bold text-lg"
                          style={{
                            top: '30%',
                            left: '50%',
                            transform: `translateX(-50%) rotate(${segmentAngle / 2}deg)`,
                            color: prize.textColor,
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                          }}
                        >
                          {prize.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-4 border-white shadow-lg z-20 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Red arrow pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 z-30">
          <div className="relative">
            {/* Arrow shadow */}
            <div className="absolute top-1 left-1 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-gray-700 opacity-40"></div>
            {/* Main red arrow */}
            <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-red-600"></div>
            {/* Arrow highlight */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[12px] border-l-transparent border-r-transparent border-b-red-300"></div>
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
