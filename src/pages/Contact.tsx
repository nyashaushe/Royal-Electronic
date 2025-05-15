
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="min-h-screen bg-royal-white">
      <Navbar />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-royal-black mb-6">Contact Us</h1>
              <p className="text-royal-charcoal text-lg">
                Get in touch with our expert technicians for all your device repair needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-royal-black mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-royal-blue" />
                    <div>
                      <p className="font-medium text-royal-black">Phone</p>
                      <p className="text-royal-charcoal">+263773897641</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-royal-blue" />
                    <div>
                      <p className="font-medium text-royal-black">Email</p>
                      <p className="text-royal-charcoal">gwembedaniel@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-royal-blue" />
                    <div>
                      <p className="font-medium text-royal-black">Location</p>
                      <p className="text-royal-charcoal">Harare CBD</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-royal-blue" />
                    <div>
                      <p className="font-medium text-royal-black">Business Hours</p>
                      <p className="text-royal-charcoal">Monday - Friday: 8am - 6pm</p>
                      <p className="text-royal-charcoal">Saturday: 9am - 4pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-royal-black mb-6">Send us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-royal-black mb-2" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-royal-black mb-2" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-royal-black mb-2" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-royal-blue text-white py-3 px-6 rounded-md hover:bg-royal-blue-dark transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
