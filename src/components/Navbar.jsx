import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Wrench, Phone, MapPin, Clock, Award, Star, Settings, Car, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    {
      label: 'Services',
      path: '/services',
      submenu: [
        { path: '/engine-repair', label: 'Engine Repair', icon: Settings },
        { path: '/brake-service', label: 'Brake Service', icon: Zap },
        { path: '/oil-change', label: 'Oil Change', icon: Wrench },
        { path: '/diagnostics', label: 'Diagnostics', icon: Car },
        { path: '/maintenance', label: 'Maintenance', icon: Clock },
        { path: '/parts', label: 'Genuine Parts', icon: Award },
      ],
    },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => window.location.pathname === path;

  const handleNavigation = (path) => {
    if (path) {
      setIsOpen(false);
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-black/95' 
        : 'bg-gradient-to-b from-black/80 via-black/60 to-transparent'
    }`}>
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer-border" 
             style={{ backgroundSize: '200% 100%' }} />
      </div>
      
      {/* Animated Side Borders */}
      <div className="absolute top-0 left-0 bottom-0 w-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent animate-shimmer-vertical" 
             style={{ backgroundSize: '100% 200%' }} />
      </div>
      <div className="absolute top-0 right-0 bottom-0 w-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent animate-shimmer-vertical" 
             style={{ backgroundSize: '100% 200%', animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer relative">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-orange-500/30 blur-xl rounded-full group-hover:bg-orange-500/50 transition-all duration-500 animate-pulse-slow" />
              
              {/* Logo Box with Animated Border */}
              <div className={`relative p-3 rounded-xl transition-all duration-500 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20' 
                  : 'bg-gradient-to-br from-orange-500/30 to-orange-600/30'
              }`}>
                <div className="absolute inset-0 rounded-xl border-2 border-white/40 animate-border-pulse" />
                <Wrench className="w-8 h-8 text-orange-400 group-hover:rotate-180 transition-transform duration-700" />
              </div>
            </div>
            
            {/* Brand Name */}
            <div className="relative">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-orange-400 animate-gradient-text"
                    style={{ 
                      backgroundSize: '200% auto',
                      textShadow: '0 0 30px rgba(251, 146, 60, 0.5)'
                    }}>
                AJAL GARAGE
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-shimmer-border" 
                   style={{ backgroundSize: '200% 100%' }} />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <div key={link.label} className="relative group">
                {link.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => link.path && handleNavigation(link.path)}
                      className="relative px-6 py-3 font-bold text-white/90 hover:text-white flex items-center space-x-2 rounded-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="absolute inset-0 border-2 border-white/20 rounded-xl group-hover:border-white/40 transition-all duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer" 
                           style={{ backgroundSize: '200% 100%' }} />
                      <span className="relative z-10">{link.label}</span>
                      <ChevronDown className="relative z-10 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-2xl overflow-hidden">
                      <div className="relative bg-black/95 backdrop-blur-xl p-3">
                        <div className="absolute inset-0 border-2 border-white/30 rounded-2xl animate-border-pulse" />
                        {link.submenu.map((service, i) => {
                          const Icon = service.icon;
                          return (
                            <button
                              key={service.label}
                              onClick={() => handleNavigation(service.path)}
                              className="relative flex items-center gap-3 w-full text-left px-5 py-4 rounded-xl text-white/80 hover:text-white transition-all duration-300 group/item mb-2 overflow-hidden"
                            >
                              <div className="absolute inset-0 border border-white/10 rounded-xl group-hover/item:border-white/30 transition-all duration-300" />
                              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover/item:opacity-100 transition-all duration-500" />
                              <div className="relative z-10 p-2 rounded-lg bg-orange-500/20 group-hover/item:bg-orange-500/30 transition-all duration-300">
                                <Icon className="h-5 w-5 text-orange-400" />
                              </div>
                              <span className="relative z-10 font-semibold">{service.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="relative px-6 py-3 font-bold text-white/90 hover:text-white rounded-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="absolute inset-0 border-2 border-white/20 rounded-xl group-hover:border-white/40 transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer" 
                         style={{ backgroundSize: '200% 100%' }} />
                    <span className="relative z-10">{link.label}</span>
                  </button>
                )}
              </div>
            ))}
            
            {/* Call Button */}
            <button className="relative ml-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 border-2 border-white/40 rounded-xl animate-border-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Call Now
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-3 rounded-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="absolute inset-0 border-2 border-white/30 rounded-xl group-hover:border-white/50 transition-all duration-300 animate-border-pulse" />
            <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="relative z-10 text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${
        isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
      } bg-black/95 backdrop-blur-xl relative`}>
        <div className="absolute inset-0 border-t-2 border-white/20" />
        
        <div className="px-4 py-4 space-y-2 overflow-y-auto max-h-[500px]">
          {navLinks.map((link, index) => (
            <div 
              key={link.label}
              style={{
                animation: isOpen ? `slideInLeft 0.3s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              {link.submenu ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="relative w-full text-left px-5 py-4 font-bold text-white/90 flex items-center justify-between rounded-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="absolute inset-0 border-2 border-white/20 rounded-xl group-hover:border-white/40 transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <span className="relative z-10">{link.label}</span>
                    <ChevronDown
                      className={`relative z-10 h-5 w-5 transition-transform duration-500 ${
                        openDropdown === link.label ? 'rotate-180 text-orange-400' : ''
                      }`}
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    openDropdown === link.label ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-2">
                      {link.submenu.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.path}
                            onClick={() => handleNavigation(item.path)}
                            className="relative flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white transition-all duration-300 overflow-hidden group"
                          >
                            <div className="absolute inset-0 border border-white/20 rounded-xl group-hover:border-white/40 transition-all duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="relative z-10 p-2 rounded-lg bg-orange-500/20">
                              <Icon className="h-5 w-5 text-orange-400" />
                            </div>
                            <span className="relative z-10 font-semibold">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => handleNavigation(link.path)}
                  className="relative block w-full text-left px-5 py-4 rounded-xl font-bold text-white/90 transition-all duration-300 overflow-hidden group"
                >
                  <div className="absolute inset-0 border-2 border-white/20 rounded-xl group-hover:border-white/40 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <span className="relative z-10">{link.label}</span>
                </button>
              )}
            </div>
          ))}
          
          {/* Mobile Call Button */}
          <button className="relative w-full mt-4 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl overflow-hidden group">
            <div className="absolute inset-0 border-2 border-white/40 rounded-xl animate-border-pulse" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Call Now
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shimmer-border {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes shimmer-vertical {
          0% { background-position: 0 -200%; }
          100% { background-position: 0 200%; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes border-pulse {
          0%, 100% {
            opacity: 0.4;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
          }
        }

        @keyframes gradient-text {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-shimmer-border {
          animation: shimmer-border 3s linear infinite;
        }

        .animate-shimmer-vertical {
          animation: shimmer-vertical 3s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        .animate-border-pulse {
          animation: border-pulse 2s ease-in-out infinite;
        }

        .animate-gradient-text {
          animation: gradient-text 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;