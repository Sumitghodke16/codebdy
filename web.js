let images = document.querySelectorAll('.fade-image');
let currentIndex = 0;

function showNextImage() {
    // Hide the current image
    images[currentIndex].classList.remove('visible');

    // Move to the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Show the next image
    images[currentIndex].classList.add('visible');
}

// Initially show the first image
images[currentIndex].classList.add('visible');

// Set interval to change images every 3 seconds (3000ms)
setInterval(showNextImage, 3000);
