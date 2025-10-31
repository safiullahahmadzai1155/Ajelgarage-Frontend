import { Database, Cloud, Shield, Cpu, Server, Zap, Lock, GitBranch } from 'lucide-react';
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Team from '../components/Team';
import Male from "../Assists/Team/Male.jpeg"
import Female from "../Assists/Team/Female2.jpeg"
import Male22 from "../Assists/Team/male2.jpeg"
import Design01 from "../Assists/Design/Design01.jpeg"

const Androide = () => {
  const [isVisible, setIsVisible] = useState({});

  const team = [
    {
      name: 'Ahmed Al-Harthi',
      role: 'Android Development Lead',
      image: Male,
      bio: '8+ years in native Android development with Kotlin and Java'
    },
    {
      name: 'Fatima Al-Siyabi',
      role: 'Senior Android Developer',
      image: Female,
      bio: 'Specialist in Jetpack Compose and modern Android architecture'
    },
    {
      name: 'Khalid Al-Rashidi',
      role: 'Flutter Developer',
      image: Male22,
      bio: 'Expert in cross-platform mobile development with Flutter'
    },
  ];

  const values = [
    {
      icon: Cpu,
      title: 'Native Performance',
      description: 'High-performance Android apps with native Kotlin and optimized architecture.',
      color: '#34C759'
    },
    {
      icon: Zap,
      title: 'Fast Development',
      description: 'Rapid development cycles with modern tools and agile methodologies.',
      color: '#FF9500'
    },
    {
      icon: GitBranch,
      title: 'Cross-Platform',
      description: 'Flutter solutions for consistent experience across iOS and Android.',
      color: '#5856D6'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and robust error handling.',
      color: '#FF3B30'
    }
  ];

  const services = [
    {
      icon: Cpu,
      title: 'Native Android Development',
      description: 'Custom Android apps with Kotlin, Jetpack Compose, and modern architecture',
      color: '#34C759'
    },
    {
      icon: Zap,
      title: 'Flutter Cross-Platform',
      description: 'Beautiful cross-platform apps with Flutter and Dart',
      color: '#5856D6'
    },
    {
      icon: Cloud,
      title: 'Backend Integration',
      description: 'Seamless integration with REST APIs, Firebase, and cloud services',
      color: '#FF9500'
    },
    {
      icon: Shield,
      title: 'App Maintenance',
      description: 'Ongoing support, updates, and performance optimization',
      color: '#FF3B30'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <Banner
        title="Professional Mobile App Development by Codx Trick"
        subtitle="Building High-Quality Android & Flutter Apps for Omani Businesses"
        iconOne={Cpu}
        iconTwo={Zap}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Philosophy Section */}
        <section id="philosophy" data-animate className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible.philosophy ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-400/20 blur-3xl rounded-full group-hover:blur-4xl transition-all duration-500" />
                <div className="relative backdrop-blur-xl bg-white/5 border border-green-400/30 rounded-2xl overflow-hidden group-hover:border-green-400/50 transition-all duration-500">
                  <img
                    src={Design01}
                    alt="Mobile App Development"
                    className="w-full h-[500px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-block px-4 py-2 backdrop-blur-xl bg-green-600/20 border border-green-400/50 rounded-full mb-3">
                      <span className="text-green-400 font-bold text-sm">Android & Flutter Experts</span>
                    </div>
                    <h3 className="text-3xl font-black text-white" style={{ textShadow: '0 0 20px #34C759' }}>Codx Trick Mobile Solutions</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible.philosophy ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="text-green-400 text-sm font-mono tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-green-400"></span>
                Our Development Philosophy
              </div>
              <h2 className="text-5xl font-black mb-8" style={{ textShadow: '0 0 40px #34C75980' }}>
                Mobile <span className="text-green-400">Excellence</span>
              </h2>
              
              <div className="space-y-6">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-green-400/30 transition-all">
                  <h3 className="text-xl font-bold text-green-400 mb-3">Native Android Expertise</h3>
                  <p className="text-gray-300 leading-relaxed">
                    At Codx Trick, we build high-performance Android apps using Kotlin, Jetpack Compose, 
                    and modern architecture patterns for optimal user experience.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
                  <h3 className="text-xl font-bold text-blue-500 mb-3">Cross-Platform Solutions</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Codx Trick delivers beautiful Flutter apps that run seamlessly on both iOS and Android 
                    with single codebase efficiency.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-amber-400/30 transition-all">
                  <h3 className="text-xl font-bold text-amber-400 mb-3">Omani Market Focus</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We design apps specifically for Omani users, considering local preferences, 
                    language, and business requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" data-animate className="mb-32 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #34C759 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          </div>

          <div className="text-center mb-16 relative z-10">
            <div className="text-green-400 text-sm font-mono tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-green-400"></span>
              Codx Trick Mobile Services
              <span className="w-8 h-px bg-green-400"></span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ textShadow: '0 0 40px #34C75980' }}>
              App Development <span className="text-green-400">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive mobile app development tailored for Omani enterprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              const delay = index * 100;
              return (
                <div 
                  key={index} 
                  className={`group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-700 transform hover:-translate-y-2 ${
                    isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${delay}ms`,
                    boxShadow: `0 0 0 ${service.color}20`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 40px ${service.color}40`;
                    e.currentTarget.style.borderColor = `${service.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0 ${service.color}20`;
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <div className="relative mb-6">
                    <div 
                      className="absolute inset-0 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-all"
                      style={{ backgroundColor: service.color }}
                    ></div>
                    <div 
                      className="relative w-16 h-16 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                      style={{ backgroundColor: `${service.color}20`, border: `2px solid ${service.color}` }}
                    >
                      <Icon className="h-8 w-8" style={{ color: service.color }} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Process & Benefits Section */}
        <section id="process" data-animate className="mb-32">
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`group backdrop-blur-xl bg-white/5 border border-green-500/30 rounded-2xl p-10 hover:bg-white/10 transition-all duration-700 hover:shadow-[0_0_40px_rgba(52,199,89,0.3)] ${
              isVisible.process ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-600 rounded-xl blur-xl opacity-50"></div>
                  <div className="relative w-14 h-14 rounded-xl bg-green-600/20 border-2 border-green-500 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500">
                    <Cpu className="h-7 w-7 text-green-400" />
                  </div>
                </div>
                <h2 className="text-4xl font-black" style={{ textShadow: '0 0 30px #34C759' }}>Our Tech Stack</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Codx Trick specializes in native Android development with Kotlin, Jetpack Compose, 
                and modern architecture patterns. We also excel in Flutter for cross-platform solutions 
                and integrate with various backend services.
              </p>
            </div>

            <div className={`group backdrop-blur-xl bg-white/5 border border-blue-400/30 rounded-2xl p-10 hover:bg-white/10 transition-all duration-700 delay-300 hover:shadow-[0_0_40px_rgba(88,86,214,0.3)] ${
              isVisible.process ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-xl blur-xl opacity-50"></div>
                  <div className="relative w-14 h-14 rounded-xl bg-blue-600/20 border-2 border-blue-400 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500">
                    <GitBranch className="h-7 w-7 text-blue-400" />
                  </div>
                </div>
                <h2 className="text-4xl font-black" style={{ textShadow: '0 0 30px #5856D6' }}>Development Process</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Codx Trick follows agile mobile development methodology with UI/UX design, 
                iterative development, comprehensive testing, and continuous deployment. 
                We ensure scalable and maintainable mobile solutions for Omani businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Development Principles */}
        <section id="principles" data-animate className="mb-32">
          <div className="text-center mb-16">
            <div className="text-green-400 text-sm font-mono tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-green-400"></span>
              Codx Trick Development Values
              <span className="w-8 h-px bg-green-400"></span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ textShadow: '0 0 40px #34C75980' }}>
              Mobile <span className="text-green-400">Excellence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Principles that guide our commitment to outstanding mobile app development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const delay = index * 150;
              return (
                <div 
                  key={index} 
                  className={`group text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-700 transform hover:-translate-y-2 ${
                    isVisible.principles ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <div className="relative inline-block mb-6">
                    <div 
                      className="absolute inset-0 rounded-full blur-2xl transition-all opacity-40 group-hover:opacity-60"
                      style={{ backgroundColor: value.color }}
                    ></div>
                    <div 
                      className="relative w-20 h-20 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                      style={{ backgroundColor: `${value.color}20`, border: `3px solid ${value.color}` }}
                    >
                      <Icon className="h-10 w-10" style={{ color: value.color }} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <Team team={team} isVisible={isVisible} />
      </div>
    </div>
  );
};

export default Androide;