import { useState } from 'react';
import { Target, Eye, Award, Users, Lightbulb, Heart, Rocket, Wrench, Car, Cog, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';

const Heritage = () => {
  const [isVisible, setIsVisible] = useState({});
  
  const team = [
    {
      name: "Ahmed Al-Harthy",
      role: "Founder & Master Technician",
      bio: "25+ years of automotive expertise with specialization in European and Japanese vehicles",
      initial: "A",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Mohammed Al-Balushi",
      role: "Service Manager",
      bio: "15 years experience in automotive service management and customer relations",
      initial: "M",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop"
    },
    {
      name: "Salem Al-Rashdi",
      role: "Lead Diagnostic Specialist",
      bio: "Expert in advanced vehicle diagnostics and electronic systems repair",
      initial: "S",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
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

  const milestones = [
    { year: "1998", event: "Founded in Barka, Oman", description: "Started as a small workshop with 2 technicians" },
    { year: "2005", event: "Expanded Services", description: "Added advanced diagnostics and European vehicle specialization" },
    { year: "2012", event: "New Facility", description: "Moved to larger premises with 6 service bays" },
    { year: "2020", event: "Digital Transformation", description: "Implemented modern service management systems" },
    { year: "2023", event: "25 Years Celebration", description: "Serving over 15,000 satisfied customers" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <Banner 
        title="Heritage Ajal Garage"
        subtitle="25+ years of automotive excellence in Oman. Your trusted partner for premium vehicle care and maintenance."
        iconOne={Wrench}
        iconTwo={Car}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=983" 
                alt="Ajal Garage Workshop"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-2xl font-bold text-amber-400">Our Legacy</div>
                <div className="text-amber-200 text-sm">Since 1998 • Barka, Oman</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">Our Story</div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-100 mb-6">
                Automotive Excellence Since 1998
              </h2>
            </div>
            
            <div className="space-y-4 text-amber-200/80">
              <p>
                Founded in 1998 in Barka, Ajal Garage began with a simple mission: to provide honest, 
                reliable automotive services to the Omani community. What started as a small workshop 
                has grown into a premier automotive service center trusted by thousands.
              </p>
              <p>
                Today, we specialize in comprehensive vehicle maintenance, from routine servicing to 
                complex engine repairs. Our team of certified technicians handles everything from 
                Japanese compacts to European luxury vehicles with equal expertise.
              </p>
              <p>
                We believe in building lasting relationships with our customers, becoming their trusted 
                automotive partner for life. Your vehicle's health and your satisfaction are our top priorities.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">25+</div>
                <div className="text-amber-200/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">15K+</div>
                <div className="text-amber-200/70 text-sm">Vehicles Serviced</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">98%</div>
                <div className="text-amber-200/70 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-amber-500/20 p-3 rounded-lg">
                <Target className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-amber-100">Our Mission</h3>
            </div>
            <p className="text-amber-200/70 text-sm leading-relaxed">
              To provide exceptional automotive care using genuine parts, advanced diagnostics, and 
              certified expertise. We strive to deliver reliable, transparent services that keep 
              your vehicle running safely and efficiently for years to come.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <Eye className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-amber-100">Our Vision</h3>
            </div>
            <p className="text-amber-200/70 text-sm leading-relaxed">
              To be Oman's most trusted automotive service center, recognized for our technical 
              excellence, customer commitment, and unwavering dedication to quality. We envision 
              setting the standard for automotive care in the region.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-100 mb-4">Our Journey</h2>
            <p className="text-amber-200/60">25 years of growth and excellence in automotive service</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-500/30 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-amber-500 rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-xl p-4">
                      <div className="text-amber-400 font-bold text-lg mb-1">{milestone.year}</div>
                      <div className="text-amber-100 font-semibold mb-2">{milestone.event}</div>
                      <div className="text-amber-200/70 text-sm">{milestone.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-100 mb-4">Our Values</h2>
            <p className="text-amber-200/60">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-xl p-5 text-center hover:border-amber-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-100 mb-2">{value.title}</h3>
                  <p className="text-amber-200/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-100 mb-4">Meet Our Experts</h2>
            <p className="text-amber-200/60">Certified technicians with decades of combined experience</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-xl overflow-hidden hover:border-amber-400/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-4">
                  <div className="text-lg font-bold text-amber-100 mb-1">{member.name}</div>
                  <div className="text-amber-400 text-sm font-medium mb-2">{member.role}</div>
                  <p className="text-amber-200/70 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-100 mb-4">Why Choose Ajal Garage?</h2>
            <p className="text-amber-200/60">Experience the difference that 25+ years of automotive expertise makes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Cog, title: "Advanced Diagnostics", desc: "State-of-the-art equipment for precise problem identification" },
              { icon: Award, title: "Certified Technicians", desc: "Continuously trained and manufacturer-certified experts" },
              { icon: Car, title: "All Makes & Models", desc: "From daily drivers to luxury vehicles, we service them all" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-amber-100 mb-2">{item.title}</h3>
                <p className="text-amber-200/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>       
      </div>
    </div>
  );
};

export default Heritage;