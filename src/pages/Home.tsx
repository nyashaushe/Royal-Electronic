
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { Wrench, Smartphone, Computer, Shield } from 'lucide-react';

const SERVICES = [
  {
    name: "iPhone Repair",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Expert iPhone screen, battery & component repairs"
  },
  {
    name: "Samsung Repair",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Professional Samsung phone repair services"
  },
  {
    name: "PC & Mac Repair",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Complete computer repair & maintenance"
  },
];

// Adding featured reviews for the homepage
const FEATURED_REVIEWS = [
  {
    name: "Emma T.",
    role: "iPhone User",
    content: "Same-day screen repair saved me before an important presentation. Amazing service!",
    rating: 5
  },
  {
    name: "David L.",
    role: "Business Owner",
    content: "Royal Electronics recovered all my important data when my laptop crashed. Lifesavers!",
    rating: 5
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-royal-white">
      <Navbar />
      <Hero />
      
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-black mb-4">Our Services</h2>
            <p className="text-royal-charcoal">Professional repair services you can trust</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
                <ProductCard {...service} />
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Smartphone className="mx-auto h-8 w-8 text-royal-blue mb-3" />
              <p className="text-sm font-medium">Screen Repair</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Shield className="mx-auto h-8 w-8 text-royal-blue mb-3" />
              <p className="text-sm font-medium">Data Recovery</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Wrench className="mx-auto h-8 w-8 text-royal-blue mb-3" />
              <p className="text-sm font-medium">Battery Replacement</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Computer className="mx-auto h-8 w-8 text-royal-blue mb-3" />
              <p className="text-sm font-medium">Virus Removal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews Section */}
      <section className="py-20 bg-gradient-to-r from-royal-gray to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-black mb-4">What Our Clients Say</h2>
            <p className="text-royal-charcoal">Hear from our satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FEATURED_REVIEWS.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-royal-charcoal italic mb-6">"{review.content}"</p>
                <div>
                  <p className="font-semibold text-royal-black">{review.name}</p>
                  <p className="text-sm text-royal-charcoal">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/about" 
              className="hover-effect text-royal-blue hover:underline inline-flex items-center"
            >
              See more testimonials
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-royal-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Fix Your Device?</h2>
            <p className="text-xl mb-8">Schedule a repair with our expert technicians today.</p>
            <Link 
              to="/booking" 
              className="hover-effect inline-flex items-center px-8 py-3 rounded-full bg-white text-royal-blue hover:bg-royal-gray"
            >
              Book a Repair
              <Wrench className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
