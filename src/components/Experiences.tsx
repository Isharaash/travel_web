import React from 'react';
import { Palmtree, Coffee, Camera, Sunrise } from 'lucide-react';

const experiences = [
  {
    icon: <Palmtree className="h-8 w-8" />,
    title: "Beach Escapes",
    description: "Relax on pristine beaches with crystal clear waters",
  },
  {
    icon: <Coffee className="h-8 w-8" />,
    title: "Tea Plantations",
    description: "Visit world-famous Ceylon tea estates in the highlands",
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Wildlife Safari",
    description: "Encounter elephants and leopards in their natural habitat",
  },
  {
    icon: <Sunrise className="h-8 w-8" />,
    title: "Cultural Heritage",
    description: "Explore ancient temples and traditional ceremonies",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Unforgettable Experiences</h2>
          <p className="text-xl text-gray-600">Create lasting memories in paradise</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-emerald-600 mb-4">{experience.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}