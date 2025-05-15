
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { toast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Clock } from 'lucide-react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [deviceType, setDeviceType] = useState('iPhone');
  const [issue, setIssue] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState('');

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !email || !phone || !deviceType || !issue || !date || !timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }

    // Success notification
    toast({
      title: "Booking Successful",
      description: `Your repair appointment is scheduled for ${date?.toDateString()} at ${timeSlot}`,
    });

    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setDeviceType('iPhone');
    setIssue('');
    setDate(undefined);
    setTimeSlot('');
  };

  return (
    <div className="min-h-screen bg-royal-white">
      <Navbar />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-royal-black mb-6">Book a Repair</h1>
              <p className="text-royal-charcoal text-lg">
                Schedule your device repair appointment with our expert technicians
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-royal-black mb-2" htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-royal-black mb-2" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-royal-black mb-2" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue"
                      placeholder="Your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-royal-black mb-2" htmlFor="deviceType">Device Type</label>
                    <select
                      id="deviceType"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue"
                      value={deviceType}
                      onChange={(e) => setDeviceType(e.target.value)}
                    >
                      <option value="iPhone">iPhone</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Desktop">Desktop</option>
                      <option value="Tablet">Tablet</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-royal-black mb-2" htmlFor="issue">Describe the Issue</label>
                  <textarea
                    id="issue"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue"
                    placeholder="Please describe the problem with your device"
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-royal-black mb-2">Preferred Date</label>
                    <div className="border rounded-md p-2">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          // Disable weekends and dates in the past
                          return (
                            date < today ||
                            date.getDay() === 0 || // Sunday
                            date.getDay() === 6    // Saturday
                          );
                        }}
                        className="rounded-md border"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-royal-black mb-2">Preferred Time</label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <div key={slot} className="flex items-center">
                          <input
                            type="radio"
                            id={`time-${slot}`}
                            name="timeSlot"
                            value={slot}
                            checked={timeSlot === slot}
                            onChange={() => setTimeSlot(slot)}
                            className="mr-2"
                          />
                          <label htmlFor={`time-${slot}`} className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-royal-blue" />
                            {slot}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-royal-blue text-white py-3 px-6 rounded-md hover:bg-royal-blue-dark transition-colors"
                >
                  Schedule Repair
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookingForm;
