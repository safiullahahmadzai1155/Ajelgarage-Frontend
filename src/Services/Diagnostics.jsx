import { Car, Wrench, Settings, Zap, Shield, Clock, Users, Award, Sparkles, Cog, Gauge, Fuel, Cpu, Heart, RotateCcw, AlertTriangle, Scan, Cpu as DiagnosticIcon, Activity, Search, BugPlay, FileText, CheckCircle } from 'lucide-react';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
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
        scale: 1.03,
        y: -5,
        boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)",
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

const Diagnostics = () => {
    const { t } = useTranslation();

    const diagnosticServices = [
        {
            icon: Scan,
            title: t('computerDiagnostics'),
            description: t('computerDiagnosticsDescription'),
            features: [
                t('ecuScanning'),
                t('faultCodeReading'),
                t('systemAnalysis'),
                t('performanceMonitoring')
            ],
            price: '20 OMR',
            duration: '30-60 mins',
            badge: t('mostPopular')
        },
        {
            icon: DiagnosticIcon,
            title: t('engineDiagnostics'),
            description: t('engineDiagnosticsDescription'),
            features: [
                t('compressionTest'),
                t('ignitionAnalysis'),
                t('fuelSystemCheck'),
                t('emissionTesting')
            ],
            price: '35 OMR',
            duration: '1-2 hours',
            badge: t('advanced')
        },
        {
            icon: Activity,
            title: t('electricalSystemScan'),
            description: t('electricalSystemDescription'),
            features: [
                t('batteryHealth'),
                t('alternatorOutput'),
                t('wiringInspection'),
                t('circuitTesting')
            ],
            price: '25 OMR',
            duration: '45-90 mins',
            badge: t('comprehensive')
        },
        {
            icon: Search,
            title: t('prePurchaseInspection'),
            description: t('prePurchaseDescription'),
            features: [
                t('comprehensiveCheck'),
                t('vehicleHistory'),
                t('mechanicalAssessment'),
                t('safetyEvaluation')
            ],
            price: '40 OMR',
            duration: '2-3 hours',
            badge: t('detailedReport')
        }
    ];

    const benefits = [
        {
            icon: Shield,
            title: t('accuracy'),
            description: t('accuracyDescription')
        },
        {
            icon: Clock,
            title: t('quickResults'),
            description: t('quickResultsDescription')
        },
        {
            icon: Award,
            title: t('certifiedExperts'),
            description: t('certifiedExpertsDescription')
        },
        {
            icon: Zap,
            title: t('saveMoney'),
            description: t('saveMoneyDescription')
        }
    ];

    const diagnosticStats = [
        { number: '10,000+', label: t('vehiclesDiagnosed'), description: t('acrossOman') },
        { number: '99.8%', label: t('accuracyRate'), description: t('problemDetection') },
        { number: '30min', label: t('averageScan'), description: t('quickService') },
        { number: '24/7', label: t('support'), description: t('emergencyServices') }
    ];

    const diagnosticProcess = [
        {
            icon: Search,
            title: t('connectScan'),
            description: t('connectScanDescription')
        },
        {
            icon: BugPlay,
            title: t('analyzeCodes'),
            description: t('analyzeCodesDescription')
        },
        {
            icon: FileText,
            title: t('generateReport'),
            description: t('generateReportDescription')
        },
        {
            icon: CheckCircle,
            title: t('solutionPlan'),
            description: t('solutionPlanDescription')
        }
    ];

    const technologyFeatures = [
        {
            title: t('obdScanning'),
            description: t('obdScanningDescription'),
            icon: Scan
        },
        {
            title: t('liveDataStreaming'),
            description: t('liveDataDescription'),
            icon: Activity
        },
        {
            title: t('componentTesting'),
            description: t('componentTestingDescription'),
            icon: Cog
        },
        {
            title: t('softwareUpdates'),
            description: t('softwareUpdatesDescription'),
            icon: Zap
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Enhanced Banner */}
            <Banner
                title={t('advancedVehicleDiagnostics')}
                subtitle={t('diagnosticsSubtitle')}
                iconOne={Scan}
                iconTwo={DiagnosticIcon}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Modern Stats Section */}
                <AnimatedSection className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {diagnosticStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative group"
                            >
                                <div className="relative bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 text-center hover:border-amber-400/40 transition-all duration-500 overflow-hidden">
                                    {/* Animated Background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-3">
                                            {stat.number}
                                        </div>
                                        <div className="text-amber-100 font-bold text-lg mb-2">{stat.label}</div>
                                        <div className="text-amber-200/60 text-sm">{stat.description}</div>
                                    </div>
                                    
                                    {/* Corner accents */}
                                    <div className="absolute top-3 left-3 w-2 h-2 bg-amber-400/40 rounded-full"></div>
                                    <div className="absolute bottom-3 right-3 w-2 h-2 bg-amber-400/40 rounded-full"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Services Grid - Modern Layout */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <div className="inline-flex items-center justify-center gap-4 mb-6">
                            <div className="w-12 h-0.5 bg-amber-500/30 rounded-full"></div>
                            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                                {t('diagnosticServices')}
                            </h2>
                            <div className="w-12 h-0.5 bg-amber-500/30 rounded-full"></div>
                        </div>
                        <p className="text-amber-100/70 text-xl max-w-3xl mx-auto leading-relaxed">
                            {t('diagnosticDescription')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {diagnosticServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover="hover"
                                    className="group relative"
                                >
                                    {/* Badge */}
                                    {service.badge && (
                                        <div className="absolute -top-3 left-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg z-20 border border-amber-300/30">
                                            {service.badge}
                                        </div>
                                    )}
                                    
                                    <div className="relative bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400/40 transition-all duration-500 h-full overflow-hidden">
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/3 to-orange-500/1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="flex items-start gap-6 mb-6">
                                                <motion.div
                                                    className="flex-shrink-0 bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all duration-300"
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                >
                                                    <Icon className="h-7 w-7 text-white" />
                                                </motion.div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold text-amber-100 mb-3 group-hover:text-white transition-colors duration-300">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-amber-200/80 text-base leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Features */}
                                            <div className="grid grid-cols-2 gap-4 mb-8">
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

                                            {/* Footer */}
                                            <div className="flex items-center justify-between pt-6 border-t border-amber-500/20">
                                                <div className="text-left">
                                                    <div className="text-amber-400 font-black text-2xl mb-1">
                                                        {service.price}
                                                    </div>
                                                    <div className="text-amber-200/60 text-sm flex items-center gap-2">
                                                        <Clock className="h-4 w-4" />
                                                        {service.duration}
                                                    </div>
                                                </div>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="px-6 py-3 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/30 rounded-xl text-amber-100 font-semibold transition-all duration-300 hover:border-amber-400/50"
                                                >
                                                    {t('learnMore')}
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </AnimatedSection>

                {/* Technology & Benefits Section */}
                <AnimatedSection className="mb-20">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Technology Features */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-3xl font-bold text-amber-100 mb-6">{t('advancedTechnology')}</h3>
                                <p className="text-amber-200/70 text-lg leading-relaxed mb-8">
                                    {t('technologyDescription')}
                                </p>
                            </div>
                            
                            <div className="grid gap-6">
                                {technologyFeatures.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            className="flex items-center gap-6 p-6 bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-lg border border-amber-500/20 rounded-2xl hover:border-amber-400/40 transition-all duration-300 group"
                                        >
                                            <div className="bg-amber-500/20 p-4 rounded-xl group-hover:bg-amber-500/30 transition-colors duration-300">
                                                <Icon className="h-6 w-6 text-amber-400" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-amber-100 text-xl mb-2">{feature.title}</h4>
                                                <p className="text-amber-200/70 text-base">{feature.description}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-3xl font-bold text-amber-100 mb-6">{t('whyChooseOurDiagnostics')}</h3>
                                <p className="text-amber-200/70 text-lg leading-relaxed mb-8">
                                    {t('benefitsDescription')}
                                </p>
                            </div>
                            
                            <div className="grid gap-6">
                                {benefits.map((benefit, index) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.02 }}
                                            className="p-6 bg-gradient-to-br from-amber-900/20 to-orange-900/10 backdrop-blur-lg border border-amber-500/20 rounded-2xl hover:border-amber-400/40 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="bg-amber-500/20 p-3 rounded-xl">
                                                    <Icon className="h-6 w-6 text-amber-400" />
                                                </div>
                                                <h4 className="font-bold text-amber-100 text-xl">{benefit.title}</h4>
                                            </div>
                                            <p className="text-amber-200/70 text-base pl-16">{benefit.description}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </AnimatedSection>

                {/* Process Section - Horizontal Cards */}
                <AnimatedSection className="mb-20">
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl font-black bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent mb-6">
                            {t('ourDiagnosticProcess')}
                        </h2>
                        <p className="text-amber-100/70 text-lg max-w-2xl mx-auto">
                            {t('processDescription')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {diagnosticProcess.map((step, index) => {
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

                {/* Enhanced CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="relative overflow-hidden bg-gradient-to-br from-amber-900/30 to-orange-900/20 backdrop-blur-2xl border border-amber-500/30 rounded-3xl p-16">
                        {/* Animated Background */}
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                        </div>
                        
                        <div className="relative z-10">
                            <motion.h2
                                className="text-5xl md:text-6xl font-black mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                                    {t('readyForDiagnosis')}
                                </span>
                            </motion.h2>
                            <motion.p
                                className="text-2xl mb-12 max-w-3xl mx-auto text-amber-100/80 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {t('ctaDescription')}
                            </motion.p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <motion.button
                                    className="px-12 py-5 font-black text-lg rounded-2xl transition-all duration-300 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t('scheduleDiagnostics')}
                                </motion.button>
                                <motion.button
                                    className="px-12 py-5 font-semibold text-lg rounded-2xl transition-all duration-300 border-2 border-amber-400/50 text-amber-100 hover:border-amber-400 hover:bg-amber-400/10 hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t('freeCheckEngineScan')}
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default Diagnostics;