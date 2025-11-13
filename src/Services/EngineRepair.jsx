import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Award, Users, Lightbulb, Heart, Rocket, Wrench, Car, Cog, MapPin, Clock, Star, Shield, Settings, Zap, Calendar, Phone, Mail, CheckCircle, Play, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Banner from '../components/Banner';
import { useTranslation } from 'react-i18next';
import charvalaite from "../Assists/Cars/charvalaite.avif"

const EngineRepair = () => {
  const [activeVideo, setActiveVideo] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t } = useTranslation();

 

  const milestones = [
    { year: "1998", event: t('foundedInBarka'), description: t('startedWithTwoBays'), icon: Rocket },
    { year: "2005", event: t('firstExpansion'), description: t('expandedToTenBays'), icon: Users },
    { year: "2012", event: t('bmwCertification'), description: t('becameBmwPartner'), icon: Award },
    { year: "2018", event: t('vehiclesMilestone'), description: t('milestoneVehiclesServiced'), icon: Car },
    { year: "2023", event: t('evDivisionLaunch'), description: t('addedEvSpecialists'), icon: Zap }
  ];

  const values = [
    {
      icon: Award,
      title: t('qualityExcellence'),
      description: t('qualityExcellenceDescription'),
      features: [t('genuineParts'), t('manufacturerStandards'), t('qualityControl')]
    },
    {
      icon: Users,
      title: t('customerTrust'),
      description: t('customerTrustDescription'),
      features: [t('transparentPricing'), t('honestDiagnostics'), t('lifetimeSupport')]
    },
    {
      icon: Lightbulb,
      title: t('technicalInnovation'),
      description: t('technicalInnovationDescription'),
      features: [t('advancedEquipment'), t('continuousTraining'), t('latestTechnology')]
    },
    {
      icon: Heart,
      title: t('passionForCars'),
      description: t('passionForCarsDescription'),
      features: [t('carEnthusiasts'), t('attentionToDetail'), t('personalizedService')]
    }
  ];

  const stats = [
    { number: "25+", label: t('yearsExperience'), icon: Calendar, suffix: "Years" },
    { number: "50,000+", label: t('vehiclesServiced'), icon: Car, suffix: "Cars" },
    { number: "98%", label: t('customerSatisfaction'), icon: Star, suffix: "Rating" },
    { number: "15", label: t('certifiedTechnicians'), icon: Users, suffix: "Experts" }
  ];

  const certifications = [
    { name: t('bmwCertified'), icon: Shield, color: "from-amber-500 to-orange-500" },
    { name: t('mercedesBenz'), icon: Award, color: "from-amber-600 to-orange-600" },
    { name: t('toyotaSpecialist'), icon: Settings, color: "from-orange-500 to-amber-500" },
    { name: t('boschService'), icon: Zap, color: "from-amber-400 to-orange-400" }
  ];


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <Banner 
        title={t('engineRepairAjalGarage')}
        subtitle={t('bannerSubtitle')}
        iconOne={Wrench}
        iconTwo={Car}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Animated Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-amber-900/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 group-hover:border-amber-400/40 group-hover:shadow-2xl group-hover:shadow-amber-500/10 transition-all duration-500">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-amber-200 font-semibold text-sm">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hero Story Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 p-8 md:p-12 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Story Content */}
          <div className="space-y-8">
            <div>
              <motion.div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Star className="w-4 h-4" />
                {t('ourLegacySince1998')}
              </motion.div>
              <motion.h2 
                className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {t('automotiveExcellenceDefined')} <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{t('defined')}</span>
              </motion.h2>
            </div>

            <div className="space-y-4">
              <motion.p 
                className="text-lg text-amber-100 leading-relaxed bg-amber-800/20 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t('foundedIn1998Story')}
              </motion.p>
              
              <motion.p 
                className="text-lg text-amber-100 leading-relaxed bg-amber-800/20 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                {t('todayWeSpecialize')}
              </motion.p>

              <motion.div 
                className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-amber-50 leading-relaxed font-medium">
                  "{t('founderQuote')}"
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AA</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t('ahmedAlHarthy')}</div>
                    <div className="text-amber-300 text-sm">{t('founderCeo')}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interactive Visual */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-amber-900/20 rounded-2xl overflow-hidden border border-amber-500/30 group-hover:border-amber-400/40 transition-all duration-500">
              <img 
                src={charvalaite}
                alt={t('workshopImageAlt')}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-amber-900/50 to-transparent"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-amber-900/80 backdrop-blur-sm rounded-2xl p-4 border border-amber-500/30">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-black text-amber-400">25+</div>
                      <div className="text-xs text-amber-200">{t('yearsExperience')}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-orange-400">50K+</div>
                      <div className="text-xs text-amber-200">{t('carsServiced')}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-yellow-400">98%</div>
                      <div className="text-xs text-amber-200">{t('satisfaction')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div 
            className="group bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white">{t('ourMission')}</h3>
            </div>
            <p className="text-amber-100 leading-relaxed text-lg">
              {t('missionDescription')}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-amber-200 text-sm">{t('qualityGuaranteed')}</span>
            </div>
          </motion.div>

          <motion.div 
            className="group bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-500 hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white">{t('ourVision')}</h3>
            </div>
            <p className="text-orange-100 leading-relaxed text-lg">
              {t('visionDescription')}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-orange-200 text-sm">{t('industryLeadership')}</span>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {t('ourJourney')} <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{t('journey')}</span>
            </h2>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              {t('journeySubtitle')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-amber-500 via-orange-500 to-amber-500 h-full rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <motion.div 
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className="bg-amber-900/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-black text-amber-400">{milestone.year}</div>
                            <h3 className="text-xl font-bold text-white">{milestone.event}</h3>
                          </div>
                        </div>
                        <p className="text-amber-100">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-4 border-black shadow-lg shadow-amber-500/50 z-10"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {t('ourValues')} <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{t('values')}</span>
            </h2>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              {t('valuesSubtitle')}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={index}
                  className="group bg-amber-900/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-4">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-amber-100 text-sm leading-relaxed mb-4">{value.description}</p>
                  <div className="space-y-2">
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-amber-200 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                <Award className="w-4 h-4 inline mr-2" />
                {t('certifiedExcellence')}
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {t('trustedByGlobalBrands')} <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{t('globalBrands')}</span>
            </h2>
            <p className="text-amber-200 text-xl max-w-2xl mx-auto">
              {t('certificationsSubtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/5 via-orange-500/10 to-amber-500/5 rounded-4xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-amber-900/30 to-orange-900/20 backdrop-blur-xl rounded-3xl p-12 border border-amber-500/30 shadow-2xl shadow-amber-500/10">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="text-center group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                        
                        <div className="relative bg-amber-900/40 backdrop-blur-lg rounded-2xl p-8 border border-amber-500/20 group-hover:border-amber-400/50 group-hover:shadow-2xl group-hover:shadow-amber-500/20 transition-all duration-500 group-hover:-translate-y-2">
                          
                          {/* Icon Container with Enhanced Design */}
                          <div className="relative mb-6">
                            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                            <div className={`relative bg-gradient-to-br ${cert.color} w-24 h-24 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300`}>
                              <div className="absolute inset-2 bg-black/20 rounded-xl"></div>
                              <Icon className="h-12 w-12 text-white relative z-10 drop-shadow-lg" />
                            </div>
                            
                            {/* Floating Badge */}
                            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-amber-500 to-orange-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          </div>

                          {/* Certification Name */}
                          <h3 className="font-bold text-white text-xl mb-3 group-hover:text-amber-100 transition-colors duration-300">
                            {cert.name}
                          </h3>
                          
                          {/* Status Indicator */}
                          <div className="flex items-center justify-center gap-2 text-amber-300 text-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span>{t('certifiedPartner')}</span>
                          </div>

                          {/* Hover Line Effect */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Decorative Element */}
              <div className="mt-12 pt-8 border-t border-amber-500/20">
                <div className="flex flex-wrap items-center justify-center gap-8 text-amber-300/80">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-amber-400" />
                    <span className="text-sm">{t('factoryTrained')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span className="text-sm">{t('qualityCertified')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-amber-400" />
                    <span className="text-sm">{t('genuineParts')}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

     
      </div>
    </div>
  );
};

export default EngineRepair;