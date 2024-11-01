import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1588258524675-c61945788959?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover"
          alt="Sigiriya Rock Fortress"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Discover the Pearl of the Indian Ocean
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience ancient wonders, pristine beaches, and vibrant culture in Sri Lanka
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition flex items-center gap-2">
              Start Your Journey <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}