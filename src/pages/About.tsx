import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, History } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20 dark:bg-bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1920)' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-white"
          >
            Our Story
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-accent mx-auto mt-6"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold mb-8">A Legacy Built on Elegance, Power, and Enduring Excellence</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Royal Enfield is the oldest motorcycle brand in continuous production. Since 1901, we have been more than just a manufacturer; we are a community of riders who believe in the philosophy of "Pure Motorcycling."
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our platform is a curated space for enthusiasts to explore iconic motorcycles, exceptional craftsmanship, and the spirit of pure motorcycling. From detailed model insights to bespoke customization and riding experiences, we celebrate a legacy built on elegance, power, and enduring excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://picsum.photos/seed/about1/600/800" alt="Craftsmanship" className="rounded-lg shadow-lg mt-12" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/about2/600/800" alt="Riding" className="rounded-lg shadow-lg" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: <History size={32} />, value: '1901', label: 'Founded' },
            { icon: <Globe size={32} />, value: '60+', label: 'Countries' },
            { icon: <Users size={32} />, value: '1M+', label: 'Riders' },
            { icon: <Award size={32} />, value: '100+', label: 'Awards' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary dark:bg-black p-10 text-center rounded-xl border border-gray-100 dark:border-gray-800"
            >
              <div className="text-accent mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-playfair font-bold mb-2">{stat.value}</div>
              <div className="font-oswald uppercase tracking-widest text-xs opacity-60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="bg-accent text-white p-12 md:p-20 rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 -translate-y-1/2 translate-x-1/4">
            <History size={400} />
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-playfair font-bold mb-6">Our Vision</h3>
              <p className="opacity-90 leading-relaxed">
                To be the global leader in the mid-size motorcycle segment, inspiring riders around the world to explore the unknown and experience the joy of pure motorcycling.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-playfair font-bold mb-6">Our Mission</h3>
              <p className="opacity-90 leading-relaxed">
                To create evocative motorcycles that are simple, resilient, and fun to ride, while fostering a vibrant community that celebrates the spirit of adventure and heritage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
