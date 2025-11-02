import { Car, Wrench, Settings, Zap, Shield, Clock, Users, Award, Sparkles, Cog, Gauge, Fuel, Cpu, Heart, RotateCcw, AlertTriangle, Droplets, Filter, RefreshCw, CheckCircle } from 'lucide-react';
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.02,
        y: -8,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
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

// Animated Section Component
const AnimatedSection = ({ children, className = "" }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const OilChange = () => {
    const oilServices = [
        {
            icon: Droplets,
            title: 'Standard Oil Change',
            description: 'Complete oil and filter replacement using high-quality synthetic blend oil.',
            features: ['Synthetic Blend Oil', 'Oil Filter Replacement', 'Fluid Level Check', 'Basic Inspection'],
            price: '15 OMR',
            duration: '30-45 mins',
            popular: false
        },
        {
            icon: Zap,
            title: 'Full Synthetic Oil Change',
            description: 'Premium full synthetic oil change for enhanced engine protection and performance.',
            features: ['Full Synthetic Oil', 'Premium Oil Filter', 'Multi-point Inspection', 'Fluid Top-up'],
            price: '25 OMR',
            duration: '30-45 mins',
            popular: true
        },
        {
            icon: Shield,
            title: 'Complete Lube Service',
            description: 'Comprehensive lubrication service including oil change and chassis lubrication.',
            features: ['Oil & Filter Change', 'Chassis Lubrication', 'Tire Rotation', 'Brake Inspection'],
            price: '35 OMR',
            duration: '1 hour',
            popular: false
        },
        {
            icon: RefreshCw,
            title: 'Oil Flush Service',
            description: 'Advanced engine flush to remove sludge and restore engine performance.',
            features: ['Engine Flush', 'Full Synthetic Oil', 'Premium Filter', 'System Cleaning'],
            price: '45 OMR',
            duration: '1-2 hours',
            popular: false
        }
    ];

    const benefits = [
        {
            icon: Gauge,
            title: 'Better Performance',
            description: 'Fresh oil improves engine efficiency and horsepower output'
        },
        {
            icon: Fuel,
            title: 'Improved Mileage',
            description: 'Clean oil reduces engine friction for better fuel economy'
        },
        {
            icon: Shield,
            title: 'Engine Protection',
            description: 'Prevents wear and tear, extending your engine life'
        },
        {
            icon: Clock,
            title: 'Quick Service',
            description: 'Most oil changes completed within 30-45 minutes'
        }
    ];

    const oilStats = [
        { number: '5000+', label: 'Monthly Services', icon: Droplets },
        { number: '99%', label: 'Satisfaction Rate', icon: Award },
        { number: '15min', label: 'Average Wait', icon: Clock },
        { number: '12M', label: 'Service Warranty', icon: Shield }
    ];

    const oilProcess = [
        {
            step: '01',
            title: 'Oil Assessment',
            description: 'Check current oil quality and level'
        },
        {
            step: '02',
            title: 'Drain Old Oil',
            description: 'Safely remove used oil and filter'
        },
        {
            step: '03',
            title: 'Replace Filter',
            description: 'Install new premium oil filter'
        },
        {
            step: '04',
            title: 'Add New Oil',
            description: 'Fill with quality synthetic oil'
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Oil Change Banner */}
            <Banner
                title="Professional Oil Change Services"
                subtitle="Keep your engine running smoothly with our expert oil change services in Oman. Quality service with genuine parts."
                iconOne={Droplets}
                iconTwo={Shield}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Stats Section - Circular Design */}
                <AnimatedSection className="mb-20">
                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {oilStats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="relative group"
                                >
                                    <div className="relative bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-lg border border-amber-500/20 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all duration-500">
                                        <div className="relative z-10">
                                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="h-7 w-7 text-white" />
                                            </div>
                                            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                                                {stat.number}
                                            </div>
                                            <div className="text-amber-100 font-semibold text-sm">{stat.label}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatedSection>

                {/* Services Section - Card Layout */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent mb-6">
                            Oil Change Services
                        </h2>
                        <p className="text-amber-100/70 text-lg max-w-3xl mx-auto">
                            Choose from our range of professional oil change services designed to keep your engine running at its best
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
                    >
                        {oilServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="group relative"
                                >
                                    {service.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg z-20">
                                            Most Popular
                                        </div>
                                    )}
                                    
                                    <div className="relative bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 h-full flex flex-col">
                                        
                                        {/* Icon */}
                                        <motion.div
                                            className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all duration-300"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <Icon className="h-6 w-6 text-white" />
                                        </motion.div>

                                        {/* Content */}
                                        <div className="flex flex-col flex-grow">
                                            <h3 className="text-lg font-bold text-amber-100 text-center mb-3 group-hover:text-white transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            
                                            <p className="text-amber-200/80 text-sm text-center mb-4 leading-relaxed flex-grow">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-2 mb-4">
                                                {service.features.map((feature, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></div>
                                                        <span className="text-amber-100/90 text-xs">
                                                            {feature}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Price & Duration */}
                                            <div className="mt-auto pt-4 border-t border-amber-500/20">
                                                <div className="flex justify-between items-center">
                                                    <div className="text-amber-400 font-bold text-lg">
                                                        {service.price}
                                                    </div>
                                                    <div className="text-amber-200/60 text-sm">
                                                        {service.duration}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatedSection>

                {/* Benefits Section - Side by Side */}
                <AnimatedSection className="mb-20">
                    <motion.div
                        variants={staggerContainer}
                        className="grid lg:grid-cols-2 gap-12 items-start"
                    >
                        {/* Benefits List */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-3xl font-bold text-amber-100 mb-6">Why Regular Oil Changes Matter</h3>
                                <p className="text-amber-200/70 text-lg leading-relaxed mb-8">
                                    Regular oil changes are essential for maintaining your vehicle's performance, 
                                    fuel efficiency, and overall engine health.
                                </p>
                            </div>
                            
                            <div className="grid gap-6">
                                {benefits.map((benefit, index) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-start gap-4 p-6 bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-lg border border-amber-500/20 rounded-xl hover:border-amber-400/40 transition-all duration-300"
                                        >
                                            <div className="bg-amber-500/20 p-3 rounded-lg flex-shrink-0">
                                                <Icon className="h-6 w-6 text-amber-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-amber-100 text-lg mb-2">{benefit.title}</h4>
                                                <p className="text-amber-200/70 text-sm leading-relaxed">{benefit.description}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Process Timeline */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-lg border border-amber-500/20 rounded-2xl p-8"
                        >
                            <h3 className="text-2xl font-bold text-amber-100 mb-8 text-center">Our Process</h3>
                            <div className="space-y-6">
                                {oilProcess.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 5 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="flex flex-col items-center flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-white font-bold text-sm">{step.step}</span>
                                            </div>
                                            {index < oilProcess.length - 1 && (
                                                <div className="w-0.5 h-12 bg-amber-500/30 mt-2"></div>
                                            )}
                                        </div>
                                        <div className="flex-1 pb-6">
                                            <h4 className="font-bold text-amber-100 text-lg mb-2">{step.title}</h4>
                                            <p className="text-amber-200/70 text-sm">{step.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatedSection>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="relative overflow-hidden bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-12">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
                        </div>
                        
                        <div className="relative z-10">
                            <motion.h2
                                className="text-4xl md:text-5xl font-black mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                                    Ready for Service?
                                </span>
                            </motion.h2>
                            <motion.p
                                className="text-xl mb-8 max-w-2xl mx-auto text-amber-100/80"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Visit Ajal Garage today for professional oil change services that keep your engine running smoothly.
                            </motion.p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <motion.button
                                    className="px-8 py-4 font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get Oil Change
                                </motion.button>
                                <motion.button
                                    className="px-8 py-4 font-semibold rounded-xl transition-all duration-300 border-2 border-amber-400/50 text-amber-100 hover:border-amber-400 hover:bg-amber-400/10"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Us
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default OilChange;