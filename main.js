// Get the hero element
const hero = document.getElementById('hero');

// Array of image paths
const images = [
    'images/lafondapaisaenglewood.jpg',
    'images/d_brisas_englewood_photo.jpg',
    'images/cnrliquorstorenglewood.jpg',
    'images/bonanzarestauranthackensack.jpg'
];

// Preload images
const preloadImages = (imageArray) => {
    imageArray.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
};

// Preload the images
preloadImages(images);

// Current image index
let currentIndex = 0;

// Function to change the background image
function changeBackground() {
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
}

// Set initial background image
changeBackground();

// Change background every 4 seconds
setInterval(changeBackground, 4000); // Adjust timing as needed
