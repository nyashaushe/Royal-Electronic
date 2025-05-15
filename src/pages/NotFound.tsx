
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-royal-white">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-royal-blue mb-4">404</h1>
          <p className="text-xl text-royal-charcoal mb-8">Oops! Page not found</p>
          <Link 
            to="/" 
            className="bg-royal-blue text-white py-2 px-6 rounded-md hover:bg-royal-blue-dark transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
