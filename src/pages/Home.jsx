import React, { useState, useEffect } from 'react';
import Imageslider from "../components/Slider";
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronRight, Quote, ChevronLeft, ChevronRight as RightIcon, Star, ChevronDown, ArrowRight } from 'lucide-react'
import { 
  Users,
  CheckCircle,
  Award,
  Wrench,
  Clock,
  ShieldCheck,
  Sparkles,
  Settings,
  Heart,
  Target,
  Users as UsersIcon,
  Award as AwardIcon
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Testimonial navigation
  const nextTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: CheckCircle, value: '1000+', label: 'Projects Completed' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Globe, value: '30+', label: 'Countries Served' }
  ];

  // Benefits data array
  const benefits = [
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Our certified mechanics have years of experience in handling all types of vehicles with precision and care.",
      color: "#f59e0b"
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "We value your time. Our efficient processes ensure your vehicle is serviced and ready when you need it.",
      color: "#f97316"
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Every service comes with our quality guarantee. We use only genuine parts and follow strict quality standards.",
      color: "#d97706"
    },
    {
      icon: Sparkles,
      title: "Premium Care",
      description: "From basic maintenance to complex repairs, we provide premium care that keeps your vehicle running smoothly.",
      color: "#ea580c"
    },
    {
      icon: Settings,
      title: "Advanced Equipment",
      description: "Our workshop is equipped with state-of-the-art diagnostic tools and technology for accurate repairs.",
      color: "#dc2626"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We provide transparent pricing and regular updates on your vehicle's status.",
      color: "#65a30d"
    }
  ];

  // Values data array
  const values = [
    {
      icon: Heart,
      title: "Customer Passion",
      description: "We are deeply committed to exceeding customer expectations and building lasting relationships.",
      color: "#f59e0b"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every service, ensuring the highest quality standards are met.",
      color: "#f97316"
    },
    {
      icon: UsersIcon,
      title: "Integrity",
      description: "Honest, transparent service with fair pricing and clear communication at all times.",
      color: "#d97706"
    },
    {
      icon: AwardIcon,
      title: "Innovation",
      description: "Continuously adopting new technologies and methods to provide better automotive solutions.",
      color: "#ea580c"
    }
  ];

  // Testimonials data array
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Car Owner",
      company: "Premium Customer",
      rating: 5,
      text: "Ajal Garage provided exceptional service for my luxury sedan. Their attention to detail and professional approach made me feel confident in their work. Will definitely return!"
    },
    {
      name: "Mike Rodriguez",
      position: "Fleet Manager",
      company: "City Transport Co.",
      rating: 5,
      text: "We've trusted Ajal Garage with our entire fleet for over 3 years. Their reliability and expertise have saved us time and money. Outstanding service every time!"
    },
    {
      name: "Emily Chen",
      position: "Business Owner",
      company: "Chen Enterprises",
      rating: 5,
      text: "The team at Ajal Garage transformed my classic car. Their craftsmanship and dedication to quality are unmatched. Highly recommended for any automotive needs!"
    },
    {
      name: "David Thompson",
      position: "Car Enthusiast",
      company: "Performance Specialist",
      rating: 5,
      text: "I've tried many garages, but Ajal Garage stands out with their technical expertise and customer service. They truly understand what car owners need."
    }
  ];

  // Team data array
  const team = [
    {
      name: "Alex Johnson",
      position: "Head Mechanic",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format",
      description: "15+ years of experience in automotive repair and diagnostics"
    },
    {
      name: "Sarah Williams",
      position: "Service Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format",
      description: "Expert in customer service and automotive maintenance planning"
    },
    {
      name: "Mike Chen",
      position: "Technical Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format",
      description: "Specialized in engine diagnostics and performance tuning"
    },
    {
      name: "Emily Rodriguez",
      position: "Quality Control",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&auto=format",
      description: "Ensures every service meets our premium quality standards"
    }
  ];

  // Features data array
  const features = [
    "Complete Engine Diagnostics",
    "Brake System Repair & Maintenance",
    "Transmission Services",
    "Electrical System Repair",
    "AC & Heating Services",
    "Suspension & Steering Repair",
    "Oil Change & Fluid Services",
    "Tire Services & Wheel Alignment"
  ];

  // FAQ data array
  const faqs = [
    {
      question: "How long does a typical service take?",
      answer: "Most standard services like oil changes and basic maintenance take 1-2 hours. Complex repairs may take longer, but we always provide accurate time estimates upfront."
    },
    {
      question: "Do you offer warranty on your services?",
      answer: "Yes, all our services come with a comprehensive warranty. We stand behind our work and use only genuine parts to ensure long-lasting quality."
    },
    {
      question: "Can I get a quote before the service?",
      answer: "Absolutely! We provide detailed, transparent quotes before any work begins. There are no hidden charges, and we'll explain everything clearly."
    },
    {
      question: "Do you work on all vehicle brands?",
      answer: "Yes, our certified technicians are trained to work on all major vehicle brands, from domestic to European and Asian imports."
    },
    {
      question: "What are your service hours?",
      answer: "We're open Monday to Saturday from 8:00 AM to 6:00 PM. Emergency services may be available outside these hours - please call to check."
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

  const valueCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  const teamCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

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

  return (
    <div
      className="text-white min-h-screen"
      style={{
        background: "radial-gradient(circle, rgba(0, 0, 0, 1) 63%, rgba(0, 0, 0, 1) 94%)"
      }}
    >
      <Imageslider />
      
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

      <section id="about" className="py-20 relative overflow-hidden">
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
            whileInView="visible"
            viewport={{ once: true }}
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
                        viewport={{ once: true }}
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
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-12 h-px bg-gradient-to-r from-amber-500 to-orange-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
                <motion.span 
                  className="text-amber-400 font-bold tracking-widest uppercase text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Our Legacy
                </motion.span>
                <motion.div 
                  className="w-12 h-px bg-gradient-to-r from-orange-500 to-amber-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.div>

              <motion.h2 
                className="text-5xl lg:text-6xl font-black mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
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
                        viewport={{ once: true }}
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

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-black relative overflow-hidden">
        {/* Beach-themed Background Effects */}
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
          {/* Beach Wave Effect */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-400/5 to-transparent"
            animate={{
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
              Why Choose Us
              <motion.div 
                className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Ajal Garage
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-amber-100/80 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Premium automotive care with expertise, innovation, and unwavering commitment
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  className="group backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-2xl p-8 relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(251, 191, 36, 0.4)",
                    backgroundColor: "rgba(251, 191, 36, 0.1)"
                  }}
                >
                  {/* Hover Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-amber-500/10 rounded-2xl blur-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <motion.div 
                        className="relative flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute inset-0 bg-amber-500/20 rounded-xl blur-md" />
                        <div className="relative p-4 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30">
                          <Icon className="w-8 h-8 text-amber-400" />
                        </div>
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.h3 
                          className="text-2xl font-bold mb-3 text-amber-100"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {benefit.title}
                        </motion.h3>
                        <motion.p 
                          className="text-amber-200/80 leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: idx * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          {benefit.description}
                        </motion.p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <motion.div
                    className="absolute top-3 right-3 w-2 h-2 bg-amber-400 rounded-full"
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.5
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          {/* <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-4 px-8 py-4 backdrop-blur-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(251, 191, 36, 0.5)",
                boxShadow: "0 0 30px rgba(251, 191, 36, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-amber-300 font-semibold text-lg">Experience Premium Service</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-5 h-5 text-amber-400" />
              </motion.div>
            </motion.div>
          </motion.div> */}
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-gradient-to-b from-black via-amber-900/10 to-black relative overflow-hidden">
        {/* Background Effects */}
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
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  variants={valueCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                >
                  <div className="backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-2xl p-8 hover:bg-amber-500/10 transition-all relative overflow-hidden">
                    {/* Hover Glow */}
                    <motion.div 
                      className="absolute inset-0 bg-amber-500/10 rounded-2xl blur-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <div className="relative inline-block mb-6">
                        <motion.div 
                          className="absolute inset-0 rounded-full blur-2xl group-hover:blur-3xl transition-all"
                          style={{ backgroundColor: value.color, opacity: 0.4 }}
                          whileHover={{ scale: 1.2 }}
                        />
                        <motion.div 
                          className="relative w-20 h-20 rounded-full flex items-center justify-center mx-auto border-2 border-amber-500/30"
                          style={{ backgroundColor: `${value.color}15` }}
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="h-10 w-10 text-amber-400" />
                        </motion.div>
                      </div>
                      
                      <motion.h3 
                        className="text-2xl font-bold mb-4 text-amber-100"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {value.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-amber-200/80 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {value.description}
                      </motion.p>
                    </div>

                    {/* Floating Element */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-amber-900/20 via-orange-900/20 to-amber-900/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
              <motion.div 
                className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
              Testimonials
              <motion.div 
                className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-amber-100/80 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Real success stories from our valued customers and partners
            </motion.p>
          </div>

          <motion.div 
            className="backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-400/30 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 h-12 w-12 text-amber-400/30" />
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', 
                backgroundSize: '50px 50px' 
              }} />
            </div>

            <div className="relative z-10">
              {/* Testimonial Content with AnimatedPresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-8 mb-8"
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute inset-0 rounded-full blur-2xl bg-amber-400/30"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative w-32 h-32 rounded-full border-4 border-amber-400 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-4xl font-black text-amber-300">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-amber-100">
                      {testimonials[currentIndex].name}
                    </h3>
                    
                    <p className="text-amber-400 font-semibold mb-1">
                      {testimonials[currentIndex].position}
                    </p>
                    
                    <p className="text-amber-200/80 mb-3">
                      {testimonials[currentIndex].company}
                    </p>
                    
                    <div className="flex gap-1 justify-center md:justify-start">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Testimonial Text with AnimatedPresence */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg leading-relaxed mb-8 italic text-amber-100/90 text-center md:text-left"
                >
                  "{testimonials[currentIndex].text}"
                </motion.p>
              </AnimatePresence>

              <div className="flex items-center justify-between">
                <motion.button
                  onClick={prevTestimonial}
                  className="backdrop-blur-xl bg-amber-500/10 border border-amber-400/30 p-3 rounded-full hover:bg-amber-500/20 transition-all hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="h-6 w-6 text-amber-400" />
                </motion.button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-amber-400 w-8' : 'bg-amber-600 w-2'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      style={{
                        boxShadow: index === currentIndex ? '0 0 20px #f59e0b' : 'none'
                      }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextTestimonial}
                  className="backdrop-blur-xl bg-amber-500/10 border border-amber-400/30 p-3 rounded-full hover:bg-amber-500/20 transition-all hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RightIcon className="h-6 w-6 text-amber-400" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-b from-black via-amber-900/10 to-black relative overflow-hidden">
        {/* Background Effects */}
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
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
              Our Expert Team
              <motion.div 
                className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Meet Our Experts
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-amber-100/80 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Our certified technicians bring years of experience and passion to every vehicle they service
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group text-center"
                variants={teamCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
              >
                <div className="backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-2xl p-6 hover:bg-amber-500/10 transition-all relative overflow-hidden">
                  {/* Hover Glow */}
                  <motion.div 
                    className="absolute inset-0 bg-amber-500/10 rounded-2xl blur-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <motion.div 
                        className="absolute inset-0 rounded-full blur-2xl bg-amber-400/20"
                        whileHover={{ scale: 1.1 }}
                      />
                      <motion.div 
                        className="relative w-32 h-32 mx-auto rounded-full border-4 border-amber-400 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.h3 
                      className="text-2xl font-bold mb-2 text-amber-100"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {member.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-amber-400 font-semibold mb-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {member.position}
                    </motion.p>
                    
                    <motion.p 
                      className="text-amber-200/80 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {member.description}
                    </motion.p>
                  </div>

                  {/* Floating Element */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-black via-amber-900/10 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-400/30 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
                  <motion.div 
                    className="w-8 h-px bg-amber-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                  Our Services
                </div>
                <motion.h3 
                  className="text-4xl md:text-5xl font-black mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                    Comprehensive Auto Care
                  </span>
                </motion.h3>
                <motion.p 
                  className="text-amber-100/80 mb-8 leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  We combine technical expertise with premium service to deliver solutions that keep your vehicle running smoothly and safely.
                </motion.p>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3 backdrop-blur-xl bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 hover:bg-amber-500/10 transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                      <span className="text-amber-100 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.button 
                  className="mt-8 px-8 py-4 font-bold rounded-full text-lg transition-all relative overflow-hidden group bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore More <ArrowRight className="h-5 w-5" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </motion.button>
              </motion.div>
              
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl rounded-full" />
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-400/30 rounded-2xl overflow-hidden h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop" 
                    alt="Our Services" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #f59e0b 0px, transparent 2px, transparent 40px)', backgroundSize: '100% 100%' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
              Got Questions?
              <motion.div 
                className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-amber-100/80 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Everything you need to know about our automotive services
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={index}
                  className="backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400/30 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                    whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.1)" }}
                  >
                    <h3 className="text-lg md:text-xl font-bold text-amber-100 group-hover:text-amber-400 transition-colors">
                      {faq.question}
                    </h3>
                    <motion.div 
                      className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <ChevronDown className="w-6 h-6 text-amber-400" />
                    </motion.div>
                  </motion.button>
                  
                  <motion.div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 text-amber-200/80 leading-relaxed border-t border-amber-500/20 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-200/80 mb-6">Still have questions? We're here to help!</p>
            <motion.button 
              className="px-8 py-4 font-bold rounded-full text-lg transition-all relative overflow-hidden group bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 mx-auto justify-center">
                Contact Support <ArrowRight className="h-5 w-5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            className="backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-400/30 rounded-3xl p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Start Your Journey Today
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto text-amber-100/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join hundreds of satisfied customers who trust Ajal Garage for premium automotive care
            </motion.p>
            <motion.button 
              className="px-10 py-5 font-black rounded-full text-xl transition-all hover:scale-110 relative overflow-hidden group bg-gradient-to-r from-amber-400 to-orange-500 text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;