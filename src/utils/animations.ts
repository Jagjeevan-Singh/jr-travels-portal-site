
/**
 * Handles scroll-based animations for elements with 'animate-on-scroll' class
 */
export const initScrollAnimations = () => {
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          // Optional: stop observing after animation
          // observer.unobserve(entry.target);
        } else {
          // Optional: remove class when out of view for repeated animations
          // entry.target.classList.remove('show');
        }
      });
    },
    {
      threshold: 0.15, // Trigger when 15% of the element is visible
      rootMargin: '0px 0px -50px 0px', // Slightly before the element comes into view
    }
  );

  animateElements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
};

/**
 * Initializes parallax scrolling effect
 */
export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax');

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    
    parallaxElements.forEach((element) => {
      const speed = element.getAttribute('data-speed') || '0.5';
      const yPos = -(scrollPosition * parseFloat(speed));
      
      if (element instanceof HTMLElement) {
        element.style.backgroundPositionY = `${yPos}px`;
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup function to remove event listener
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

/**
 * Initializes counter animations
 */
export const initCounters = () => {
  const counters = document.querySelectorAll('.counter');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const targetValue = parseInt(target.getAttribute('data-target') || '0', 10);
          const duration = parseInt(target.getAttribute('data-duration') || '2000', 10);
          let startValue = 0;
          let startTime: number | null = null;
          
          const updateCounter = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentValue = Math.floor(progress * targetValue);
            
            target.textContent = currentValue.toString();
            
            if (progress < 1) {
              window.requestAnimationFrame(updateCounter);
            } else {
              target.textContent = targetValue.toString();
              observer.unobserve(target);
            }
          };
          
          window.requestAnimationFrame(updateCounter);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  
  counters.forEach((counter) => {
    observer.observe(counter);
  });
  
  return observer;
};

/**
 * Initializes the Back to Top button
 */
export const initBackToTop = () => {
  const backToTopButton = document.querySelector('.back-to-top');
  
  if (!backToTopButton) return;
  
  const toggleBackToTopButton = () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  };
  
  window.addEventListener('scroll', toggleBackToTopButton);
  
  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  
  return () => {
    window.removeEventListener('scroll', toggleBackToTopButton);
  };
};
