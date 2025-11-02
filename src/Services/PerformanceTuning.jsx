import { Car, Wrench, Settings, Zap, Shield, Clock, Users, Award, Sparkles, Cog, Gauge, Fuel, Cpu, Heart } from 'lucide-react';
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

// Animated Section Component
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

const PerformanceTuning = () => {
    const tuningServices = [
        {
            icon: Gauge,
            title: 'ECU Remapping',
            description: 'Optimize your engine control unit for maximum performance, better throttle response, and improved power delivery.',
            features: ['Power Increase up to 30%', 'Improved Throttle Response', 'Better Fuel Efficiency', 'Custom Tuning Maps']
        },
        {
            icon: Cpu,
            title: 'Chip Tuning',
            description: 'Advanced chip modification services to unlock your vehicle hidden performance potential safely.',
            features: ['Safe Power Gains', 'Preserved Reliability', 'Customizable Settings', 'Real-time Monitoring']
        },
        {
            icon: Zap,
            title: 'Performance Upgrades',
            description: 'Comprehensive performance enhancements including turbo upgrades, exhaust systems, and intake modifications.',
            features: ['Turbo/Supercharger Tuning', 'Exhaust System Optimization', 'Cold Air Intake Setup', 'Boost Control']
        },
        {
            icon: Fuel,
            title: 'Fuel System Tuning',
            description: 'Precision fuel mapping and injector calibration for optimal combustion and power output.',
            features: ['Injector Calibration', 'Fuel Pressure Optimization', 'Air-Fuel Ratio Tuning', 'Dyno Testing']
        }
    ];

    const benefits = [
        {
            icon: Zap,
            title: 'Power Boost',
            description: 'Significant horsepower and torque gains while maintaining engine reliability.'
        },
        {
            icon: Fuel,
            title: 'Fuel Efficiency',
            description: 'Optimized fuel mapping can improve mileage by 10-15% in daily driving conditions.'
        },
        {
            icon: Gauge,
            title: 'Enhanced Response',
            description: 'Eliminate turbo lag and improve throttle response for better driving experience.'
        },
        {
            icon: Shield,
            title: 'Safe Tuning',
            description: 'All modifications are within safe operating limits with comprehensive testing.'
        }
    ];

    const performanceStats = [
        { number: '40%', label: 'Max Power Gain' },
        { number: '15%', label: 'Fuel Efficiency' },
        { number: '500+', label: 'Vehicles Tuned' },
        { number: '100%', label: 'Satisfaction Rate' }
    ];

    const tuningProcess = [
        {
            step: '01',
            title: 'Diagnostic Scan',
            description: 'Comprehensive vehicle health check and performance baseline establishment'
        },
        {
            step: '02',
            title: 'Custom Mapping',
            description: 'Tailored ECU programming based on your vehicle specifications and driving needs'
        },
        {
            step: '03',
            title: 'Dyno Testing',
            description: 'Performance validation on our dynamometer to ensure optimal results'
        },
        {
            step: '04',
            title: 'Road Testing',
            description: 'Real-world testing and fine-tuning for perfect driveability'
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Performance-focused Banner */}
            <Banner
                title="Professional Performance Tuning"
                subtitle="Unlock your vehicle's true potential with our expert ECU remapping and performance optimization services in Oman."
                iconOne={Gauge}
                iconTwo={Zap}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Performance Tuning Services */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                                Performance Tuning Services
                            </h2>
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                        <p className="text-amber-100/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                            Transform your driving experience with our cutting-edge performance tuning solutions. From daily drivers to track monsters, we deliver measurable results.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8"
                    >
                        {tuningServices.map((service, index) => {
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

                                    {/* Main Card */}
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

                                        {/* Content */}
                                        <div className="flex flex-col flex-grow space-y-4">
                                            <h3 className="text-xl font-bold text-amber-100 group-hover:text-white transition-colors duration-300 text-center leading-tight min-h-[56px] flex items-center justify-center">
                                                {service.title}
                                            </h3>

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
                                                        <div className="relative flex-shrink-0">
                                                            <div className="w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center shadow-sm shadow-amber-500/30">
                                                                <div className="w-1.5 h-1.5 bg-white rounded-full group-hover/feature:scale-125 transition-transform duration-300"></div>
                                                            </div>
                                                        </div>
                                                        <span className="text-amber-100/90 text-xs font-medium group-hover/feature:text-amber-50 transition-colors duration-300 leading-tight">
                                                            {feature}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Hover Action Indicator */}
                                            <div className="pt-3 mt-auto">
                                                <div className="inline-flex items-center gap-1 text-amber-400/60 group-hover:text-amber-300 transition-colors duration-300">
                                                    <span className="text-xs font-semibold tracking-widest uppercase">Boost Performance</span>
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
                </AnimatedSection>

                {/* Performance Benefits */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-amber-100 mb-4">Why Performance Tuning?</h2>
                        <p className="text-amber-200/70 text-lg max-w-3xl mx-auto">
                            Experience transformative improvements in your vehicle's performance without compromising reliability.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {benefits.map((item, index) => {
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

                {/* Performance Stats */}
                <AnimatedSection className="mb-20">
                    <motion.div
                        variants={fadeInUp}
                        className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 rounded-xl shadow-xl p-12"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-amber-100 mb-4">Proven Results</h2>
                            <p className="text-amber-200/70 text-lg max-w-2xl mx-auto">
                                Measurable performance gains backed by dyno testing and customer satisfaction.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        >
                            {performanceStats.map((stat, index) => (
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

                {/* Tuning Process */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-amber-100 mb-4">Our Tuning Process</h2>
                        <p className="text-amber-200/70 text-lg max-w-3xl mx-auto">
                            A systematic approach to ensure optimal performance gains and complete reliability.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {tuningProcess.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover="hover"
                                className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 p-6 rounded-xl text-center hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group relative"
                            >
                                {/* Step Number */}
                                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-sm">{step.step}</span>
                                </div>
                                
                                <h3 className="text-lg font-bold text-amber-100 mb-3 mt-2">{step.title}</h3>
                                <p className="text-amber-200/70 text-sm">{step.description}</p>
                                
                                {/* Progress Line */}
                                {index < tuningProcess.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-amber-500/30 group-hover:bg-amber-400 transition-colors duration-300"></div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatedSection>

                {/* Vehicle Compatibility */}
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
                                <h2 className="text-3xl font-bold text-amber-100">Vehicle Compatibility</h2>
                            </div>
                            <p className="text-amber-200/80 leading-relaxed text-lg mb-4">
                                We specialize in performance tuning for a wide range of vehicles:
                            </p>
                            <ul className="text-amber-200/70 space-y-2">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                    Turbocharged & Supercharged Vehicles
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                    European Performance Cars (BMW, Mercedes, Audi)
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                    Japanese Sports Cars (Toyota, Honda, Nissan)
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                    American Muscle & Performance Vehicles
                                </li>
                            </ul>
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
                                    <Shield className="h-8 w-8 text-white" />
                                </motion.div>
                                <h2 className="text-3xl font-bold text-amber-100">Quality Assurance</h2>
                            </div>
                            <p className="text-amber-200/80 leading-relaxed text-lg">
                                Every tuning project includes comprehensive testing and validation. We use state-of-the-art 
                                diagnostic equipment and dyno testing to ensure your vehicle performs optimally while 
                                maintaining factory reliability standards. All work comes with our performance guarantee.
                            </p>
                        </motion.div>
                    </motion.div>
                </AnimatedSection>

                {/* CTA Section - Performance Theme */}
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
                                    Unleash Your Potential
                                </span>
                            </motion.h2>
                            <motion.p
                                className="text-xl mb-8 max-w-2xl mx-auto text-amber-100/80"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                Ready to transform your driving experience? Contact us for a free performance consultation.
                            </motion.p>
                            <motion.button
                                className="px-10 py-5 font-black rounded-full text-xl transition-all hover:scale-110 relative overflow-hidden group bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">Get Performance Quote</span>
                                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PerformanceTuning;