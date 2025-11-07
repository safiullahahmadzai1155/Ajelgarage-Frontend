import { useState } from 'react';
import { Car, Wrench, Settings, Zap, Search, Filter, X, Play, ChevronLeft, ChevronRight ,Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Banner from '../components/Banner';
import premiumBrakeSystem from "../Assists/Gallery/premiumBrakeSystem.jpg"
import luxuryVehicleService from "../Assists/Gallery/luxuryVehicleService.jpg"
import computerDiagnostics from "../Assists/Gallery/computerDiagnostics.jpg"
import transmissionService from "../Assists/Gallery/transmissionService.jpg"
import electricalSystem from "../Assists/Gallery/electricalSystem.avif"
import oilChangeService from "../Assists/Gallery/oilChangeService.avif"
import performanceTuning from "../Assists/Gallery/performanceTuning.avif"
import acSystemService from "../Assists/Gallery/acSystemService.webp"
import engineOverhaulService from "../Assists/Gallery/engineOverhaulService.webp"
import { useNavigate } from 'react-router-dom';



const Gallery = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: t('allServices'), icon: Car, count: 28 },
    { id: 'engine', name: t('engineRepair'), icon: Settings, count: 8 },
    { id: 'brakes', name: t('brakeService'), icon: Zap, count: 6 },
    { id: 'maintenance', name: t('maintenance'), icon: Wrench, count: 7 },
    { id: 'diagnostics', name: t('diagnostics'), icon: Settings, count: 4 },
    { id: 'custom', name: t('customWork'), icon: Car, count: 3 }
  ];

  const galleryItems = [
    {
      id: 1,
      title: t('engineOverhaulService'),
      category: 'engine',
      image: engineOverhaulService,
      description: t('completeEngineRebuild'),
      tags: [t('engine'), t('performance'), t('repair')]
    },
    {
      id: 2,
      title: t('premiumBrakeSystem'),
      category: 'brakes',
      image: premiumBrakeSystem,
      description: t('highPerformanceBrake'),
      tags: [t('brakes'), t('safety'), t('performance')]
    },
    {
      id: 3,
      title: t('oilChangeService'),
      category: 'maintenance',
      image: oilChangeService,
      description: t('fullSyntheticOil'),
      tags: [t('maintenance'), t('oil'), t('service')]
    },
    {
      id: 4,
      title: t('computerDiagnostics'),
      category: 'diagnostics',
      image: computerDiagnostics,
      description: t('advancedComputerAnalysis'),
      tags: [t('diagnostics'), t('technology'), t('repair')]
    },
    {
      id: 5,
      title: t('luxuryVehicleService'),
      category: 'custom',
      image: luxuryVehicleService,
      description: t('specializedLuxuryCare'),
      tags: [t('luxury'), t('custom'), t('premium')]
    },
    {
      id: 6,
      title: t('transmissionService'),
      category: 'maintenance',
      image: transmissionService,
      description: t('transmissionMaintenance'),
      tags: [t('transmission'), t('maintenance'), t('service')]
    },
    {
      id: 7,
      title: t('electricalSystem'),
      category: 'diagnostics',
      image: electricalSystem,
      description: t('electricalSystemRepair'),
      tags: [t('electrical'), t('diagnostics'), t('repair')]
    },
    {
      id: 8,
      title: t('performanceTuning'),
      category: 'custom',
      image: performanceTuning,
      description: t('performanceOptimization'),
      tags: [t('performance'), t('custom'), t('tuning')]
    },
    {
      id: 9,
      title: t('acSystemService'),
      category: 'maintenance',
      image: acSystemService,
      description: t('acSystemMaintenance'),
      tags: [t('AC'), t('maintenance'), t('comfort')]
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openModal = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <Banner 
        title={t('ourServiceGallery')}
        subtitle={t('exploreOurPremiumServices')}
        iconOne={Car}
        iconTwo={Settings}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 h-5 w-5" />
              <input
                type="text"
                placeholder={t('searchServices')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-amber-900/20 border-2 border-amber-500/30 rounded-xl text-amber-100 placeholder-amber-200/50 backdrop-blur-xl focus:border-amber-400/50 focus:outline-none transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Results Count */}
            <div className="text-amber-200/80 font-semibold">
              {t('showingResults', { count: filteredItems.length, total: galleryItems.length })}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 backdrop-blur-xl transition-all duration-300 group ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 border-amber-400 text-white shadow-lg shadow-amber-500/30'
                      : 'bg-amber-900/20 border-amber-500/30 text-amber-200 hover:bg-amber-900/30 hover:border-amber-400/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-semibold">{category.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    isActive ? 'bg-white/20' : 'bg-amber-500/20'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group backdrop-blur-xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-500/30 rounded-2xl overflow-hidden hover:border-amber-400/50 transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => openModal(item)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-500/90 text-white text-sm font-semibold rounded-full backdrop-blur-xl">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-xl rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Monitor  className="h-8 w-8 text-white" fill="white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-100 mb-2 group-hover:text-amber-50 transition-colors">
                  {item.title}
                </h3>
                <p className="text-amber-200/80 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-md border border-amber-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="backdrop-blur-xl bg-amber-900/20 border-2 border-amber-500/30 rounded-2xl p-12 max-w-2xl mx-auto">
              <Search className="h-16 w-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-100 mb-2">{t('noServicesFound')}</h3>
              <p className="text-amber-200/80 mb-6">
                {t('noServicesDescription')}
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-semibold hover:scale-105 transition-all"
              >
                {t('resetFilters')}
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border-2 border-amber-500/30 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-amber-100 mb-4">
            {t('readyToService')}
          </h2>
          <p className="text-amber-200/80 text-lg mb-8 max-w-2xl mx-auto">
            {t('galleryDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-lg hover:scale-105 transition-all" onClick={()=>navigate("/contact")}>
              {t('scheduleService')}
            </button>
            <button className="px-8 py-4 bg-amber-900/20 border-2 border-amber-500/30 rounded-xl font-bold text-lg text-amber-100 hover:bg-amber-900/30 hover:border-amber-400/50 transition-all" onClick={()=>navigate("/service")}>
              {t('viewAllServices')}
            </button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 z-10 bg-amber-500 hover:bg-amber-600 rounded-full p-2 transition-all hover:scale-110"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-amber-500/80 hover:bg-amber-600 rounded-full p-3 transition-all hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-amber-500/80 hover:bg-amber-600 rounded-full p-3 transition-all hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Modal Content */}
            <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-500/30 rounded-2xl overflow-hidden backdrop-blur-xl">
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-amber-200/90">{selectedImage.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedImage.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-amber-500/20 text-amber-300 text-sm rounded-full border border-amber-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-semibold hover:scale-105 transition-all">
                  {t('bookThisService')}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;