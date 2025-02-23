
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-royal-gray overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-royal-white/90 to-royal-white/50"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-royal-black mb-6 animate-fadeIn">
            Welcome to Royal Electronics
          </h1>
          <p className="text-xl md:text-2xl text-royal-charcoal mb-8 max-w-2xl mx-auto animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Discover premium electronics for your modern lifestyle
          </p>
          <button className="hover-effect inline-flex items-center px-8 py-3 rounded-full bg-royal-black text-white hover:bg-royal-charcoal animate-fadeIn" style={{animationDelay: '0.4s'}}>
            Explore Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
