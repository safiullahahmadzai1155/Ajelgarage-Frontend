import { useState, useEffect } from 'react';
import { Wrench, Car, Crown, Sparkles } from 'lucide-react';

const Banner = ({ title, subtitle, iconOne = Wrench, iconTwo = Car }) => {
  const IconOne = iconOne;
  const IconTwo = iconTwo;
  
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        color: Math.random() > 0.5 ? '#ff7b00' : '#ff9500'
      }));
    };
    setStars(generateStars());
  }, []);
  
  return (
    <>
      <style>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(40px);
            opacity: 0;
          }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes float-sparkle {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-10px) scale(1.1); opacity: 0.8; }
        }
        @keyframes premium-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 123, 0, 0.3), 0 0 40px rgba(255, 149, 0, 0.2); 
          }
          50% { 
            box-shadow: 0 0 30px rgba(255, 123, 0, 0.5), 0 0 60px rgba(255, 149, 0, 0.3); 
          }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #ff6b00 0%, #ff8c00 25%, #ffaa00 50%, #ff8c00 75%, #ff6b00 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>

      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-orange-900/30 border-b-4 border-orange-500 h-64 md:h-80">
        {/* Animated stars background */}
        <div className="absolute inset-0 opacity-40">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.color,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
                boxShadow: `0 0 ${star.size * 3}px ${star.color}`
              }}
            />
          ))}
        </div>

        {/* Shooting stars */}
        <div className="absolute inset-0 opacity-60">
          <div 
            className="absolute w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"
            style={{
              top: '20%',
              left: '-20%',
              animation: 'shootingStar 4s linear infinite',
              animationDelay: '0s',
              boxShadow: '0 0 15px #ff7b00'
            }}
          />
          <div 
            className="absolute w-20 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent rounded-full"
            style={{
              top: '60%',
              left: '-20%',
              animation: 'shootingStar 5s linear infinite',
              animationDelay: '2s',
              boxShadow: '0 0 12px #ff9500'
            }}
          />
          <div 
            className="absolute w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"
            style={{
              top: '40%',
              left: '-20%',
              animation: 'shootingStar 6s linear infinite',
              animationDelay: '4s',
              boxShadow: '0 0 10px #ff8c00'
            }}
          />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, #ff7b00 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
          }} />
        </div>

        {/* Glowing orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Rotating decorative circles */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-orange-500/10 rounded-full" style={{ animation: 'rotate-slow 20s linear infinite' }}></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 border border-amber-500/10 rounded-full" style={{ animation: 'rotate-slow 25s linear infinite reverse' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-orange-500/20 to-amber-500/15 backdrop-blur-xl border-2 border-orange-500/40 rounded-full px-4 py-2 group hover:border-orange-400/60 transition-all duration-500" style={{ animation: 'premium-glow 3s ease-in-out infinite' }}>
              <Crown className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-orange-200 font-bold tracking-widest text-xs uppercase">
                Elite Automotive Partner
              </span>
              <Sparkles className="w-3 h-3 text-orange-300 animate-pulse" />
            </div>

            {/* Icons with premium styling */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="group">
                <div className="relative">
                  <div 
                    className="absolute inset-0 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"
                    style={{ backgroundColor: '#ff7b00', opacity: 0.4 }}
                  />
                  <div className="relative backdrop-blur-xl bg-black/80 border-2 border-orange-500/50 p-4 rounded-xl hover:bg-black/90 transition-all duration-300 group-hover:border-orange-400/70 hover:scale-110 hover:rotate-6 shadow-2xl" style={{ animation: 'premium-glow 3s ease-in-out infinite' }}>
                    <IconOne className="h-7 w-7 md:h-8 md:w-8 text-orange-300 transition-transform duration-300 group-hover:text-orange-200 drop-shadow-[0_0_10px_rgba(255,123,0,0.5)]" />
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                </div>
              </div>

              {/* Enhanced connecting line */}
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse shadow-lg shadow-orange-400/60" />
                <div className="h-1.5 w-20 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 rounded-full shadow-lg shadow-orange-400/40" style={{ animation: 'shimmer 2s ease-in-out infinite' }} />
                <div className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse shadow-lg shadow-orange-400/60" style={{ animationDelay: '0.5s' }} />
              </div>

              <div className="group">
                <div className="relative">
                  <div 
                    className="absolute inset-0 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"
                    style={{ backgroundColor: '#ff9500', opacity: 0.4 }}
                  />
                  <div className="relative backdrop-blur-xl bg-black/80 border-2 border-orange-500/50 p-4 rounded-xl hover:bg-black/90 transition-all duration-300 group-hover:border-orange-400/70 hover:scale-110 hover:-rotate-6 shadow-2xl" style={{ animation: 'premium-glow 3s ease-in-out infinite', animationDelay: '1s' }}>
                    <IconTwo className="h-7 w-7 md:h-8 md:w-8 text-orange-300 transition-transform duration-300 group-hover:text-orange-200 drop-shadow-[0_0_10px_rgba(255,149,0,0.5)]" />
                  </div>
                  <Sparkles className="absolute -top-1 -left-1 w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Title with enhanced shimmer effect */}
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 shimmer-text drop-shadow-2xl px-4 relative" 
              style={{ 
                textShadow: '0 0 50px rgba(255, 107, 0, 0.6), 0 0 30px rgba(255, 140, 0, 0.4), 0 0 15px rgba(255, 170, 0, 0.3)',
                lineHeight: "1.2"
              }}
            >
              {title || "Welcome to Ajal Garage"}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full shadow-lg shadow-orange-400/50" />
            </h1>

            {/* Enhanced sparkles */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="text-orange-400/40 text-4xl absolute -left-16 -top-8" style={{ animation: 'float-sparkle 4s ease-in-out infinite', filter: 'drop-shadow(0 0 8px rgba(255,123,0,0.6))' }}>✨</div>
              <div className="text-amber-300/40 text-3xl absolute -right-16 -top-8" style={{ animation: 'float-sparkle 4s ease-in-out infinite', animationDelay: '1s', filter: 'drop-shadow(0 0 6px rgba(255,140,0,0.6))' }}>⭐</div>
              <div className="text-orange-500/35 text-3xl absolute -left-20 top-12" style={{ animation: 'float-sparkle 4s ease-in-out infinite', animationDelay: '2s', filter: 'drop-shadow(0 0 6px rgba(255,107,0,0.5))' }}>💫</div>
              <div className="text-amber-400/35 text-2xl absolute -right-20 top-10" style={{ animation: 'float-sparkle 4s ease-in-out infinite', animationDelay: '3s', filter: 'drop-shadow(0 0 5px rgba(255,170,0,0.5))' }}>⚡</div>
            </div>

            {/* Premium subtitle with enhanced glass effect */}
            <div className="max-w-3xl mx-auto mb-6">
              <div className="backdrop-blur-2xl bg-black/70 border-2 border-orange-500/30 rounded-2xl p-5 shadow-2xl shadow-orange-600/30 hover:border-orange-400/50 transition-all duration-500 group">
                <p className="text-sm md:text-base lg:text-lg text-orange-100/95 leading-relaxed font-medium" style={{lineHeight:"1.6"}}>
                  {subtitle || "🚗 Premium automotive care and excellence. Where precision meets passion! ✨"}
                </p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>

            {/* Enhanced decorative line */}
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse shadow-lg shadow-orange-400/50" />
              <div 
                className="h-1.5 w-32 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full shadow-xl shadow-orange-400/30"
                style={{
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              />
              <div className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse shadow-lg shadow-orange-400/50" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Premium decorative elements */}
            <div className="mt-5 flex justify-center gap-4">
              {[
                { emoji: '🔧', delay: 0 },
                { emoji: '⚙️', delay: 0.5 },
                { emoji: '🛠️', delay: 1 },
                { emoji: '🏆', delay: 1.5 }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-2xl opacity-40 hover:opacity-80 hover:scale-125 transition-all duration-300 cursor-pointer"
                  style={{ 
                    animation: 'float-sparkle 5s ease-in-out infinite',
                    animationDelay: `${item.delay}s`,
                    filter: 'drop-shadow(0 0 8px rgba(255, 140, 0, 0.5))'
                  }}
                >
                  {item.emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-gray-900/70 to-transparent pointer-events-none" />
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-orange-500/20 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-orange-500/20 rounded-br-3xl" />
      </div>
    </>
  );
};

export default Banner;