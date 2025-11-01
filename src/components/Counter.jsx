import React from 'react'
import { motion } from 'framer-motion'
import { Users, CheckCircle, Award, Globe } from 'lucide-react'

const Counter = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: CheckCircle, value: '1000+', label: 'Projects Completed' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Globe, value: '30+', label: 'Countries Served' }
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

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      borderColor: "rgba(245, 158, 11, 0.4)",
      backgroundColor: "rgba(245, 158, 11, 0.1)",
      boxShadow: "0 0 50px rgba(245, 158, 11, 0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: 0.4
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.6
      }
    }
  };

  return (
    <section id="stats" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="text-center p-6 lg:p-8 backdrop-blur-xl bg-white/5 border border-amber-500/20 rounded-2xl cursor-pointer relative overflow-hidden"
              >
                {/* Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.3 }}
                  transition={{ duration: 1 }}
                  whileHover={{ scale: 1.2, opacity: 0.5 }}
                />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <motion.div
                    variants={iconVariants}
                  >
                    <Icon className="h-10 w-10 lg:h-12 lg:w-12 mx-auto relative z-10 text-amber-400" />
                  </motion.div>
                </div>
                
                {/* Number */}
                <motion.div 
                  className="text-3xl lg:text-4xl font-black mb-2 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent"
                  variants={numberVariants}
                >
                  {stat.value}
                </motion.div>
                
                {/* Label */}
                <motion.div 
                  className="text-amber-200/70 font-medium text-sm lg:text-base"
                  variants={textVariants}
                >
                  {stat.label}
                </motion.div>

                {/* Floating particles */}
                <motion.div
                  className="absolute top-2 right-2 w-1 h-1 lg:w-2 lg:h-2 bg-amber-400 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-1 h-1 bg-orange-400 rounded-full"
                  animate={{
                    y: [0, 8, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5 + 1
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Counter