// Gallery Image Loader
document.addEventListener('DOMContentLoaded', function() {
    // Gallery images data
    const galleryImages = [
        {
            src: 'images/gallery-1.jpg',
            alt: 'Elegant blonde highlights'
        },
        {
            src: 'images/gallery-2.jpg',
            alt: 'Modern bob haircut'
        },
        {
            src: 'images/gallery-3.jpg',
            alt: 'Balayage coloring technique'
        },
        {
            src: 'images/gallery-4.jpg',
            alt: 'Updo hairstyle for special occasions'
        },
        {
            src: 'images/gallery-5.jpg',
            alt: 'Long layered haircut'
        },
        {
            src: 'images/gallery-6.jpg',
            alt: 'Vibrant red hair color'
        },
        {
            src: 'images/gallery-7.jpg',
            alt: 'Colorful bob haircut'
        },
        {
            src: 'images/gallery-8.jpg',
            alt: 'Wavy bob haircut'
        },
        {
            src: 'images/gallery-9.jpg',
            alt: 'Straight bob haircut'
        },
    ];

    // Get the gallery grid container
    const galleryGrid = document.querySelector('.gallery-grid');
    
    // Clear any existing content
    galleryGrid.innerHTML = '';
    
    // Create and append gallery items
    galleryImages.forEach(image => {
        // Create gallery item
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        // Create image element
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        
        // Append image to gallery item
        galleryItem.appendChild(img);
        
        // Append gallery item to grid
        galleryGrid.appendChild(galleryItem);
        
        // Add animation with GSAP
        gsap.from(galleryItem, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: galleryItem,
                start: 'top 90%'
            }
        });
    });
    
    // Add hover effect for gallery items
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item.querySelector('img'), {
                scale: 1.05,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item.querySelector('img'), {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
});