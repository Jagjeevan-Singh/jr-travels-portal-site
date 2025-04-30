
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TravelCard from '../components/TravelCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { travelPackages, destinations } from '../utils/mockData';
import { initScrollAnimations, initParallax, initCounters } from '../utils/animations';

const Home: React.FC = () => {
  // Initialize animations when component mounts
  useEffect(() => {
    const scrollObserver = initScrollAnimations();
    const cleanupParallax = initParallax();
    const counterObserver = initCounters();

    return () => {
      scrollObserver.disconnect();
      cleanupParallax();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1920&auto=format&fit=crop"
          >
            <source src="https://player.vimeo.com/external/369156453.sd.mp4?s=3374ff246a9acae78a298b0e35782160f9066f97&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container-custom relative z-10 h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Explore the World <span className="text-primary">With Us</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover breathtaking destinations and unforgettable experiences tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/packages" className="btn-primary text-lg px-8 py-3">
              Start Your Journey
            </Link>
            <Link to="/about" className="btn-outline border-white text-white hover:bg-white/20 hover:text-white text-lg px-8 py-3">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="page-section bg-muted">
        <div className="container-custom">
          <h2 className="section-title text-center animate-on-scroll">Popular Destinations</h2>
          <p className="section-subtitle text-center mx-auto animate-on-scroll">
            Explore our most sought-after travel destinations around the globe
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {destinations
              .filter(dest => dest.featured)
              .map(destination => (
                <Link 
                  to={`/destinations/${destination.id}`} 
                  key={destination.id}
                  className="relative group overflow-hidden rounded-xl h-72 animate-on-scroll"
                >
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                    <p className="text-white/90">{destination.description}</p>
                  </div>
                </Link>
              ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/destinations" className="btn-primary">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Travel Packages */}
      <section className="page-section">
        <div className="container-custom">
          <h2 className="section-title text-center animate-on-scroll">Featured Travel Packages</h2>
          <p className="section-subtitle text-center mx-auto animate-on-scroll">
            Discover our handpicked selection of premium travel experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {travelPackages.slice(0, 6).map((pkg) => (
              <TravelCard key={pkg.id} package={pkg} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/packages" className="btn-primary">
              Explore All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Call to Action */}
      <section 
        className="parallax py-24 relative" 
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1920&auto=format&fit=crop)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}
        data-speed="0.3"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-on-scroll">
            Let us help you create memories that last a lifetime. From exotic destinations to unique experiences, we've got you covered.
          </p>
          <Link to="/contact" className="btn-accent text-lg px-8 py-3 animate-on-scroll">
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Statistics Counter Section */}
      <section className="page-section bg-travel-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-on-scroll">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <span className="counter" data-target="15000" data-duration="2000">0</span>+
              </div>
              <p className="text-lg">Happy Travelers</p>
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <span className="counter" data-target="120" data-duration="2000">0</span>+
              </div>
              <p className="text-lg">Destinations</p>
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <span className="counter" data-target="500" data-duration="2000">0</span>+
              </div>
              <p className="text-lg">Travel Packages</p>
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <span className="counter" data-target="10" data-duration="2000">0</span>
              </div>
              <p className="text-lg">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="page-section">
        <div className="container-custom">
          <h2 className="section-title text-center animate-on-scroll">What Our Travelers Say</h2>
          <p className="section-subtitle text-center mx-auto animate-on-scroll">
            Hear from adventurers who've experienced our journeys firsthand
          </p>

          <div className="mt-12 animate-on-scroll">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="page-section bg-travel-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-on-scroll">
            Subscribe to our newsletter for travel tips, exclusive offers, and inspiration for your next journey.
          </p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 animate-on-scroll">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-800"
              required
            />
            <button type="submit" className="bg-travel-navy hover:bg-travel-navy/90 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Back to Top Button */}
      <button 
        className="back-to-top fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all z-50"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <Footer />
    </div>
  );
};

export default Home;
