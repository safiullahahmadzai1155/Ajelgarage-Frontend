import { Mail, Phone, MapPin, Send, Clock, CheckCircle, XCircle, Loader, Car, Wrench } from 'lucide-react';
import Banner from '../components/Banner';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    vehicleType: '',
    serviceInterestedIn: '',
    serviceDetails: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isVisible, setIsVisible] = useState({});
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 400;

    const particles = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    let animationFrame;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: 'loading', message: 'Scheduling your service...' });

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        vehicleType: formData.vehicleType,
        serviceInterestedIn: formData.serviceInterestedIn,
        serviceDetails: formData.serviceDetails
      };

      console.log('Sending service request:', payload);

      // Simulate API call for automotive service
      await new Promise(resolve => setTimeout(resolve, 2000));

      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your service request has been received. We will contact you within 2 hours to schedule your appointment.' 
      });
      
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        vehicleType: '',
        serviceInterestedIn: '',
        serviceDetails: ''
      });

      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please call us directly at +968 XX XXX XXX to schedule your service.' 
      });

      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 7000);
      
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Garage',
      details: ['Abu Mahar, Barka', 'Sultanate of Oman', 'Near Barka Souq'],
      color: '#f59e0b'
    },
    {
      icon: Phone,
      title: 'Call Us Today',
      details: ['+968 XX XXX XXX', '+968 XX XXX XXX', 'Emergency: +968 XX XXX XXX'],
      color: '#ea580c'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@ajalgarage.com', 'service@ajalgarage.com', 'support@ajalgarage.com'],
      color: '#d97706'
    },
    {
      icon: Clock,
      title: 'Service Hours',
      details: ['Sunday - Thursday: 8AM - 8PM', 'Friday: 9AM - 12PM', 'Saturday: 9AM - 6PM'],
      color: '#dc2626'
    }
  ];

  const StatusMessage = () => {
    if (!status.message) return null;

    const statusConfig = {
      success: {
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        text: 'text-green-400',
        icon: CheckCircle,
        glow: '#10b981'
      },
      error: {
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
        text: 'text-red-400',
        icon: XCircle,
        glow: '#ef4444'
      },
      loading: {
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        text: 'text-amber-400',
        icon: Loader,
        glow: '#f59e0b'
      }
    };

    const config = statusConfig[status.type];
    const Icon = config.icon;

    return (
      <div 
        className={`mb-6 p-4 rounded-xl border-2 ${config.bg} ${config.border} backdrop-blur-xl flex items-start gap-3 animate-in fade-in slide-in-from-top duration-300`}
        style={{ boxShadow: `0 0 20px ${config.glow}30` }}
      >
        <Icon className={`h-5 w-5 ${config.text} ${status.type === 'loading' ? 'animate-spin' : ''} flex-shrink-0`} />
        <p className={`flex-1 font-medium ${config.text}`}>{status.message}</p>
      </div>
    );
  };

  return (
    <div className=" bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <Banner
        title="Schedule Your Vehicle Service"
        subtitle="Expert automotive care in Oman. Book your appointment today for premium vehicle maintenance and repair services."
        iconOne={Car}
        iconTwo={Wrench}
      />

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Form Section */}
            <div id="form" data-animate className={`lg:col-span-2 transition-all duration-1000 ${isVisible.form ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="backdrop-blur-xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-500/30 rounded-2xl p-8 hover:border-amber-400/50 transition-all">
                <h2 className="text-3xl font-black mb-2 text-amber-100" style={{ textShadow: '0 0 30px #f59e0b80' }}>
                  Book Your Service Appointment
                </h2>
                <p className="text-amber-200/80 mb-6">Fill out the form and we'll contact you within 2 hours to schedule your service</p>
                
                <StatusMessage />
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-amber-200 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full px-4 py-3 bg-amber-900/20 border-2 border-amber-500/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent disabled:bg-amber-900/10 disabled:cursor-not-allowed text-amber-100 placeholder-amber-200/50 backdrop-blur-xl transition-all"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-200 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full px-4 py-3 bg-amber-900/20 border-2 border-amber-500/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent disabled:bg-amber-900/10 disabled:cursor-not-allowed text-amber-100 placeholder-amber-200/50 backdrop-blur-xl transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-amber-200 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full px-4 py-3 bg-amber-900/20 border-2 border-amber-500/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent disabled:bg-amber-900/10 disabled:cursor-not-allowed text-amber-100 placeholder-amber-200/50 backdrop-blur-xl transition-all"
                        placeholder="+968 XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-200 font-medium mb-2">Vehicle Type *</label>
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full px-4 py-3 bg-amber-900/20 border-2 border-amber-500/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent disabled:bg-amber-900/10 disabled:cursor-not-allowed text-amber-100 backdrop-blur-xl transition-all"
                      >
                        <option value="" className="bg-amber-900">Select Vehicle Type</option>
                        <option value="sedan" className="bg-amber-900">Sedan</option>
                        <option value="suv" className="bg-amber-900">SUV</option>
                        <option value="truck" className="bg-amber-900">Truck</option>
                        <option value="luxury" className="bg-amber-900">Luxury Vehicle</option>
                        <option value="european" className="bg-amber-900">European</option>
                        <option value="japanese" className="bg-amber-900">Japanese</option>
                        <option value="american" className="bg-amber-900">American</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-amber-200 font-medium mb-2">Service Required *</label>
                    <select
                      name="serviceInterestedIn"
                      value={formData.serviceInterestedIn}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-amber-900/20 border-2 border-amber-500/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent disabled:bg-amber-900/10 disabled:cursor-not-allowed text-amber-100 backdrop-blur-xl transition-all"
                    >
                      <option value="" className="bg-amber-900">Select a service</option>
                      <option value="oil-change" className="bg-amber-900">Oil Change & Filter</option>
                      <option value="brake-service" className="bg-amber-900">Brake Service</option>
                      <option value="engine-repair" className="bg-amber-900">Engine Diagnostics & Repair</option>
                      <option value="transmission" className="bg-amber-900">Transmission Service</option>
                      <option value="ac-service" className="bg-amber-900">AC Service & Repair</option>
                      <option value="electrical" className="bg-amber-900">Electrical Systems</option>
                      <option value="suspension" className="bg-amber-900">Suspension & Steering</option>
                      <option value="full-service" className="bg-amber-900">Full Vehicle Service</option>
                      <option value="emergency" className="bg-amber-900">Emergency Repair</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-amber-200 font-medium mb-2">Service Details *</label>
                    <textarea
                      name="serviceDetails"
                      value={formData.serviceDetails}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      rows="6"
                      className="w-full px-4 py-3 bg-amber-900/20 border-2 border-amber-500/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent disabled:bg-amber-900/10 disabled:cursor-not-allowed text-amber-100 placeholder-amber-200/50 backdrop-blur-xl transition-all resize-none"
                      placeholder="Describe your vehicle issues, symptoms, or specific service requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all relative overflow-hidden group bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <Loader className="h-5 w-5 animate-spin" />
                          <span>Scheduling Service...</span>
                        </>
                      ) : (
                        <>
                          <span>Schedule Service Now</span>
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Section */}
            <div id="info" data-animate className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible.info ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const delay = index * 100;
                return (
                  <div 
                    key={index} 
                    className="group backdrop-blur-xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-500/30 rounded-2xl p-6 hover:bg-amber-900/30 transition-all duration-500 hover:scale-105"
                    style={{ 
                      transitionDelay: `${delay}ms`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <div 
                          className="absolute inset-0 rounded-lg blur-xl group-hover:blur-2xl transition-all"
                          style={{ backgroundColor: info.color, opacity: 0.3 }}
                        />
                        <div className="relative p-3 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30">
                          <Icon className="h-6 w-6 text-amber-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-amber-100">{info.title}</h3>
                    </div>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-amber-200/80 mb-1 ml-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                );
              })}

              {/* Emergency Service Card */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border-2 border-red-500/30 rounded-2xl p-6 text-center group hover:bg-red-900/30 transition-all duration-500">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-lg blur-xl bg-red-500/30 group-hover:blur-2xl transition-all" />
                    <div className="relative p-3 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30">
                      <Car className="h-6 w-6 text-red-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-red-100">24/7 Emergency Service</h3>
                </div>
                <p className="text-red-200/80 mb-3">
                  Vehicle breakdown? We offer emergency roadside assistance and quick recovery services.
                </p>
                <a href="tel:+358415777317">
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-semibold hover:scale-105 transition-all">
                        Emergency Call Now
                    </button>
                    </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div id="map" data-animate className={`backdrop-blur-xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-500/30 rounded-2xl overflow-hidden transition-all duration-1000 ${isVisible.map ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.267107117987!2d58.013214575345!3d23.42442547886925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8fe6d5c8e5f5a1%3A0x7a0b1a0b1a0b1a0b!2sBarka%2C%20Oman!5e0!3m2!1sen!2som!4v1647856789123!5m2!1sen!2som"
              width="100%"
              height="450"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
              allowFullScreen=""
              loading="lazy"
              title="Ajal Garage Location - Barka, Oman"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-orange-900/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="backdrop-blur-xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-500/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-amber-100" style={{ textShadow: '0 0 40px #f59e0b80' }}>
              Ready for Premium Automotive Care?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-200/80">
              Join thousands of satisfied customers who trust Ajal Garage for their vehicle maintenance and repair needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
                    href="tel:+358415777317"
                    className="inline-block px-10 py-5 font-black rounded-xl text-xl shadow-2xl transition-all hover:scale-110 relative overflow-hidden group bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center"
                    >
                    <span className="relative z-10">Call Now for Service</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                    </a>
              <button 
                className="px-10 py-5 font-black rounded-xl text-xl shadow-2xl transition-all hover:scale-110 relative overflow-hidden group backdrop-blur-xl bg-amber-900/20 border-2 border-amber-400/50"
                onClick={() => navigate("/services")}
              >
                <span className="relative z-10 text-amber-100">View Our Services</span>
                <div className="absolute inset-0 bg-amber-400/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;