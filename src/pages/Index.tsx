
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
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

const Index = () => {
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
              <Smartphone className="mx-auto h-8 w-8 text-royal-black mb-3" />
              <p className="text-sm font-medium">Screen Repair</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Shield className="mx-auto h-8 w-8 text-royal-black mb-3" />
              <p className="text-sm font-medium">Data Recovery</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Wrench className="mx-auto h-8 w-8 text-royal-black mb-3" />
              <p className="text-sm font-medium">Battery Replacement</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Computer className="mx-auto h-8 w-8 text-royal-black mb-3" />
              <p className="text-sm font-medium">Virus Removal</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-royal-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-black mb-6">Professional Electronics Repair</h2>
            <p className="text-royal-charcoal text-lg leading-relaxed">
              Royal Electronics is your trusted partner for professional device repair services. 
              Our expert technicians specialize in iPhone, Samsung, PC, and Mac repairs. 
              We pride ourselves on fast, reliable service and quality workmanship.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-black mb-6">Contact Us</h2>
            <p className="text-royal-charcoal text-lg mb-8">
              Let us fix it fast! Get in touch with our expert technicians.
            </p>
            <div className="space-y-4">
              <p className="text-royal-charcoal">
                Email: gwembedaniel@gmail.com
              </p>
              <p className="text-royal-charcoal">
                Phone: +263773897641
              </p>
              <p className="text-royal-charcoal">
                Location: Harare CBD
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
