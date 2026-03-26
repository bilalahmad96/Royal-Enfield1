import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';

const models = [
  {
    id: 1,
    name: 'Classic 350',
    price: 'Starting at $4,599',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800',
    category: 'Classic',
    desc: 'The timeless classic, reimagined for the modern era.'
  },
  {
    id: 2,
    name: 'Himalayan 450',
    price: 'Starting at $5,899',
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=800',
    category: 'Adventure',
    desc: 'Built for all roads. Built for no roads.'
  },
  {
    id: 3,
    name: 'Interceptor 650',
    price: 'Starting at $6,149',
    image: 'https://images.unsplash.com/photo-1614165933388-9b55d38823c3?auto=format&fit=crop&q=80&w=800',
    category: 'Twin',
    desc: 'The quintessential modern classic roadster.'
  },
  {
    id: 4,
    name: 'Meteor 350',
    price: 'Starting at $4,899',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800',
    category: 'Cruiser',
    desc: 'The easy-going cruiser for long highway hauls.'
  },
  {
    id: 5,
    name: 'Continental GT 650',
    price: 'Starting at $6,349',
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800',
    category: 'Cafe Racer',
    desc: 'A nod to the golden era of cafe racing.'
  },
  {
    id: 6,
    name: 'Super Meteor 650',
    price: 'Starting at $7,299',
    image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&q=80&w=800',
    category: 'Cruiser',
    desc: 'The ultimate cruiser with twin-cylinder power.'
  }
];

const Models = () => {
  return (
    <div className="pt-24 pb-20 dark:bg-bg-dark min-h-screen">
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-oswald text-accent uppercase tracking-widest text-sm"
          >
            Our Fleet
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-playfair font-bold mt-4"
          >
            Explore Models
          </motion.h1>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From the timeless Classic to the adventure-ready Himalayan, find the Royal Enfield that speaks to your soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {models.map((model, i) => (
            <motion.div
              key={model.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-black border border-gray-100 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-accent text-white font-oswald text-xs uppercase tracking-widest px-3 py-1">
                  {model.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold mb-2">{model.name}</h3>
                <p className="text-accent font-oswald text-lg mb-4">{model.price}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                  {model.desc}
                </p>
                <div className="flex space-x-4">
                  <button className="flex-1 btn-accent py-2 text-sm flex items-center justify-center group/btn">
                    Book Now <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button className="p-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Info size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="mt-32 bg-secondary dark:bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold">Maintenance Plans</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">Keep your legacy running forever with our official service plans.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Essential', price: '$199', features: ['Annual Service', 'Oil Change', 'Chain Cleaning', 'Brake Check'], accent: false },
              { name: 'Royal Care', price: '$399', features: ['Bi-annual Service', 'RSA (Roadside Assist)', 'Engine Tuning', 'Free Wash', 'Priority Booking'], accent: true },
              { name: 'Legendary', price: '$599', features: ['Unlimited Service', 'Full RSA', 'Bespoke Detailing', 'Genuine Parts Discount', 'Event Access'], accent: false }
            ].map((plan, i) => (
              <div 
                key={i}
                className={`p-10 text-center border ${plan.accent ? 'border-accent bg-white dark:bg-bg-dark shadow-2xl scale-105 z-10' : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-bg-dark'}`}
              >
                <h3 className="font-oswald uppercase tracking-widest text-xl mb-4">{plan.name}</h3>
                <div className="text-4xl font-playfair font-bold mb-8">{plan.price}<span className="text-sm font-montserrat font-normal opacity-50">/year</span></div>
                <ul className="space-y-4 mb-10 text-sm opacity-70">
                  {plan.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <button className={`w-full py-3 font-oswald uppercase tracking-widest text-sm transition-all ${plan.accent ? 'bg-accent text-white hover:bg-black' : 'border border-accent text-accent hover:bg-accent hover:text-white'}`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Models;
