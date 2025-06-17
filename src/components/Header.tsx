
import React from 'react';

const Header = () => {
  return (
    <header className="text-center py-8">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4 animate-fade-in">
        জনপ্রিয় লটারি
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-2 animate-fade-in delay-200">
        আজ আপনার সবকিছু পরিবর্তন করার সুযোগ এসেছে!
      </p>
      <p className="text-lg text-yellow-400 animate-fade-in delay-400">
        ৳৪০০ ডিপোজিটে জয় পান - আপনার ভাগ্য পরীক্ষা করুন, হয়তো আজই আপনার সবকিছু পরিবর্তনের দিন?
      </p>
    </header>
  );
};

export default Header;
