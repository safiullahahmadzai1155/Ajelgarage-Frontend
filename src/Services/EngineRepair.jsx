import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Award, Users, Lightbulb, Heart, Rocket, Wrench, Car, Cog, MapPin, Clock, Star, Shield, Settings, Zap, Calendar, Phone, Mail, CheckCircle, Play, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Banner from '../components/Banner';

const EngineRepair = () => {
  const [activeVideo, setActiveVideo] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const team = [
    {
      name: "Ahmed Al-Harthy",
      role: "Founder & Master Technician",
      bio: "25+ years of automotive expertise specializing in European and Japanese vehicles. Certified by BMW, Mercedes, and Toyota.",
      experience: "28 Years",
      specialties: ["Engine Diagnostics", "Transmission Repair", "Electrical Systems"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      certifications: ["BMW Master Tech", "Mercedes Certified", "Toyota Specialist"]
    },
    {
      name: "Mohammed Al-Siyabi",
      role: "Lead Diagnostic Specialist",
      bio: "Expert in computerized diagnostics and engine management systems. Trained in Germany and Japan with 15+ years experience.",
      experience: "15 Years",
      specialties: ["ECU Programming", "Performance Tuning", "Hybrid Systems"],
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop&crop=face",
      certifications: ["Bosch Certified", "German Tech Training", "Hybrid Systems Expert"]
    },
    {
      name: "Salem Al-Balushi",
      role: "Transmission & Drivetrain Expert",
      bio: "Specialist in automatic and manual transmission systems. Factory-trained by ZF and Aisin with 12+ years experience.",
      experience: "12 Years",
      specialties: ["Automatic Transmissions", "4WD Systems", "Differential Repair"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      certifications: ["ZF Certified", "Aisin Specialist", "4WD Systems Master"]
    }
  ];

  const milestones = [
    { year: "1998", event: "Founded in Barka", description: "Started with 2 service bays and 3 technicians", icon: Rocket },
    { year: "2005", event: "First Expansion", description: "Expanded to 10 bays and added diagnostic center", icon: Users },
    { year: "2012", event: "BMW Certification", description: "Became authorized BMW service partner", icon: Award },
    { year: "2018", event: "25,000+ Vehicles", description: "Milestone of 25,000 vehicles serviced", icon: Car },
    { year: "2023", event: "EV Division Launch", description: "Added electric and hybrid vehicle specialists", icon: Zap }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We use only genuine OEM parts and follow strict manufacturer specifications for every repair.',
      features: ['Genuine Parts', 'Manufacturer Standards', 'Quality Control']
    },
    {
      icon: Users,
      title: 'Customer Trust',
      description: 'Building lifelong relationships through honest service and transparent pricing.',
      features: ['Transparent Pricing', 'Honest Diagnostics', 'Lifetime Support']
    },
    {
      icon: Lightbulb,
      title: 'Technical Innovation',
      description: 'Continuous investment in latest diagnostic equipment and technician training.',
      features: ['Advanced Equipment', 'Continuous Training', 'Latest Technology']
    },
    {
      icon: Heart,
      title: 'Passion for Cars',
      description: 'Genuine love for automotive excellence drives every service we provide.',
      features: ['Car Enthusiasts', 'Attention to Detail', 'Personalized Service']
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience", icon: Calendar, suffix: "Years" },
    { number: "50,000+", label: "Vehicles Serviced", icon: Car, suffix: "Cars" },
    { number: "98%", label: "Customer Satisfaction", icon: Star, suffix: "Rating" },
    { number: "15", label: "Certified Technicians", icon: Users, suffix: "Experts" }
  ];

  const certifications = [
    { name: "BMW Certified", icon: Shield, color: "from-amber-500 to-orange-500" },
    { name: "Mercedes-Benz", icon: Award, color: "from-amber-600 to-orange-600" },
    { name: "Toyota Specialist", icon: Settings, color: "from-orange-500 to-amber-500" },
    { name: "Bosch Service", icon: Zap, color: "from-amber-400 to-orange-400" }
  ];

  const testimonials = [
    {
      name: "Ali Al-Maskari",
      role: "Regular Customer since 2005",
      company: "Loyal Customer",
      text: "Ajal Garage has been servicing my family's cars for generations. Their honesty and expertise are unmatched in Oman.",
      rating: 5,
      initials: "AM"
    },
    {
      name: "Sarah Al-Hinai",
      role: "BMW Owner",
      company: "Premium Vehicle Owner",
      text: "The team at Ajal Garage saved me thousands by honestly diagnosing a simple sensor issue others claimed was major.",
      rating: 5,
      initials: "SA"
    },
    {
      name: "Omar Al-Rashidi",
      role: "Fleet Manager",
      company: "Al-Rashidi Enterprises",
      text: "We trust Ajal Garage with our entire company fleet. Their reliability and quality control are exceptional.",
      rating: 5,
      initials: "OR"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <Banner 
        title="Engine Repair Ajal Garage"
        subtitle="25+ Years of Automotive Excellence in Oman • Trusted by Generations • Premium Vehicle Care Since 1998"
        iconOne={Wrench}
        iconTwo={Car}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Animated Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-amber-900/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 group-hover:border-amber-400/40 group-hover:shadow-2xl group-hover:shadow-amber-500/10 transition-all duration-500">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-amber-200 font-semibold text-sm">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hero Story Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 p-8 md:p-12 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Story Content */}
          <div className="space-y-8">
            <div>
              <motion.div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Star className="w-4 h-4" />
                OUR LEGACY SINCE 1998
              </motion.div>
              <motion.h2 
                className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Automotive Excellence <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Defined</span>
              </motion.h2>
            </div>

            <div className="space-y-4">
              <motion.p 
                className="text-lg text-amber-100 leading-relaxed bg-amber-800/20 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Founded in 1998 in Barka, <span className="text-amber-300 font-semibold">Ajal Garage</span> began with a simple mission: to provide honest, 
                reliable automotive services to the Omani community. What started as a small workshop 
                with just two service bays has grown into one of Oman's premier automotive service centers.
              </motion.p>
              
              <motion.p 
                className="text-lg text-amber-100 leading-relaxed bg-amber-800/20 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                Today, we specialize in comprehensive vehicle maintenance, from routine servicing to 
                complex engine repairs. Our team of certified technicians handles everything from 
                Japanese compacts to European luxury vehicles with equal expertise and precision.
              </motion.p>

              <motion.div 
                className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-amber-50 leading-relaxed font-medium">
                  "We believe in building lasting relationships with our customers, becoming their trusted 
                  automotive partner for life. Your vehicle's health and your satisfaction are the driving 
                  forces behind everything we do."
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AA</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Ahmed Al-Harthy</div>
                    <div className="text-amber-300 text-sm">Founder & CEO</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interactive Visual */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-amber-900/20 rounded-2xl overflow-hidden border border-amber-500/30 group-hover:border-amber-400/40 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200" 
                alt="Ajal Garage Workshop"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-amber-900/50 to-transparent"></div>
              
              {/* Play Button Overlay */}
            

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-amber-900/80 backdrop-blur-sm rounded-2xl p-4 border border-amber-500/30">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-black text-amber-400">25+</div>
                      <div className="text-xs text-amber-200">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-orange-400">50K+</div>
                      <div className="text-xs text-amber-200">Cars Serviced</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-yellow-400">98%</div>
                      <div className="text-xs text-amber-200">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div 
            className="group bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white">Our Mission</h3>
            </div>
            <p className="text-amber-100 leading-relaxed text-lg">
              To provide exceptional automotive care using genuine parts, advanced diagnostics, and 
              certified expertise. We deliver reliable, transparent services that keep your vehicle 
              running safely and efficiently for years to come.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-amber-200 text-sm">Quality Guaranteed</span>
            </div>
          </motion.div>

          <motion.div 
            className="group bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-500 hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white">Our Vision</h3>
            </div>
            <p className="text-orange-100 leading-relaxed text-lg">
              To be Oman's most trusted automotive service center, recognized for technical excellence, 
              customer commitment, and unwavering dedication to quality. Setting the standard for 
              automotive care in the region.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-orange-200 text-sm">Industry Leadership</span>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              From humble beginnings to automotive excellence - 25 years of growth and commitment to quality
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-amber-500 via-orange-500 to-amber-500 h-full rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <motion.div 
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className="bg-amber-900/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-black text-amber-400">{milestone.year}</div>
                            <h3 className="text-xl font-bold text-white">{milestone.event}</h3>
                          </div>
                        </div>
                        <p className="text-amber-100">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-4 border-black shadow-lg shadow-amber-500/50 z-10"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              The principles that guide every service we provide and every relationship we build
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={index}
                  className="group bg-amber-900/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-4">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-amber-100 text-sm leading-relaxed mb-4">{value.description}</p>
                  <div className="space-y-2">
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-amber-200 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                <Award className="w-4 h-4 inline mr-2" />
                CERTIFIED EXCELLENCE
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Trusted by <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Global Brands</span>
            </h2>
            <p className="text-amber-200 text-xl max-w-2xl mx-auto">
              Official certifications and partnerships with world-leading automotive manufacturers
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/5 via-orange-500/10 to-amber-500/5 rounded-4xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-amber-900/30 to-orange-900/20 backdrop-blur-xl rounded-3xl p-12 border border-amber-500/30 shadow-2xl shadow-amber-500/10">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="text-center group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                        
                        <div className="relative bg-amber-900/40 backdrop-blur-lg rounded-2xl p-8 border border-amber-500/20 group-hover:border-amber-400/50 group-hover:shadow-2xl group-hover:shadow-amber-500/20 transition-all duration-500 group-hover:-translate-y-2">
                          
                          {/* Icon Container with Enhanced Design */}
                          <div className="relative mb-6">
                            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                            <div className={`relative bg-gradient-to-br ${cert.color} w-24 h-24 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300`}>
                              <div className="absolute inset-2 bg-black/20 rounded-xl"></div>
                              <Icon className="h-12 w-12 text-white relative z-10 drop-shadow-lg" />
                            </div>
                            
                            {/* Floating Badge */}
                            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-amber-500 to-orange-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          </div>

                          {/* Certification Name */}
                          <h3 className="font-bold text-white text-xl mb-3 group-hover:text-amber-100 transition-colors duration-300">
                            {cert.name}
                          </h3>
                          
                          {/* Status Indicator */}
                          <div className="flex items-center justify-center gap-2 text-amber-300 text-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span>Certified Partner</span>
                          </div>

                          {/* Hover Line Effect */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Decorative Element */}
              <div className="mt-12 pt-8 border-t border-amber-500/20">
                <div className="flex flex-wrap items-center justify-center gap-8 text-amber-300/80">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-amber-400" />
                    <span className="text-sm">Factory Trained</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span className="text-sm">Quality Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-amber-400" />
                    <span className="text-sm">Genuine Parts</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Section with Motion */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-amber-900/20 via-orange-900/20 to-amber-900/20 relative overflow-hidden rounded-3xl mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
                <motion.div 
                  className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                />
                Testimonials
                <motion.div 
                  className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </div>
              
              <motion.h2 
                className="text-5xl md:text-6xl font-black mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-amber-100/80 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                Real success stories from our valued customers and partners
              </motion.p>
            </motion.div>

            <motion.div 
              className="backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-400/30 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-6 h-12 w-12 text-amber-400/30" />
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', 
                  backgroundSize: '50px 50px' 
                }} />
              </div>

              <div className="relative z-10">
                {/* Testimonial Content with AnimatedPresence */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-8 mb-8"
                  >
                    <div className="relative">
                      <motion.div 
                        className="absolute inset-0 rounded-full blur-2xl bg-amber-400/30"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <div className="relative w-32 h-32 rounded-full border-4 border-amber-400 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-4xl font-black text-amber-300">
                        {testimonials[currentTestimonial].initials}
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-amber-100">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      
                      <p className="text-amber-400 font-semibold mb-1">
                        {testimonials[currentTestimonial].role}
                      </p>
                      
                      <p className="text-amber-200/80 mb-3">
                        {testimonials[currentTestimonial].company}
                      </p>
                      
                      <div className="flex gap-1 justify-center md:justify-start">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Testimonial Text with AnimatedPresence */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg leading-relaxed mb-8 italic text-amber-100/90 text-center md:text-left"
                  >
                    "{testimonials[currentTestimonial].text}"
                  </motion.p>
                </AnimatePresence>

                <div className="flex items-center justify-between">
                  <motion.button
                    onClick={prevTestimonial}
                    className="backdrop-blur-xl bg-amber-500/10 border border-amber-400/30 p-3 rounded-full hover:bg-amber-500/20 transition-all hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="h-6 w-6 text-amber-400" />
                  </motion.button>

                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentTestimonial ? 'bg-amber-400 w-8' : 'bg-amber-600 w-2'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        style={{
                          boxShadow: index === currentTestimonial ? '0 0 20px #f59e0b' : 'none'
                        }}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={nextTestimonial}
                    className="backdrop-blur-xl bg-amber-500/10 border border-amber-400/30 p-3 rounded-full hover:bg-amber-500/20 transition-all hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="h-6 w-6 text-amber-400" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default EngineRepair;