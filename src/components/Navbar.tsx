
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';
import NavbarAuth from './NavbarAuth';

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
      { label: 'Europe', href: '/packages?region=europe' },
      { label: 'Asia', href: '/packages?region=asia' },
      { label: 'Americas', href: '/packages?region=americas' },
      { label: 'Africa', href: '/packages?region=africa' },
      { label: 'Oceania', href: '/packages?region=oceania' }
    ]
  },
  {
    label: 'Packages',
    href: '/packages',
    children: [
      { label: 'Adventure', href: '/packages?type=adventure' },
      { label: 'Beach', href: '/packages?type=beach' },
      { label: 'City Break', href: '/packages?type=city' },
      { label: 'Cultural', href: '/packages?type=cultural' },
      { label: 'Safari', href: '/packages?type=safari' }
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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-2' : 'py-4 bg-gradient-to-b from-black/40 to-transparent'
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
              {!item.children ? (
                <Link 
                  to={item.href} 
                  className={`py-2 font-medium transition-colors hover:text-primary ${
                    isActiveLink(item.href) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <div className="flex items-center space-x-1">
                  <Link 
                    to={item.href}
                    className={`py-2 font-medium transition-colors hover:text-primary ${
                      isActiveLink(item.href) ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                  <button 
                    onClick={() => handleDropdownToggle(item.label)}
                    className="focus:outline-none p-1 hover:text-primary"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              )}
              
              {item.children && (
                <div 
                  className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50 ${
                    activeDropdown === item.label ? 'opacity-100 visible' : ''
                  }`}
                >
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
          <button 
            onClick={handleSearchClick} 
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <NavbarAuth />
          <Link 
            to="/contact" 
            className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-full transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button 
            onClick={handleSearchClick} 
            className="p-2 hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            className="flex flex-col justify-center items-center w-10 h-10 relative z-10"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}
            />
            <span 
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}
            />
            <span 
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
            />
          </button>
        </div>
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
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActiveLink(item.href) ? 'text-primary' : ''
                  }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActiveLink(item.href) ? 'text-primary' : ''
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="p-1 focus:outline-none"
                    >
                      <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
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
                          className={`text-foreground/80 hover:text-primary transition-colors ${
                            isActiveLink(child.href) ? 'text-primary' : ''
                          }`}
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
            <button 
              onClick={() => {
                handleSearchClick();
                toggleMenu();
              }} 
              className="flex items-center space-x-2 hover:text-primary transition-colors"
            >
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
            <NavbarAuth />
            <Link 
              to="/contact" 
              className="bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-full text-center" 
              onClick={toggleMenu}
            >
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
