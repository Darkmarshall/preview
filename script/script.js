// Generate background particles
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.setProperty('--duration', (Math.random() * 10 + 10) + 's');
    particle.style.setProperty('--x', (Math.random() - 0.5) * 200 + 'px');
    particle.style.setProperty('--y', (Math.random() - 0.5) * 200 + 'px');
    particlesContainer.appendChild(particle);
  }
}

// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const nav = document.getElementById('nav');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  
  if (nav && menuBtn && nav.classList.contains('active')) {
    if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
      nav.classList.remove('active');
    }
  }
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { 
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Update active nav link based on scroll position (for single page)
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Publications filter functionality
function filterPublications(category) {
  const items = document.querySelectorAll('.publication-item');
  const buttons = document.querySelectorAll('.filter-btn');
  
  // Update active button
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter items
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'flex';
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 10);
    } else {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      setTimeout(() => {
        item.style.display = 'none';
      }, 300);
    }
  });
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      interest: document.getElementById('interest').value,
      message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Only prevent default for valid anchor links (not just "#")
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        // Close mobile menu if open
        const nav = document.getElementById('nav');
        if (nav) {
          nav.classList.remove('active');
        }
        
        // Smooth scroll to target
        target.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  });
});

// Add loading animation to buttons on click
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Only add animation if it's not a link to another page
    if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
      this.style.opacity = '0.7';
      setTimeout(() => {
        this.style.opacity = '1';
      }, 200);
    }
  });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    hero.style.transform = `translate3d(0, ${rate}px, 0)`;
  }
});

// Console message
console.log('%c🌍 GeoHarmonics Society', 'color: #3b82f6; font-size: 24px; font-weight: bold;');
console.log('%cBridging Earth, Man & Technology', 'color: #10b981; font-size: 14px;');
console.log('%cInterested in contributing? Contact us at geoharmonicsociety@gmail.com', 'color: #94a3b8; font-size: 12px;');