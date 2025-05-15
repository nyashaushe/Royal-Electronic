
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-royal-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Royal Electronics</h3>
            <p className="text-gray-300 mb-4">
              Expert device repair services for iPhones, Samsung phones, PCs, and Macs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-royal-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-royal-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-royal-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-royal-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-royal-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-royal-blue transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-royal-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-royal-blue transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-royal-blue transition-colors">Book a Repair</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">iPhone Repair</li>
              <li className="text-gray-300">Samsung Repair</li>
              <li className="text-gray-300">PC & Mac Repair</li>
              <li className="text-gray-300">Screen Replacement</li>
              <li className="text-gray-300">Battery Replacement</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-royal-blue" />
                <span className="text-gray-300">+263773897641</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-royal-blue" />
                <span className="text-gray-300">gwembedaniel@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-royal-blue" />
                <span className="text-gray-300">Harare CBD</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">© {currentYear} Royal Electronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
