
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
          এখনই শুরু করুন!
        </h3>
        
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
          মাত্র ৫০ টাকা জমা দিয়ে পেয়ে যান ১০০ টাকা বোনাস! 
          প্রতিদিন হাজার হাজার খেলোয়াড় জিতছেন বিশাল পুরস্কার।
        </p>
        
        <div className="space-y-4">
          <Button className="px-8 py-4 text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg transform hover:scale-105 transition-all duration-200">
            এখনই রেজিস্টার করুন
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
            <span>✓ ১০০% নিরাপদ</span>
            <span>✓ তাৎক্ষণিক পেমেন্ট</span>
            <span>✓ ২৪/৭ সাপোর্ট</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
