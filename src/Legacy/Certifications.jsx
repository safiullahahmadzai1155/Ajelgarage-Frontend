import { useState } from 'react';
import { Target, Eye, Award, Users, Lightbulb, Heart, Wrench, Car, Cog, Calendar, MapPin, Phone, Star, Shield, Zap } from 'lucide-react';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('technicians');
  const [selectedTech, setSelectedTech] = useState(null);
  
  const masterTechnicians = [
    {
      name: "Ahmed Al-Harthy",
      role: "Master Technician & Founder",
      specialization: "European & Japanese Vehicles",
      experience: "25+ Years",
      certifications: ["ASE Master Technician", "BMW Certified", "Toyota Specialist"],
      bio: "With over 25 years of hands-on experience, Ahmed specializes in complex engine diagnostics and transmission systems. His expertise spans across German engineering and Japanese reliability.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      skills: ["Engine Diagnostics", "Transmission Repair", "Electrical Systems", "Performance Tuning"],
      achievements: ["Founder of Ajal Garage", "Trained 50+ Technicians", "Industry Speaker"]
    },
    {
      name: "Mohammed Al-Balushi",
      role: "Senior Diagnostic Specialist",
      specialization: "Electrical & Computer Systems",
      experience: "15+ Years",
      certifications: ["Advanced Diagnostics", "ECU Programming", "Hybrid Systems"],
      bio: "Mohammed is our go-to expert for complex electrical issues and computer system diagnostics. He stays updated with the latest automotive technology and diagnostic equipment.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
      skills: ["Computer Diagnostics", "Wiring Systems", "ECU Programming", "Sensor Technology"],
      achievements: ["Hybrid Systems Expert", "Diagnostic Equipment Trainer"]
    },
    {
      name: "Salem Al-Rashdi",
      role: "Performance & Tuning Expert",
      specialization: "Performance Upgrades",
      experience: "12+ Years",
      certifications: ["Performance Tuning", "Turbo Systems", "Engine Management"],
      bio: "Salem combines technical expertise with a passion for automotive performance. He specializes in engine tuning, turbo systems, and performance optimization for enhanced driving experience.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      skills: ["ECU Remapping", "Turbo Systems", "Exhaust Tuning", "Performance Optimization"],
      achievements: ["Performance Award Winner", "Racing Team Consultant"]
    },
    {
      name: "Khalid Al-Mamari",
      role: "Transmission Specialist",
      specialization: "Automatic & Manual Transmissions",
      experience: "18+ Years",
      certifications: ["Transmission Master", "CVT Specialist", "Dual-Clutch Systems"],
      bio: "Khalid is our transmission guru with extensive experience in both automatic and manual gearboxes. He handles everything from routine maintenance to complete transmission overhauls.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      skills: ["Automatic Transmissions", "Manual Gearboxes", "CVT Systems", "Clutch Systems"],
      achievements: ["Transmission Innovation Award", "Manufacturer Trainer"]
    }
  ];

  const specialties = [
    {
      icon: Cog,
      title: "Advanced Diagnostics",
      description: "State-of-the-art computer diagnostics for precise problem identification",
      features: ["Computer System Scanning", "Fault Code Analysis", "Live Data Monitoring", "Performance Testing"],
      color: "amber"
    },
    {
      icon: Zap,
      title: "Engine Performance",
      description: "Comprehensive engine services from maintenance to performance tuning",
      features: ["Engine Overhaul", "Performance Tuning", "Fuel System Service", "Turbo Charging"],
      color: "orange"
    },
    {
      icon: Wrench,
      title: "Transmission Expertise",
      description: "Specialized transmission services for all vehicle types",
      features: ["Automatic Transmissions", "Manual Gearboxes", "CVT Systems", "Dual-Clutch"],
      color: "amber"
    },
    {
      icon: Shield,
      title: "Electrical Systems",
      description: "Expert electrical diagnostics and repair services",
      features: ["Wiring Systems", "ECU Programming", "Sensor Diagnostics", "Hybrid Systems"],
      color: "orange"
    }
  ];

  const certifications = [
    { 
      name: "ASE Certified Master Technician", 
      count: 4,
      description: "Highest level of professional automotive certification",
      icon: Award
    },
    { 
      name: "Manufacturer Certified Specialists", 
      count: 8,
      description: "Factory-trained experts for specific brands",
      icon: Users
    },
    { 
      name: "Advanced Diagnostic Systems", 
      count: 12,
      description: "Certified on latest diagnostic equipment",
      icon: Cog
    },
    { 
      name: "Hybrid & Electric Vehicle Certified", 
      count: 3,
      description: "Specialized training for modern vehicle technologies",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <Banner 
        title="Certified Excellence"
        subtitle="Ajal Garage's team of master technicians brings decades of expertise and industry-leading certifications to ensure your vehicle receives the best care possible."
        iconOne={Award}
        iconTwo={Shield}
        badgeText="ASE Certified"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Stats dengan design yang lebih baik */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { number: "70+", label: "Years Combined Experience", icon: Calendar },
            { number: "15+", label: "Professional Certifications", icon: Award },
            { number: "50K+", label: "Vehicles Serviced", icon: Car },
            { number: "99%", label: "Customer Satisfaction", icon: Star }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-stone-900 border border-amber-800 rounded-xl p-6 text-center hover:border-amber-600 transition-all duration-300"
              >
                <div className="bg-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="text-2xl font-bold text-amber-400 mb-1">{stat.number}</div>
                <div className="text-amber-300 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Fixed Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-stone-900 border border-amber-800 rounded-xl p-1 flex space-x-1">
            {[
              { id: 'technicians', label: 'Our Technicians', icon: Users },
              { id: 'specialties', label: 'Specialties', icon: Cog },
              { id: 'certifications', label: 'Certifications', icon: Award }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 min-w-0 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'text-amber-200/70 hover:text-amber-100 hover:bg-amber-500/10'
                  }`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
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
              <h2 className="text-4xl font-bold text-amber-50 mb-4">Meet Our Master Technicians</h2>
              <p className="text-amber-300 text-lg max-w-2xl mx-auto">
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
                  className="bg-stone-900 border border-amber-800 rounded-2xl overflow-hidden hover:border-amber-600 transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0 relative">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-20 h-20 rounded-xl object-cover border-2 border-amber-500/50"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          {tech.experience}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-amber-50 mb-1">{tech.name}</h3>
                        <div className="text-amber-400 font-semibold text-sm mb-2">{tech.role}</div>
                        <div className="flex items-center gap-4 text-amber-300 text-xs">
                          <span className="flex items-center gap-1 bg-amber-500/20 px-2 py-1 rounded">
                            <Star className="h-3 w-3" />
                            {tech.specialization}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-amber-200 text-sm mb-4 leading-relaxed">
                      {tech.bio}
                    </p>

                    <div className="mb-4">
                      <div className="text-amber-50 font-semibold text-sm mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Certifications:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tech.certifications.map((cert, idx) => (
                          <span
                            key={idx}
                            className="bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full border border-amber-500/30"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-amber-50 font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Specialized Skills:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tech.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-orange-500/20 text-orange-300 text-xs px-3 py-1 rounded-full border border-orange-500/30"
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
              <h2 className="text-4xl font-bold text-amber-50 mb-4">Our Specialized Services</h2>
              <p className="text-amber-300 text-lg max-w-2xl mx-auto">
                Advanced automotive services backed by expert knowledge and cutting-edge technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon;
                const colorClass = specialty.color === 'orange' 
                  ? 'from-orange-500/20 to-orange-600/10 border-orange-800' 
                  : 'from-amber-500/20 to-amber-600/10 border-amber-800';
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${colorClass} border rounded-xl p-6 hover:border-amber-600 transition-all duration-300 hover:transform hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${
                        specialty.color === 'orange' ? 'bg-orange-500/20' : 'bg-amber-500/20'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          specialty.color === 'orange' ? 'text-orange-400' : 'text-amber-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-50 mb-2">{specialty.title}</h3>
                        <p className="text-amber-200 text-sm">{specialty.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {specialty.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-amber-200 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            specialty.color === 'orange' ? 'bg-orange-400' : 'bg-amber-400'
                          }`}></div>
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
              <h2 className="text-4xl font-bold text-amber-50 mb-4">Our Certifications</h2>
              <p className="text-amber-300 text-lg max-w-2xl mx-auto">
                Industry-recognized certifications that demonstrate our commitment to excellence
              </p>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-stone-900 border border-amber-800 rounded-xl p-6 hover:border-amber-600 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-amber-500/20 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-amber-50">{cert.name}</h3>
                          <p className="text-amber-300 text-sm mt-1">{cert.description}</p>
                        </div>
                      </div>
                      <div className="text-amber-400 font-bold text-2xl bg-amber-500/10 px-4 py-2 rounded-lg">
                        {cert.count}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center">
              <div className="bg-stone-900 border border-amber-800 rounded-xl p-8">
                <div className="bg-amber-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-amber-50 mb-4">Continuous Training Program</h3>
                <p className="text-amber-200 mb-6 max-w-2xl mx-auto">
                  Our technicians undergo regular training to stay current with the latest automotive technologies and repair techniques. We invest in ongoing education to ensure we provide the most advanced solutions for your vehicle.
                </p>
                <div className="flex justify-center gap-6 text-sm text-amber-300">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Annual Training Updates
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Manufacturer Programs
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Technology Workshops
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Why Choose Our Technicians Section */}
        <div className="mt-20 bg-stone-900 border border-amber-800 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-50 mb-4">Why Trust Ajal Garage Technicians?</h2>
            <p className="text-amber-300 text-lg">Expertise you can rely on for your vehicle's care</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Proven Experience", 
                description: "Decades of hands-on experience with all vehicle types from Japanese compacts to European luxury cars",
                icon: Users,
                stat: "25+ Years Avg. Experience"
              },
              { 
                title: "Advanced Training", 
                description: "Continuous education on latest automotive technologies and manufacturer-specific procedures",
                icon: Lightbulb,
                stat: "Annual Training Updates"
              },
              { 
                title: "Quality Guarantee", 
                description: "All work backed by our comprehensive service warranty and 100% customer satisfaction commitment",
                icon: Shield,
                stat: "12-Month Warranty"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="bg-amber-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-50 mb-3">{item.title}</h3>
                  <p className="text-amber-200 mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="text-amber-400 font-semibold text-sm bg-amber-500/10 px-3 py-1 rounded-full inline-block">
                    {item.stat}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
        <div className="mt-20 bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience Expert Automotive Care?</h3>
            <p className="text-amber-100 mb-6">
              Schedule your service with our certified technicians today
            </p>
            <button className="bg-black text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-stone-900 transition-colors duration-300 border border-amber-500/30">
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;