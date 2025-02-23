
import Navbar from '@/components/Navbar';

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

const About = () => {
  return (
    <div className="min-h-screen bg-royal-white">
      <Navbar />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-royal-black mb-6">About Royal Electronics</h1>
              <p className="text-royal-charcoal text-lg leading-relaxed">
                Royal Electronics is your trusted partner for professional device repair services. 
                Our expert technicians specialize in iPhone, Samsung, PC, and Mac repairs. 
                We pride ourselves on fast, reliable service and quality workmanship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                  alt="Our Work"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-royal-black mb-4">Our Mission</h2>
                <p className="text-royal-charcoal mb-6">
                  We are committed to providing top-quality repair services for all your electronic devices. 
                  Our team of certified technicians has years of experience in handling various device repairs, 
                  ensuring that your valuable electronics are in safe hands.
                </p>
                <ul className="space-y-4 text-royal-charcoal">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Expert Technicians
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Quality Parts
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Quick Turnaround
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Warranty Guaranteed
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-royal-black mb-4">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {TESTIMONIALS.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-1 mb-4 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-royal-charcoal mb-4">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold text-royal-black">{testimonial.name}</p>
                      <p className="text-sm text-royal-charcoal">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
