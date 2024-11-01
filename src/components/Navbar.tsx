import React, { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Compass className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Ceylon Explorer</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#destinations" className="text-gray-900 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium">Destinations</a>
              <a href="#experiences" className="text-gray-900 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium">Experiences</a>
              <a href="#gallery" className="text-gray-900 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
              <a href="#contact" className="text-gray-900 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700">Book Now</button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#destinations" className="text-gray-900 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium">Destinations</a>
            <a href="#experiences" className="text-gray-900 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium">Experiences</a>
            <a href="#gallery" className="text-gray-900 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
            <a href="#contact" className="text-gray-900 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700">Book Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}