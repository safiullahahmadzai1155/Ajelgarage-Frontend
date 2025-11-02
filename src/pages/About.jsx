import { useState } from 'react';
import { Target, Eye, Award, Users, Lightbulb, Heart, Rocket, Wrench, Car, Cog } from 'lucide-react';
import Banner from '../components/Banner';

const Legacy = () => {
  const [isVisible, setIsVisible] = useState({});
  
 const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years of experience in tech innovation",
      initial: "S",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech expert specializing in scalable solutions and AI integration",
      initial: "M",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Creative director crafting beautiful and functional user experiences",
      initial: "E",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We use only genuine parts and follow manufacturer specifications for every repair.',
      color: '#f59e0b'
    },
    {
      icon: Users,
      title: 'Customer Trust',
      description: 'Building lifelong relationships through transparent pricing and honest service.',
      color: '#ea580c'
    },
    {
      icon: Lightbulb,
      title: 'Technical Innovation',
      description: 'State-of-the-art diagnostic equipment and continuous technician training.',
      color: '#d97706'
    },
    {
      icon: Heart,
      title: 'Passion for Cars',
      description: 'Genuine love for automotive excellence drives every service we provide.',
      color: '#dc2626'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <Banner 
        title="About Ajal Garage"
        subtitle="25+ years of automotive excellence in Oman. Your trusted partner for premium vehicle care and maintenance."
        iconOne={Wrench}
        iconTwo={Car}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 p-8 md:p-12 rounded-3xl">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl rounded-full group-hover:blur-4xl transition-all duration-500" />
            <div className="relative backdrop-blur-xl bg-black/60 border-2 border-amber-500/30 rounded-2xl overflow-hidden group-hover:border-amber-400/50 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=983" 
                alt="Ajal Garage Workshop"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-3xl font-black text-amber-400" style={{ textShadow: '0 0 20px #f59e0b' }}>
                  Our Legacy
                </div>
                <div className="text-amber-200 font-semibold text-sm">Since 1998 • Barka, Oman</div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-amber-400"></span>
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-amber-100" style={{ textShadow: '0 0 40px #f59e0b80' }}>
              Automotive Excellence Since 1998
            </h2>
            <div className="space-y-4 text-amber-200/80 text-lg leading-relaxed">
              <p className="backdrop-blur-xl bg-amber-900/20 border border-amber-500/20 rounded-xl p-4">
                Founded in 1998 in Barka, Ajal Garage began with a simple mission: to provide honest, 
                reliable automotive services to the Omani community. What started as a small workshop 
                has grown into a premier automotive service center trusted by thousands.
              </p>
              <p className="backdrop-blur-xl bg-amber-900/20 border border-amber-500/20 rounded-xl p-4">
                Today, we specialize in comprehensive vehicle maintenance, from routine servicing to 
                complex engine repairs. Our team of certified technicians handles everything from 
                Japanese compacts to European luxury vehicles with equal expertise.
              </p>
              <p className="backdrop-blur-xl bg-amber-900/20 border border-amber-500/20 rounded-xl p-4">
                We believe in building lasting relationships with our customers, becoming their trusted 
                automotive partner for life. Your vehicle's health and your satisfaction are our top priorities.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="group backdrop-blur-xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-500/30 rounded-2xl p-8 hover:bg-amber-900/30 transition-all duration-700 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-2xl bg-amber-400/30 group-hover:blur-3xl transition-all" />
                <div className="relative bg-gradient-to-br from-amber-500/20 to-amber-600/20 p-4 rounded-xl border-2 border-amber-400/30">
                  <Target className="h-8 w-8 text-amber-400" />
                </div>
              </div>
              <h2 className="text-3xl font-black text-amber-100">Our Mission</h2>
            </div>
            <p className="text-amber-200/80 leading-relaxed text-lg">
              To provide exceptional automotive care using genuine parts, advanced diagnostics, and 
              certified expertise. We strive to deliver reliable, transparent services that keep 
              your vehicle running safely and efficiently for years to come.
            </p>
          </div>

          <div className="group backdrop-blur-xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-500/30 rounded-2xl p-8 hover:bg-amber-900/30 transition-all duration-700 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-2xl bg-orange-400/30 group-hover:blur-3xl transition-all" />
                <div className="relative bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-4 rounded-xl border-2 border-orange-400/30">
                  <Eye className="h-8 w-8 text-orange-400" />
                </div>
              </div>
              <h2 className="text-3xl font-black text-amber-100">Our Vision</h2>
            </div>
            <p className="text-amber-200/80 leading-relaxed text-lg">
              To be Oman's most trusted automotive service center, recognized for our technical 
              excellence, customer commitment, and unwavering dedication to quality. We envision 
              setting the standard for automotive care in the region.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-amber-400"></span>
              Our Values
              <span className="w-8 h-px bg-amber-400"></span>
            </div>
            <h2 className="text-5xl font-black mb-4 text-amber-100" style={{ textShadow: '0 0 40px #f59e0b80' }}>
              The Ajal Garage Promise
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="group backdrop-blur-xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-500/30 rounded-2xl p-6 text-center hover:bg-amber-900/30 transition-all duration-700 hover:-translate-y-2"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative inline-block mb-4">
                    <div 
                      className="absolute inset-0 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"
                      style={{ backgroundColor: value.color, opacity: 0.3 }}
                    />
                    <div 
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto border-2"
                      style={{ 
                        backgroundColor: `${value.color}20`,
                        borderColor: `${value.color}40`
                      }}
                    >
                      <Icon className="h-8 w-8" style={{ color: value.color }} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-amber-100 mb-3">{value.title}</h3>
                  <p className="text-amber-200/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-amber-400"></span>
              Master Technicians
              <span className="w-8 h-px bg-amber-400"></span>
            </div>
            <h2 className="text-5xl font-black mb-4 text-amber-100" style={{ textShadow: '0 0 40px #f59e0b80' }}>
              Meet Our Experts
            </h2>
            <p className="text-amber-200/80 text-lg max-w-2xl mx-auto">
              Our certified technicians bring decades of combined experience and continuous training 
              to ensure your vehicle receives the best possible care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group backdrop-blur-xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-500/30 rounded-2xl overflow-hidden hover:bg-amber-900/30 transition-all duration-700 hover:-translate-y-2"
                onMouseEnter={() => setIsVisible(prev => ({ ...prev, [index]: true }))}
                onMouseLeave={() => setIsVisible(prev => ({ ...prev, [index]: false }))}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-2xl font-black text-amber-100 mb-1">{member.name}</div>
                    <div className="text-amber-400 font-semibold mb-2">{member.role}</div>
                    <p className="text-amber-200/80 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border-2 border-amber-500/30 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-amber-100 mb-4">
              Why Choose Ajal Garage?
            </h2>
            <p className="text-amber-200/80 text-lg max-w-3xl mx-auto">
              Experience the difference that 25+ years of automotive expertise makes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Cog, title: "Advanced Diagnostics", desc: "State-of-the-art equipment for precise problem identification" },
              { icon: Award, title: "Certified Technicians", desc: "Continuously trained and manufacturer-certified experts" },
              { icon: Car, title: "All Makes & Models", desc: "From daily drivers to luxury vehicles, we service them all" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-amber-100 mb-2">{item.title}</h3>
                <p className="text-amber-200/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-20 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-3">
            <div className="bg-gradient-to-br from-amber-900/10 to-orange-900/10 px-4">
              <Car className="w-6 h-6 text-amber-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legacy;