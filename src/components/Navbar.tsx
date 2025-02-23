
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-royal-blue" : "text-royal-charcoal";
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-royal-blue">Royal Electronics</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover-effect hover:text-royal-blue ${isActive('/')}`}>Home</Link>
            <Link to="/products" className={`hover-effect hover:text-royal-blue ${isActive('/products')}`}>Products</Link>
            <Link to="/about" className={`hover-effect hover:text-royal-blue ${isActive('/about')}`}>About</Link>
            <Link to="/contact" className={`hover-effect hover:text-royal-blue ${isActive('/contact')}`}>Contact</Link>
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
              <Link to="/" className={`hover-effect block px-3 py-2 rounded-md text-base font-medium hover:text-royal-blue hover:bg-royal-gray ${isActive('/')}`}>Home</Link>
              <Link to="/products" className={`hover-effect block px-3 py-2 rounded-md text-base font-medium hover:text-royal-blue hover:bg-royal-gray ${isActive('/products')}`}>Products</Link>
              <Link to="/about" className={`hover-effect block px-3 py-2 rounded-md text-base font-medium hover:text-royal-blue hover:bg-royal-gray ${isActive('/about')}`}>About</Link>
              <Link to="/contact" className={`hover-effect block px-3 py-2 rounded-md text-base font-medium hover:text-royal-blue hover:bg-royal-gray ${isActive('/contact')}`}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
