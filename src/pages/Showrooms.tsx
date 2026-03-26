import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Search } from 'lucide-react';

const showrooms = [
  { id: 1, name: 'Royal Enfield Chennai Flagship', city: 'Chennai', address: '123 Heritage Way, Chennai, TN', phone: '+91 1800 2100 007', hours: '9:00 AM - 8:00 PM' },
  { id: 2, name: 'Mumbai Heritage Store', city: 'Mumbai', address: '45 Marine Drive, Mumbai, MH', phone: '+91 1800 2100 008', hours: '10:00 AM - 9:00 PM' },
  { id: 3, name: 'Delhi Adventure Hub', city: 'Delhi', address: '88 Connaught Place, New Delhi', phone: '+91 1800 2100 009', hours: '9:30 AM - 8:30 PM' },
  { id: 4, name: 'Bangalore Cruiser Lounge', city: 'Bangalore', address: '12 Indiranagar, Bangalore, KA', phone: '+91 1800 2100 010', hours: '10:00 AM - 8:00 PM' },
  { id: 5, name: 'London Classic Garage', city: 'London', address: '77 Baker Street, London, UK', phone: '+44 20 7946 0001', hours: '9:00 AM - 6:00 PM' },
  { id: 6, name: 'California Coastal Ride', city: 'Los Angeles', address: '101 Sunset Blvd, LA, USA', phone: '+1 310 555 0123', hours: '10:00 AM - 7:00 PM' },
];

const Showrooms = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredShowrooms = showrooms.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 dark:bg-bg-dark min-h-screen">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-oswald text-accent uppercase tracking-widest text-sm">Find Us</span>
          <h1 className="text-5xl font-playfair font-bold mt-4">Our Showrooms</h1>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience the Royal Enfield legacy in person. Visit one of our global flagship stores.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <input 
            type="text" 
            placeholder="Search by city or store name..."
            className="w-full px-6 py-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:border-accent outline-none transition-colors font-montserrat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShowrooms.map((store, i) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-black p-8 border border-gray-100 dark:border-gray-800 hover:border-accent transition-all group"
            >
              <h3 className="text-xl font-playfair font-bold mb-6 group-hover:text-accent transition-colors">{store.name}</h3>
              <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-accent shrink-0" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-accent shrink-0" />
                  <span>{store.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={18} className="text-accent shrink-0" />
                  <span>{store.hours}</span>
                </div>
              </div>
              <button className="mt-8 w-full py-3 border border-gray-200 dark:border-gray-800 font-oswald uppercase tracking-widest text-xs hover:bg-accent hover:text-white hover:border-accent transition-all">
                Get Directions
              </button>
            </motion.div>
          ))}
        </div>

        {/* Map Embed Placeholder */}
        <div className="mt-24 h-[500px] bg-gray-100 dark:bg-black relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.634684941019!2d80.2424!3d13.0475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzUxLjAiTiA4MMKwMTQnMzIuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Royal Enfield Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Showrooms;
