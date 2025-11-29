import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Vedio from "../Assists/SliderVedio/1.mp4"
import Vedio1 from "../Assists/SliderVedio/2.mp4"
import Vedio2 from "../Assists/SliderVedio/3.mp4"
import Vedio3 from "../Assists/SliderVedio/4.mp4"


const HeaderSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            title: 'Ajel Garage',
            subtitle: 'EXPERT REPAIR',
            description: 'Professional car repair and maintenance services with cutting-edge diagnostic technology',
            color: '#cd7110',
            accentColor: '#ff8c00',
            url: Vedio,
        },
        {
            title: 'Ajel Garage',
            subtitle: 'QUALITY SERVICE',
            description: 'Comprehensive automotive solutions from engine repair to electrical systems maintenance',
            color: '#cd7110',
            accentColor: '#ff8c00',
            url: Vedio1,
        },
        {
            title: 'Ajel Garage',
            subtitle: 'TRUSTED CARE',
            description: 'Your reliable partner for all vehicle servicing needs with certified technicians',
            color: '#cd7110',
            accentColor: '#ff8c00',
            url: Vedio2,
        },
        {
            title: 'Ajel Garage',
            subtitle: 'PREMIUM MAINTENANCE',
            description: 'Complete automotive care packages to keep your vehicle running smoothly and safely',
            color: '#cd7110',
            accentColor: '#ff8c00',
            url: Vedio3
        }
    ];

    const nextSlide = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            setIsAnimating(false);
        }, 500);
    };

    const prevSlide = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            setIsAnimating(false);
        }, 500);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Video with Enhanced Overlay */}
            <div className="absolute inset-0">
                <video
                    key={currentSlide}
                    src={slides[currentSlide].url}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isAnimating ? 'opacity-70 scale-110' : 'opacity-100 scale-100'}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_90%)]"></div>
            </div>

            {/* Enhanced Main Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className={`text-center max-w-6xl w-full transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>

                    {/* Elegant Subtitle */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-4">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#ff8c00]"></div>
                            <span className="text-[#ff8c00] text-xl font-light tracking-[0.3em] uppercase">
                                {slides[currentSlide].subtitle}
                            </span>
                            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#ff8c00]"></div>
                        </div>
                    </div>

                    {/* Premium Main Title */}
                    <h1
                        className="text-8xl md:text-9xl font-black text-white mb-12 leading-none tracking-tight"
                        style={{
                            color: '#ff8c00',
                            textShadow: '0 0 100px #cd7110, 0 0 150px #cd7110, 0 2px 4px rgba(0,0,0,0.8)',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}
                    >
                        {slides[currentSlide].title}
                    </h1>

                    {/* Sophisticated Description */}
                    <div className="relative mb-16">
                        <div className="absolute left-1/2 top-0 w-24 h-px bg-gradient-to-r from-transparent via-[#ff8c00] to-transparent transform -translate-x-1/2 -translate-y-4"></div>
                        <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                            {slides[currentSlide].description}
                        </p>
                        <div className="absolute left-1/2 bottom-0 w-24 h-px bg-gradient-to-r from-transparent via-[#ff8c00] to-transparent transform -translate-x-1/2 translate-y-4"></div>
                    </div>

                    {/* Luxury CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            className="group relative px-16 py-6 font-bold rounded-2xl text-lg transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #cd7110, #ff8c00, #cd7110)',
                                backgroundSize: '200% 100%',
                                boxShadow: '0 20px 60px rgba(205, 113, 16, 0.4)'
                            }}
                        >
                            <span className="relative z-10 text-white flex items-center gap-3">
                                Start Project
                                <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        </button>

                        <button
                            className="group px-16 py-6 bg-transparent border-2 border-[#ff8c00]/80 text-white font-bold rounded-2xl text-lg transition-all duration-500 hover:bg-[#ff8c00] hover:text-black hover:scale-105 active:scale-95 relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Our Services
                                <div className="w-2 h-2 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Luxury Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-20 group"
            >
                <div className="bg-black/40 backdrop-blur-xl border border-[#ff8c00]/30 rounded-2xl p-5 transition-all duration-500 group-hover:bg-[#ff8c00] group-hover:scale-110 group-hover:border-[#ff8c00] group-hover:shadow-2xl group-hover:shadow-[#ff8c00]/20">
                    <ChevronLeft className="w-7 h-7 text-white group-hover:text-black transition-colors duration-500" />
                </div>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-20 group"
            >
                <div className="bg-black/40 backdrop-blur-xl border border-[#ff8c00]/30 rounded-2xl p-5 transition-all duration-500 group-hover:bg-[#ff8c00] group-hover:scale-110 group-hover:border-[#ff8c00] group-hover:shadow-2xl group-hover:shadow-[#ff8c00]/20">
                    <ChevronRight className="w-7 h-7 text-white group-hover:text-black transition-colors duration-500" />
                </div>
            </button>

            {/* Premium Progress Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsAnimating(true);
                            setTimeout(() => {
                                setCurrentSlide(index);
                                setIsAnimating(false);
                            }, 500);
                        }}
                        className="group"
                    >
                        <div className="relative">
                            <div
                                className={`rounded-full transition-all duration-500 group-hover:scale-125 ${index === currentSlide
                                        ? 'w-10 bg-gradient-to-r from-[#cd7110] to-[#ff8c00]'
                                        : 'w-3 bg-white/30 group-hover:bg-white/60'
                                    } h-3`}
                                style={{
                                    boxShadow: index === currentSlide ? '0 0 30px rgba(255, 140, 0, 0.6)' : 'none'
                                }}
                            />
                            {index === currentSlide && (
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#cd7110] to-[#ff8c00] animate-ping opacity-30"></div>
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {/* Enhanced Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>

            {/* Top Gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent z-10"></div>
        </div>
    );
};

export default HeaderSlider;