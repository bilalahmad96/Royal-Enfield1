import React from 'react';
import { motion } from 'framer-motion';

const historyItems = [
  {
    year: '1901',
    title: 'The Beginning',
    desc: 'The first Royal Enfield motorcycle was produced, featuring a 239cc engine.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '1932',
    title: 'The Bullet is Born',
    desc: 'The legendary "Bullet" was first introduced, a name that would become synonymous with the brand.',
    image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '1955',
    title: 'Indian Connection',
    desc: 'Enfield India was formed, starting a long and storied history in the Indian subcontinent.',
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '2016',
    title: 'The Himalayan',
    desc: 'Royal Enfield introduced its first purpose-built adventure tourer, the Himalayan.',
    image: 'https://images.unsplash.com/photo-1614165933388-9b55d38823c3?auto=format&fit=crop&q=80&w=800'
  }
];

const History = () => {
  return (
    <div className="pt-24 pb-20 dark:bg-bg-dark min-h-screen">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-oswald text-accent uppercase tracking-widest text-sm">Our Legacy</span>
          <h1 className="text-5xl font-playfair font-bold mt-4">A Century of Pure Motorcycling</h1>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Since 1901, Royal Enfield has been crafting motorcycles that are more than just machines. They are symbols of freedom, resilience, and timeless style.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gray-200 dark:bg-gray-800 hidden md:block" />

          <div className="space-y-24">
            {historyItems.map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div 
                  initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2 px-6 mb-8 md:mb-0"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-accent rounded-full border-4 border-white dark:border-bg-dark z-10 hidden md:flex items-center justify-center text-white font-oswald text-xs">
                  {item.year}
                </div>

                <motion.div 
                  initial={{ x: i % 2 === 0 ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2 px-12 text-center md:text-left"
                >
                  <span className="text-accent font-oswald text-2xl font-bold md:hidden block mb-2">{item.year}</span>
                  <h3 className="text-3xl font-playfair font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mt-32 py-20 bg-secondary dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold">Vintage Gallery</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">Glimpses of our storied past.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <motion.div
                key={n}
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden cursor-pointer group"
              >
                <img 
                  src={`https://picsum.photos/seed/bike${n}/800/800`} 
                  alt={`Vintage Bike ${n}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
