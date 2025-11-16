import { Car, Wrench, Settings, Zap, Shield, Clock, Users, Award, Sparkles, Cog, Gauge, Fuel, Cpu, Heart, RotateCcw, AlertTriangle, Calendar, CheckCircle, FileCheck, Car as CarIcon, Star, TrendingUp } from 'lucide-react';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
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
            duration: 0.4,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.02,
        y: -3,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
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

const Maintenance = () => {
    const { t } = useTranslation();
    
    const maintenanceServices = [
        {
            icon: Calendar,
            title: t('scheduledMaintenance'),
            description: t('scheduledMaintenanceDesc'),
            features: [
                t('oilFilterChange'),
                t('fluidLevelChecks'),
                t('brakeInspection'),
                t('tireRotation')
            ],
            price: '45 OMR',
            duration: t('hours2-3')
        },
        {
            icon: Wrench,
            title: t('comprehensiveService'),
            description: t('comprehensiveServiceDesc'),
            features: [
                t('fullSystemCheck'),
                t('batteryTesting'),
                t('acService'),
                t('suspensionCheck')
            ],
            price: '65 OMR',
            duration: t('hours3-4')
        },
        {
            icon: CarIcon,
            title: t('majorService'),
            description: t('majorServiceDesc'),
            features: [
                t('sparkPlugs'),
                t('fuelSystem'),
                t('transmission'),
                t('coolingSystem')
            ],
            price: '95 OMR',
            duration: t('hours4-5')
        }
    ];

    const benefits = [
        {
            icon: Shield,
            title: t('extendedVehicleLife'),
            description: t('extendedVehicleLifeDesc')
        },
        {
            icon: Zap,
            title: t('betterPerformance'),
            description: t('betterPerformanceDesc')
        },
        {
            icon: TrendingUp,
            title: t('higherResaleValue'),
            description: t('higherResaleValueDesc')
        },
        {
            icon: Clock,
            title: t('preventBreakdowns'),
            description: t('preventBreakdownsDesc')
        }
    ];

    const maintenanceStats = [
        { number: '15,000+', label: t('vehiclesServiced'), description: t('happyCustomers') },
        { number: '98%', label: t('satisfactionRate'), description: t('qualityService') },
        { number: '24/7', label: t('customerSupport'), description: t('alwaysAvailable') },
        { number: t('months12'), label: t('serviceWarranty'), description: t('peaceOfMind') }
    ];

    const maintenanceProcess = [
        {
            icon: FileCheck,
            title: t('vehicleAssessment'),
            description: t('vehicleAssessmentDesc')
        },
        {
            icon: Wrench,
            title: t('serviceExecution'),
            description: t('serviceExecutionDesc')
        },
        {
            icon: CheckCircle,
            title: t('qualityCheck'),
            description: t('qualityCheckDesc')
        },
        {
            icon: CarIcon,
            title: t('finalTesting'),
            description: t('finalTestingDesc')
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Maintenance Banner */}
            <Banner
                title={t('maintenanceTitle')}
                subtitle={t('maintenanceSubtitle')}
                iconOne={Wrench}
                iconTwo={Shield}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Stats Section */}
                <AnimatedSection className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {maintenanceStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative group"
                            >
                                <div className="relative bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 text-center hover:border-amber-400/40 transition-all duration-500 overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-3">
                                            {stat.number}
                                        </div>
                                        <div className="text-amber-100 font-bold text-lg mb-2">{stat.label}</div>
                                        <div className="text-amber-200/60 text-sm">{stat.description}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Services Section */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <div className="inline-flex items-center justify-center gap-4 mb-6">
                            <div className="w-12 h-0.5 bg-amber-500/30 rounded-full"></div>
                            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                                {t('maintenanceServices')}
                            </h2>
                            <div className="w-12 h-0.5 bg-amber-500/30 rounded-full"></div>
                        </div>
                        <p className="text-amber-100/70 text-xl max-w-3xl mx-auto leading-relaxed">
                            {t('servicesSubtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {maintenanceServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="group"
                                >
                                    <div className="relative bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 hover:border-amber-400/40 transition-all duration-500 h-full">
                                        {/* Icon */}
                                        <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold text-amber-100 text-center mb-4 group-hover:text-white transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        
                                        <p className="text-amber-200/80 text-base text-center mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-3 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-center justify-center gap-3"
                                                >
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                                                    <span className="text-amber-100/90 text-sm font-medium text-center">
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Price & Duration */}
                                        <div className="flex items-center justify-center gap-8 pt-6 border-t border-amber-500/20">
                                            <div className="text-center">
                                                <div className="text-amber-400 font-black text-2xl">
                                                    {service.price}
                                                </div>
                                                <div className="text-amber-200/60 text-sm flex items-center gap-2 mt-1">
                                                    <Clock className="h-4 w-4" />
                                                    {service.duration}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </AnimatedSection>

                {/* Benefits Section */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl font-black bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent mb-6">
                            {t('benefitsTitle')}
                        </h2>
                        <p className="text-amber-100/70 text-lg max-w-2xl mx-auto">
                            {t('benefitsSubtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="group"
                                >
                                    <div className="relative bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-lg border border-amber-500/20 rounded-2xl p-8 text-center hover:border-amber-400/40 transition-all duration-500 h-full">
                                        <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="h-7 w-7 text-white" />
                                        </div>
                                        
                                        <h4 className="font-bold text-amber-100 text-xl mb-4">{benefit.title}</h4>
                                        <p className="text-amber-200/70 text-sm leading-relaxed">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </AnimatedSection>

                {/* Process Section */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl font-black bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent mb-6">
                            {t('processTitle')}
                        </h2>
                        <p className="text-amber-100/70 text-lg max-w-2xl mx-auto">
                            {t('processSubtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {maintenanceProcess.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="group text-center"
                                >
                                    <div className="relative bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-lg border border-amber-500/20 rounded-2xl p-8 hover:border-amber-400/40 transition-all duration-500 h-full">
                                        {/* Step Number */}
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
                                        </div>
                                        
                                        {/* Icon */}
                                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="h-7 w-7 text-white" />
                                        </div>
                                        
                                        <h4 className="font-bold text-amber-100 text-lg mb-3">{step.title}</h4>
                                        <p className="text-amber-200/70 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </AnimatedSection>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="relative overflow-hidden bg-gradient-to-br from-amber-900/30 to-orange-900/20 backdrop-blur-2xl border border-amber-500/30 rounded-3xl p-16">
                        <div className="relative z-10">
                            <motion.h2
                                className="text-5xl md:text-6xl font-black mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                                    {t('professionalMaintenance')}
                                </span>
                            </motion.h2>
                            <motion.p
                                className="text-2xl mb-8 max-w-3xl mx-auto text-amber-100/80 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {t('ctaDescription')}
                            </motion.p>
                            <div className="text-amber-200/60 text-lg">
                                {t('visitGarage')}
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default Maintenance;