import { Car, Wrench, Settings, Zap, Shield, Clock, Users, Award, Sparkles, Cog } from 'lucide-react';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.05,
        y: -10,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const statsVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Animated Section Component without react-intersection-observer
const AnimatedSection = ({ children, className = "" }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const Services = () => {
    const services = [
        {
            icon: Car,
            title: 'Engine Diagnostics & Repair',
            description: 'Comprehensive engine analysis and precision repair services using advanced diagnostic equipment.',
            features: ['Computerized Diagnostics', 'Engine Overhaul', 'Performance Tuning', 'Emission Testing']
        },
        {
            icon: Wrench,
            title: 'Brake System Service',
            description: 'Complete brake inspection, repair and replacement with premium quality components.',
            features: ['Brake Pad Replacement', 'Rotor Resurfacing', 'ABS System Repair', 'Brake Fluid Flush']
        },
        {
            icon: Settings,
            title: 'Transmission Service',
            description: 'Expert automatic and manual transmission repair, maintenance, and rebuilding services.',
            features: ['Transmission Flush', 'Clutch Replacement', 'Gearbox Repair', 'CVT Service']
        },
        {
            icon: Zap,
            title: 'Electrical Systems',
            description: 'Advanced electrical diagnostics and repair for all vehicle systems and components.',
            features: ['Battery Service', 'Alternator Repair', 'Wiring Issues', 'ECU Programming']
        }
    ];

    const whyUs = [
        {
            icon: Shield,
            title: 'Certified Technicians',
            description: 'ASE certified mechanics with extensive training and experience.'
        },
        {
            icon: Clock,
            title: 'Quick Service',
            description: 'Efficient repairs with most services completed within 24 hours.'
        },
        {
            icon: Award,
            title: 'Quality Guarantee',
            description: '12-month warranty on all repairs and genuine parts guarantee.'
        },
        {
            icon: Users,
            title: 'Customer Focused',
            description: 'Personalized service with transparent pricing and regular updates.'
        }
    ];

    const stats = [
        { number: '15,000+', label: 'Vehicles Serviced' },
        { number: '25+', label: 'Years Experience' },
        { number: '98%', label: 'Customer Satisfaction' },
        { number: '24/7', label: 'Roadside Assistance' }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Banner Section - Automotive Theme */}
            <Banner
                title="Premium Automotive Services"
                subtitle="Expert vehicle maintenance and repair services in Oman. Trust our certified technicians for quality workmanship and reliable results."
                iconOne={Car}
                iconTwo={Sparkles}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Services Grid - Automotive Theme */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                                Our Premium Services
                            </h2>
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                        <p className="text-amber-100/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                            Experience unparalleled automotive care with our state-of-the-art equipment, genuine parts, and master technicians dedicated to keeping your vehicle in peak condition.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8"
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="relative group"
                                >
                                    {/* Background Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                                    {/* Main Card - Consistent Height */}
                                    <div className="relative bg-gradient-to-br from-amber-900/30 via-amber-900/20 to-orange-900/20 backdrop-blur-2xl border-2 border-amber-500/30 p-6 rounded-2xl shadow-2xl hover:shadow-amber-500/20 hover:border-amber-400/50 transition-all duration-500 h-full flex flex-col">

                                        {/* Corner Accents */}
                                        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-400/40 rounded-tl-lg"></div>
                                        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-400/40 rounded-br-lg"></div>

                                        {/* Icon Container */}
                                        <motion.div
                                            className="relative bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/40 group-hover:shadow-amber-500/60 transition-all duration-300"
                                            whileHover={{
                                                rotate: 360,
                                                scale: 1.05
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                        >
                                            <Icon className="h-7 w-7 text-white" />
                                        </motion.div>

                                        {/* Content - Flex grow for consistent height */}
                                        <div className="flex flex-col flex-grow space-y-4">
                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-amber-100 group-hover:text-white transition-colors duration-300 text-center leading-tight min-h-[56px] flex items-center justify-center">
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-amber-200/80 text-sm leading-relaxed font-light text-center flex-grow">
                                                {service.description}
                                            </p>

                                            {/* Features List */}
                                            <div className="space-y-2 pt-3 border-t border-amber-500/20">
                                                {service.features.map((feature, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            delay: idx * 0.1,
                                                            duration: 0.4
                                                        }}
                                                        viewport={{ once: true }}
                                                        className="flex items-center gap-2 group/feature"
                                                    >
                                                        {/* Check Circle */}
                                                        <div className="relative flex-shrink-0">
                                                            <div className="w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center shadow-sm shadow-amber-500/30">
                                                                <div className="w-1.5 h-1.5 bg-white rounded-full group-hover/feature:scale-125 transition-transform duration-300"></div>
                                                            </div>
                                                        </div>

                                                        {/* Feature Text */}
                                                        <span className="text-amber-100/90 text-xs font-medium group-hover/feature:text-amber-50 transition-colors duration-300 leading-tight">
                                                            {feature}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Hover Action Indicator */}
                                            <div className="pt-3 mt-auto">
                                                <div className="inline-flex items-center gap-1 text-amber-400/60 group-hover:text-amber-300 transition-colors duration-300">
                                                    <span className="text-xs font-semibold tracking-widest uppercase">Explore</span>
                                                    <motion.div
                                                        animate={{ x: [0, 3, 0] }}
                                                        transition={{ duration: 1.5, repeat: Infinity }}
                                                        className="w-3 h-3"
                                                    >
                                                        →
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover Border Animation */}
                                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-amber-500/0 via-amber-400/20 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-premium-shimmer"></div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Bottom Decorative Line */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex justify-center items-center gap-4 mt-12"
                    >
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/40"></div>
                        <div className="h-1 w-32 bg-gradient-to-r from-amber-500/0 via-amber-400 to-amber-500/0 rounded-full shadow-lg shadow-amber-400/20"></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/40" style={{ animationDelay: '0.5s' }}></div>
                    </motion.div>
                </AnimatedSection>

                {/* Stats Section - Automotive Theme */}
                <AnimatedSection className="mb-20">
                    <motion.div
                        variants={fadeInUp}
                        className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 rounded-xl shadow-xl p-12"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-amber-100 mb-4">Trusted by Oman</h2>
                            <p className="text-amber-200/70 text-lg max-w-2xl mx-auto">
                                Decades of excellence in automotive care with thousands of satisfied customers across Oman.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={statsVariants}
                                    whileHover={{ scale: 1.1 }}
                                    className="text-center group"
                                >
                                    <motion.div
                                        className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            delay: index * 0.1
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        {stat.number}
                                    </motion.div>
                                    <div className="text-amber-200/80 text-lg">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatedSection>

                {/* Why Choose Us - Automotive Theme */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-amber-100 mb-4">Why Choose Ajal Garage</h2>
                        <p className="text-amber-200/70 text-lg max-w-3xl mx-auto">
                            Experience the difference with our commitment to quality, transparency, and customer satisfaction.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {whyUs.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 p-6 rounded-xl shadow-xl text-center hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group"
                                >
                                    <motion.div
                                        className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/50 group-hover:scale-110 transition-transform duration-300"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon className="h-8 w-8 text-white" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-amber-100 mb-2">{item.title}</h3>
                                    <p className="text-amber-200/70 text-base">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatedSection>

                {/* Process Section - Automotive Theme */}
                <AnimatedSection className="mb-20">
                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-12"
                    >
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 p-8 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 group"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <motion.div
                                    className="bg-gradient-to-br from-amber-500 to-orange-500 p-3 rounded-xl shadow-lg shadow-amber-500/50 group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Cog className="h-8 w-8 text-white" />
                                </motion.div>
                                <h2 className="text-3xl font-bold text-amber-100">Our Process</h2>
                            </div>
                            <p className="text-amber-200/80 leading-relaxed text-lg">
                                We follow a systematic approach to vehicle maintenance and repair. From comprehensive diagnostics
                                to precision repairs using genuine parts, our certified technicians ensure your vehicle receives
                                the care it deserves with complete transparency at every step.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 p-8 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 group"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <motion.div
                                    className="bg-gradient-to-br from-amber-500 to-orange-500 p-3 rounded-xl shadow-lg shadow-amber-500/50 group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Users className="h-8 w-8 text-white" />
                                </motion.div>
                                <h2 className="text-3xl font-bold text-amber-100">Customer Commitment</h2>
                            </div>
                            <p className="text-amber-200/80 leading-relaxed text-lg">
                                Your vehicle's health and your satisfaction are our top priorities. We provide detailed explanations,
                                competitive pricing, and regular updates throughout the service process. Our team is dedicated to
                                building long-term relationships based on trust and exceptional service quality.
                            </p>
                        </motion.div>
                    </motion.div>
                </AnimatedSection>

                {/* Additional Services */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-amber-100 mb-4">Specialized Services</h2>
                        <p className="text-amber-200/70 text-lg max-w-3xl mx-auto">
                            Beyond routine maintenance, we offer specialized automotive services to meet all your vehicle needs.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                title: 'AC Service & Repair',
                                description: 'Complete air conditioning system maintenance, repair, and refrigerant recharge.',
                                icon: Zap
                            },
                            {
                                title: 'Suspension & Steering',
                                description: 'Professional alignment, shock absorber replacement, and steering system repair.',
                                icon: Settings
                            },
                            {
                                title: 'Pre-Purchase Inspection',
                                description: 'Comprehensive vehicle inspection before purchase to ensure value and safety.',
                                icon: Shield
                            }
                        ].map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 p-6 rounded-xl text-center hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group"
                                >
                                    <motion.div
                                        className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/50 group-hover:scale-110 transition-transform duration-300"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon className="h-6 w-6 text-white" />
                                    </motion.div>
                                    <h3 className="text-lg font-bold text-amber-100 mb-2">{service.title}</h3>
                                    <p className="text-amber-200/70 text-sm">{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatedSection>

                {/* CTA Section - Automotive Theme */}
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <motion.div
                            className="backdrop-blur-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-400/30 rounded-3xl p-12"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.h2
                                className="text-5xl md:text-6xl font-black mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                                    Start Your Journey Today
                                </span>
                            </motion.h2>
                            <motion.p
                                className="text-xl mb-8 max-w-2xl mx-auto text-amber-100/80"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                Join hundreds of satisfied customers who trust Ajal Garage for premium automotive care
                            </motion.p>
                            <motion.button
                                className="px-10 py-5 font-black rounded-full text-xl transition-all hover:scale-110 relative overflow-hidden group bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">Let's Connect</span>
                                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;