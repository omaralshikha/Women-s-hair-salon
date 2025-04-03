// Map initialization using iframe
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map with iframe
    initMapWithIframe();
});

// Function to initialize map with iframe
function initMapWithIframe() {
    const mapContainer = document.getElementById('salon-map');
    
    if (mapContainer) {
        // Create iframe element
        const iframe = document.createElement('iframe');
        
        // Set iframe attributes
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d335967.9447446459!2d2.931959928140975!3d48.862985680010546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e69e3a3b7db%3A0xe23b8ee62a241288!2sMon%20Petit%20Institut!5e0!3m2!1sar!2seg!4v1743640974802!5m2!1sar!2seg";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.style.border = "0";
        iframe.allowFullscreen = "";
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        
        // Clear container and append iframe
        mapContainer.innerHTML = '';
        mapContainer.appendChild(iframe);
        
        // Add animation to the map
        gsap.from(iframe, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.map-container',
                start: 'top 80%'
            }
        });
        
        // Add a title above the map
        const mapTitle = document.createElement('div');
        mapTitle.className = 'map-title';
        mapTitle.innerHTML = '<h3>Find Us Here</h3>';
        mapContainer.parentNode.insertBefore(mapTitle, mapContainer);
    }
}