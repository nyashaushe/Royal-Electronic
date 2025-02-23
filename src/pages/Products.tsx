
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

const PRODUCTS = [
  {
    name: "Screen Repair Kit",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "DIY iPhone screen repair kit with tools"
  },
  {
    name: "Laptop Battery Pack",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-capacity replacement laptop battery"
  },
  {
    name: "Phone Repair Tools",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Professional phone repair tool set"
  },
  {
    name: "Data Recovery Service",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Professional data recovery service"
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-royal-white">
      <Navbar />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-royal-black mb-4">Our Products</h1>
              <p className="text-royal-charcoal text-lg">Quality repair tools and services for your devices</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.map((product, index) => (
                <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
