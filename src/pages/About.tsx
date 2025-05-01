
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { initScrollAnimations } from '../utils/animations';

const About: React.FC = () => {
  // Initialize scroll animations
  useEffect(() => {
    const scrollObserver = initScrollAnimations();
    return () => {
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <header className="bg-travel-navy text-white pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-3xl">
            Learn more about our passion for travel and our commitment to creating unforgettable experiences.
          </p>
        </div>
      </header>
      
      {/* About Section */}
      <section className="page-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  At JR Travels, we believe that travel is not just about reaching a destination — it's about the journey, 
                  the experiences, and the stories you create along the way. Founded with a passion for exploration, 
                  our mission is to connect travelers with the world's most breathtaking places, immersive cultures, 
                  and unforgettable adventures.
                </p>
                <p>
                  With a dedicated team of travel experts and local guides, we curate personalized travel packages 
                  that cater to every kind of explorer — from thrill-seekers to relaxation lovers. Whether you're 
                  dreaming of a tropical escape, a cultural deep dive, or an off-the-beaten-path expedition, 
                  we're here to make it seamless, safe, and spectacular.
                </p>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-xl shadow-xl animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop" 
                alt="Travel Adventure" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="page-section bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">Why Travel With Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl shadow-sm p-6 flex flex-col items-center text-center animate-on-scroll">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">✈️ Handpicked Destinations & Experiences</h3>
              <p className="text-muted-foreground">
                Every destination and experience in our packages has been carefully selected and vetted by our travel experts to ensure quality and authenticity.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-6 flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">🕒 24/7 Support Before and During Your Trip</h3>
              <p className="text-muted-foreground">
                Our dedicated support team is available around the clock to assist with any questions or concerns before and throughout your journey.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-6 flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">📦 Customizable Packages to Fit Every Budget</h3>
              <p className="text-muted-foreground">
                We offer flexible packages that can be tailored to match your preferences and budget, ensuring you get the perfect travel experience.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-6 flex flex-col items-center text-center animate-on-scroll">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">💬 Transparent Pricing, No Hidden Costs</h3>
              <p className="text-muted-foreground">
                We believe in complete transparency, so you'll always know exactly what you're paying for with no surprise fees or hidden charges.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-6 flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">🌐 Sustainable & Responsible Travel Options</h3>
              <p className="text-muted-foreground">
                We're committed to sustainable tourism practices that respect local communities, preserve cultures, and protect the environment.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-6 flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">👍 Satisfaction Guaranteed</h3>
              <p className="text-muted-foreground">
                We stand by the quality of our services and are dedicated to ensuring your complete satisfaction with every aspect of your travel experience.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <p className="text-xl mb-6">
              Join thousands of happy travelers who've trusted us to turn their dream vacations into lifelong memories.
            </p>
            <p className="text-2xl font-semibold">
              Your journey begins here. Let's make it unforgettable.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
