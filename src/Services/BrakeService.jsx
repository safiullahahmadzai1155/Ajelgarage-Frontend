import { Car, Wrench, Settings, Zap, Shield, Clock, Users, Award, Sparkles, Cog, Gauge, Fuel, Cpu, Heart, RotateCcw, AlertTriangle } from 'lucide-react';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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
    hidden: { opacity: 0, scale: 0.9 },
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
        y: -5,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
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
            staggerChildren: 0.15
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

const BrakeService = () => {
    const { t } = useTranslation();

    const brakeServices = [
        {
            icon: Settings,
            title: t('brakePadReplacement'),
            description: t('brakePadReplacementDesc'),
            features: [
                t('premiumBrakePads'),
                t('rotorInspection'),
                t('caliperService'),
                t('noiseElimination')
            ],
            price: '25 OMR',
            duration: `2-3 ${t('hours')}`,
            warranty: `12 ${t('months')}`
        },
        {
            icon: RotateCcw,
            title: t('brakeDiscResurfacing'),
            description: t('brakeDiscResurfacingDesc'),
            features: [
                t('rotorMachining'),
                t('surfaceSmoothing'),
                t('vibrationControl'),
                t('extendedRotorLife')
            ],
            price: '35 OMR',
            duration: `3-4 ${t('hours')}`,
            warranty: `6 ${t('months')}`
        },
        {
            icon: Zap,
            title: t('absSystemRepair'),
            description: t('absSystemRepairDesc'),
            features: [
                t('absSensorReplacement'),
                t('moduleDiagnostics'),
                t('wheelSpeedSensors'),
                t('systemCalibration')
            ],
            price: '45 OMR',
            duration: `4-5 ${t('hours')}`,
            warranty: `12 ${t('months')}`
        },
        {
            icon: Wrench,
            title: t('completeBrakeOverhaul'),
            description: t('completeBrakeOverhaulDesc'),
            features: [
                t('fullSystemFlush'),
                t('caliperRebuild'),
                t('hardwareReplacement'),
                t('performanceTesting')
            ],
            price: '60 OMR',
            duration: `5-6 ${t('hours')}`,
            warranty: `12 ${t('months')}`
        }
    ];

    const benefits = [
        {
            icon: Shield,
            title: t('enhancedSafety'),
            description: t('enhancedSafetyDesc')
        },
        {
            icon: Clock,
            title: t('quickService'),
            description: t('quickServiceDesc')
        },
        {
            icon: Award,
            title: t('qualityParts'),
            description: t('qualityPartsDesc')
        },
        {
            icon: Users,
            title: t('expertTechnicians'),
            description: t('expertTechniciansDesc')
        }
    ];

    const brakeStats = [
        { number: '50%', label: t('shorterStoppingDistance'), description: t('improvedBrakingPerformance') },
        { number: '12K+', label: t('brakeJobsCompleted'), description: t('trustedByThousands') },
        { number: '100%', label: t('safetyCertified'), description: t('qualityGuaranteed') },
        { number: '24H', label: t('emergencyService'), description: t('alwaysAvailable') }
    ];

    const brakeProcess = [
        {
            step: '01',
            title: t('comprehensiveInspection'),
            description: t('comprehensiveInspectionDesc')
        },
        {
            step: '02',
            title: t('advancedDiagnostics'),
            description: t('advancedDiagnosticsDesc')
        },
        {
            step: '03',
            title: t('precisionRepair'),
            description: t('precisionRepairDesc')
        },
        {
            step: '04',
            title: t('qualityTesting'),
            description: t('qualityTestingDesc')
        }
    ];

    const warningSigns = [
        {
            icon: AlertTriangle,
            title: t('squeakingOrGrinding'),
            description: t('squeakingOrGrindingDesc'),
            urgency: t('high')
        },
        {
            icon: Car,
            title: t('vibrationInPedal'),
            description: t('vibrationInPedalDesc'),
            urgency: t('medium')
        },
        {
            icon: Zap,
            title: t('absLightOn'),
            description: t('absLightOnDesc'),
            urgency: t('high')
        },
        {
            icon: Gauge,
            title: t('longerStoppingDistance'),
            description: t('longerStoppingDistanceDesc'),
            urgency: t('high')
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Brake Service Focused Banner */}
            <Banner
                title={t('professionalBrakeServices')}
                subtitle={t('brakeServicesSubtitle')}
                iconOne={Settings}
                iconTwo={Shield}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Stats Section */}
                <AnimatedSection className="mb-16">
                    <motion.div
                        variants={fadeInUp}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                    >
                        {brakeStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={statsVariants}
                                className="text-center p-6 bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-lg border border-amber-500/20 rounded-xl hover:border-amber-400/40 transition-all duration-300"
                            >
                                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-amber-100 font-semibold text-sm mb-1">{stat.label}</div>
                                <div className="text-amber-200/60 text-xs">{stat.description}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatedSection>

                {/* Brake Services Grid */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-full mb-6">
                            <div className="flex-1 h-0.5 bg-amber-500/20"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-amber-100 mx-6">
                                {t('ourBrakeServices')}
                            </h2>
                            <div className="flex-1 h-0.5 bg-amber-500/20"></div>
                        </div>
                        <p className="text-amber-100/70 text-lg max-w-3xl mx-auto">
                            {t('brakeServicesDescription')}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid lg:grid-cols-2 gap-8"
                    >
                        {brakeServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="group relative"
                                >
                                    <div className="relative bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 h-full">
                                        
                                        {/* Service Badge */}
                                        <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                                            {service.price}
                                        </div>

                                        {/* Header Section */}
                                        <div className="flex items-start gap-6 mb-6">
                                            <motion.div
                                                className="flex-shrink-0 bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all duration-300"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                            >
                                                <Icon className="h-7 w-7 text-white" />
                                            </motion.div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-amber-100 mb-3 group-hover:text-white transition-colors duration-300">
                                                    {service.title}
                                                </h3>
                                                <p className="text-amber-200/80 text-sm leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Features Grid */}
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-center gap-3 group/feature"
                                                >
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0 group-hover/feature:scale-150 transition-transform duration-300"></div>
                                                    <span className="text-amber-100/90 text-sm font-medium">
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Service Details */}
                                        <div className="flex items-center justify-between pt-4 border-t border-amber-500/20">
                                            <div className="flex items-center gap-6 text-amber-200/70 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4" />
                                                    <span>{service.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Shield className="h-4 w-4" />
                                                    <span>{service.warranty} {t('warranty')}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover Effects */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatedSection>

                {/* Warning Signs & Benefits Side by Side */}
                <AnimatedSection className="mb-20">
                    <motion.div
                        variants={staggerContainer}
                        className="grid lg:grid-cols-2 gap-8"
                    >
                        {/* Warning Signs */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-lg border border-amber-500/20 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-red-500/20 rounded-lg">
                                    <AlertTriangle className="h-6 w-6 text-red-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-amber-100">{t('brakeWarningSigns')}</h3>
                            </div>
                            <div className="space-y-4">
                                {warningSigns.map((sign, index) => {
                                    const Icon = sign.icon;
                                    const urgencyColor = sign.urgency === t('high') ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400';
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-4 p-4 rounded-xl border border-amber-500/10 hover:border-amber-400/30 transition-all duration-300 group/sign"
                                        >
                                            <div className={`p-2 rounded-lg ${urgencyColor} transition-colors duration-300`}>
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h4 className="font-semibold text-amber-100 text-sm">{sign.title}</h4>
                                                    <span className={`text-xs px-2 py-1 rounded-full ${sign.urgency === t('high') ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}>
                                                        {sign.urgency} {t('priority')}
                                                    </span>
                                                </div>
                                                <p className="text-amber-200/70 text-xs leading-relaxed">{sign.description}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Benefits */}
                       <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-lg border border-amber-500/20 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-500/20 rounded-lg">
                                <Award className="h-6 w-6 text-amber-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-amber-100">{t('whyChooseUs')}</h3>
                        </div>
                        <div className="space-y-0">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={index}>
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-amber-500/10 transition-all duration-300 group/benefit"
                                        >
                                            <div className="bg-amber-500/20 p-2 rounded-lg group-hover/benefit:bg-amber-500/30 transition-colors duration-300">
                                                <Icon className="h-5 w-5 text-amber-400" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-amber-100 text-sm mb-1">{benefit.title}</h4>
                                                <p className="text-amber-200/70 text-xs leading-relaxed">{benefit.description}</p>
                                            </div>
                                        </motion.div>
                                        {index < benefits.length - 1 && (
                                            <hr className="border-amber-500/20 opacity-30 mx-4" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                    </motion.div>
                </AnimatedSection>

                {/* Service Process */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-full mb-6">
                            <div className="flex-1 h-0.5 bg-amber-500/20"></div>
                            <h2 className="text-3xl font-bold text-amber-100 mx-6">{t('ourServiceProcess')}</h2>
                            <div className="flex-1 h-0.5 bg-amber-500/20"></div>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-4 right-4 top-12 h-0.5 bg-amber-500/20 hidden lg:block"></div>
                        
                        <motion.div
                            variants={staggerContainer}
                            className="grid lg:grid-cols-4 gap-6"
                        >
                            {brakeProcess.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="relative text-center group"
                                >
                                    <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-lg border border-amber-500/20 rounded-2xl p-6 hover:border-amber-400/40 transition-all duration-300 h-full">
                                        {/* Step Number */}
                                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                            <span className="text-white font-bold text-lg">{step.step}</span>
                                        </div>
                                        
                                        <h4 className="font-bold text-amber-100 text-base mb-3">{step.title}</h4>
                                        <p className="text-amber-200/70 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </AnimatedSection>

                {/* Final CTA */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-12">
                        <motion.h2
                            className="text-4xl md:text-5xl font-black mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                                {t('safetyFirstAlways')}
                            </span>
                        </motion.h2>
                        <motion.p
                            className="text-lg mb-8 max-w-2xl mx-auto text-amber-100/80"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {t('safetyDescription')}
                        </motion.p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                className="px-8 py-4 font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/25"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('visitOurGarage')}
                            </motion.button>
                            <motion.button
                                className="px-8 py-4 font-semibold rounded-xl transition-all duration-300 border-2 border-amber-400/50 text-amber-100 hover:border-amber-400 hover:bg-amber-400/10"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('callForConsultation')}
                            </motion.button>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default BrakeService;