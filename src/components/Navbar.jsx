import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Wrench, 
  Phone, 
  MapPin, 
  Clock, 
  Award, 
  Star, 
  Settings, 
  Car, 
  Zap,
  Shield,
  Users,
  TrendingUp,
  Calendar,
  MessageCircle,
  Crown,
  Sparkles
} from 'lucide-react';

const PremiumNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    {
      label: 'Premium Services',
      path: '/services',
      submenu: [
        { 
          path: '/engine-repair', 
          label: 'Elite Engine Repair', 
          icon: Settings,
          description: 'Advanced diagnostics & precision repair',
          badge: 'Premium'
        },
        { 
          path: '/performance-tuning', 
          label: 'Performance Tuning', 
          icon: Zap,
          description: 'Maximize your vehicle potential',
          badge: 'Elite'
        },
        { 
          path: '/brake-service', 
          label: 'Ceramic Brake Service', 
          icon: Car,
          description: 'High-performance braking systems',
          badge: 'Luxury'
        },
        { 
          path: '/oil-change', 
          label: 'Synthetic Oil Change', 
          icon: Wrench,
          description: 'Premium synthetic fluids only',
          badge: 'Premium'
        },
        { 
          path: '/diagnostics', 
          label: 'AI Diagnostics', 
          icon: TrendingUp,
          description: 'Artificial intelligence analysis',
          badge: 'Tech'
        },
        { 
          path: '/maintenance', 
          label: 'Concierge Maintenance', 
          icon: Clock,
          description: 'Scheduled luxury maintenance',
          badge: 'VIP'
        },
      ],
    },
    { 
      path: '/about', 
      label: 'Our Legacy',
      submenu: [
        { path: '/heritage', label: '25 Years Excellence', icon: Award },
        { path: '/team', label: 'Master Technicians', icon: Users },
        { path: '/certifications', label: 'Certifications', icon: Shield },
      ]
    },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Concierge' },
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'backdrop-blur-2xl bg-black/95 shadow-2xl shadow-amber-500/10' 
          : 'bg-gradient-to-b from-black/90 via-black/70 to-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Top Border Animation */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-premium-shimmer" 
             style={{ 
               backgroundSize: '200% 100%',
               filter: 'blur(1px)'
             }} />
      </div>
      
      {/* Animated Corner Accents */}
      <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden opacity-60">
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-400/50 animate-corner-glow" />
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-60">
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-amber-400/50 animate-corner-glow" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Premium Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer relative">
            <div className="relative">
              {/* Animated Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/40 to-orange-500/30 blur-2xl rounded-full group-hover:scale-150 transition-all duration-1000 animate-pulse-gentle" />
              
              {/* Premium Logo Container */}
              <div className={`relative p-4 rounded-2xl transition-all duration-700 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-amber-500/15 to-orange-500/10 backdrop-blur-xl' 
                  : 'bg-gradient-to-br from-amber-500/20 to-orange-500/15 backdrop-blur-lg'
              } border-2 border-amber-500/30 group-hover:border-amber-400/50`}>
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-amber-400/20 animate-premium-border" />
                
                {/* Logo Icon */}
                <div className="relative">
                  <Wrench className="w-8 h-8 text-amber-400 group-hover:rotate-180 transition-transform duration-1000" />
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-amber-300 animate-sparkle" />
                </div>
              </div>
            </div>
            
            {/* Brand Name with Premium Styling */}
            <div className="relative">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 animate-premium-gradient"
                      style={{ 
                        backgroundSize: '300% auto',
                        textShadow: '0 0 40px rgba(245, 158, 11, 0.6)',
                        letterSpacing: '0.05em'
                      }}>
                  AJAL AUTOMOTIVE
                </span>
                <span className="text-xs text-amber-400/80 font-light tracking-widest mt-1">
                  ELITE AUTOMOTIVE SOLUTIONS
                </span>
              </div>
              
              {/* Animated Underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-premium-shimmer" 
                   style={{ 
                     backgroundSize: '200% 100%',
                     filter: 'blur(0.5px)'
                   }} />
            </div>
          </div>

          {/* Desktop Navigation - Premium */}
          <div className="hidden xl:flex items-center space-x-1" style={{marginRight:"6%"}}>
            {navLinks.map((link, index) => (
              <div key={link.label} className="relative group">
                {link.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => link.path && handleNavigation(link.path)}
                      className="relative px-6 py-4 font-semibold text-amber-100/90 hover:text-amber-50 flex items-center space-x-2 rounded-2xl transition-all duration-500 overflow-hidden group/nav"
                    >
                      {/* Animated Background */}
                      <div className="absolute inset-0 border-2 border-amber-500/20 rounded-2xl group-hover/nav:border-amber-400/40 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover/nav:opacity-100 transition-all duration-700 animate-premium-shimmer" 
                           style={{ backgroundSize: '200% 100%' }} />
                      
                      <span className="relative z-10 tracking-wide">{link.label}</span>
                      <ChevronDown className="relative z-10 h-4 w-4 group-hover/nav:rotate-180 transition-transform duration-500" />
                    </button>

                    {/* Premium Dropdown */}
                    <div className="absolute left-0 mt-3 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 rounded-3xl overflow-hidden transform origin-top">
                      <div className="relative bg-black/95 backdrop-blur-2xl p-4 border-2 border-amber-500/20">
                        {/* Dropdown Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-3xl" />
                        
                        {/* Services Grid */}
                        <div className="grid grid-cols-1 gap-2 relative z-10">
                          {link.submenu.map((service, i) => {
                            const Icon = service.icon;
                            return (
                              <button
                                key={service.label}
                                onClick={() => handleNavigation(service.path)}
                                className="relative flex items-start gap-4 w-full text-left p-4 rounded-xl text-amber-100/80 hover:text-amber-50 transition-all duration-500 group/item overflow-hidden"
                              >
                                {/* Hover Background */}
                                <div className="absolute inset-0 border border-amber-500/10 rounded-xl group-hover/item:border-amber-400/30 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover/item:opacity-100 transition-all duration-500" />
                                
                                {/* Icon Container */}
                                <div className="relative z-10 p-3 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 group-hover/item:from-amber-500/30 group-hover/item:to-orange-500/20 transition-all duration-500">
                                  <Icon className="h-5 w-5 text-amber-400" />
                                </div>
                                
                                {/* Content */}
                                <div className="relative z-10 flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold text-sm">{service.label}</span>
                                    {service.badge && (
                                      <span className="px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-full font-bold">
                                        {service.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-amber-200/60 text-xs leading-tight">
                                    {service.description}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="relative px-6 py-4 font-semibold text-amber-100/90 hover:text-amber-50 rounded-2xl transition-all duration-500 overflow-hidden group/nav"
                  >
                    <div className="absolute inset-0 border-2 border-amber-500/20 rounded-2xl group-hover/nav:border-amber-400/40 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover/nav:opacity-100 transition-all duration-700 animate-premium-shimmer" 
                         style={{ backgroundSize: '200% 100%' }} />
                    <span className="relative z-10 tracking-wide">{link.label}</span>
                  </button>
                )}
              </div>
            ))}
            
            {/* Premium CTA Buttons */}
           
          </div>

          {/* Mobile Menu Button - Premium */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden relative p-4 rounded-2xl transition-all duration-500 overflow-hidden group"
          >
            <div className="absolute inset-0 border-2 border-amber-500/30 rounded-2xl group-hover:border-amber-400/50 transition-all duration-500 animate-premium-border" />
            <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative z-10 text-amber-100">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </button>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      <div className={`xl:hidden overflow-hidden transition-all duration-700 ${
        isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
      } bg-black/98 backdrop-blur-2xl relative border-t-2 border-amber-500/20`}>
        {/* Mobile Menu Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
        
        <div className="px-6 py-6 space-y-3 overflow-y-auto max-h-[70vh] relative z-10">
          {navLinks.map((link, index) => (
            <div 
              key={link.label}
              style={{
                animation: isOpen ? `premiumSlideIn 0.5s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              {link.submenu ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="relative w-full text-left px-6 py-5 font-semibold text-amber-100/90 flex items-center justify-between rounded-2xl transition-all duration-500 overflow-hidden group"
                  >
                    <div className="absolute inset-0 border-2 border-amber-500/20 rounded-2xl group-hover:border-amber-400/40 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <span className="relative z-10 tracking-wide">{link.label}</span>
                    <ChevronDown
                      className={`relative z-10 h-5 w-5 transition-transform duration-500 ${
                        openDropdown === link.label ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-700 ${
                    openDropdown === link.label ? 'max-h-[1000px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-3 border-l-2 border-amber-500/20 ml-4">
                      {link.submenu.map((item, subIndex) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.path}
                            onClick={() => handleNavigation(item.path)}
                            className="relative flex items-center gap-4 w-full text-left px-5 py-4 rounded-xl text-amber-100/80 hover:text-amber-50 transition-all duration-500 overflow-hidden group"
                            style={{
                              animation: openDropdown === link.label ? `premiumSlideIn 0.4s ease-out ${subIndex * 0.05 + 0.3}s both` : 'none'
                            }}
                          >
                            <div className="absolute inset-0 border border-amber-500/10 rounded-xl group-hover:border-amber-400/30 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="relative z-10 p-3 rounded-lg bg-amber-500/20 group-hover:bg-amber-500/30 transition-all duration-500">
                              <Icon className="h-5 w-5 text-amber-400" />
                            </div>
                            <div className="relative z-10 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm">{item.label}</span>
                                {item.badge && (
                                  <span className="px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-full font-bold">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              {item.description && (
                                <p className="text-amber-200/60 text-xs mt-1 leading-tight">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => handleNavigation(link.path)}
                  className="relative block w-full text-left px-6 py-5 rounded-2xl font-semibold text-amber-100/90 transition-all duration-500 overflow-hidden group"
                >
                  <div className="absolute inset-0 border-2 border-amber-500/20 rounded-2xl group-hover:border-amber-400/40 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <span className="relative z-10 tracking-wide">{link.label}</span>
                </button>
              )}
            </div>
          ))}
          
          {/* Mobile CTA Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <button className="relative px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 border-2 border-amber-300/50 rounded-2xl animate-premium-border" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                <MessageCircle className="w-4 h-4" />
                Concierge
              </span>
            </button>

            <button className="relative px-6 py-4 bg-gradient-to-br from-red-500/20 to-red-600/10 backdrop-blur-xl border-2 border-red-400/30 text-red-100 rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                Emergency
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes premium-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes premium-border {
          0%, 100% {
            opacity: 0.4;
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 30px rgba(245, 158, 11, 0.6);
          }
        }

        @keyframes premium-gradient {
          0% { background-position: 0% center; }
          50% { background-position: 200% center; }
          100% { background-position: 0% center; }
        }

        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes corner-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }

        @keyframes premium-slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes ring {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          75% { transform: rotate(15deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-premium-shimmer {
          animation: premium-shimmer 4s linear infinite;
        }

        .animate-premium-border {
          animation: premium-border 3s ease-in-out infinite;
        }

        .animate-premium-gradient {
          animation: premium-gradient 4s ease infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 4s ease-in-out infinite;
        }

        .animate-corner-glow {
          animation: corner-glow 3s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animate-ring {
          animation: ring 2s ease-in-out infinite;
        }

        .premium-slide-in {
          animation: premium-slide-in 0.5s ease-out both;
        }
      `}</style>
    </nav>
  );
};

export default PremiumNavbar;