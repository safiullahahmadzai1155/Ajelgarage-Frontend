import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Wrench, Star, Clock, Award, Zap, Phone, MapPin } from 'lucide-react';

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
      {/* Add margin-top to prevent content from being hidden behind navbar */}
      <div className="pt-20">
        {/* Theme Toggle - Increased z-index */}
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="absolute top-28 right-6 z-60 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Toggle theme"
        >
          {isDarkTheme ? '🌙' : '🌞'}
        </button>

        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
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
                {/* Background Image with Ultra Cinematic Zoom */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    animation: isActive ? 'ultraCinematicZoom 12s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : 'none',
                    transform: 'scale(1.5)',
                    willChange: 'transform',
                  }}
                >
                  {/* Enhanced Overlays for Dark Theme */}
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

                {/* Animated Light Beams */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute h-px bg-gradient-to-r from-transparent ${isDarkTheme ? 'via-white/30' : 'via-orange-400/50'} to-transparent animate-lightBeam`}
                      style={{
                        width: '300%',
                        top: `${15 + i * 12}%`,
                        left: '-150%',
                        animationDelay: `${i * 1.2}s`,
                        transform: 'rotate(-20deg)',
                      }}
                    />
                  ))}
                </div>

                {/* Glow Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className={`absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br ${slide.color} rounded-full blur-3xl opacity-20 animate-float-slow`} />
                  <div className={`absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr ${slide.color} rounded-full blur-3xl opacity-20 animate-float-slow`} style={{ animationDelay: '3s' }} />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-8 md:px-16 lg:px-24">
                    <div 
                      className="max-w-5xl space-y-10"
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
                          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} rounded-full blur-3xl opacity-70 animate-pulse-glow pointer-events-none`} />
                          <div className={`relative bg-gradient-to-br ${slide.color} p-8 rounded-2xl shadow-2xl border-4 ${isDarkTheme ? 'border-white/40' : 'border-white/30'}`}>
                            <Icon className="w-14 h-14 md:w-20 md:h-20 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Animated Title */}
                      <h2 className="text-6xl md:text-9xl font-black text-white leading-tight drop-shadow-2xl">
                        {slide.title.split(' ').map((word, i) => (
                          <span 
                            key={i}
                            className="inline-block mr-5"
                            style={{
                              animation: isActive ? 'wordSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                              animationDelay: `${0.6 + i * 0.2}s`,
                              opacity: 0,
                            }}
                          >
                            <span className="relative">
                              {word}
                              <span 
                                className={`absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r ${slide.color} transform origin-left pointer-events-none`}
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

                      {/* Caption with Line */}
                      <div className="flex items-center gap-5">
                        <div 
                          className={`h-1 bg-gradient-to-r ${slide.color}`}
                          style={{
                            animation: isActive ? 'lineExpand 1s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none',
                            animationDelay: '1.5s',
                            width: 0,
                          }}
                        />
                        <p 
                          className={`text-3xl md:text-5xl font-light tracking-wide ${isDarkTheme ? 'text-gray-200' : 'text-orange-300'}`}
                          style={{
                            animation: isActive ? 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                            animationDelay: '1.6s',
                            opacity: 0,
                          }}
                        >
                          {slide.caption}
                        </p>
                      </div>

                      {/* CTA Buttons */}
                      <div 
                        className="pt-8 flex flex-wrap items-center gap-6"
                        style={{
                          animation: isActive ? 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                          animationDelay: '2s',
                          opacity: 0,
                        }}
                      >
                        <button className={`group relative px-12 py-6 bg-gradient-to-r ${slide.color} text-white font-black text-2xl rounded-full shadow-2xl overflow-hidden transition-all duration-500 hover:scale-110 border-3 border-white/40 animate-pulse-glow`}>
                          <span className="relative z-10 flex items-center gap-4">
                            <Wrench className="w-7 h-7 group-hover:rotate-180 transition-transform duration-700" />
                            Book Now
                            <ChevronRight className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-300" />
                          </span>
                          <div className={`absolute inset-0 bg-gradient-to-l ${slide.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right pointer-events-none`} />
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            {[...Array(12)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-3 h-3 bg-white rounded-full animate-sparkle pointer-events-none"
                                style={{
                                  left: `${Math.random() * 100}%`,
                                  top: `${Math.random() * 100}%`,
                                  animationDelay: `${Math.random() * 0.6}s`
                                }}
                              />
                            ))}
                          </div>
                        </button>

                        <button className={`group px-10 py-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-xl rounded-full transition-all duration-300 hover:scale-105 border-2 ${isDarkTheme ? 'border-white/30' : 'border-white/20'} flex items-center gap-3`}>
                          <Phone className="w-6 h-6 group-hover:animate-wiggle" />
                          Call Us
                        </button>

                        <div className="flex gap-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              className="w-7 h-7 md:w-9 md:h-9 text-yellow-400 fill-yellow-400 animate-twinkle pointer-events-none"
                              style={{ animationDelay: `${star * 0.15}s` }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Trust Badges */}
                      <div 
                        className="flex flex-wrap items-center gap-5 pt-6"
                        style={{
                          animation: isActive ? 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                          animationDelay: '2.4s',
                          opacity: 0,
                        }}
                      >
                        <div className="bg-white/10 backdrop-blur-lg px-5 py-3 rounded-full border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                          <p className="text-white font-bold text-lg">✓ Certified Mechanics</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg px-5 py-3 rounded-full border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                          <p className="text-white font-bold text-lg">✓ Same Day Service</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg px-5 py-3 rounded-full border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                          <p className="text-white font-bold text-lg">✓ Warranty Included</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Shimmer Bar */}
                <div className={`absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r ${slide.color} animate-shimmer pointer-events-none`} 
                     style={{ backgroundSize: '300% 100%' }}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons - Increased z-index */}
        <button
          onClick={prevSlide}
          className={`absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-60 group bg-gradient-to-br ${currentSlide.color} backdrop-blur-md text-white p-5 md:p-6 rounded-full transition-all duration-300 hover:scale-125 shadow-2xl border-2 border-white/40`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-7 h-7 md:w-10 md:h-10 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-60 group bg-gradient-to-br ${currentSlide.color} backdrop-blur-md text-white p-5 md:p-6 rounded-full transition-all duration-300 hover:scale-125 shadow-2xl border-2 border-white/40`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-7 h-7 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Pagination Dots - Increased z-index */}
        <div className={`absolute bottom-14 left-1/2 -translate-x-1/2 z-60 flex items-center gap-5 backdrop-blur-md px-8 py-4 rounded-full border ${isDarkTheme ? 'bg-black/40 border-white/20' : 'bg-black/30 border-white/20'}`}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-500 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                index === currentIndex
                  ? 'w-20 h-5'
                  : 'w-5 h-5 hover:scale-150'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`w-full h-full rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? `bg-gradient-to-r ${slides[index].color} shadow-lg animate-shimmer`
                  : 'bg-white/40 hover:bg-white/70'
              }`} style={{ backgroundSize: '200% 100%' }} />
              {index === currentIndex && (
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${slides[index].color} animate-ping opacity-75 pointer-events-none`} />
              )}
            </button>
          ))}
        </div>

        {/* Slide Counter - Increased z-index */}
        <div className={`absolute bottom-14 right-10 z-60 bg-gradient-to-br ${currentSlide.color} backdrop-blur-md px-7 py-4 rounded-full border-2 border-white/40 shadow-2xl`}>
          <span className="text-white font-black text-2xl flex items-center gap-3">
            <span className="text-3xl">{currentIndex + 1}</span>
            <span className="text-yellow-400">/</span>
            <span className="text-xl opacity-90">{slides.length}</span>
          </span>
        </div>
      </div>

      <style>{`
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
            transform: translateX(-120px) translateY(30px);
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
            transform: scale(1.3) rotate(30deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes wordSlideUp {
          0% {
            opacity: 0;
            transform: translateY(70px) rotate(8deg) scale(0.8);
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

        @keyframes lineExpand {
          0% {
            width: 0;
          }
          100% {
            width: 100px;
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lightBeam {
          0% {
            left: -150%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            left: 150%;
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(-80px) translateX(40px) rotate(120deg);
          }
          66% {
            transform: translateY(-40px) translateX(-40px) rotate(240deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(50px, -50px) scale(1.1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -300% 0;
          }
          100% {
            background-position: 300% 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(249, 115, 22, 0.6);
          }
          50% {
            box-shadow: 0 0 60px rgba(249, 115, 22, 1), 0 0 100px rgba(239, 68, 68, 0.6);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.7) rotate(180deg);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(2) rotate(180deg);
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

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-lightBeam {
          animation: lightBeam 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 5s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 2.5s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 1.2s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .animate-slideInDown {
          animation: slideInDown 1.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;