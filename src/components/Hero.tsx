import React from 'react';
import { Shield, Star, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/logo.png" 
              alt="MELLUTECNO" 
              className="w-64 h-auto"
            />
          </div>
          <p className="text-xl md:text-2xl mb-8">Assistenza Tecnica Professionale per i Tuoi Dispositivi</p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span>Garanzia Assicurata</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6" />
              <span>Servizio Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6" />
              <span>Interventi Rapidi</span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <a href="#booking" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Prenota Ora
            </a>
            <a href="#contact" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contattaci
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;