document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.diploma-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.lightbox-close');

    // Ajouter un événement de clic à chaque image
    images.forEach(img => {
        img.addEventListener('click', function() {
            const fullImageSrc = this.getAttribute('data-fullimage');
            lightboxImg.src = fullImageSrc;
            lightbox.style.display = 'block';
        });
    });

    // Fermer la lightbox
    closeLightbox.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Fermer la lightbox si on clique en dehors de l'image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});