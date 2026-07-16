// Toggle Mobile Menu
function toggleMenu() {
  const menu = document.querySelector('.menu');
  const menuToggle = document.querySelector('.menu-toggle');
  
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.querySelector('.menu');
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  
  if (!navbar.contains(event.target) && menu.classList.contains('active')) {
    menu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// Close menu when clicking menu link
document.querySelectorAll('.menu li a').forEach(link => {
  link.addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// WhatsApp Functions
function openWhatsApp() {
  const phoneNumber = '6285138867524'; // Your WhatsApp number
  const message = encodeURIComponent('Hi Khosyi! I found your portfolio and would like to discuss a project with you.');
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  
  window.open(whatsappURL, '_blank');
}

function openWhatsAppLetsTalk() {
  const phoneNumber = '6285138867524'; // Your WhatsApp number
  const message = encodeURIComponent('Hi Khosyi! I would like to talk about your services.');
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  
  window.open(whatsappURL, '_blank');
}

// Open Link in New Tab
function openLinkInNewTab(button) {
  const link = button.getAttribute('data-link');
  
  if (link && link.trim() !== '') {
    window.open(link, '_blank');
  } else {
    alert('Link not available yet!');
  }
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80; // Adjust for navbar height
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards and elements with animation
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.card, .kartu, .about-inner, .contact-item');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
});

// Add typing effect to home text
const text2Element = document.querySelector('.text-2');
if (text2Element) {
  const originalText = text2Element.textContent;
  text2Element.textContent = '';
  
  let i = 0;
  const typingSpeed = 100;
  
  function typeWriter() {
    if (i < originalText.length) {
      text2Element.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, typingSpeed);
    }
  }
  
  // Start typing effect after a short delay
  setTimeout(typeWriter, 500);
}

// Parallax effect for background images
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('[class*="-bg-image"]');
  
  parallaxElements.forEach(el => {
    const speed = 0.5;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Add glow effect on hover for social icons
const socialLinks = document.querySelectorAll('.sfi a, .sosial-link');

socialLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 0 40px rgba(0, 212, 255, 0.8)';
  });
  
  link.addEventListener('mouseleave', function() {
    this.style.boxShadow = '';
  });
});

// Cursor trail effect (optional - cyber style)
let cursorTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', function(e) {
  if (window.innerWidth > 900) { // Only on desktop
    cursorTrail.push({ x: e.clientX, y: e.clientY });
    
    if (cursorTrail.length > maxTrailLength) {
      cursorTrail.shift();
    }
    
    // Create trail element
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.width = '8px';
    trail.style.height = '8px';
    trail.style.borderRadius = '50%';
    trail.style.background = 'rgba(0, 212, 255, 0.5)';
    trail.style.pointerEvents = 'none';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.transform = 'translate(-50%, -50%)';
    trail.style.zIndex = '9999';
    trail.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.8)';
    trail.style.transition = 'opacity 0.5s ease';
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
      trail.style.opacity = '0';
      setTimeout(() => trail.remove(), 500);
    }, 100);
  }
});

// Log message when everything is loaded
window.addEventListener('load', function() {
  console.log('%c👋 Welcome to Khosyi\'s Portfolio!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
  console.log('%c⚡ Powered by modern web technologies', 'color: #0099ff; font-size: 14px;');
  console.log('%c🚀 Let\'s build something amazing together!', 'color: #00d4ff; font-size: 14px;');
});