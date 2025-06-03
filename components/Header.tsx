"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`w-full header-gradient shadow-sm transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl text-gray-800 hover:text-gray-700 italic">
            ExamGo
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link href="/" className="font-maven text-gray-800 hover:text-gray-600 font-medium">
            Home
          </Link>
          <Link href="/latihan" className="font-maven text-gray-800 hover:text-gray-600 font-medium">
            Latihan
          </Link>
          <Link href="/simulasi" className="font-maven text-gray-800 hover:text-gray-600 font-medium">
            Simulasi
          </Link>
        </nav>
      </div>
    </header>
  );
}