
import React from 'react';
import { Card } from '@/components/ui/card';

const prizes = [
  { amount: '১০০ টাকা', chance: '৪০%', icon: '🎁' },
  { amount: '৫০০ টাকা', chance: '২৫%', icon: '💰' },
  { amount: '১০০০ টাকা', chance: '২০%', icon: '💎' },
  { amount: '২০০০ টাকা', chance: '১৫%', icon: '👑' }
];

const PrizeSection = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
        আজকের বিশেষ পুরস্কার
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {prizes.map((prize, index) => (
          <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-yellow-400/30 p-4 text-center hover:scale-105 transition-transform duration-200">
            <div className="text-3xl mb-2">{prize.icon}</div>
            <div className="text-lg font-bold text-yellow-400">{prize.amount}</div>
            <div className="text-sm text-gray-400">জেতার সম্ভাবনা</div>
            <div className="text-sm font-semibold text-green-400">{prize.chance}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PrizeSection;
