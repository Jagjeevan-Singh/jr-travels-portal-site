
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from "sonner";
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, filters: Filters) => void;
}

interface Filters {
  priceRange: [number, number];
  duration: string;
  rating: number;
  type: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Filters>({
    priceRange: [0, 5000],
    duration: 'any',
    rating: 0,
    type: 'any',
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast.warning("Please enter a search term");
      return;
    }
    
    // Call the onSearch function with the current query and filters
    onSearch(query, filters);
    
    // If we're not on the packages page, navigate to it with the search query
    if (location.pathname !== '/packages') {
      navigate(`/packages?q=${encodeURIComponent(query)}`);
    } else {
      // Show success toast when searching on the packages page
      toast.success(`Searching for "${query}"`);
    }
  };

  const handleFilterChange = (name: keyof Filters, value: any) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    
    // If we're on the packages page, apply the filter immediately
    if (location.pathname === '/packages' && query.trim()) {
      setTimeout(() => {
        onSearch(query, { ...filters, [name]: value });
        toast.info("Filters updated");
      }, 300);
    }
  };

  return (
    <div className="w-full bg-card shadow-md rounded-xl p-4 md:p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search destinations, activities, or packages..."
              className="w-full pl-10 p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            type="button"
            className="lg:hidden btn-outline flex items-center justify-center gap-2"
          >
            <span>{isFiltersOpen ? 'Hide Filters' : 'Show Filters'}</span>
            <svg className={`w-4 h-4 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button type="submit" className="btn-primary flex-shrink-0">
            Search
          </button>
        </div>

        <div className={`lg:flex items-center gap-4 mt-4 ${isFiltersOpen ? 'block' : 'hidden lg:flex'}`}>
          <div className="mb-3 lg:mb-0">
            <label className="block text-sm font-medium mb-1">Price Range</label>
            <div className="flex items-center gap-2">
              <span className="text-sm">${filters.priceRange[0]}</span>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                className="w-24 md:w-32"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  handleFilterChange('priceRange', [
                    filters.priceRange[0],
                    parseInt(e.target.value),
                  ])
                }
              />
              <span className="text-sm">${filters.priceRange[1]}</span>
            </div>
          </div>

          <div className="mb-3 lg:mb-0">
            <label className="block text-sm font-medium mb-1">Duration</label>
            <select
              className="p-2 border border-border rounded bg-background"
              value={filters.duration}
              onChange={(e) => handleFilterChange('duration', e.target.value)}
            >
              <option value="any">Any</option>
              <option value="1-3">1-3 days</option>
              <option value="4-7">4-7 days</option>
              <option value="8-14">8-14 days</option>
              <option value="15+">15+ days</option>
            </select>
          </div>

          <div className="mb-3 lg:mb-0">
            <label className="block text-sm font-medium mb-1">Rating</label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleFilterChange('rating', star)}
                  className="text-gray-400 focus:outline-none"
                >
                  <svg
                    className={`w-5 h-5 ${
                      star <= filters.rating ? 'text-yellow-400' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-3 lg:mb-0">
            <label className="block text-sm font-medium mb-1">Type</label>
            <select
              className="p-2 border border-border rounded bg-background"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="any">Any</option>
              <option value="adventure">Adventure</option>
              <option value="beach">Beach</option>
              <option value="city">City Break</option>
              <option value="cultural">Cultural</option>
              <option value="safari">Safari</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
