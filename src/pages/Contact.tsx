import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'How can I book a test ride?', a: 'You can book a test ride through our website or by visiting your nearest Royal Enfield showroom. Simply choose your preferred model and date.' },
  { q: 'What is the warranty period for a new motorcycle?', a: 'All new Royal Enfield motorcycles come with a standard 3-year or 30,000 km warranty, whichever comes first.' },
  { q: 'Can I customize my Royal Enfield?', a: 'Yes! We offer a wide range of genuine motorcycle accessories (GMA) to help you customize your ride while maintaining warranty.' },
  { q: 'How often should I service my bike?', a: 'We recommend servicing your motorcycle every 6 months or 5,000 km to ensure peak performance and longevity.' }
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 pb-20 dark:bg-bg-dark min-h-screen">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-oswald text-accent uppercase tracking-widest text-sm">Get In Touch</span>
          <h1 className="text-5xl font-playfair font-bold mt-4">Contact Us</h1>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions or want to share your riding story? We are here to listen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white dark:bg-black p-10 shadow-2xl border border-gray-100 dark:border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-oswald uppercase text-xs tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 bg-secondary dark:bg-bg-dark border-none focus:ring-2 focus:ring-accent outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-oswald uppercase text-xs tracking-widest">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 bg-secondary dark:bg-bg-dark border-none focus:ring-2 focus:ring-accent outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-oswald uppercase text-xs tracking-widest">Subject</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 bg-secondary dark:bg-bg-dark border-none focus:ring-2 focus:ring-accent outline-none"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="font-oswald uppercase text-xs tracking-widest">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary dark:bg-bg-dark border-none focus:ring-2 focus:ring-accent outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="btn-accent w-full flex items-center justify-center group">
                Send Message <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & FAQ */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 text-white"><Phone size={24} /></div>
                <div>
                  <h4 className="font-oswald uppercase tracking-widest text-sm mb-1">Call Us</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">+91 1800 2100 007</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 text-white"><Mail size={24} /></div>
                <div>
                  <h4 className="font-oswald uppercase tracking-widest text-sm mb-1">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">support@royalenfield.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-bold mb-6">Frequently Asked Questions</h3>
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 dark:border-gray-800">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full py-4 flex justify-between items-center text-left hover:text-accent transition-colors"
                  >
                    <span className="font-montserrat font-medium">{faq.q}</span>
                    <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
