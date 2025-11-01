import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const garageImages = [
    {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop&auto=format",
      title: "Premium Car Service",
      description: "Luxury vehicle maintenance"
    },
    {
      url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop&auto=format",
      title: "Engine Diagnostics",
      description: "Advanced technical care"
    },
    {
      url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&auto=format",
      title: "Modern Workshop",
      description: "State-of-the-art facility"
    },
    {
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop&auto=format",
      title: "Expert Technicians",
      description: "Certified professionals"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div>
      <section id="about" className="py-20  relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Image Grid Section */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6 lg:gap-8">
                {garageImages.map((image, index) => (
                  <motion.div 
                    key={index} 
                    className="relative group mx-auto"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    {/* Glow Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-2xl rounded-2xl"
                      whileHover={{ blur: "3xl" }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Image Container */}
                    <motion.div 
                      className="relative backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border-2 border-amber-500/30 rounded-2xl overflow-hidden h-[300px] w-[300px]"
                      whileHover={{ 
                        borderColor: "rgba(251, 191, 36, 0.5)",
                        boxShadow: "0 0 30px rgba(251, 191, 36, 0.3)"
                      }}
                    >
                      <motion.img 
                        src={image.url} 
                        alt={image.title} 
                        className="w-full h-full object-cover opacity-90"
                        whileHover={{ 
                          opacity: 1,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.7 }}
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Content Overlay */}
                      <motion.div 
                        className="absolute bottom-3 left-3 right-3"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <div className="text-white font-bold text-sm mb-1">{image.title}</div>
                        <div className="text-amber-200/80 text-xs">{image.description}</div>
                      </motion.div>
                      
                      {/* Hover Effect */}
                      <motion.div 
                        className="absolute inset-0 bg-amber-500/10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div variants={textVariants}>
              <motion.div 
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="w-12 h-px bg-gradient-to-r from-amber-500 to-orange-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.span 
                  className="text-amber-400 font-bold tracking-widest uppercase text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Our Legacy
                </motion.span>
                <motion.div 
                  className="w-12 h-px bg-gradient-to-r from-orange-500 to-amber-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.div>

              <motion.h2 
                className="text-5xl lg:text-6xl font-black mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Premium Auto
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
                  Care Experts
                </span>
              </motion.h2>

              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.div 
                  className="backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-2xl p-6 group"
                  variants={itemVariants}
                  whileHover={{ 
                    borderColor: "rgba(251, 191, 36, 0.4)",
                    backgroundColor: "rgba(251, 191, 36, 0.1)",
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-amber-100/90 leading-relaxed text-lg">
                    Founded with a passion for automotive excellence, <span className="text-amber-300 font-semibold">Ajal Garage</span> has been delivering premium auto care services since 2010. We started as a small team of dedicated mechanics and have grown into a trusted name in automotive services.
                  </p>
                </motion.div>

                <motion.div 
                  className="backdrop-blur-xl bg-gradient-to-br from-orange-500/5 to-amber-500/5 border border-orange-500/20 rounded-2xl p-6 group"
                  variants={itemVariants}
                  whileHover={{ 
                    borderColor: "rgba(249, 115, 22, 0.4)",
                    backgroundColor: "rgba(249, 115, 22, 0.1)",
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <p className="text-amber-100/90 leading-relaxed text-lg">
                    Today, we specialize in comprehensive automotive services including engine diagnostics, brake repair, transmission service, and premium car maintenance. Our state-of-the-art facility is equipped with the latest technology to serve your vehicle with the care it deserves.
                  </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div 
                  className="grid grid-cols-2 gap-4 mt-6"
                  variants={containerVariants}
                >
                  {[
                    "Certified Technicians",
                    "24/7 Service",
                    "Genuine Parts",
                    "Free Pickup"
                  ].map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className={`flex items-center gap-3 ${idx % 2 === 0 ? 'bg-amber-500/10 border-amber-500/20' : 'bg-orange-500/10 border-orange-500/20'} border rounded-xl p-3`}
                      variants={featureVariants}
                      whileHover="hover"
                    >
                      <motion.div 
                        className={`${idx % 2 === 0 ? 'bg-amber-500' : 'bg-orange-500'} w-8 h-8 rounded-full flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-black font-bold text-sm">✓</span>
                      </motion.div>
                      <motion.span 
                        className="text-amber-200 text-sm font-semibold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.5 }}
                      >
                        {feature}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;