// Animaciones al hacer scroll
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isElementPartiallyInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        if (isElementPartiallyInViewport(element) && !element.classList.contains('animate')) {
            element.classList.add('animate');
            
            // Animar barras de progreso si es una tarjeta de habilidades
            if (element.classList.contains('skill-category')) {
                const progressBars = element.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 300);
                });
            }
        }
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Cerrar menú móvil al hacer clic en un enlace
function closeMenuOnLinkClick() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Efecto de escritura para el título
function typeWriterEffect() {
    const heroName = document.querySelector('.hero-name');
    const heroLastname = document.querySelector('.hero-lastname');
    
    if (heroName && heroLastname) {
        const name = 'Jhoan Sebastian';
        const lastname = 'Cardenas';
        
        heroName.textContent = '';
        heroLastname.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < name.length) {
                heroName.textContent += name.charAt(i);
            } else if (i < name.length + lastname.length) {
                heroLastname.textContent += lastname.charAt(i - name.length);
            } else {
                clearInterval(typeInterval);
            }
            i++;
        }, 100);
    }
}

// Contador animado para las estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + '+';
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + '+';
            }
        }, 30);
    });
}

// Event listeners
window.addEventListener('scroll', () => {
    handleScrollAnimations();
    handleNavbarScroll();
});

window.addEventListener('load', () => {
    handleScrollAnimations();
    closeMenuOnLinkClick();
    
    // Iniciar animaciones después de un breve retraso
    setTimeout(() => {
        typeWriterEffect();
        animateCounters();
    }, 1000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de partículas en el fondo (opcional)
function createParticles() {
    const heroBackground = document.querySelector('.hero-background');
    if (!heroBackground) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 0, 0, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        heroBackground.appendChild(particle);
    }
}

// Inicializar partículas
setTimeout(createParticles, 2000);