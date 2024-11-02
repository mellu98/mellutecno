import React from 'react';
import { Laptop2, Smartphone, Wrench, Clock, MessageSquare, Calendar } from 'lucide-react';
import BookingForm from './components/BookingForm';
import ContactForm from './components/ContactForm';
import ServiceCard from './components/ServiceCard';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto" id="services">
        <h2 className="text-3xl font-bold text-center mb-12">I Nostri Servizi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Laptop2 className="w-8 h-8" />}
            title="Riparazione PC e Laptop"
            description="Risoluzione problemi hardware e software, aggiornamenti sistema, pulizia e ottimizzazione."
          />
          <ServiceCard 
            icon={<Smartphone className="w-8 h-8" />}
            title="Riparazione Smartphone"
            description="Sostituzione display, batterie, recovery dati, problemi software."
          />
          <ServiceCard 
            icon={<Wrench className="w-8 h-8" />}
            title="Assistenza Tecnica"
            description="Supporto tecnico specializzato per qualsiasi dispositivo elettronico."
          />
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-white px-4" id="booking">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Prenota un Appuntamento</h2>
          <BookingForm />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4" id="contact">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contattaci</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/logo.png" 
              alt="MELLUTECNO" 
              className="w-32 h-auto"
            />
          </div>
          <p className="mb-2">Assistenza Tecnica Professionale</p>
          <div className="flex justify-center gap-4 mt-4">
            <Clock className="w-5 h-5" /> <span>Lun-Sab: 9:00-18:00</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;