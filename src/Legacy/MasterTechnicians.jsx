import { useState } from 'react';
import { Target, Eye, Award, Users, Lightbulb, Heart, Wrench, Car, Cog, Calendar, MapPin, Phone, Star, Shield, Zap } from 'lucide-react';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';

const MasterTechnicians = () => {
  const [activeTab, setActiveTab] = useState('technicians');
  
  const masterTechnicians = [
    {
      name: "Ahmed Al-Harthy",
      role: "Master Technician & Founder",
      specialization: "European & Japanese Vehicles",
      experience: "25+ Years",
      certifications: ["ASE Master Technician", "BMW Certified", "Toyota Specialist"],
      bio: "With over 25 years of hands-on experience, Ahmed specializes in complex engine diagnostics and transmission systems. His expertise spans across German engineering and Japanese reliability.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      skills: ["Engine Diagnostics", "Transmission Repair", "Electrical Systems", "Performance Tuning"]
    },
    {
      name: "Mohammed Al-Balushi",
      role: "Senior Diagnostic Specialist",
      specialization: "Electrical & Computer Systems",
      experience: "15+ Years",
      certifications: ["Advanced Diagnostics", "ECU Programming", "Hybrid Systems"],
      bio: "Mohammed is our go-to expert for complex electrical issues and computer system diagnostics. He stays updated with the latest automotive technology and diagnostic equipment.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
      skills: ["Computer Diagnostics", "Wiring Systems", "ECU Programming", "Sensor Technology"]
    },
    {
      name: "Salem Al-Rashdi",
      role: "Performance & Tuning Expert",
      specialization: "Performance Upgrades",
      experience: "12+ Years",
      certifications: ["Performance Tuning", "Turbo Systems", "Engine Management"],
      bio: "Salem combines technical expertise with a passion for automotive performance. He specializes in engine tuning, turbo systems, and performance optimization for enhanced driving experience.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      skills: ["ECU Remapping", "Turbo Systems", "Exhaust Tuning", "Performance Optimization"]
    },
    {
      name: "Khalid Al-Mamari",
      role: "Transmission Specialist",
      specialization: "Automatic & Manual Transmissions",
      experience: "18+ Years",
      certifications: ["Transmission Master", "CVT Specialist", "Dual-Clutch Systems"],
      bio: "Khalid is our transmission guru with extensive experience in both automatic and manual gearboxes. He handles everything from routine maintenance to complete transmission overhauls.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      skills: ["Automatic Transmissions", "Manual Gearboxes", "CVT Systems", "Clutch Systems"]
    }
  ];

  const specialties = [
    {
      icon: Cog,
      title: "Advanced Diagnostics",
      description: "State-of-the-art computer diagnostics for precise problem identification",
      features: ["Computer System Scanning", "Fault Code Analysis", "Live Data Monitoring"]
    },
    {
      icon: Zap,
      title: "Engine Performance",
      description: "Comprehensive engine services from maintenance to performance tuning",
      features: ["Engine Overhaul", "Performance Tuning", "Fuel System Service"]
    },
    {
      icon: Wrench,
      title: "Transmission Expertise",
      description: "Specialized transmission services for all vehicle types",
      features: ["Automatic Transmissions", "Manual Gearboxes", "CVT Systems"]
    },
    {
      icon: Shield,
      title: "Electrical Systems",
      description: "Expert electrical diagnostics and repair services",
      features: ["Wiring Systems", "ECU Programming", "Sensor Diagnostics"]
    }
  ];

  const certifications = [
    { name: "ASE Certified Master Technician", count: 4 },
    { name: "Manufacturer Certified Specialists", count: 8 },
    { name: "Advanced Diagnostic Systems", count: 12 },
    { name: "Hybrid & Electric Vehicle Certified", count: 3 }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <Banner 
        title="Master Technicians"
        subtitle="Meet our team of certified automotive experts with decades of combined experience. Precision, expertise, and passion for automotive excellence."
        iconOne={Wrench}
        iconTwo={Award}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">70+</div>
            <div className="text-amber-200/70 text-sm">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">15+</div>
            <div className="text-amber-200/70 text-sm">Professional Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">50K+</div>
            <div className="text-amber-200/70 text-sm">Vehicles Serviced</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">99%</div>
            <div className="text-amber-200/70 text-sm">Customer Satisfaction</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-xl p-1">
            <button
              onClick={() => setActiveTab('technicians')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'technicians'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  : 'text-amber-200/70 hover:text-amber-100'
              }`}
            >
              Our Technicians
            </button>
            <button
              onClick={() => setActiveTab('specialties')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'specialties'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  : 'text-amber-200/70 hover:text-amber-100'
              }`}
            >
              Specialties
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  : 'text-amber-200/70 hover:text-amber-100'
              }`}
            >
              Certifications
            </button>
          </div>
        </div>

        {/* Technicians Tab */}
        {activeTab === 'technicians' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-amber-100 mb-4">Meet Our Master Technicians</h2>
              <p className="text-amber-200/60 text-lg max-w-2xl mx-auto">
                Highly skilled professionals with specialized expertise in various automotive systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {masterTechnicians.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400/40 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-20 h-20 rounded-xl object-cover border-2 border-amber-500/30"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-amber-100 mb-1">{tech.name}</h3>
                        <div className="text-amber-400 font-semibold text-sm mb-2">{tech.role}</div>
                        <div className="flex items-center gap-4 text-amber-200/70 text-xs">
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {tech.specialization}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {tech.experience}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-amber-200/70 text-sm mb-4 leading-relaxed">
                      {tech.bio}
                    </p>

                    <div className="mb-4">
                      <div className="text-amber-100 font-semibold text-sm mb-2">Certifications:</div>
                      <div className="flex flex-wrap gap-2">
                        {tech.certifications.map((cert, idx) => (
                          <span
                            key={idx}
                            className="bg-amber-500/20 text-amber-300 text-xs px-2 py-1 rounded"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-amber-100 font-semibold text-sm mb-2">Specialized Skills:</div>
                      <div className="flex flex-wrap gap-2">
                        {tech.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-orange-500/20 text-orange-300 text-xs px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Specialties Tab */}
        {activeTab === 'specialties' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-amber-100 mb-4">Our Specialized Services</h2>
              <p className="text-amber-200/60 text-lg max-w-2xl mx-auto">
                Advanced automotive services backed by expert knowledge and cutting-edge technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-xl p-6 hover:border-amber-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-amber-500/20 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-100 mb-2">{specialty.title}</h3>
                        <p className="text-amber-200/70 text-sm">{specialty.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {specialty.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-amber-200/60 text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-amber-100 mb-4">Our Certifications</h2>
              <p className="text-amber-200/60 text-lg max-w-2xl mx-auto">
                Industry-recognized certifications that demonstrate our commitment to excellence
              </p>
            </div>

            <div className="grid gap-6 max-w-2xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-xl p-6 hover:border-amber-400/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-500/20 p-2 rounded-lg">
                        <Award className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-amber-100">{cert.name}</h3>
                      </div>
                    </div>
                    <div className="text-amber-400 font-bold text-lg">
                      {cert.count}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-amber-100 mb-4">Continuous Training</h3>
                <p className="text-amber-200/70 mb-4">
                  Our technicians undergo regular training to stay current with the latest automotive technologies and repair techniques.
                </p>
                <div className="flex justify-center gap-4 text-sm text-amber-200/60">
                  <span>Annual Training Updates</span>
                  <span>•</span>
                  <span>Manufacturer Programs</span>
                  <span>•</span>
                  <span>Technology Workshops</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Why Choose Our Technicians */}
        <div className="mt-20 bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-100 mb-4">Why Trust Our Technicians?</h2>
            <p className="text-amber-200/60">Expertise you can rely on for your vehicle's care</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Proven Experience", 
                description: "Decades of hands-on experience with all vehicle types",
                icon: Users
              },
              { 
                title: "Advanced Training", 
                description: "Continuous education on latest automotive technologies",
                icon: Lightbulb
              },
              { 
                title: "Quality Guarantee", 
                description: "All work backed by our comprehensive service warranty",
                icon: Shield
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-100 mb-2">{item.title}</h3>
                  <p className="text-amber-200/70 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterTechnicians;