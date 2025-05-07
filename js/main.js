
// Mock data for travel packages
const travelPackages = [
  {
    id: 'pkg1',
    title: 'Paris Romance Package',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
    duration: '7 days',
    price: 1299,
    rating: 5,
    description: 'Experience the magic of Paris with this romantic getaway package.',
    type: 'city'
  },
  {
    id: 'pkg2',
    title: 'Bali Beach Retreat',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
    duration: '10 days',
    price: 1599,
    rating: 4,
    description: 'Relax on pristine beaches and explore the unique culture of Bali.',
    type: 'beach'
  },
  {
    id: 'pkg3',
    title: 'New York City Explorer',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=1000&auto=format&fit=crop',
    duration: '5 days',
    price: 999,
    rating: 4,
    description: 'Discover the Big Apple with this comprehensive city tour package.',
    type: 'city'
  },
  {
    id: 'pkg4',
    title: 'African Safari Adventure',
    location: 'Kenya & Tanzania',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1000&auto=format&fit=crop',
    duration: '12 days',
    price: 2899,
    rating: 5,
    description: 'Witness the incredible wildlife of Africa on this unforgettable safari.',
    type: 'safari'
  },
  {
    id: 'pkg5',
    title: 'Amazon Rainforest Expedition',
    location: 'Brazil',
    image: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=1000&auto=format&fit=crop',
    duration: '8 days',
    price: 1899,
    rating: 4,
    description: 'Explore the world\'s largest rainforest and its amazing biodiversity.',
    type: 'adventure'
  },
  {
    id: 'pkg6',
    title: 'Japanese Cultural Tour',
    location: 'Japan',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1000&auto=format&fit=crop',
    duration: '14 days',
    price: 2599,
    rating: 5,
    description: 'Immerse yourself in the rich culture and history of Japan.',
    type: 'cultural'
  }
];

// Mock testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    content: 'My trip to Santorini was absolutely magical! JR Travels handled everything perfectly from the hotel to the local tours. I didn\'t have to worry about a thing!',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'Toronto, Canada',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    content: 'The safari adventure in Kenya exceeded all my expectations. Our guide was incredibly knowledgeable and we saw all the Big Five! Will definitely book with JR Travels again.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    content: 'From the moment we landed in Bali to our departure, everything was seamless. Beautiful accommodations, friendly staff, and amazing excursions!',
    rating: 4,
  },
  {
    id: 4,
    name: 'Miguel Rodriguez',
    location: 'Madrid, Spain',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    content: 'The Japan cultural tour was incredible. We experienced so much in just 10 days. The itinerary was well-balanced with guided tours and free exploration time.',
    rating: 5,
  }
];

// Chatbot responses
const chatbotResponses = {
  greeting: [
    "Hello! How can I help you plan your next adventure?",
    "Hi there! Looking for travel inspiration? I'm here to help!",
    "Welcome to JR Travels! What kind of trip are you interested in?"
  ],
  farewell: [
    "Thanks for chatting! Let us know when you're ready to book your next trip.",
    "Have a great day! Feel free to return if you have more travel questions.",
    "Bon voyage! We're here when you're ready to plan your next adventure."
  ],
  fallback: [
    "I'm not sure I understand. Could you rephrase that? I can help with destinations, packages, or booking questions.",
    "Sorry, I didn't quite catch that. I can provide information about our travel packages, destinations, or booking process.",
    "I'm still learning! Could you ask that differently? I'm happy to help with travel information."
  ],
  destinations: [
    "We offer travel packages to destinations worldwide including Europe, Asia, Americas, Africa, and Oceania. Is there a specific region you're interested in?",
    "JR Travels has curated experiences in over 120 destinations across the globe. Where would you like to explore?"
  ],
  prices: [
    "Our packages range from $999 for city breaks to $2899 for premium safari experiences. What's your budget range?",
    "We have travel options for every budget! Packages start at $999 and go up to $3000 for luxury experiences."
  ],
  booking: [
    "To book a trip, you can browse our packages online and use our booking system, or contact our travel consultants at booking@jrtravels.com.",
    "Booking is easy! Select your package on our website and follow the booking steps, or email us at booking@jrtravels.com for personalized assistance."
  ],
  adventure: [
    "Our adventure packages include rainforest expeditions, mountain trekking, and desert safaris. Would you like to know more about a specific adventure trip?",
    "For adventure seekers, we offer exciting packages like the Amazon Rainforest Expedition and Himalayan trekking experiences."
  ],
  beach: [
    "We have beautiful beach getaways in Bali, the Maldives, Thailand, and the Caribbean. Perfect for relaxation and water activities!",
    "Our beach packages feature stunning destinations like Bali and the Maldives, with stays at premium beachfront resorts."
  ],
  cultural: [
    "Immerse yourself in new cultures with our tours in Japan, Italy, India, and Egypt. These packages focus on local traditions, food, and historic sites.",
    "Our cultural tours in Japan, Italy, and other destinations offer authentic experiences with local guides and visits to historic landmarks."
  ],
  safari: [
    "Experience incredible wildlife on our safari packages in Kenya, Tanzania, and South Africa. The best time to visit is during the dry season.",
    "Our African safari packages offer unforgettable wildlife experiences with expert guides and comfortable accommodation options."
  ]
};

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Update year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Initialize features
  initNavbar();
  loadFeaturedPackages();
  loadTestimonials();
  initScrollAnimations();
  initParallax();
  initCounters();
  initChatbot();
  initBackToTop();
});

