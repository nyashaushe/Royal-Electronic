
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';

const FEATURED_PRODUCTS = [
  {
    name: "Smart TV 4K",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Ultra HD Smart TV with HDR"
  },
  {
    name: "Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium noise-canceling headphones"
  },
  {
    name: "Smartphone Pro",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Latest flagship smartphone"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-royal-white">
      <Navbar />
      <Hero />
      
      <section id="products" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-black mb-4">Featured Products</h2>
            <p className="text-royal-charcoal">Discover our premium selection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((product, index) => (
              <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-royal-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-black mb-6">About Royal Electronics</h2>
            <p className="text-royal-charcoal text-lg leading-relaxed">
              Royal Electronics has been providing premium electronic products since 2010. 
              We pride ourselves on offering cutting-edge technology, exceptional customer service, 
              and competitive prices to our valued customers.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-black mb-6">Contact Us</h2>
            <p className="text-royal-charcoal text-lg mb-8">
              Have questions? Our team is here to help.
            </p>
            <div className="space-y-4">
              <p className="text-royal-charcoal">
                Email: contact@royalelectronics.com
              </p>
              <p className="text-royal-charcoal">
                Phone: (555) 123-4567
              </p>
              <p className="text-royal-charcoal">
                Address: 123 Tech Street, Digital City, DC 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
