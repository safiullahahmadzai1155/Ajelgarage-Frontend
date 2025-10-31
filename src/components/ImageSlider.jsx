import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Wrench, Star, Clock, Award, Phone } from 'lucide-react';

const ImageSlider = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80',
      title: 'Expert Auto Repair',
      caption: 'Professional service you can trust',
      icon: Wrench,
      color: 'from-orange-600 to-red-700'
    },
    {
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80',
      title: 'Modern Equipment',
      caption: 'State-of-the-art diagnostic tools',
      icon: Star,
      color: 'from-orange-600 to-red-700'
    },
    {
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=80',
      title: 'Quality Parts',
      caption: 'Genuine and aftermarket solutions',
      icon: Award,
      color: 'from-orange-600 to-red-700'
    },
    {
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1920&q=80',
      title: 'Fast Service',
      caption: 'Get back on the road quickly',
      icon: Clock,
      color: 'from-orange-600 to-red-700'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div 
      className={`relative w-full h-screen overflow-hidden ${
        isDarkTheme 
          ? 'bg-black' 
          : 'bg-gradient-to-br from-gray-900 via-orange-950 to-gray-900'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main container with proper spacing for navbar */}
      <div className="relative w-full h-full pt-16"> {/* pt-16 adds space for navbar */}
        
        {/* Theme Toggle - Hidden on mobile, visible on medium screens and up */}
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="absolute top-6 right-6 z-50 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hidden md:block"
          aria-label="Toggle theme"
        >
          {isDarkTheme ? '🌙' : '🌞'}
        </button>

        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float ${
                isDarkTheme ? 'bg-orange-500/20' : 'bg-orange-400/30'
              }`}
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 15}s`
              }}
            />
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        {isDarkTheme && (
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
        )}

        {/* Slides Container */}
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
                  transform: `translateX(${offset * 100}%) scale(${isActive ? 1 : 0.85})`,
                  opacity: isActive ? 1 : 0,
                  zIndex: isActive ? 10 : 0,
                }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    animation: isActive ? 'ultraCinematicZoom 12s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : 'none',
                    transform: 'scale(1.5)',
                  }}
                >
                  {/* Enhanced Overlays */}
                  {isDarkTheme ? (
                    <>
                      <div className="absolute inset-0 bg-black/85" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/60" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20`} />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-orange-900/60 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/40" />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-transparent to-red-600/30" />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="container mx-auto px-8 md:px-16 lg:px-24">
                    <div 
                      className="max-w-5xl space-y-8 text-center md:text-left"
                      style={{
                        animation: isActive ? 'contentSlideIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                        opacity: 0,
                      }}
                    >
                      {/* Animated Icon */}
                      <div 
                        className="inline-block"
                        style={{
                          animation: isActive ? 'iconBounceIn 1.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards' : 'none',
                          animationDelay: '0.4s',
                          opacity: 0,
                        }}
                      >
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} rounded-full blur-3xl opacity-70 animate-pulse-glow`} />
                          <div className={`relative bg-gradient-to-br ${slide.color} p-6 rounded-2xl shadow-2xl border-4 ${isDarkTheme ? 'border-white/40' : 'border-white/30'}`}>
                            <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Animated Title */}
                      <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-2xl">
                        {slide.title.split(' ').map((word, i) => (
                          <span 
                            key={i}
                            className="inline-block mr-3 md:mr-5"
                            style={{
                              animation: isActive ? 'wordSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                              animationDelay: `${0.6 + i * 0.2}s`,
                              opacity: 0,
                            }}
                          >
                            <span className="relative">
                              {word}
                              <span 
                                className={`absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r ${slide.color} transform origin-left`}
                                style={{
                                  animation: isActive ? 'underlineExpand 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none',
                                  animationDelay: `${1 + i * 0.2}s`,
                                  transform: 'scaleX(0)',
                                }}
                              />
                            </span>
                          </span>
                        ))}
                      </h2>

                      {/* Caption */}
                      <p 
                        className={`text-xl md:text-3xl lg:text-4xl font-light tracking-wide ${isDarkTheme ? 'text-gray-200' : 'text-orange-300'} max-w-3xl mx-auto md:mx-0`}
                        style={{
                          animation: isActive ? 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                          animationDelay: '1.6s',
                          opacity: 0,
                        }}
                      >
                        {slide.caption}
                      </p>

                      {/* CTA Buttons */}
                      <div 
                        className="pt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
                        style={{
                          animation: isActive ? 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                          animationDelay: '2s',
                          opacity: 0,
                        }}
                      >
                        <button className={`group relative px-8 py-4 bg-gradient-to-r ${slide.color} text-white font-bold text-lg rounded-full shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 border-2 border-white/40`}>
                          <span className="relative z-10 flex items-center gap-3">
                            <Wrench className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                            Book Now
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                          </span>
                        </button>

                        <button className={`group px-6 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 border-2 ${isDarkTheme ? 'border-white/30' : 'border-white/20'} flex items-center gap-2`}>
                          <Phone className="w-5 h-5 group-hover:animate-wiggle" />
                          Call Us
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons - Hidden on mobile, visible on medium screens and up */}
        <button
          onClick={prevSlide}
          className={`absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 group bg-gradient-to-br ${currentSlide.color} backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl border-2 border-white/40 hidden md:flex items-center justify-center`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 group bg-gradient-to-br ${currentSlide.color} backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl border-2 border-white/40 hidden md:flex items-center justify-center`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Pagination Dots - Always visible but smaller on mobile */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:gap-3 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border ${isDarkTheme ? 'bg-black/40 border-white/20' : 'bg-black/30 border-white/20'}`}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-500 rounded-full focus:outline-none ${
                index === currentIndex
                  ? 'w-8 md:w-12 h-2 md:h-3'
                  : 'w-2 h-2 md:w-3 md:h-3 hover:scale-125'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`w-full h-full rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? `bg-gradient-to-r ${slides[index].color} shadow-lg`
                  : 'bg-white/40 hover:bg-white/70'
              }`} />
            </button>
          ))}
        </div>

        {/* Slide Counter - Hidden on mobile, visible on medium screens and up */}
        <div className={`absolute bottom-8 right-4 md:right-8 z-30 bg-gradient-to-br ${currentSlide.color} backdrop-blur-md px-4 py-2 rounded-full border-2 border-white/40 shadow-2xl hidden md:block`}>
          <span className="text-white font-bold text-sm flex items-center gap-2">
            <span className="text-lg">{currentIndex + 1}</span>
            <span className="text-yellow-400">/</span>
            <span className="text-sm opacity-90">{slides.length}</span>
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes ultraCinematicZoom {
          0% {
            transform: scale(1.5) rotate(3deg);
            filter: brightness(0.6) contrast(1.1);
          }
          100% {
            transform: scale(1) rotate(0deg);
            filter: brightness(1) contrast(1);
          }
        }

        @keyframes contentSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-80px) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes iconBounceIn {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-270deg);
          }
          60% {
            transform: scale(1.2) rotate(30deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes wordSlideUp {
          0% {
            opacity: 0;
            transform: translateY(50px) rotate(8deg) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        @keyframes underlineExpand {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(-40px) translateX(20px) rotate(120deg);
          }
          66% {
            transform: translateY(-20px) translateX(-20px) rotate(240deg);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-15deg);
          }
          75% {
            transform: rotate(15deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.6);
          }
          50% {
            box-shadow: 0 0 40px rgba(249, 115, 22, 1), 0 0 80px rgba(239, 68, 68, 0.6);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;