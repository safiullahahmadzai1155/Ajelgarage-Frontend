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
    const { t } = useTranslation();

    const brakeServices = [
        {
            icon: Settings,
            title: t('brakePadReplacement'),
            description: t('brakePadDescription'),
            features: [
                t('premiumBrakePads'),
                t('rotorInspection'),
                t('caliperService'),
                t('noiseElimination')
            ]
        },
        {
            icon: RotateCcw,
            title: t('brakeDiscResurfacing'),
            description: t('brakeDiscDescription'),
            features: [
                t('rotorMachining'),
                t('surfaceSmoothing'),
                t('vibrationControl'),
                t('extendedRotorLife')
            ]
        },
        {
            icon: Zap,
            title: t('absSystemRepair'),
            description: t('absSystemDescription'),
            features: [
                t('absSensorReplacement'),
                t('moduleDiagnostics'),
                t('wheelSpeedSensors'),
                t('systemCalibration')
            ]
        },
        {
            icon: Wrench,
            title: t('completeBrakeOverhaul'),
            description: t('completeBrakeDescription'),
            features: [
                t('fullSystemFlush'),
                t('caliperRebuild'),
                t('hardwareReplacement'),
                t('performanceTesting')
            ]
        }
    ];

    const benefits = [
        {
            icon: Shield,
            title: t('enhancedSafety'),
            description: t('safetyDescription')
        },
        {
            icon: Clock,
            title: t('quickService'),
            description: t('quickServiceDescription')
        },
        {
            icon: Award,
            title: t('qualityParts'),
            description: t('qualityPartsDescription')
        },
        {
            icon: Users,
            title: t('expertTechnicians'),
            description: t('techniciansDescription')
        }
    ];

    const brakeStats = [
        { number: '50%', label: t('shorterStoppingDistance') },
        { number: '12K+', label: t('brakeJobsCompleted') },
        { number: '100%', label: t('safetyCertified') },
        { number: '24H', label: t('emergencyService') }
    ];

    const brakeProcess = [
        {
            step: '01',
            title: t('brakeInspection'),
            description: t('inspectionDescription')
        },
        {
            step: '02',
            title: t('diagnosticTesting'),
            description: t('diagnosticDescription')
        },
        {
            step: '03',
            title: t('precisionRepair'),
            description: t('repairDescription')
        },
        {
            step: '04',
            title: t('roadTesting'),
            description: t('roadTestingDescription')
        }
    ];

    const warningSigns = [
        {
            icon: AlertTriangle,
            title: t('squeakingOrGrinding'),
            description: t('squeakingDescription')
        },
        {
            icon: Car,
            title: t('vibrationInPedal'),
            description: t('vibrationDescription')
        },
        {
            icon: Zap,
            title: t('absLightOn'),
            description: t('absLightDescription')
        },
        {
            icon: Gauge,
            title: t('longerStoppingDistance'),
            description: t('stoppingDistanceDescription')
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Brake Services Grid */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                                {t('brakeServices')}
                            </h2>
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                        <p className="text-amber-100/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                            {t('brakeServicesDescription')}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8"
                    >
                        {brakeServices.map((service, index) => {
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
                                                    <span className="text-xs font-semibold tracking-widest uppercase">{t('learnMore')}</span>
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

                {/* Warning Signs Section */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-amber-100 mb-4">{t('brakeWarningSigns')}</h2>
                        <p className="text-amber-200/70 text-lg max-w-3xl mx-auto">
                            {t('warningSignsDescription')}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {warningSigns.map((sign, index) => {
                            const Icon = sign.icon;
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
                                    <h3 className="text-lg font-bold text-amber-100 mb-2">{sign.title}</h3>
                                    <p className="text-amber-200/70 text-sm">{sign.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatedSection>

                {/* Benefits Section */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-amber-100 mb-4">{t('whyChooseOurBrakeServices')}</h2>
                        <p className="text-amber-200/70 text-lg max-w-3xl mx-auto">
                            {t('benefitsDescription')}
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

                {/* Brake Stats */}
                <AnimatedSection className="mb-20">
                    <motion.div
                        variants={fadeInUp}
                        className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 rounded-xl shadow-xl p-12"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-amber-100 mb-4">{t('trustedBrakeServices')}</h2>
                            <p className="text-amber-200/70 text-lg max-w-2xl mx-auto">
                                {t('trustedDescription')}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        >
                            {brakeStats.map((stat, index) => (
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

                {/* Brake Service Process */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-amber-100 mb-4">{t('ourBrakeServiceProcess')}</h2>
                        <p className="text-amber-200/70 text-lg max-w-3xl mx-auto">
                            {t('processDescription')}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {brakeProcess.map((step, index) => (
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
                                {index < brakeProcess.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-amber-500/30 group-hover:bg-amber-400 transition-colors duration-300"></div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatedSection>

                {/* CTA Section - Brake Service Theme */}
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
                                    {t('yourSafetyFirst')}
                                </span>
                            </motion.h2>
                            <motion.p
                                className="text-xl mb-8 max-w-2xl mx-auto text-amber-100/80"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                {t('ctaDescription')}
                            </motion.p>
                            <motion.button
                                className="px-10 py-5 font-black rounded-full text-xl transition-all hover:scale-110 relative overflow-hidden group bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">{t('scheduleBrakeInspection')}</span>
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