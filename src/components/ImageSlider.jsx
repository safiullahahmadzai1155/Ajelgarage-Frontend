import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Wrench, 
  Star, 
  Clock, 
  Award, 
  Phone, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Shield,
  CheckCircle,
  Zap,
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  FileText,
  ShieldCheck,
  Sparkles,
  Crown,
  Target,
  Gem,
  Car,
  Settings,
  Heart
} from 'lucide-react';

const ImageSlider = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80',
      title: 'Elite Automotive Excellence',
      caption: 'Where Precision Meets Perfection',
      description: 'Experience the pinnacle of automotive care with our bespoke concierge service, available 24/7 for our most discerning clients. Every detail matters.',
      icon: Crown,
      color: 'from-amber-500 to-orange-600',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
      stats: '25+ Years Legacy',
      features: ['24/7 Concierge Service', 'Lifetime Warranty', 'Premium Parts Only', 'Master Technicians'],
      rating: '4.9/5',
      clients: '5000+',
      warranty: {
        years: '5-Year Platinum',
        title: 'Comprehensive Protection',
        features: ['All Parts Covered', 'Labor Included', 'Nationwide Support', '24/7 Claims'],
        icon: ShieldCheck
      },
      highlights: [
        { icon: Users, text: 'Certified Master Technicians' },
        { icon: Car, text: 'Luxury Loaner Vehicles' },
        { icon: Clock, text: '24/7 Emergency Service' }
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80',
      title: 'AI-Powered Diagnostics',
      caption: 'Intelligent Solutions for Modern Vehicles',
      description: 'Our cutting-edge diagnostic systems leverage artificial intelligence to provide unparalleled accuracy and predictive maintenance capabilities.',
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)',
      stats: '99.9% Accuracy',
      features: ['AI-Powered Analysis', 'Real-Time Monitoring', 'Predictive Maintenance', 'Remote Diagnostics'],
      rating: '4.95/5',
      clients: '2800+',
      warranty: {
        years: '3-Year Elite',
        title: 'Diagnostic Guarantee',
        features: ['Accuracy Assurance', 'Free Re-scans', 'Software Updates', 'Expert Support'],
        icon: Target
      },
      highlights: [
        { icon: TrendingUp, text: 'Predictive Analytics' },
        { icon: Settings, text: 'Real-time Monitoring' },
        { icon: Zap, text: 'AI-Powered Insights' }
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=80',
      title: 'Premium Parts Collection',
      caption: 'Authentic Excellence in Every Component',
      description: 'We source exclusively from premium manufacturers, ensuring optimal performance, reliability, and longevity for your luxury vehicle.',
      icon: Gem,
      color: 'from-emerald-500 to-green-600',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      stats: 'Lifetime Guarantee',
      features: ['OEM Certified', 'Performance Upgrades', '5-Year Warranty', 'Direct Import'],
      rating: '4.92/5',
      clients: '3200+',
      warranty: {
        years: '5-Year Premium',
        title: 'Parts Excellence',
        features: ['Genuine Parts', 'Direct Replacement', 'Performance Guarantee', 'Quick Processing'],
        icon: Award
      },
      highlights: [
        { icon: Gem, text: 'Premium OEM Parts' },
        { icon: TrendingUp, text: 'Performance Upgrades' },
        { icon: Shield, text: 'Quality Certified' }
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1920&q=80',
      title: 'Express Elite Service',
      caption: 'Your Time is Our Priority',
      description: 'Experience our expedited VIP service lane with complimentary luxury amenities and personalized attention from our expert team.',
      icon: Clock,
      color: 'from-violet-500 to-purple-600',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      stats: 'Same-Day Service',
      features: ['Luxury Loaner Cars', 'VIP Lounge', 'Pickup & Delivery', 'Express Lane'],
      rating: '4.88/5',
      clients: '4200+',
      warranty: {
        years: '2-Year Premium',
        title: 'Service Excellence',
        features: ['Quality Assurance', 'Satisfaction Guaranteed', 'Follow-up Service', 'Priority Support'],
        icon: Heart
      },
      highlights: [
        { icon: Car, text: 'Luxury Loaner Fleet' },
        { icon: MapPin, text: 'Pickup & Delivery' },
        { icon: Crown, text: 'VIP Treatment' }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeHighlight, setActiveHighlight] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
    setActiveHighlight(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    setActiveHighlight(0);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
    setActiveHighlight(0);
  };

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-advance with progress bar
  useEffect(() => {
    if (isPaused) return;
    
    const startTime = Date.now();
    const duration = 10000;
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / duration) * 100;
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        nextSlide();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, nextSlide]);

  // Highlight rotation
  useEffect(() => {
    if (!isPaused) {
      const highlightInterval = setInterval(() => {
        setActiveHighlight(prev => (prev + 1) % slides[currentIndex].highlights.length);
      }, 3000);
      return () => clearInterval(highlightInterval);
    }
  }, [currentIndex, isPaused, slides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') setIsPaused(prev => !prev);
      if (e.key === 'm') setIsMuted(prev => !prev);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const currentSlide = slides[currentIndex];
  const WarrantyIcon = currentSlide.warranty.icon;

  if (isLoading) {
    return (
      <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-black to-amber-900/20 flex items-center justify-center">
        <div className="relative text-center">
          <div className="relative inline-block">
            <div className="w-20 h-20 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-orange-500 rounded-full animate-spin" style={{ animationDelay: '-0.3s' }} />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-amber-400 animate-pulse" />
          </div>
          <div className="mt-6 text-amber-100 text-xl font-light tracking-widest animate-pulse">
            INITIATING ELITE EXPERIENCE
          </div>
          <div className="mt-2 text-amber-500/60 text-sm">
            Loading Premium Automotive Solutions
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Geometric Patterns */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-amber-500/5 animate-float-premium"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`
            }}
          />
        ))}
        
        {/* Floating Particles */}
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/10 animate-particle-float"
            style={{
              width: `${Math.random() * 6 + 1}px`,
              height: `${Math.random() * 6 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          />
        ))}

        {/* Shimmer Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-shimmer-line" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-shimmer-line" style={{animationDelay: '2s'}} />
          <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-shimmer-line" style={{animationDelay: '4s'}} />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full ">
        {/* Premium Control Panel - Play/Pause hidden on mobile */}
        <div className="absolute top-8 right-8 z-50 flex gap-3">
          {[
            { icon: isPaused ? Play : Pause, action: () => setIsPaused(!isPaused), label: 'Play/Pause' },
          ].map(({ icon: Icon, action, label }, index) => (
            <button
              key={label}
              onClick={action}
              className="hidden lg:flex group relative bg-black/50 backdrop-blur-2xl border-2 border-amber-500/30 text-amber-100 p-4 rounded-2xl transition-all duration-500 hover:scale-110 hover:border-amber-400/50 hover:bg-amber-500/20 shadow-2xl"
              aria-label={label}
            >
              <Icon size={22} className="transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        {/* Enhanced Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 z-40 bg-white/5 backdrop-blur-lg">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 transition-all duration-100 ease-linear shadow-lg shadow-amber-500/40 relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-progress-shimmer" />
          </div>
        </div>

        {/* Slides Container with Enhanced Parallax */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            const offset = index - currentIndex;
            const Icon = slide.icon;
            
            return (
              <div
                key={index}
                className="absolute inset-0 w-full h-full transition-all duration-1000 ease-out"
                style={{
                  transform: `translateX(${offset * 100}%) scale(${isActive ? 1 : 0.92})`,
                  opacity: isActive ? 1 : 0,
                  zIndex: isActive ? 20 : 0,
                }}
              >
                {/* Enhanced Background with Dynamic Parallax */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    transform: `scale(1.4) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                    filter: 'brightness(0.35) contrast(1.2) saturate(1.1)',
                  }}
                />
                
                {/* Luxury Overlay System */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/5" />
                <div 
                  className="absolute inset-0 opacity-40"
                  style={{ background: slide.gradient, mixBlendMode: 'overlay' }}
                />

                {/* Content Container */}
                <div className="relative z-30 h-full flex items-center">
                  <div className="container mx-auto px-6 lg:px-12 xl:px-20">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-20 items-center">
                      
                      {/* Left Column - Enhanced Premium Content */}
                      <div className="space-y-8">
                        {/* Premium Badge */}
                        <div 
                          className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-500/15 to-orange-500/10 backdrop-blur-2xl border-2 border-amber-500/30 rounded-2xl px-6 py-4 group hover:border-amber-400/50 transition-all duration-500"
                          style={{
                            animation: isActive ? 'slideInLeft 1s ease-out forwards' : 'none',
                            animationDelay: '0.2s',
                            opacity: 0,
                          }}
                        >
                          <div className="relative">
                            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse" />
                            <Sparkles className="absolute -top-1 -right-1 w-2 h-2 text-amber-300 animate-spin-slow" />
                          </div>
                          <span className="text-amber-200 font-bold tracking-widest text-sm uppercase">
                            Certified Elite Partner
                          </span>
                          <Crown className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                        </div>

                       {/* Enhanced Main Icon */}
                        <div 
                          className="relative group/icon"
                          style={{
                            animation: isActive ? 'iconEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none',
                            animationDelay: '0.5s',
                            opacity: 0,
                          }}
                        >
                          {/* Animated glow effects */}
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/25 to-orange-500/15 blur-3xl rounded-full animate-pulse-gentle scale-150" />
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 blur-2xl rounded-full animate-pulse-gentle scale-125" style={{ animationDelay: '0.3s' }} />
                          
                          {/* Main icon container */}
                          <div className="relative bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-red-500/10 backdrop-blur-2xl border-2 border-amber-500/40 p-6 rounded-3xl shadow-2xl group-hover/icon:border-amber-400/60 group-hover/icon:shadow-amber-500/30 transition-all duration-700 group-hover/icon:scale-105">
                            
                            {/* Corner decorations */}
                            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-400/50 rounded-tl-2xl" />
                            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-400/50 rounded-br-2xl" />
                            
                            {/* Rotating border effect */}
                            <div className="absolute inset-0 border-2 border-transparent rounded-3xl group-hover/icon:animate-spin-slow" style={{ animationDuration: '8s' }} />
                            
                            {/* Content - Flex horizontal */}
                            <div className="relative flex items-center gap-6">
                              {/* Icon with glow - LEFT SIDE */}
                              <div className="relative flex-shrink-0">
                                <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full group-hover/icon:bg-amber-400/40 transition-all duration-500" />
                                <Icon className="relative w-16 h-16 text-amber-400 group-hover/icon:scale-110 group-hover/icon:rotate-6 transition-all duration-500 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
                              </div>
                              
                              {/* Text Content - RIGHT SIDE - Dynamic based on slide */}
                              <div className="flex-1 text-left">
                                <h3 className="text-2xl font-black text-amber-100 mb-2 group-hover/icon:text-amber-300 transition-colors duration-500">
                                  {slide.title.split(' ').slice(0, 2).join(' ')} {/* First 2 words of title */}
                                </h3>
                                
                                <p className="text-amber-100/70 text-sm leading-relaxed">
                                  {slide.caption} {/* Use slide caption */}
                                </p>
                              </div>
                            </div>
                            
                            {/* Sparkle effects */}
                            <Sparkles className="absolute -top-3 -right-3 w-7 h-7 text-amber-300 animate-sparkle drop-shadow-lg" />
                            <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-yellow-300 animate-sparkle" style={{ animationDelay: '0.5s' }} />
                            <Sparkles className="absolute top-1/2 -right-4 w-4 h-4 text-orange-300 animate-sparkle" style={{ animationDelay: '0.8s' }} />
                            
                            {/* Floating particles */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full animate-float" />
                            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-float" style={{ animationDelay: '0.4s' }} />
                            <div className="absolute top-1/3 left-4 w-1 h-1 bg-orange-400 rounded-full animate-float" style={{ animationDelay: '0.7s' }} />
                          </div>
                        </div>

                        {/* Enhanced Warranty Section */}
                        <div 
                          className="bg-gradient-to-br from-amber-500/15 to-orange-500/10 backdrop-blur-2xl border-2 border-amber-500/30 rounded-2xl p-6 space-y-4 group hover:border-amber-400/50 transition-all duration-500"
                          style={{
                            animation: isActive ? 'warrantySlideIn 1s ease-out forwards' : 'none',
                            animationDelay: '0.9s',
                            opacity: 0,
                          }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-amber-500/30 to-orange-500/20 rounded-xl group-hover:scale-105 transition-transform duration-300">
                              <WarrantyIcon className="w-7 h-7 text-amber-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-2xl font-black text-amber-300 bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                                {slide.warranty.years}
                              </div>
                              <div className="text-amber-200/90 text-sm font-medium">
                                {slide.warranty.title}
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3">
                            {slide.warranty.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-3 group/feature">
                                <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse" />
                                <span className="text-amber-200/80 text-xs font-medium group-hover/feature:text-amber-200 transition-colors duration-300">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Enhanced Stats Grid */}
                        <div 
                          className="grid grid-cols-2 gap-4"
                          style={{
                            animation: isActive ? 'fadeInUp 1s ease-out forwards' : 'none',
                            animationDelay: '1.1s',
                            opacity: 0,
                          }}
                        >
                          {[
                            { icon: Star, value: slide.rating, label: 'Customer Rating', color: 'from-yellow-400 to-amber-400' },
                            { icon: Users, value: slide.clients, label: 'Elite Clients', color: 'from-cyan-400 to-blue-400' },
                            { icon: Award, value: slide.stats, label: 'Excellence', color: 'from-emerald-400 to-green-400' },
                            { icon: TrendingUp, value: '100%', label: 'Success Rate', color: 'from-purple-400 to-pink-400' }
                          ].map((stat, idx) => {
                            const Icon = stat.icon; // Create a component reference
                            return (
                              <div key={idx} className="text-center p-5 bg-black/40 backdrop-blur-xl border-2 border-amber-500/20 rounded-2xl hover:border-amber-400/40 hover:scale-105 transition-all duration-500 group/stat">
                                <Icon className="w-6 h-6 mx-auto text-amber-400 mb-2" /> {/* Render as JSX component */}
                                <div className="text-amber-100 font-black text-lg mb-1">{stat.value}</div>
                                <div className="text-amber-500/80 text-xs font-medium">{stat.label}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Column - Enhanced Main Content */}
                      <div className="space-y-8">
                        {/* Enhanced Title */}
                        <div>
                          <h1 
                            className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-4"
                            style={{
                              animation: isActive ? 'titleReveal 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards' : 'none',
                              opacity: 0,
                            }}
                          >
                            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent relative">
                              {slide.title}
                              <div className="absolute bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 animate-underline-expand" 
                                   style={{animationDelay: '2s'}} />
                            </span>
                          </h1>

                          {/* Rotating Highlights */}
                          <div className="flex items-center gap-3 mt-6">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                            <div className="text-amber-300/80 text-lg font-medium animate-highlight-change">
                              {slide.highlights[activeHighlight].text}
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Caption */}
                        <p 
                          className="text-2xl lg:text-3xl xl:text-4xl font-light text-amber-100 tracking-wide leading-relaxed"
                          style={{
                            animation: isActive ? 'fadeInUp 1s ease-out forwards' : 'none',
                            animationDelay: '0.7s',
                            opacity: 0,
                          }}
                        >
                          {slide.caption}
                        </p>

                        {/* Enhanced Description */}
                        <p 
                          className="text-lg lg:text-xl text-amber-200/80 leading-relaxed max-w-2xl font-light"
                          style={{
                            animation: isActive ? 'fadeInUp 1s ease-out forwards' : 'none',
                            animationDelay: '0.9s',
                            opacity: 0,
                          }}
                        >
                          {slide.description}
                        </p>

                        {/* Enhanced Features */}
                        <div 
                          className="flex flex-wrap gap-3"
                          style={{
                            animation: isActive ? 'fadeInUp 1s ease-out forwards' : 'none',
                            animationDelay: '1.1s',
                            opacity: 0,
                          }}
                        >
                          {slide.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-amber-500/10 backdrop-blur-xl border-2 border-amber-500/20 rounded-full px-5 py-3 group/feature hover:border-amber-400/40 hover:bg-amber-500/20 transition-all duration-500">
                              <CheckCircle className="w-5 h-5 text-amber-400 group-hover/feature:scale-110 transition-transform duration-300" />
                              <span className="text-amber-200 text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Enhanced CTA Buttons */}
                        <div 
                          className="flex flex-col sm:flex-row gap-4 pt-8"
                          style={{
                            animation: isActive ? 'fadeInUp 1s ease-out forwards' : 'none',
                            animationDelay: '1.3s',
                            opacity: 0,
                          }}
                        >
                          <button className="group relative px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-lg rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 min-w-[240px]">
                            <div className="absolute inset-0 border-2 border-amber-300/50 rounded-2xl animate-premium-border" />
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <span className="relative z-10 flex items-center justify-center gap-4">
                              <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                              Schedule Concierge
                              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                          </button>

                          <button className="group px-10 py-6 bg-black/50 backdrop-blur-2xl border-2 border-amber-500/30 text-amber-100 font-bold rounded-2xl transition-all duration-500 hover:scale-105 hover:border-amber-400/50 hover:bg-amber-500/20 flex items-center gap-4 min-w-[200px] justify-center">
                            <Phone className="w-5 h-5 group-hover:animate-ring transition-all duration-300" />
                            VIP Hotline
                            <Sparkles className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 group bg-black/50 backdrop-blur-2xl border-2 border-amber-500/30 text-amber-100 p-4 lg:p-5 rounded-2xl transition-all duration-500 hover:scale-110 hover:border-amber-400/50 hover:bg-amber-500/20 shadow-2xl"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 lg:w-7 lg:h-7 transition-transform group-hover:-translate-x-1" />
          <Sparkles className="absolute -top-1 -left-1 w-2 h-2 lg:w-3 lg:h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 group bg-black/50 backdrop-blur-2xl border-2 border-amber-500/30 text-amber-100 p-4 lg:p-5 rounded-2xl transition-all duration-500 hover:scale-110 hover:border-amber-400/50 hover:bg-amber-500/20 shadow-2xl"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 lg:w-7 lg:h-7 transition-transform group-hover:translate-x-1" />
          <Sparkles className="absolute -top-1 -right-1 w-2 h-2 lg:w-3 lg:h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Enhanced Pagination */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 lg:gap-4 bg-black/50 backdrop-blur-2xl border-2 border-amber-500/30 rounded-xl lg:rounded-2xl px-4 lg:px-8 py-2 lg:py-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 scale-150 shadow-lg shadow-amber-500/60'
                  : 'bg-amber-500/40 group-hover:bg-amber-400/70 group-hover:scale-125'
              }`} />
              <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
                index === currentIndex ? 'opacity-100' : ''
              }`}>
                Slide {index + 1}
              </div>
            </button>
          ))}
        </div>

        {/* Enhanced Slide Counter */}
        <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 z-30 bg-black/50 backdrop-blur-2xl border-2 border-amber-500/30 text-amber-100 px-4 lg:px-6 py-2 lg:py-3 rounded-xl lg:rounded-2xl">
          <span className="font-black text-xs lg:text-sm flex items-center gap-2 lg:gap-3">
            <span className="text-amber-400 text-sm lg:text-lg">{currentIndex + 1}</span>
            <span className="text-amber-600">/</span>
            <span className="text-amber-300/80">{slides.length}</span>
            <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-amber-400 animate-pulse" />
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes ultraCinematicZoom {
          0% {
            transform: scale(1.4) rotate(1deg);
            filter: brightness(0.3) contrast(1.3) saturate(1.4);
          }
          100% {
            transform: scale(1.3) rotate(0deg);
            filter: brightness(0.35) contrast(1.2) saturate(1.1);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-60px) translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
        }

        @keyframes warrantySlideIn {
          0% {
            opacity: 0;
            transform: translateX(-40px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.8);
            filter: blur(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes iconEntrance {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg) translateY(80px);
          }
          60% {
            transform: scale(1.2) rotate(15deg) translateY(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg) translateY(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-premium {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(var(--scale, 1));
          }
          33% {
            transform: translateY(-40px) translateX(20px) rotate(120deg) scale(var(--scale, 1));
          }
          66% {
            transform: translateY(-20px) translateX(-20px) rotate(240deg) scale(var(--scale, 1));
          }
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
          }
        }

        @keyframes shimmer-line {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes progress-shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes underline-expand {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes highlight-change {
          0%, 100% {
            opacity: 0;
            transform: translateY(10px);
          }
          10%, 90% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ring {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          75% { transform: rotate(15deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes premium-border {
          0%, 100% {
            opacity: 0.4;
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.4);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.8);
          }
        }

        .animate-float-premium {
          animation: float-premium 30s ease-in-out infinite;
        }

        .animate-particle-float {
          animation: particle-float 25s ease-in-out infinite;
        }

        .animate-shimmer-line {
          animation: shimmer-line 6s ease-in-out infinite;
        }

        .animate-progress-shimmer {
          animation: progress-shimmer 2s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 4s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-underline-expand {
          animation: underline-expand 1s ease-out forwards;
        }

        .animate-highlight-change {
          animation: highlight-change 3s ease-in-out infinite;
        }

        .animate-ring {
          animation: ring 2s ease-in-out infinite;
        }

        .animate-premium-border {
          animation: premium-border 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;