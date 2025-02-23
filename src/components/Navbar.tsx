
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-royal-blue">Royal Electronics</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover-effect text-royal-charcoal hover:text-royal-blue">Home</a>
            <a href="#products" className="hover-effect text-royal-charcoal hover:text-royal-blue">Products</a>
            <a href="#about" className="hover-effect text-royal-charcoal hover:text-royal-blue">About</a>
            <a href="#contact" className="hover-effect text-royal-charcoal hover:text-royal-blue">Contact</a>
            <button className="hover-effect p-2 rounded-full hover:bg-royal-blue hover:text-white">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover-effect p-2 rounded-md text-royal-charcoal hover:text-royal-blue"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="hover-effect block px-3 py-2 rounded-md text-base font-medium text-royal-charcoal hover:text-royal-blue hover:bg-royal-gray">Home</a>
              <a href="#products" className="hover-effect block px-3 py-2 rounded-md text-base font-medium text-royal-charcoal hover:text-royal-blue hover:bg-royal-gray">Products</a>
              <a href="#about" className="hover-effect block px-3 py-2 rounded-md text-base font-medium text-royal-charcoal hover:text-royal-blue hover:bg-royal-gray">About</a>
              <a href="#contact" className="hover-effect block px-3 py-2 rounded-md text-base font-medium text-royal-charcoal hover:text-royal-blue hover:bg-royal-gray">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

