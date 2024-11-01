import React, { useState } from 'react';
import { X, Play, ImageOff } from 'lucide-react';

const galleryItems = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Tea Plantations',
    description: 'Rolling hills of emerald tea estates in Nuwara Eliya'
  },
  {
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1540202404-1b927e27fa8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    url: 'https://player.vimeo.com/video/912666464?autoplay=1&title=0&byline=0&portrait=0',
    title: 'Beaches of Sri Lanka',
    description: 'Pristine coastlines and crystal clear waters'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Traditional Dance',
    description: 'Kandyan dance performers in traditional attire'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1590732488817-d0da8b6c3a36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Wildlife Safari',
    description: 'Elephants at Yala National Park'
  },
  {
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1625736300986-175f07c0d463?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    url: 'https://player.vimeo.com/video/912666498?autoplay=1&title=0&byline=0&portrait=0',
    title: 'Temple of the Tooth',
    description: 'Sacred Buddhist temple in Kandy'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1596306499317-8490232098fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Local Cuisine',
    description: 'Authentic Sri Lankan dishes and spices'
  }
];

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      {error ? (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <ImageOff className="h-12 w-12 text-gray-400" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          onError={() => setError(true)}
          onLoad={() => setLoading(false)}
        />
      )}
    </div>
  );
};

interface ModalProps {
  item: typeof galleryItems[0];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X className="h-8 w-8" />
      </button>
      
      <div className="max-w-7xl w-full">
        {item.type === 'image' ? (
          <ImageWithFallback
            src={item.url}
            alt={item.title}
            className="w-full h-[80vh] object-contain"
          />
        ) : (
          <div className="relative pb-[56.25%] h-0 bg-black rounded-lg overflow-hidden">
            <iframe
              src={item.url}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        
        <div className="mt-4 text-white">
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <p className="text-gray-300">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const GalleryItem: React.FC<{ item: typeof galleryItems[0]; onClick: () => void }> = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer bg-gray-100"
    >
      <ImageWithFallback
        src={item.type === 'image' ? item.url : item.thumbnail}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-200 text-sm">{item.description}</p>
        </div>
        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/30 rounded-full p-4 backdrop-blur-sm">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visual Journey</h2>
          <p className="text-xl text-gray-600">Experience the beauty of Sri Lanka through our lens</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>
      
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}