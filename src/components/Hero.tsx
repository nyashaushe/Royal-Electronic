
import { Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-royal-gray overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/45d313e6-9523-4d57-9eee-a65d7dc91c84.png"
          alt="Electronics repair"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-black/80 to-royal-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeIn">
            Let Us Fix It Fast
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Expert repair services for iPhone, Samsung, PC & Mac
          </p>
          <button className="hover-effect inline-flex items-center px-8 py-3 rounded-full bg-white text-royal-black hover:bg-royal-gray animate-fadeIn" style={{animationDelay: '0.4s'}}>
            Book a Repair
            <Wrench className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
