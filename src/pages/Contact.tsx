
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { initScrollAnimations } from '../utils/animations';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize scroll animations
  useEffect(() => {
    const scrollObserver = initScrollAnimations();
    return () => {
      scrollObserver.disconnect();
    };
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We will contact you shortly.');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <header className="bg-travel-navy text-white pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-3xl">
            Have questions about our travel packages or need assistance planning your perfect trip? Get in touch with our team of travel experts.
          </p>
        </div>
      </header>
      
      {/* Contact Information */}
      <section className="page-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="card-travel p-6 flex flex-col items-center text-center animate-on-scroll">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4">Our travel experts are available to help you</p>
              <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
              <p className="text-sm text-muted-foreground mt-2">Monday - Friday: 9am - 8pm EST</p>
            </div>
            
            <div className="card-travel p-6 flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">For inquiries and booking assistance</p>
              <a href="mailto:info@globetrotter.com" className="text-primary hover:underline">info@globetrotter.com</a>
              <p className="text-sm text-muted-foreground mt-2">We typically respond within 24 hours</p>
            </div>
            
            <div className="card-travel p-6 flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground mb-4">Visit our headquarters</p>
              <p className="text-foreground">1234 Travel Avenue, Suite 567</p>
              <p className="text-foreground">New York, NY 10001, USA</p>
              <p className="text-sm text-muted-foreground mt-2">By appointment only</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="page-section bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below, and one of our travel experts will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`btn-primary px-8 py-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
            
            <div className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Location</h2>
              <p className="text-muted-foreground mb-8">
                Visit our office or arrange a meeting with one of our travel consultants.
              </p>
              
              <div className="h-[400px] rounded-xl overflow-hidden border border-border shadow-sm">
                {/* Replace with actual Google Maps iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373064797!2d-73.98897402346278!3d40.75883377138239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1714607572936!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GlobeTrotter Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="page-section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card rounded-xl shadow-sm p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-2">How far in advance should I book my trip?</h3>
              <p className="text-muted-foreground">
                We recommend booking at least 3-6 months in advance for popular destinations, especially if traveling during peak season. For special events or holidays, consider booking even earlier.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-2">Are your travel packages customizable?</h3>
              <p className="text-muted-foreground">
                Yes, most of our packages can be customized to suit your preferences. Contact our travel consultants to discuss your specific requirements and we'll create a tailored itinerary for you.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-2">Do I need travel insurance?</h3>
              <p className="text-muted-foreground">
                While not mandatory, we strongly recommend purchasing comprehensive travel insurance to protect your investment and ensure peace of mind during your journey.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, bank transfers, and PayPal. For some destinations, we also offer payment plans with a deposit required at the time of booking.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-2">What is your cancellation policy?</h3>
              <p className="text-muted-foreground">
                Cancellation policies vary depending on the package and destination. Generally, cancellations made 60 days or more before departure receive a full refund minus a processing fee. Please refer to the specific terms of your booking for details.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
