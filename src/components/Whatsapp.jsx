import { MessageCircle, X, Send, Sparkles, Clock, CheckCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useCallback } from 'react';

function WhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  // Debounce function for smooth interactions
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const toggleMenu = useCallback(debounce(() => {
    setIsOpen(prev => {
      const newState = !prev;
      if (newState) {
        setTimeout(() => setIsTyping(true), 500);
        setTimeout(() => setIsTyping(false), 2500);
      }
      return newState;
    });
  }, 300), []);

  const toggleAccordion = useCallback(debounce((index) => {
    setOpenAccordion(prev => prev === index ? null : index);
  }, 200), []);

  const handleWhatsAppClick = useCallback(debounce((serviceName = '', specificService = '') => {
    const phoneNumber = '+96879265646';
    let message = 'Hello Ajel Garage! ';
    
    if (serviceName && specificService) {
      message += `I would like to inquire about ${specificService} under ${serviceName}.`;
    } else if (serviceName) {
      message += `I would like to inquire about ${serviceName}.`;
    } else {
      message += 'I would like to inquire about your automotive services, maintenance, or repairs.';
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  }, 300), []);

  const services = [
    {
      name: 'Premium Car Services',
      icon: '🚗',
      description: 'Complete automotive care and maintenance',
      items: [
        {
          category: 'Engine Services',
          technologies: ['Engine Repair', 'Oil Change', 'Tune-up', 'Diagnostics', 'Performance Tuning']
        },
        {
          category: 'Brake Services',
          technologies: ['Brake Pad Replacement', 'Brake Disc Service', 'ABS Repair', 'Brake Fluid Change', 'Ceramic Brakes']
        },
        {
          category: 'Transmission',
          technologies: ['Automatic Transmission', 'Manual Transmission', 'Clutch Replacement', 'Gearbox Repair', 'Transmission Fluid']
        },
        {
          category: 'Suspension & Steering',
          technologies: ['Shock Absorbers', 'Strut Replacement', 'Wheel Alignment', 'Power Steering', 'Suspension Repair']
        },
        {
          category: 'Electrical Systems',
          technologies: ['Battery Service', 'Alternator Repair', 'Starter Motor', 'Wiring Issues', 'ECU Diagnostics']
        }
      ]
    },
    {
      name: 'Luxury Vehicle Care',
      icon: '🏎️',
      description: 'Specialized care for premium and luxury vehicles',
      items: [
        {
          category: 'Premium Brands',
          technologies: ['Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'Lexus']
        },
        {
          category: 'Performance Upgrades',
          technologies: ['Chip Tuning', 'Exhaust Systems', 'Suspension Upgrades', 'Brake Upgrades', 'Aero Kits']
        },
        {
          category: 'Interior Services',
          technologies: ['Leather Repair', 'Dashboard Restoration', 'AC Service', 'Entertainment Systems', 'Custom Interiors']
        },
        {
          category: 'Exterior Care',
          technologies: ['Paint Correction', 'Ceramic Coating', 'PPF Installation', 'Detailing', 'Rust Protection']
        },
        {
          category: 'Advanced Features',
          technologies: ['ADAS Calibration', 'Key Programming', 'Comfort Systems', 'Safety Features', 'Navigation Updates']
        }
      ]
    },
    {
      name: 'Maintenance Packages',
      icon: '🔧',
      description: 'Comprehensive maintenance plans for your vehicle',
      items: [
        {
          category: 'Regular Maintenance',
          technologies: ['Oil & Filter Change', 'Air Filter Replacement', 'Spark Plugs', 'Fuel System', 'Coolant Service']
        },
        {
          category: 'Seasonal Services',
          technologies: ['Winter Preparation', 'Summer Check-up', 'AC Service', 'Heating System', 'Tire Change']
        },
        {
          category: 'Preventive Maintenance',
          technologies: ['Fluid Changes', 'Belt Inspection', 'Hose Check', 'Brake Inspection', 'Suspension Check']
        },
        {
          category: 'Service Packages',
          technologies: ['Basic Service', 'Comprehensive Service', 'Premium Service', 'Annual Maintenance', 'Fleet Services']
        },
        {
          category: 'Inspection Services',
          technologies: ['Pre-purchase Inspection', 'Annual Inspection', 'Safety Check', 'Emission Test', 'Diagnostic Scan']
        }
      ]
    },
    {
      name: 'Emergency & Roadside',
      icon: '🆘',
      description: '24/7 emergency services and roadside assistance',
      items: [
        {
          category: 'Emergency Services',
          technologies: ['Breakdown Recovery', 'Flat Tire Service', 'Jump Start', 'Fuel Delivery', 'Lockout Service']
        },
        {
          category: 'Towing Services',
          technologies: ['Local Towing', 'Long Distance', 'Accident Recovery', 'Specialized Towing', 'Fleet Towing']
        },
        {
          category: 'Mobile Services',
          technologies: ['Mobile Mechanic', 'On-site Repair', 'Battery Replacement', 'Tire Change', 'Minor Repairs']
        },
        {
          category: '24/7 Support',
          technologies: ['Emergency Hotline', 'Roadside Assistance', 'Mobile Support', 'Remote Diagnostics', 'Service Dispatch']
        },
        {
          category: 'Recovery Services',
          technologies: ['Vehicle Recovery', 'Accident Scene', 'Off-road Recovery', 'Commercial Vehicles', 'Luxury Cars']
        }
      ]
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.8);
              filter: blur(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0px);
            }
          }

          @keyframes pulse-ring {
            0% {
              transform: scale(0.8);
              opacity: 0.8;
            }
            50% {
              opacity: 0.4;
            }
            100% {
              transform: scale(1.8);
              opacity: 0;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-8px) rotate(2deg);
            }
            75% {
              transform: translateY(-8px) rotate(-2deg);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }

          @keyframes typing-dots {
            0%, 100% {
              opacity: 0.3;
              transform: scale(0.8);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }

          @keyframes message-in {
            from {
              opacity: 0;
              transform: translateX(-20px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(245, 158, 11, 0.4), 0 0 40px rgba(245, 158, 11, 0.3);
            }
            50% {
              box-shadow: 0 0 30px rgba(245, 158, 11, 0.6), 0 0 60px rgba(245, 158, 11, 0.4), 0 0 80px rgba(245, 158, 11, 0.2);
            }
          }

          .chat-popup {
            animation: slideUp 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          .pulse-ring {
            animation: pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          }

          .float-animation {
            animation: float 4s ease-in-out infinite;
          }

          .shimmer-effect {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }

          .message-bubble {
            animation: message-in 0.4s ease-out;
          }

          .typing-dot {
            animation: typing-dots 1.4s infinite;
          }

          .glow-effect {
            animation: glow 2s ease-in-out infinite;
          }

          /* Fixed Accordion Styles */
          .accordion-content {
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          }

          .accordion-open {
            max-height: 1000px;
            opacity: 1;
          }

          .accordion-closed {
            max-height: 0;
            opacity: 0;
            pointer-events: none;
          }

          /* Custom Scrollbar */
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(245, 158, 11, 0.6);
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(245, 158, 11, 0.8);
          }
        `}
      </style>

      {/* Pop-up Chat Window */}
      {isOpen && (
        <div className="chat-popup absolute bottom-24 right-0 w-96 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-amber-950/95 via-black to-amber-900/80 border-2 border-amber-500/30">
          {/* Header with Amber Theme */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-90"></div>
            <div className="absolute inset-0 bg-white/10"></div>
            
            {/* Animated Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-300/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

            <div className="relative p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl transform transition-transform hover:scale-110 border-2 border-white/30">
                      <MessageCircle size={28} className="text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border-3 border-amber-500 shadow-lg animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="font-black text-white text-xl tracking-tight">Ajel Garage</h3>
                    <p className="text-white/90 text-sm flex items-center gap-2 mt-1">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                      </span>
                      Online • Responds in minutes
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleMenu}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110 border-2 border-white/30"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-6 space-y-5 max-h-96 overflow-y-auto bg-gradient-to-b from-amber-50/5 to-black/80 custom-scrollbar">
            {/* Welcome Message */}
            <div className="flex gap-3 message-bubble">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-amber-400/50">
                <Sparkles size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl rounded-tl-sm p-5 shadow-lg">
                  <p className="text-white font-black text-base mb-2">
                    🚗 Welcome to Ajel Garage!
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    Your trusted partner for premium automotive care. Let's discuss how we can keep your vehicle running at its best!
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-xs font-black text-white mb-2 flex items-center gap-2">
                      <Sparkles size={12} className="text-amber-300" />
                      Select a service to get started:
                    </p>
                    
                    {/* Services Accordion */}
                    {services.map((service, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 overflow-hidden">
                        {/* Accordion Header */}
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-white/15 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{service.icon}</span>
                            <div>
                              <h4 className="text-white font-black text-sm">{service.name}</h4>
                              <p className="text-white/80 text-xs">{service.description}</p>
                            </div>
                          </div>
                          {openAccordion === index ? (
                            <ChevronUp size={16} className="text-white flex-shrink-0 transition-transform duration-300" />
                          ) : (
                            <ChevronDown size={16} className="text-white flex-shrink-0 transition-transform duration-300" />
                          )}
                        </button>

                        {/* Accordion Content */}
                        <div className={`accordion-content ${openAccordion === index ? 'accordion-open' : 'accordion-closed'}`}>
                          <div className="p-4 space-y-3 border-t-2 border-white/20">
                            {service.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="space-y-2">
                                <h5 className="text-white font-black text-xs">{item.category}</h5>
                                <div className="flex flex-wrap gap-1.5">
                                  {item.technologies.map((tech, techIndex) => (
                                    <button
                                      key={techIndex}
                                      onClick={() => handleWhatsAppClick(service.name, `${item.category} - ${tech}`)}
                                      className="text-xs px-2.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all hover:scale-105 hover:shadow-md cursor-pointer border-2 border-white/20 font-medium"
                                    >
                                      {tech}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                            
                            {/* General Service Button */}
                            <button
                              onClick={() => handleWhatsAppClick(service.name)}
                              className="w-full text-center text-xs px-3 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg transition-all hover:scale-105 cursor-pointer border-2 border-amber-400/50 font-black"
                            >
                              Discuss {service.name} in General
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 ml-2">
                  <Clock size={12} className="text-white/60" />
                  <p className="text-xs text-white/60">Just now</p>
                  <CheckCheck size={14} className="text-white/60" />
                </div>
              </div>
            </div>

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 message-bubble">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-white/20">
                  <MessageCircle size={18} className="text-white/60" />
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-sm px-5 py-3 shadow border-2 border-white/20">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-white/60 rounded-full typing-dot"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full typing-dot" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full typing-dot" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="p-6 bg-gradient-to-t from-amber-500/20 to-black/50 border-t-2 border-white/20">
            <button
              onClick={() => handleWhatsAppClick()}
              className="relative w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-amber-500/50 hover:scale-105 active:scale-95 group overflow-hidden glow-effect border-2 border-amber-300/50 text-sm md:text-base"
            >
              <div className="absolute inset-0 shimmer-effect"></div>
              <Send size={20} className="transform group-hover:translate-x-1 transition-transform relative z-10" />
              <span className="relative z-10">Start Conversation</span>
              <Sparkles size={18} className="animate-spin relative z-10" />
            </button>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-white/80 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Average response time: <strong className="text-white">2 minutes</strong>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button - Amber Premium Design */}
      <button
        onClick={toggleMenu}
        className="relative w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-3xl shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-6 active:scale-95 group float-animation overflow-hidden border-2 border-amber-300/50"
        style={{
          boxShadow: '0 10px 40px rgba(245, 158, 11, 0.4), 0 0 0 0 rgba(245, 158, 11, 0.5)'
        }}
      >
        {/* Multiple Pulse Rings */}
        <span className="absolute inset-0 rounded-3xl bg-amber-400 opacity-75 pulse-ring"></span>
        <span className="absolute inset-0 rounded-3xl bg-amber-500 opacity-75 pulse-ring" style={{animationDelay: '0.8s'}}></span>
        <span className="absolute inset-0 rounded-3xl bg-amber-300 opacity-50 pulse-ring" style={{animationDelay: '1.6s'}}></span>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 shimmer-effect rounded-3xl"></div>

        {/* Icon with 3D Effect */}
        <div className="relative z-10 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
          {isOpen ? (
            <X size={36} className="text-white drop-shadow-lg" />
          ) : (
            <MessageCircle size={36} className="text-white drop-shadow-lg" />
          )}
        </div>

        {/* Enhanced Tooltip */}
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform group-hover:-translate-y-1">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm px-5 py-3 rounded-xl whitespace-nowrap shadow-2xl backdrop-blur-sm border-2 border-amber-300/50">
            <div className="flex items-center gap-2">
              <MessageCircle size={16} className="text-white" />
              <span className="font-black">Chat with Ajel Garage</span>
            </div>
            <p className="text-white/90 text-xs mt-1">We're online now! ⚫</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
              <div className="border-8 border-transparent border-t-amber-500"></div>
            </div>
          </div>
        </div>
      </button>

      {/* Floating Particles around Button */}
      {!isOpen && (
        <>
          <div className="absolute -top-2 left-2 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-4 -right-3 w-2 h-2 bg-amber-300 rounded-full animate-ping opacity-75" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute -bottom-1 left-4 w-2.5 h-2.5 bg-amber-200 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
        </>
      )}
    </div>
  );
}

export default WhatsApp;