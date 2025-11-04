import { useState } from 'react';
import { Code2, Mail, MapPin, Facebook, Twitter, Linkedin, Github, ArrowRight, Shield, FileText, Cookie } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    { label: t('engineDiagnostics'), route: "/Services/Diagnostics" },
    { label: t('brakeRepair'), route: "/Services/BrakeService" },
    { label: t('vehicleMaintenance'), route: "/Services/Maintenance" },
    { label: t('oilChange'), route: "/Services/OilChange" },
    { label: t('performanceTuning'), route: "/Services/PerformanceTuning" }
  ];

  const companyLinks = [
    { label: t('aiDiagnosticsTech'), route: "/Services/Diagnostics" },
    { label: t('testimonials'), route: "/testimonials" },
    { label: t('services'), route: "/service" },
    { label: t('legacy'), route: "/Legacy" }
  ];

  const legalLinks = [
    { label: t('privacyPolicy'), route: "/Rule/Privacy", icon: Shield },
    { label: t('termsConditions'), route: "/Rule/Terms", icon: FileText },
    { label: t('cookiePolicy'), route: "/Rule/Cookies", icon: Cookie },
    { label: t('sitemap'), route: "/sitemap" }
  ];

  const handleNavigation = (route) => {
    console.log('Navigate to:', route);
    setActiveSection(route);
    
    // Add visual feedback
    const sectionElement = document.getElementById('main-content');
    if (sectionElement) {
      sectionElement.style.opacity = '0.7';
      setTimeout(() => {
        sectionElement.style.opacity = '1';
      }, 300);
    }
  };

  const handleHomeNavigation = () => {
    setActiveSection('home');
    navigate('/');
  };

  const handleEmailNavigation = (type) => {
    setActiveSection(type);
    if (type === 'contact') {
      window.location.href = 'mailto:info@ajalgarage.com';
    } else if (type === 'support') {
      window.location.href = 'mailto:support@ajalgarage.com';
    }
  };

  const handleExternalNavigation = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleNewsletterSignup = () => {
    setActiveSection('newsletter');
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
      console.log('Newsletter signup for:', emailInput.value);
      alert(t('newsletterThankYou', { email: emailInput.value }));
      emailInput.value = '';
    } else {
      alert(t('enterEmailAlert'));
    }
  };

  const getButtonStyles = (route) => {
    const isActive = activeSection === route;
    return `transition-all duration-300 text-sm flex items-center group w-full text-left hover:translate-x-1 ${
      isActive 
        ? 'text-orange-400 font-semibold scale-105' 
        : 'text-amber-100/80 hover:text-orange-400'
    }`;
  };

  const getDotStyles = (route) => {
    const isActive = activeSection === route;
    return `w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
      isActive 
        ? 'bg-orange-500 scale-150 shadow-lg shadow-orange-500/50' 
        : 'bg-amber-600 group-hover:scale-150 group-hover:bg-orange-400'
    }`;
  };

  return (
    <footer className="bg-gradient-to-br from-stone-950 via-amber-950 to-black relative overflow-hidden border-t-4 border-orange-600/40 shadow-2xl shadow-orange-900/50">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to right, #d97706 1px, transparent 1px), linear-gradient(to bottom, #ea580c 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-700 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-800 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-900 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 cursor-pointer" onClick={handleHomeNavigation}>
              <div className={`bg-gradient-to-br from-orange-600 via-amber-700 to-orange-800 p-2.5 rounded-xl shadow-xl shadow-orange-900/50 transform transition-transform duration-300 border-2 border-orange-500/30 ${
                activeSection === 'home' ? 'scale-110 rotate-12' : 'hover:scale-105'
              }`}>
                <Code2 className="h-8 w-8 text-amber-100" />
              </div>
              <span className={`text-3xl font-bold text-amber-50 tracking-tight transition-all duration-300 ${
                activeSection === 'home' ? 'text-orange-400' : ''
              }`}>
                {t('ajelGarage')}
              </span>
            </div>
            <p className="text-amber-100/70 mb-8 leading-relaxed text-base">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "https://facebook.com/ajalgarage", color: "hover:bg-orange-700 hover:border-orange-500" },
                { icon: Twitter, href: "https://twitter.com/ajalgarage", color: "hover:bg-amber-700 hover:border-amber-500" },
                { icon: Linkedin, href: "https://linkedin.com/company/ajalgarage", color: "hover:bg-orange-600 hover:border-orange-400" },
                { icon: Github, href: "https://github.com/ajalgarage", color: "hover:bg-stone-800 hover:border-stone-600" }
              ].map((social, index) => (
                <button 
                  key={index}
                  onClick={() => handleExternalNavigation(social.href)}
                  className={`bg-stone-900/60 p-3 rounded-xl ${social.color} hover:shadow-lg hover:shadow-orange-900/50 transition-all duration-300 group transform hover:-translate-y-1 border-2 border-orange-800/30`}
                >
                  <social.icon className="h-5 w-5 text-orange-400 group-hover:text-amber-100 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-amber-50 font-bold mb-6 flex items-center text-lg">
              <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-1.5 rounded-lg mr-3 border-2 border-orange-500/40 shadow-lg shadow-orange-900/30">
                <ArrowRight className="h-4 w-4 text-amber-50" />
              </div>
              {t('ourServices')}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigate(service.route)}
                    className={getButtonStyles(service.route)}
                  >
                    <span className={getDotStyles(service.route)}></span>
                    {service.label}
                    {activeSection === service.route && (
                      <span className="ml-2 text-orange-400 animate-pulse">●</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-50 font-bold mb-6 flex items-center text-lg">
              <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-1.5 rounded-lg mr-3 border-2 border-orange-500/40 shadow-lg shadow-orange-900/30">
                <ArrowRight className="h-4 w-4 text-amber-50" />
              </div>
              {t('company')}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigate(link.route)}
                    className={getButtonStyles(link.route)}
                  >
                    <span className={getDotStyles(link.route)}></span>
                    {link.label}
                    {activeSection === link.route && (
                      <span className="ml-2 text-orange-400 animate-pulse">●</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-amber-50 font-bold mb-6 flex items-center text-lg">
              <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-1.5 rounded-lg mr-3 border-2 border-orange-500/40 shadow-lg shadow-orange-900/30">
                <ArrowRight className="h-4 w-4 text-amber-50" />
              </div>
              {t('getInTouch')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className={`bg-stone-900/60 p-2 rounded-lg transition-colors border-2 border-orange-800/30 ${
                  activeSection === 'contact' ? 'bg-orange-900/40 scale-110 border-orange-600' : 'group-hover:bg-orange-900/30'
                }`}>
                  <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-amber-100">{t('locationArea')}</span>
                  <span className="block text-sm text-amber-100/60">{t('locationCountry')}</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className={`bg-stone-900/60 p-2 rounded-lg transition-colors border-2 border-orange-800/30 ${
                  activeSection === 'contact' ? 'bg-orange-900/40 scale-110 border-orange-600' : 'group-hover:bg-orange-900/30'
                }`}>
                  <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                </div>
                <div>
                  <button 
                    onClick={() => handleEmailNavigation('contact')}
                    className={`text-sm transition-colors block font-medium ${
                      activeSection === 'contact' ? 'text-orange-400' : 'text-amber-100 hover:text-orange-400'
                    }`}
                  >
                    {t('contactEmail')}
                  </button>
                  <button 
                    onClick={() => handleEmailNavigation('support')}
                    className={`text-sm transition-colors block ${
                      activeSection === 'support' ? 'text-orange-400' : 'text-amber-100/60 hover:text-orange-400'
                    }`}
                  >
                    {t('supportEmail')}
                  </button>
                </div>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className='mt-10'>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder={t('emailPlaceholder')}
                  className="flex-1 px-4 py-2.5 bg-stone-900/60 border-2 border-orange-800/30 rounded-l-xl text-sm focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-500/50 transition-all text-amber-100 placeholder-amber-100/40"
                />
                <button 
                  onClick={handleNewsletterSignup}
                  className="bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 px-5 py-2.5 rounded-r-xl text-amber-50 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/50 border-2 border-orange-500/40"
                >
                  {t('join')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-orange-900/30 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <p className="text-amber-100/80 text-sm font-medium">
                {t('copyright', { year: currentYear })}
              </p>
              <div className="flex items-center space-x-2 text-xs text-amber-100/60">
                <span className="bg-stone-900/60 px-3 py-1 rounded-full border-2 border-orange-800/30">{t('registeredOman')}</span>
                <span>•</span>
                <span>{t('commercialRegistration')}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <button 
                  key={index}
                  onClick={() => navigate(link.route)}
                  className="text-amber-100/80 hover:text-orange-400 transition-colors text-sm flex items-center group"
                >
                  {link.icon && <link.icon className="h-3.5 w-3.5 mr-2 group-hover:scale-110 transition-transform" />}
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;