// Navbar functionality
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navbarMenu = document.getElementById('navbar-menu');
  const searchToggle = document.getElementById('search-toggle');
  const searchContainer = document.getElementById('search-container');
  const dropdowns = document.querySelectorAll('.dropdown');
  
  // Change navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navbarMenu.classList.toggle('show');
  });
  
  // Search toggle
  searchToggle.addEventListener('click', () => {
    searchContainer.classList.toggle('show');
    searchContainer.querySelector('input').focus();
  });
  
  // Handle mobile dropdowns
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.dropdown-toggle');
    
    if (window.innerWidth <= 768) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
      });
    }
  });
}

// Load featured packages
function loadFeaturedPackages() {
  const packagesContainer = document.getElementById('featured-packages');
  if (!packagesContainer) return;
  
  const featuredPackages = travelPackages.slice(0, 3);
  
  featuredPackages.forEach(pkg => {
    const packageEl = createPackageCard(pkg);
    packagesContainer.appendChild(packageEl);
  });
}

// Create package card element
function createPackageCard(pkg) {
  const card = document.createElement('div');
  card.className = 'package-card animate-on-scroll';
  
  card.innerHTML = `
    <div class="package-image">
      <img src="${pkg.image}" alt="${pkg.title}">
      <div class="package-image-overlay">
        <span>${pkg.location}</span>
        <span class="package-rating">
          ${getStarRating(pkg.rating)}
        </span>
      </div>
    </div>
    <div class="package-content">
      <h3 class="package-title">${pkg.title}</h3>
      <p class="package-description">${pkg.description}</p>
      <div class="package-footer">
        <div class="package-price">
          <span class="package-duration">${pkg.duration}</span>
          <div>
            <span class="package-price-value">$${pkg.price}</span>
            <span class="package-price-unit">/person</span>
          </div>
        </div>
        <a href="packages.html?id=${pkg.id}" class="btn-primary">View Details</a>
      </div>
    </div>
  `;
  
  return card;
}

// Generate star rating HTML
function getStarRating(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    const starColor = i <= rating ? 'text-yellow-400' : 'text-gray-300';
    stars += `<svg class="${starColor}" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>`;
  }
  return stars;
}

// Load testimonials carousel
function loadTestimonials() {
  const testimonialCarousel = document.getElementById('testimonial-carousel');
  if (!testimonialCarousel) return;
  
  // Create slider container
  const slider = document.createElement('div');
  slider.className = 'testimonial-slider';
  
  // Add testimonials to slider
  testimonials.forEach(testimonial => {
    const slide = document.createElement('div');
    slide.className = 'testimonial-slide';
    
    slide.innerHTML = `
      <div class="testimonial-card">
        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
        <div class="testimonial-rating">
          ${getStarRating(testimonial.rating)}
        </div>
        <p class="testimonial-content">"${testimonial.content}"</p>
        <h3 class="testimonial-name">${testimonial.name}</h3>
        <p class="testimonial-location">${testimonial.location}</p>
      </div>
    `;
    
    slider.appendChild(slide);
  });
  
  testimonialCarousel.appendChild(slider);
  
  // Create navigation dots
  const nav = document.createElement('div');
  nav.className = 'testimonial-nav';
  
  testimonials.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    nav.appendChild(dot);
  });
  
  testimonialCarousel.appendChild(nav);
  
  // Auto rotate testimonials
  let currentSlide = 0;
  const intervalTime = 5000;
  
  const slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonials.length;
    goToSlide(currentSlide);
  }, intervalTime);
  
  function goToSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    
    // Update active dot
    const dots = nav.querySelectorAll('.testimonial-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    currentSlide = index;
  }
}

