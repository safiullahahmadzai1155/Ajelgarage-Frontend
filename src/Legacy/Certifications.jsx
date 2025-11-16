import { useState } from 'react';
import { Target, Eye, Award, Users, Lightbulb, Heart, Wrench, Car, Cog, Calendar, MapPin, Phone, Star, Shield, Zap } from 'lucide-react';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('technicians');
  const [selectedTech, setSelectedTech] = useState(null);
  const {t} = useTranslation()
  
  const masterTechnicians = [
    {
      name: "Ahmed Al-Harthy",
      role: t("masterTechnicianFounder"),
      specialization: t("europeanJapaneseVehicles"),
      experience: "25+ " + t("years"),
      certifications: [t("aseMasterTechnician"), t("bmwCertified"), t("toyotaSpecialist")],
      bio: t("ahmedBio"),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      skills: [t("engineDiagnostics"), t("transmissionRepair"), t("electricalSystemsSkill"), t("performanceTuningSkill")],
      achievements: [t("founderAjalGarage"), t("trainedTechnicians"), t("industrySpeaker")]
    },
    {
      name: "Mohammed Al-Balushi",
      role: t("seniorDiagnosticSpecialist"),
      specialization: t("electricalComputerSystems"),
      experience: "15+ " + t("years"),
      certifications: [t("advancedDiagnostics"), t("ecuProgramming"), t("hybridSystems")],
      bio: t("mohammedBio"),
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
      skills: [t("computerDiagnostics"), t("wiringSystemsSkill"), t("ecuProgrammingSkill"), t("sensorTechnology")],
      achievements: [t("hybridSystemsExpert"), t("diagnosticEquipmentTrainer")]
    },
    {
      name: "Salem Al-Rashdi",
      role: t("performanceTuningExpert"),
      specialization: t("performanceUpgrades"),
      experience: "12+ " + t("years"),
      certifications: [t("performanceTuning"), t("turboSystems"), t("engineManagement")],
      bio: t("salemBio"),
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      skills: [t("ecuRemapping"), t("turboSystems"), t("exhaustTuning"), t("performanceOptimization")],
      achievements: [t("performanceAwardWinner"), t("racingTeamConsultant")]
    },
    {
      name: "Khalid Al-Mamari",
      role: t("transmissionSpecialist"),
      specialization: t("automaticManualTransmissions"),
      experience: "18+ " + t("years"),
      certifications: [t("transmissionMaster"), t("cvtSpecialist"), t("dualClutchSystems")],
      bio: t("khalidBio"),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      skills: [t("automaticTransmissions"), t("manualGearboxes"), t("cvtSystems"), t("clutchSystems")],
      achievements: [t("transmissionInnovationAward"), t("manufacturerTrainer")]
    }
  ];

  const specialties = [
    {
      icon: Cog,
      title: t("advancedDiagnostics"),
      description: t("diagnosticsDescription"),
      features: [t("computerSystemScanning"), t("faultCodeAnalysis"), t("liveDataMonitoring"), t("performanceTesting")],
      color: "amber"
    },
    {
      icon: Zap,
      title: t("enginePerformance"),
      description: t("engineDescription"),
      features: [t("engineOverhaul"), t("performanceTuning"), t("fuelSystemService"), t("turboCharging")],
      color: "orange"
    },
    {
      icon: Wrench,
      title: t("transmissionExpertise"),
      description: t("transmissionDescription"),
      features: [t("automaticTransmissions"), t("manualGearboxes"), t("cvtSystems"), t("dualClutch")],
      color: "amber"
    },
    {
      icon: Shield,
      title: t("electricalSystems"),
      description: t("electricalDescription"),
      features: [t("wiringSystems"), t("ecuProgramming"), t("sensorDiagnostics"), t("hybridSystems")],
      color: "orange"
    }
  ];

  const certifications = [
    { 
      name: t("aseCertifiedMasterTechnician"), 
      count: 4,
      description: t("aseDescription"),
      icon: Award
    },
    { 
      name: t("manufacturerCertifiedSpecialists"), 
      count: 8,
      description: t("manufacturerDescription"),
      icon: Users
    },
    { 
      name: t("advancedDiagnosticSystems"), 
      count: 12,
      description: t("advancedDiagnosticDescription"),
      icon: Cog
    },
    { 
      name: t("hybridElectricVehicleCertified"), 
      count: 3,
      description: t("hybridDescription"),
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <Banner 
        title={t("certifiedExcellence")}
        subtitle={t("ajalGarageTeamDescription")}
        iconOne={Award}
        iconTwo={Shield}
        badgeText={t("aseCertified")}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Stats dengan design yang lebih baik */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { number: "70+", label: t("yearsCombinedExperience"), icon: Calendar },
            { number: "15+", label: t("professionalCertifications"), icon: Award },
            { number: "50K+", label: t("vehiclesServiced"), icon: Car },
            { number: "99%", label: t("customerSatisfaction"), icon: Star }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-stone-900 border border-amber-800 rounded-xl p-6 text-center hover:border-amber-600 transition-all duration-300"
              >
                <div className="bg-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="text-2xl font-bold text-amber-400 mb-1">{stat.number}</div>
                <div className="text-amber-300 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Fixed Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-stone-900 border border-amber-800 rounded-xl p-1 flex space-x-1">
            {[
              { id: 'technicians', label: t("ourTechnicians"), icon: Users },
              { id: 'specialties', label: t("specialties"), icon: Cog },
              { id: 'certifications', label: t("certifications"), icon: Award }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 min-w-0 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'text-amber-200/70 hover:text-amber-100 hover:bg-amber-500/10'
                  }`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Technicians Tab */}
        {activeTab === 'technicians' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-amber-50 mb-4">{t("meetOurMasterTechnicians")}</h2>
              <p className="text-amber-300 text-lg max-w-2xl mx-auto">
                {t("techniciansDescription")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {masterTechnicians.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-stone-900 border border-amber-800 rounded-2xl overflow-hidden hover:border-amber-600 transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0 relative">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-20 h-20 rounded-xl object-cover border-2 border-amber-500/50"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          {tech.experience}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-amber-50 mb-1">{tech.name}</h3>
                        <div className="text-amber-400 font-semibold text-sm mb-2">{tech.role}</div>
                        <div className="flex items-center gap-4 text-amber-300 text-xs">
                          <span className="flex items-center gap-1 bg-amber-500/20 px-2 py-1 rounded">
                            <Star className="h-3 w-3" />
                            {tech.specialization}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-amber-200 text-sm mb-4 leading-relaxed">
                      {tech.bio}
                    </p>

                    <div className="mb-4">
                      <div className="text-amber-50 font-semibold text-sm mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        {t("certificationsLabel")}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tech.certifications.map((cert, idx) => (
                          <span
                            key={idx}
                            className="bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full border border-amber-500/30"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-amber-50 font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        {t("specializedSkills")}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tech.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-orange-500/20 text-orange-300 text-xs px-3 py-1 rounded-full border border-orange-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Specialties Tab */}
        {activeTab === 'specialties' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-amber-50 mb-4">{t("ourSpecializedServices")}</h2>
              <p className="text-amber-300 text-lg max-w-2xl mx-auto">
                {t("specialtiesDescription")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon;
                const colorClass = specialty.color === 'orange' 
                  ? 'from-orange-500/20 to-orange-600/10 border-orange-800' 
                  : 'from-amber-500/20 to-amber-600/10 border-amber-800';
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${colorClass} border rounded-xl p-6 hover:border-amber-600 transition-all duration-300 hover:transform hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${
                        specialty.color === 'orange' ? 'bg-orange-500/20' : 'bg-amber-500/20'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          specialty.color === 'orange' ? 'text-orange-400' : 'text-amber-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-50 mb-2">{specialty.title}</h3>
                        <p className="text-amber-200 text-sm">{specialty.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {specialty.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-amber-200 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            specialty.color === 'orange' ? 'bg-orange-400' : 'bg-amber-400'
                          }`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-amber-50 mb-4">{t("ourCertifications")}</h2>
              <p className="text-amber-300 text-lg max-w-2xl mx-auto">
                {t("certificationsDescription")}
              </p>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-stone-900 border border-amber-800 rounded-xl p-6 hover:border-amber-600 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-amber-500/20 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-amber-50">{cert.name}</h3>
                          <p className="text-amber-300 text-sm mt-1">{cert.description}</p>
                        </div>
                      </div>
                      <div className="text-amber-400 font-bold text-2xl bg-amber-500/10 px-4 py-2 rounded-lg">
                        {cert.count}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center">
              <div className="bg-stone-900 border border-amber-800 rounded-xl p-8">
                <div className="bg-amber-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-amber-50 mb-4">{t("continuousTrainingProgram")}</h3>
                <p className="text-amber-200 mb-6 max-w-2xl mx-auto">
                  {t("trainingDescription")}
                </p>
                <div className="flex justify-center gap-6 text-sm text-amber-300">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {t("annualTrainingUpdates")}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {t("manufacturerPrograms")}
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    {t("technologyWorkshops")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Why Choose Our Technicians Section */}
        <div className="mt-20 bg-stone-900 border border-amber-800 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-50 mb-4">{t("whyTrustAjalGarage")}</h2>
            <p className="text-amber-300 text-lg">{t("whyTrustDescription")}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: t("provenExperience"), 
                description: t("provenExperienceDescription"),
                icon: Users,
                stat: t("yearsAvgExperience")
              },
              { 
                title: t("advancedTraining"), 
                description: t("advancedTrainingDescription"),
                icon: Lightbulb,
                stat: t("annualTrainingUpdatesStat")
              },
              { 
                title: t("qualityGuarantee"), 
                description: t("qualityGuaranteeDescription"),
                icon: Shield,
                stat: t("monthWarranty")
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="bg-amber-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-50 mb-3">{item.title}</h3>
                  <p className="text-amber-200 mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="text-amber-400 font-semibold text-sm bg-amber-500/10 px-3 py-1 rounded-full inline-block">
                    {item.stat}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="mt-20 bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t("readyToExperience")}</h3>
            <p className="text-amber-100 mb-6">
              {t("scheduleService")}
            </p>
            <button className="bg-black text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-stone-900 transition-colors duration-300 border border-amber-500/30">
              {t("bookYourAppointment")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;