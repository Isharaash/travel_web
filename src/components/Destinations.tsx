import React from 'react';
import { MapPin } from 'lucide-react';

const destinations = [
  {
    title: "Sigiriya",
    description: "Ancient palace and fortress complex",
    image: "https://images.unsplash.com/photo-1586516463885-d96c06e263d9?auto=format&fit=crop&q=80",
  },
  {
    title: "Kandy",
    description: "Sacred Temple of the Tooth Relic",
    image: "https://images.unsplash.com/photo-1625736300986-175f07c0d463?auto=format&fit=crop&q=80",
  },
  {
    title: "Galle",
    description: "Historic Dutch colonial fort",
    image: "https://images.unsplash.com/photo-1578005347105-49d325a90b8a?auto=format&fit=crop&q=80",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600">Explore the most iconic locations in Sri Lanka</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{destination.title}</h3>
                  <p className="text-gray-200 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}