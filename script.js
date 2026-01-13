// =============== Cart Functionality ===============
let cartCount = 0;

document.querySelectorAll('.btn-add-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        cartCount++;
        updateCartCount();
        
        // Add animation feedback
        this.textContent = '✓ Added!';
        this.style.background = '#10b981';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            this.style.background = '';
        }, 1500);
    });
});

function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cartCount;
    
    // Add pulse animation
    cartCountElement.style.animation = 'none';
    setTimeout(() => {
        cartCountElement.style.animation = 'pulse 0.6s ease';
    }, 10);
}

// =============== Smooth Scroll for Navigation Links ===============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// =============== Newsletter Subscription ===============
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    if (email) {
        alert('Thank you for subscribing with: ' + email);
        this.reset();
    }
});

// =============== Add Pulse Animation for Cart Count ===============
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
`;
document.head.appendChild(style);

// =============== Intersection Observer for Fade-in Effect ===============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.category-card, .product-card, .deal-card').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Add fade-in animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeInStyle);

// =============== Search Functionality (Basic) ===============
document.querySelector('.icon-btn[href="#search"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    const searchTerm = prompt('Search for products...');
    if (searchTerm) {
        console.log('Searching for: ' + searchTerm);
        // In a real application, this would filter products
    }
});

// =============== Mobile Menu Toggle (Optional) ===============
let menuOpen = false;

// Product interaction tracking
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});

// Dynamic price formatting
function formatPrice(price) {
    return '$' + parseFloat(price).toFixed(2);
}

// =============== Initialize on Load ===============
document.addEventListener('DOMContentLoaded', function() {
    console.log('ShopHub ecommerce store loaded successfully!');
    
    // Any initialization code here
    updateCartCount();
});
