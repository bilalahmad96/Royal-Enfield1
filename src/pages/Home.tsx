import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Compass, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1920',
    title: 'Ride the Legacy',
    subtitle: 'Pure Motorcycling. Timeless Power.',
    tagline: 'Built Like a Gun, Goes Like a Bullet.'
  },
  {
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1920',
    title: 'Own the Road',
    subtitle: 'Unleash the Rider Within.',
    tagline: 'Engineered for Adventure.'
  },
  {
    image: 'https://images.unsplash.com/photo-1614165933388-9b55d38823c3?auto=format&fit=crop&q=80&w=1920',
    title: 'Experience the Royal Ride',
    subtitle: 'Elegance in Every Mile.',
    tagline: 'Crafted for Legends.'
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: currentSlide === index ? 0 : 20, opacity: currentSlide === index ? 1 : 0 }}
                transition={{ delay: 0.2 }}
                className="font-oswald uppercase tracking-[0.3em] text-accent text-sm mb-4"
              >
                {slide.tagline}
              </motion.span>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: currentSlide === index ? 0 : 30, opacity: currentSlide === index ? 1 : 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-8xl font-playfair font-bold text-white mb-6"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: currentSlide === index ? 0 : 30, opacity: currentSlide === index ? 1 : 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-2xl font-montserrat text-white/80 mb-10 max-w-2xl"
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: currentSlide === index ? 0 : 30, opacity: currentSlide === index ? 1 : 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link to="/models" className="btn-accent flex items-center group">
                  Explore Models <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Hero Controls */}
        <button 
          onClick={prevSlide} 
          aria-label="Previous Slide"
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
        >
          <ChevronLeft size={48} />
        </button>
        <button 
          onClick={nextSlide} 
          aria-label="Next Slide"
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
        >
          <ChevronRight size={48} />
        </button>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-12 h-1 transition-all duration-300 ${currentSlide === i ? 'bg-accent' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 bg-white dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-oswald text-accent uppercase tracking-widest text-sm">Our Essence</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-4 mb-8">Where Heritage Meets Refined Engineering</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Step into the world of Royal Enfield, where heritage meets refined engineering and timeless design. Our platform is a curated space for enthusiasts to explore iconic motorcycles, exceptional craftsmanship, and the spirit of pure motorcycling.
            </p>
            <Link to="/about" className="text-accent font-oswald uppercase tracking-widest flex items-center hover:translate-x-2 transition-transform">
              Learn More About Our Journey <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800" 
              alt="Classic Royal Enfield" 
              className="rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-accent p-8 text-white hidden md:block">
              <span className="text-4xl font-playfair font-bold">120+</span>
              <p className="font-oswald uppercase text-xs tracking-widest mt-2">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold">The Royal Experience</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield size={40} />, title: 'Timeless Design', desc: 'Crafted with a focus on aesthetics that never go out of style.' },
              { icon: <Zap size={40} />, title: 'Modern Engineering', desc: 'Classic looks powered by state-of-the-art engine technology.' },
              { icon: <Compass size={40} />, title: 'Adventure Ready', desc: 'Built to conquer any terrain, from city streets to mountain peaks.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white dark:bg-bg-dark p-10 text-center shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-accent mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-playfair font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section 
        className="parallax h-[60vh] flex items-center justify-center text-center px-6"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1920)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 italic">"Ride Beyond Limits"</h2>
          <p className="text-white/80 font-montserrat text-lg">Adventure starts where the road ends. Explore the world on two wheels.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-oswald text-accent uppercase tracking-widest text-sm">Testimonials</span>
            <h2 className="text-4xl font-playfair font-bold mt-4">Stories from the Road</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'James Wilson', role: 'Adventure Rider', text: 'The Himalayan took me through the roughest terrains of Ladakh without a single hiccup. Truly built for adventure.' },
              { name: 'Elena Rodriguez', role: 'Classic Enthusiast', text: 'The Classic 350 is not just a bike; it is a piece of art. The thump of the engine is music to my ears.' },
              { name: 'Arjun Kapoor', role: 'City Commuter', text: 'The Meteor 350 is the perfect cruiser for city rides. Comfortable, stylish, and incredibly smooth.' }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary dark:bg-black p-8 rounded-lg border border-gray-100 dark:border-gray-800"
              >
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="italic text-gray-600 dark:text-gray-400 mb-6">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-oswald uppercase tracking-widest text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-accent mt-1">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
