import { useState } from 'react';
import { Car, Wrench, Settings, Zap, Search, Filter, X, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Banner from '../components/Banner';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Services', icon: Car, count: 28 },
    { id: 'engine', name: 'Engine Repair', icon: Settings, count: 8 },
    { id: 'brakes', name: 'Brake Service', icon: Zap, count: 6 },
    { id: 'maintenance', name: 'Maintenance', icon: Wrench, count: 7 },
    { id: 'diagnostics', name: 'Diagnostics', icon: Settings, count: 4 },
    { id: 'custom', name: 'Custom Work', icon: Car, count: 3 }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Engine Overhaul Service',
      category: 'engine',
      image: 'https://images.unsplash.com/photo-1603712610494-49c64460ad6b?w=600&h=400&fit=crop',
      description: 'Complete engine rebuild and performance optimization',
      tags: ['Engine', 'Performance', 'Repair']
    },
    {
      id: 2,
      title: 'Premium Brake System',
      category: 'brakes',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&h=400&fit=crop',
      description: 'High-performance brake pad and rotor replacement',
      tags: ['Brakes', 'Safety', 'Performance']
    },
    {
      id: 3,
      title: 'Oil Change Service',
      category: 'maintenance',
      image: 'https://images.unsplash.com/photo-1603712610494-49c64460ad6b?w=600&h=400&fit=crop',
      description: 'Full synthetic oil change with filter replacement',
      tags: ['Maintenance', 'Oil', 'Service']
    },
    {
      id: 4,
      title: 'Computer Diagnostics',
      category: 'diagnostics',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
      description: 'Advanced computer system analysis and troubleshooting',
      tags: ['Diagnostics', 'Technology', 'Repair']
    },
    {
      id: 5,
      title: 'Luxury Vehicle Service',
      category: 'custom',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop',
      description: 'Specialized care for premium and luxury vehicles',
      tags: ['Luxury', 'Custom', 'Premium']
    },
    {
      id: 6,
      title: 'Transmission Service',
      category: 'maintenance',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop',
      description: 'Automatic and manual transmission maintenance',
      tags: ['Transmission', 'Maintenance', 'Service']
    },
    {
      id: 7,
      title: 'Electrical System Repair',
      category: 'diagnostics',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&h=400&fit=crop',
      description: 'Complete electrical system diagnostics and repair',
      tags: ['Electrical', 'Diagnostics', 'Repair']
    },
    {
      id: 8,
      title: 'Performance Tuning',
      category: 'custom',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
      description: 'Engine performance optimization and tuning',
      tags: ['Performance', 'Custom', 'Tuning']
    },
    {
      id: 9,
      title: 'AC System Service',
      category: 'maintenance',
      image: 'https://images.unsplash.com/photo-1603712610494-49c64460ad6b?w=600&h=400&fit=crop',
      description: 'Air conditioning system maintenance and repair',
      tags: ['AC', 'Maintenance', 'Comfort']
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
        title="Our Service Gallery"
        subtitle="Explore our premium automotive services through detailed photos of our work and facilities"
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
                placeholder="Search services..."
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
              Showing {filteredItems.length} of {galleryItems.length} services
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
                    <Play className="h-8 w-8 text-white" fill="white" />
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
              <h3 className="text-2xl font-bold text-amber-100 mb-2">No Services Found</h3>
              <p className="text-amber-200/80 mb-6">
                We couldn't find any services matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-semibold hover:scale-105 transition-all"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border-2 border-amber-500/30 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-amber-100 mb-4">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-amber-200/80 text-lg mb-8 max-w-2xl mx-auto">
            See something you like? Schedule your service appointment today and experience the Ajal Garage difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-lg hover:scale-105 transition-all">
              Schedule Service
            </button>
            <button className="px-8 py-4 bg-amber-900/20 border-2 border-amber-500/30 rounded-xl font-bold text-lg text-amber-100 hover:bg-amber-900/30 hover:border-amber-400/50 transition-all">
              View All Services
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
                <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-semibold hover:scale-105 transition-all">
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;