// Initialize scroll animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  return observer;
}

// Initialize parallax effect
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  function handleScroll() {
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-speed') || 0.3;
      const yPos = -(window.scrollY * speed);
      element.style.backgroundPosition = `center ${yPos}px`;
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

// Initialize counters
function initCounters() {
  const counterElements = document.querySelectorAll('.counter');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = parseInt(element.getAttribute('data-target'));
        const duration = parseInt(element.getAttribute('data-duration') || '2000');
        
        let start = 0;
        const increment = Math.ceil(target / (duration / 16));
        
        const timer = setInterval(() => {
          start += increment;
          element.textContent = start;
          
          if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
          }
        }, 16);
        
        // Unobserve after animation starts
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.5 });
  
  counterElements.forEach(counter => {
    observer.observe(counter);
  });
  
  return observer;
}

// Back to top button
function initBackToTop() {
  const backToTopButton = document.getElementById('backToTop');
  if (!backToTopButton) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize chatbot
function initChatbot() {
  const chatbot = document.getElementById('chatbot');
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotMessages = document.getElementById('chatbot-messages');
  const chatbotForm = document.getElementById('chatbot-form');
  const chatbotInput = document.getElementById('chatbot-message-input');
  
  if (!chatbot || !chatbotToggle || !chatbotMessages || !chatbotForm || !chatbotInput) return;
  
  chatbotToggle.addEventListener('click', () => {
    chatbot.classList.toggle('open');
    
    if (chatbot.classList.contains('open') && chatbotMessages.children.length === 0) {
      // Add initial bot message
      setTimeout(() => {
        addBotMessage(getRandomResponse('greeting'));
      }, 300);
    }
  });
  
  chatbotForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatbotInput.value.trim();
    if (!message) return;
    
    // Add user message
    addUserMessage(message);
    chatbotInput.value = '';
    
    // Process and respond
    setTimeout(() => {
      const response = processUserMessage(message);
      addBotMessage(response);
    }, 500);
  });
  
  function addUserMessage(text) {
    const messageEl = document.createElement('div');
    messageEl.className = 'chatbot-message chatbot-message-user';
    messageEl.textContent = text;
    chatbotMessages.appendChild(messageEl);
    scrollToBottom();
  }
  
  function addBotMessage(text) {
    const messageEl = document.createElement('div');
    messageEl.className = 'chatbot-message chatbot-message-bot';
    messageEl.textContent = text;
    chatbotMessages.appendChild(messageEl);
    scrollToBottom();
  }
  
  function scrollToBottom() {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  function processUserMessage(message) {
    const lowerMsg = message.toLowerCase();
    
    // Check for farewell messages
    if (lowerMsg.includes('bye') || lowerMsg.includes('goodbye') || lowerMsg.includes('thank')) {
      return getRandomResponse('farewell');
    }
    
    // Check for destination queries
    if (lowerMsg.includes('destination') || lowerMsg.includes('where') || lowerMsg.includes('places')) {
      return getRandomResponse('destinations');
    }
    
    // Check for price queries
    if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('how much') || lowerMsg.includes('budget')) {
      return getRandomResponse('prices');
    }
    
    // Check for booking queries
    if (lowerMsg.includes('book') || lowerMsg.includes('reservation') || lowerMsg.includes('reserve')) {
      return getRandomResponse('booking');
    }
    
    // Check for specific types of travel
    if (lowerMsg.includes('adventure') || lowerMsg.includes('hiking') || lowerMsg.includes('trek')) {
      return getRandomResponse('adventure');
    }
    
    if (lowerMsg.includes('beach') || lowerMsg.includes('ocean') || lowerMsg.includes('sea') || lowerMsg.includes('relax')) {
      return getRandomResponse('beach');
    }
    
    if (lowerMsg.includes('culture') || lowerMsg.includes('museum') || lowerMsg.includes('history')) {
      return getRandomResponse('cultural');
    }
    
    if (lowerMsg.includes('safari') || lowerMsg.includes('wildlife') || lowerMsg.includes('animal')) {
      return getRandomResponse('safari');
    }
    
    // Fallback for unrecognized queries
    return getRandomResponse('fallback');
  }
  
  function getRandomResponse(type) {
    const responses = chatbotResponses[type] || chatbotResponses.fallback;
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

// Handle URL parameters (for search and package details)
function getUrlParams() {
  const params = {};
  const queryString = window.location.search.substring(1);
  const pairs = queryString.split('&');
  
  for (let pair of pairs) {
    const [key, value] = pair.split('=');
    if (key && value) {
      params[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  }
  
  return params;
}
