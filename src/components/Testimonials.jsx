import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Wrench, Car } from 'lucide-react';
import Banner from './Banner';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Car Owner",
      company: "Premium Customer",
      rating: 5,
      text: "Ajal Garage provided exceptional service for my luxury sedan. Their attention to detail and professional approach made me feel confident in their work. Will definitely return!",
      vehicle: "BMW 5 Series"
    },
    {
      name: "Mike Rodriguez",
      position: "Fleet Manager",
      company: "City Transport Co.",
      rating: 5,
      text: "We've trusted Ajal Garage with our entire fleet for over 3 years. Their reliability and expertise have saved us time and money. Outstanding service every time!",
      vehicle: "Fleet Vehicles"
    },
    {
      name: "Emily Chen",
      position: "Business Owner",
      company: "Chen Enterprises",
      rating: 5,
      text: "The team at Ajal Garage transformed my classic car. Their craftsmanship and dedication to quality are unmatched. Highly recommended for any automotive needs!",
      vehicle: "Classic Mercedes"
    },
    {
      name: "David Thompson",
      position: "Car Enthusiast",
      company: "Performance Specialist",
      rating: 5,
      text: "I've tried many garages, but Ajal Garage stands out with their technical expertise and customer service. They truly understand what car owners need.",
      vehicle: "Audi RS5"
    },
    {
      name: "Omar Al-Hinai",
      position: "Government Official",
      company: "Ministry of Transport",
      rating: 5,
      text: "Professional service with genuine care for customers. Ajal Garage has been maintaining our official vehicles for years with exceptional reliability.",
      vehicle: "Government Fleet"
    },
    {
      name: "Fatima Al-Rashdi",
      position: "Family Car Owner",
      company: "Regular Customer",
      rating: 5,
      text: "As a woman, I appreciate how they explain everything clearly and never overcharge. My family has been coming here for generations!",
      vehicle: "Toyota Land Cruiser"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  React.useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <Banner 
        title="Customer Testimonials"
        subtitle="Hear what our valued customers have to say about their experience with Ajal Garage. Real stories from real people."
        iconOne={Star}
        iconTwo={Quote}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { number: "2,500+", label: "Happy Customers", icon: Star },
            { number: "4.9/5", label: "Average Rating", icon: Quote },
            { number: "98%", label: "Would Recommend", icon: Wrench },
            { number: "15+", label: "Years Trusted", icon: Car }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-stone-900 border border-amber-800 rounded-xl p-6 text-center hover:border-amber-600 transition-all duration-300"
              >
                <div className="bg-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="text-2xl font-bold text-amber-400 mb-1">{stat.number}</div>
                <div className="text-amber-300 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Testimonial Carousel */}
        <div className="mb-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-amber-50 mb-4">What Our Clients Say</h2>
            <p className="text-amber-300 text-lg max-w-2xl mx-auto">
              Real success stories from our valued customers and partners
            </p>
          </motion.div>

          <motion.div 
            className="bg-stone-900 border border-amber-800 rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', 
                backgroundSize: '50px 50px' 
              }} />
            </div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col lg:flex-row items-center gap-8 mb-8"
                >
                  {/* Customer Avatar */}
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 rounded-full blur-xl bg-amber-400/30" />
                      <div className="relative w-24 h-24 rounded-full border-4 border-amber-500 flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-2xl font-black text-amber-300">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Customer Info */}
                  <div className="text-center lg:text-left flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-amber-50 mb-1">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-amber-400 font-semibold mb-1">
                          {testimonials[currentIndex].position}
                        </p>
                        <p className="text-amber-300 text-sm mb-2">
                          {testimonials[currentIndex].company}
                        </p>
                        <div className="text-amber-200 text-xs bg-amber-500/20 px-2 py-1 rounded-full inline-block">
                          {testimonials[currentIndex].vehicle}
                        </div>
                      </div>
                      
                      <div className="flex gap-1 justify-center lg:justify-start mt-4 lg:mt-0">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-lg leading-relaxed text-amber-200 italic relative"
                    >
                      <Quote className="absolute -left-2 -top-2 h-6 w-6 text-amber-400/30" />
                      "{testimonials[currentIndex].text}"
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8">
                <motion.button
                  onClick={prevTestimonial}
                  className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-full hover:bg-amber-500/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="h-5 w-5 text-amber-400" />
                </motion.button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex 
                          ? 'bg-amber-400 w-8 shadow-lg shadow-amber-400/30' 
                          : 'bg-amber-600 w-2 hover:bg-amber-500'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextTestimonial}
                  className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-full hover:bg-amber-500/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="h-5 w-5 text-amber-400" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mb-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-amber-50 mb-4">More Happy Customers</h3>
            <p className="text-amber-300">Read what others are saying about their experience</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-stone-900 border border-amber-800 rounded-xl p-6 hover:border-amber-600 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-amber-300 font-bold border border-amber-500/30">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-50">{testimonial.name}</h4>
                    <p className="text-amber-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-amber-200 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-3 text-amber-300 text-xs bg-amber-500/10 px-2 py-1 rounded-full inline-block">
                  {testimonial.vehicle}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
                    <div className="relative overflow-hidden bg-gradient-to-br from-amber-900/30 to-orange-900/20 backdrop-blur-2xl border border-amber-500/30 rounded-3xl p-16">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Ajal Garage Difference?</h3>
            <p className="text-amber-100 mb-6">
              Join our family of satisfied customers and experience automotive care like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-amber-400 px-6 py-3 rounded-lg font-semibold hover:bg-stone-900 transition-colors duration-300 border border-amber-500/30">
                Book Your Service
              </button>
              <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300">
                View Our Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;