
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import TravelCard, { TravelPackage } from '../components/TravelCard';
import { travelPackages } from '../utils/mockData';
import { initScrollAnimations } from '../utils/animations';

const Search: React.FC = () => {
  const [filteredPackages, setFilteredPackages] = useState<TravelPackage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  // Initialize scroll animations
  useEffect(() => {
    const scrollObserver = initScrollAnimations();
    return () => {
      scrollObserver.disconnect();
    };
  }, []);

  const handleSearch = (query: string, filters: any) => {
    setIsLoading(true);
    setHasSearched(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let results = [...travelPackages];
      
      // Filter by search query
      if (query) {
        const lowercaseQuery = query.toLowerCase();
        results = results.filter(pkg => 
          pkg.title.toLowerCase().includes(lowercaseQuery) || 
          pkg.location.toLowerCase().includes(lowercaseQuery) ||
          pkg.description.toLowerCase().includes(lowercaseQuery)
        );
      }
      
      // Filter by price range
      results = results.filter(pkg => 
        pkg.price >= filters.priceRange[0] && pkg.price <= filters.priceRange[1]
      );
      
      // Filter by duration
      if (filters.duration !== 'any') {
        const [min, max] = filters.duration.split('-').map(Number);
        results = results.filter(pkg => {
          const days = parseInt(pkg.duration);
          if (filters.duration === '15+') {
            return days >= 15;
          }
          return days >= min && days <= max;
        });
      }
      
      // Filter by rating
      if (filters.rating > 0) {
        results = results.filter(pkg => pkg.rating >= filters.rating);
      }
      
      // Filter by type
      if (filters.type !== 'any') {
        results = results.filter(pkg => pkg.type.toLowerCase() === filters.type.toLowerCase());
      }
      
      setFilteredPackages(results);
      setIsLoading(false);
    }, 600);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <header className="bg-travel-navy text-white pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Search Travel Packages</h1>
          <p className="text-lg max-w-3xl">
            Find your perfect travel experience by searching our collection of handpicked destinations and adventures.
          </p>
        </div>
      </header>
      
      {/* Search Section */}
      <section className="bg-muted py-8">
        <div className="container-custom">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>
      
      {/* Search Results */}
      <section className="page-section">
        <div className="container-custom">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : hasSearched ? (
            filteredPackages.length > 0 ? (
              <>
                <p className="mb-8 text-lg">{filteredPackages.length} packages found</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPackages.map((pkg) => (
                    <TravelCard key={pkg.id} package={pkg} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-4">No packages found</h3>
                <p className="text-muted-foreground mb-8">Try adjusting your filters for more results.</p>
                <button 
                  onClick={() => handleSearch('', {
                    priceRange: [0, 5000],
                    duration: 'any',
                    rating: 0,
                    type: 'any',
                  })}
                  className="btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )
          ) : (
            <div className="text-center py-12">
              <p className="text-xl">Enter search terms above to find travel packages</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Search;
