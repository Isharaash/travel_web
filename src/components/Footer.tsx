import React from 'react';
import { Compass, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Compass className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold text-white">Ceylon Explorer</span>
            </div>
            <p className="text-gray-400">Your gateway to authentic Sri Lankan experiences.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#destinations" className="hover:text-emerald-500">Destinations</a></li>
              <li><a href="#experiences" className="hover:text-emerald-500">Experiences</a></li>
              <li><a href="#" className="hover:text-emerald-500">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                info@ceylonexplorer.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                +94 76 882 8691
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Colombo, Sri Lanka
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for travel updates and exclusive offers.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
              />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ceylon Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}