
import React from 'react';
import Header from '@/components/Header';
import SpinWheel from '@/components/SpinWheel';
import PrizeSection from '@/components/PrizeSection';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"></div>
      
      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-400/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header />
        
        <div className="flex justify-center mt-12">
          <SpinWheel />
        </div>
        
        <PrizeSection />
        <CallToAction />
        
        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© ২০২৪ ভাগ্যের চাকা। সমস্ত অধিকার সংরক্ষিত।</p>
          <p className="mt-2">দায়িত্বশীল গেমিং অনুশীলন করুন। ১৮+ বছর বয়সীদের জন্য।</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
