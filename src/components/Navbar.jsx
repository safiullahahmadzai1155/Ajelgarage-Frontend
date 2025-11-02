import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { path: '/', label: 'Home' },
    {
      label: 'Premium Services',
      path: '/service',
      submenu: [
        { 
          path: '/Services/EngineRepair', 
          label: 'Elite Engine Repair', 
          icon: Settings,
          description: 'Advanced diagnostics & precision repair',
          badge: 'Premium'
        },
        { 
          path: '/Services/PerformanceTuning', 
          label: 'Performance Tuning', 
          icon: Zap,
          description: 'Maximize your vehicle potential',
          badge: 'Elite'
        },
        { 
          path: '/Services/BrakeService',
          label: 'Ceramic Brake Service', 
          icon: Car,
          description: 'High-performance braking systems',
          badge: 'Luxury'
        },
        { 
          path: '/Services/OilChange', 
          label: 'Synthetic Oil Change', 
          icon: Wrench,
          description: 'Premium synthetic fluids only',
          badge: 'Premium'
        },
        { 
          path: '/Services/Diagnostics', 
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
    { path: '/contact', label: 'Contact' },
  ];

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
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
      <div className="absolute top-0 left-0 right-0 h-[1px] md:h-[2px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent" 
          style={{ 
            animation: 'premium-shimmer 3s linear infinite',
            backgroundSize: '200% 100%',
            filter: 'blur(0.5px)'
          }} 
        />
      </div>
      
      {/* Animated Corner Accents */}
      <div className="absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 overflow-hidden opacity-60">
        <div 
          className="absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 border-t-2 border-l-2 border-amber-400/50"
          style={{ animation: 'corner-glow 3s ease-in-out infinite' }}
        />
      </div>
      <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 overflow-hidden opacity-60">
        <div 
          className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 border-t-2 border-r-2 border-amber-400/50"
          style={{ animation: 'corner-glow 3s ease-in-out infinite 1s' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          {/* Premium Logo */}
          <div 
            className="flex items-center space-x-2 md:space-x-4 group cursor-pointer relative"
            onClick={() => handleNavigation('/')}
          >
            {/* Logo Container */}
            <div className="relative p-2 md:p-3 bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-xl md:rounded-2xl border-2 border-amber-500/30 group-hover:border-amber-400/50 transition-all duration-500">
              <Crown className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-amber-400 group-hover:scale-110 transition-transform duration-500" />
              <Sparkles 
                className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 text-amber-300"
                style={{ animation: 'sparkle 2s ease-in-out infinite' }}
              />
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="hidden sm:block text-lg md:text-xl lg:text-2xl font-black bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent tracking-tight">
                Ajel Garage
              </span>
              <span className="hidden sm:block text-[10px] md:text-xs text-amber-500/80 font-medium tracking-widest uppercase">
                Anytime anywhere
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Premium */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link, index) => (
              <div key={link.label} className="relative group">
                {link.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className="relative px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 font-semibold text-amber-100/90 hover:text-amber-50 flex items-center space-x-1 md:space-x-2 rounded-xl lg:rounded-2xl transition-all duration-500 overflow-hidden group/nav"
                    >
                      {/* Animated Background */}
                      <div className="absolute inset-0 border-2 border-amber-500/20 rounded-xl lg:rounded-2xl group-hover/nav:border-amber-400/40 transition-all duration-500" />
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover/nav:opacity-100 transition-all duration-700"
                        style={{ animation: 'premium-shimmer 4s linear infinite', backgroundSize: '200% 100%' }}
                      />
                      
                      <span className="relative z-10 tracking-wide text-sm lg:text-base">{link.label}</span>
                      <ChevronDown className="relative z-10 h-3 w-3 md:h-4 md:w-4 group-hover/nav:rotate-180 transition-transform duration-500" />
                    </button>

                    {/* Premium Dropdown */}
                    <div className="absolute left-0 mt-2 w-72 lg:w-80 xl:w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform origin-top">
                      <div className="relative bg-black/95 backdrop-blur-2xl p-3 lg:p-4 border-2 border-amber-500/20 rounded-2xl lg:rounded-3xl overflow-hidden">
                        {/* Dropdown Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-2xl lg:rounded-3xl" />
                        
                        {/* Services Grid */}
                        <div className="grid grid-cols-1 gap-1 lg:gap-2 relative z-10">
                          {link.submenu.map((service, i) => {
                            const Icon = service.icon;
                            return (
                              <button
                                key={service.label}
                                onClick={() => handleNavigation(service.path)}
                                className="relative flex items-start gap-2 lg:gap-3 xl:gap-4 w-full text-left p-2 lg:p-3 xl:p-4 rounded-lg lg:rounded-xl text-amber-100/80 hover:text-amber-50 transition-all duration-500 group/item overflow-hidden"
                              >
                                {/* Hover Background */}
                                <div className="absolute inset-0 border border-amber-500/10 rounded-lg lg:rounded-xl group-hover/item:border-amber-400/30 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover/item:opacity-100 transition-all duration-500" />
                                
                                {/* Icon Container */}
                                <div className="relative z-10 p-1.5 lg:p-2 xl:p-3 rounded-md lg:rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 group-hover/item:from-amber-500/30 group-hover/item:to-orange-500/20 transition-all duration-500">
                                  <Icon className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 text-amber-400" />
                                </div>
                                
                                {/* Content */}
                                <div className="relative z-10 flex-1 min-w-0">
                                  <div className="flex items-center gap-1 lg:gap-2 mb-0.5 lg:mb-1">
                                    <span className="font-semibold text-xs lg:text-sm truncate">{service.label}</span>
                                    {service.badge && (
                                      <span className="px-1.5 py-0.5 lg:px-2 lg:py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] lg:text-xs rounded-full font-bold flex-shrink-0">
                                        {service.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-amber-200/60 text-[10px] lg:text-xs leading-tight line-clamp-2">
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
                    className="relative px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 font-semibold text-amber-100/90 hover:text-amber-50 rounded-xl lg:rounded-2xl transition-all duration-500 overflow-hidden group/nav"
                  >
                    <div className="absolute inset-0 border-2 border-amber-500/20 rounded-xl lg:rounded-2xl group-hover/nav:border-amber-400/40 transition-all duration-500" />
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover/nav:opacity-100 transition-all duration-700"
                      style={{ animation: 'premium-shimmer 4s linear infinite', backgroundSize: '200% 100%' }}
                    />
                    <span className="relative z-10 tracking-wide text-sm lg:text-base">{link.label}</span>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button - Premium */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-2 md:p-3 rounded-xl lg:rounded-2xl transition-all duration-500 overflow-hidden group"
          >
            <div 
              className="absolute inset-0 border-2 border-amber-500/30 rounded-xl lg:rounded-2xl group-hover:border-amber-400/50 transition-all duration-500"
              style={{ animation: 'premium-border 3s ease-in-out infinite' }}
            />
            <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative z-10 text-amber-100">
              {isOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
            </div>
          </button>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-700 ${
        isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
      } bg-black/98 backdrop-blur-2xl relative border-t-2 border-amber-500/20`}>
        {/* Mobile Menu Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
        
        <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-2 sm:space-y-3 overflow-y-auto max-h-[70vh] relative z-10">
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
                    className="relative w-full text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold text-amber-100/90 flex items-center justify-between rounded-xl sm:rounded-2xl transition-all duration-500 overflow-hidden group"
                  >
                    <div className="absolute inset-0 border-2 border-amber-500/20 rounded-xl sm:rounded-2xl group-hover:border-amber-400/40 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <span className="relative z-10 tracking-wide text-sm sm:text-base">{link.label}</span>
                    <ChevronDown
                      className={`relative z-10 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 ${
                        openDropdown === link.label ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-700 ${
                    openDropdown === link.label ? 'max-h-[1000px] opacity-100 mt-2 sm:mt-3' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-3 sm:pl-4 space-y-2 sm:space-y-3 border-l-2 border-amber-500/20 ml-3 sm:ml-4">
                      {link.submenu.map((item, subIndex) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.path}
                            onClick={() => handleNavigation(item.path)}
                            className="relative flex items-center gap-2 sm:gap-3 w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-amber-100/80 hover:text-amber-50 transition-all duration-500 overflow-hidden group"
                            style={{
                              animationDelay: openDropdown === link.label ? `${subIndex * 0.05 + 0.3}s` : '0s'
                            }}
                          >
                            <div className="absolute inset-0 border border-amber-500/10 rounded-lg sm:rounded-xl group-hover:border-amber-400/30 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="relative z-10 p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-amber-500/20 group-hover:bg-amber-500/30 transition-all duration-500">
                              <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
                            </div>
                            <div className="relative z-10 flex-1 min-w-0">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <span className="font-semibold text-xs sm:text-sm truncate">{item.label}</span>
                                {item.badge && (
                                  <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] sm:text-xs rounded-full font-bold flex-shrink-0">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              {item.description && (
                                <p className="text-amber-200/60 text-[10px] sm:text-xs mt-0.5 sm:mt-1 leading-tight line-clamp-2">
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
                  className="relative block w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-amber-100/90 transition-all duration-500 overflow-hidden group"
                >
                  <div className="absolute inset-0 border-2 border-amber-500/20 rounded-xl sm:rounded-2xl group-hover:border-amber-400/40 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <span className="relative z-10 tracking-wide text-sm sm:text-base">{link.label}</span>
                </button>
              )}
            </div>
          ))}
          
          {/* Mobile CTA Buttons */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6">
            <button 
              onClick={() => handleNavigation('/contact')}
              className="relative px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl sm:rounded-2xl overflow-hidden group text-sm"
            >
              <div 
                className="absolute inset-0 border-2 border-amber-300/50 rounded-xl sm:rounded-2xl"
                style={{ animation: 'premium-border 3s ease-in-out infinite' }}
              />
              <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                Concierge
              </span>
            </button>

            <button className="relative px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-red-500/20 to-red-600/10 backdrop-blur-xl border-2 border-red-400/30 text-red-100 rounded-xl sm:rounded-2xl overflow-hidden group text-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                Emergency
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        @keyframes corner-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }

        @keyframes premiumSlideIn {
          from {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;