
import React from 'react';

const Header = () => {
  return (
    <header className="text-center py-8">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4 animate-fade-in">
        Колесо Фортуны
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-2 animate-fade-in delay-200">
        Выиграйте призы своей мечты!
      </p>
      <p className="text-lg text-yellow-400 animate-fade-in delay-400">
        100% гарантированный выигрыш - играйте прямо сейчас!
      </p>
    </header>
  );
};

export default Header;
