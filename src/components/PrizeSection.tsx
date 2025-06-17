
import React from 'react';
import { Card } from '@/components/ui/card';

const prizes = [
  { amount: '100 руб', chance: '40%', icon: '🎁' },
  { amount: '500 руб', chance: '25%', icon: '💰' },
  { amount: '1000 руб', chance: '20%', icon: '💎' },
  { amount: '2000 руб', chance: '15%', icon: '👑' }
];

const PrizeSection = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
        Сегодняшние специальные призы
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {prizes.map((prize, index) => (
          <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-yellow-400/30 p-4 text-center hover:scale-105 transition-transform duration-200">
            <div className="text-3xl mb-2">{prize.icon}</div>
            <div className="text-lg font-bold text-yellow-400">{prize.amount}</div>
            <div className="text-sm text-gray-400">Шанс выиграть</div>
            <div className="text-sm font-semibold text-green-400">{prize.chance}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PrizeSection;
