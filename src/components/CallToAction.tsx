
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gift, Star } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-yellow-400/20">
        <div className="flex justify-center space-x-4 mb-6">
          <Star className="text-yellow-400 w-8 h-8" />
          <Gift className="text-yellow-400 w-8 h-8" />
          <Star className="text-yellow-400 w-8 h-8" />
        </div>
        
        <h3 className="text-3xl font-bold text-yellow-400 mb-4">
          Начните играть прямо сейчас!
        </h3>
        
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
          Внесите всего 50 рублей и получите бонус 100 рублей! 
          Каждый день тысячи игроков выигрывают крупные призы.
        </p>
        
        <div className="space-y-4">
          <Button className="px-8 py-4 text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg transform hover:scale-105 transition-all duration-200">
            Зарегистрироваться сейчас
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
            <span>✓ 100% безопасно</span>
            <span>✓ Мгновенные выплаты</span>
            <span>✓ Поддержка 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
