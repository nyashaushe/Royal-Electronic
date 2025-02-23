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

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Business Owner",
    content: "Royal Electronics fixed my MacBook Pro in just 24 hours. Outstanding service!",
    rating: 5
  },
  {
    name: "John D.",
    role: "Student",
    content: "Quick and reliable iPhone screen repair. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael R.",
    role: "Professional",
    content: "Great experience with their Samsung repair service. Very knowledgeable team.",
    rating: 5
  }
];

const FAQS = [
  {
    question: "How long do repairs typically take?",
    answer: "Most repairs are completed within 24-48 hours. Complex repairs may take longer, but we'll keep you updated throughout the process."
  },
  {
    question: "Do you offer warranty on repairs?",
    answer: "Yes, all our repairs come with a 90-day warranty covering both parts and labor."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit cards, mobile money, and bank transfers."
  },
  {
    question: "Do I need to make an appointment?",
    answer: "While walk-ins are welcome, we recommend booking an appointment to ensure immediate service."
  }
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

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-black mb-4">What Our Clients Say</h2>
            <p className="text-royal-charcoal">Trusted by customers across Harare</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-royal-charcoal mb-4">{testimonial.content}</p>
                <div className="mt-4">
                  <p className="font-semibold text-royal-black">{testimonial.name}</p>
                  <p className="text-sm text-royal-charcoal">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-royal-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-black mb-4">Frequently Asked Questions</h2>
            <p className="text-royal-charcoal">Everything you need to know about our repair services</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {FAQS.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-royal-black mb-2">{faq.question}</h3>
                  <p className="text-royal-charcoal">{faq.answer}</p>
                </div>
              ))}
            </div>
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
