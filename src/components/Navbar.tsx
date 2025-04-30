import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Destinations',
    href: '/destinations',
    children: [
      { label: 'Europe', href: '/destinations/europe' },
      { label: 'Asia', href: '/destinations/asia' },
      { label: 'Americas', href: '/destinations/americas' },
      { label: 'Africa', href: '/destinations/africa' },
      { label: 'Oceania', href: '/destinations/oceania' }
    ]
  },
  {
    label: 'Packages',
    href: '/packages',
    children: [
      { label: 'Adventure', href: '/packages/adventure' },
      { label: 'Beach', href: '/packages/beach' },
      { label: 'City Break', href: '/packages/city-break' },
      { label: 'Cultural', href: '/packages/cultural' },
      { label: 'Safari', href: '/packages/safari' }
    ]
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-2' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">JR Travels</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <div 
                className="flex items-center space-x-1 navbar-link py-2 cursor-pointer"
                onClick={() => item.children && handleDropdownToggle(item.label)}
              >
                <span>{item.label}</span>
                {item.children && <ChevronDown className="h-4 w-4" />}
              </div>
              
              {item.children && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                  <div className="rounded-md py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/search" className="text-foreground hover:text-primary transition-colors">
            Search
          </Link>
          <Link to="/contact" className="btn-primary">
            Book Now
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-10 ${
            isMenuOpen ? 'hamburger-active' : ''
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line mb-1.5"></span>
          <span className="hamburger-line mb-1.5"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-72 bg-background md:bg-card shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 pt-20">
          {navItems.map((item) => (
            <div key={item.label} className="py-2">
              {!item.children ? (
                <Link
                  to={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.label ? 'max-h-60' : 'max-h-0'
                    }`}
                  >
                    <div className="pt-2 pl-4 flex flex-col space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="text-foreground/80 hover:text-primary transition-colors"
                          onClick={toggleMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="mt-8 pt-4 border-t border-border flex flex-col space-y-4">
            <Link to="/search" className="flex items-center space-x-2 hover:text-primary transition-colors" onClick={toggleMenu}>
              Search
            </Link>
            <Link to="/contact" className="btn-primary text-center" onClick={toggleMenu}>
              Book Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
