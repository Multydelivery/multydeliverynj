// Get elements
const hero = document.getElementById('hero');
const phoneNumber = document.getElementById('phone-number');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Array of images with phone numbers
const slides = [
    { image: 'images/lafondapaisaenglewood.jpg', phone: '201-871-3544' },
    { image: 'images/d_brisas_englewood_photo.jpg', phone: '201-731-3192' },
    { image: 'images/cnrliquorstorenglewood.jpg', phone: '201-568-7168' },
    { image: 'images/bonanzarestauranthackensack.jpg', phone: '201-488-2875' },
    { image: 'images/lacocinadecristinahackensack.jpg', phone: '201-678-1010' },
    { image: 'images/elcarreterobergenfield.jpg', phone: '201-501-0077' },
    { image: 'images/elsalareinadelchicharronteaneck.avif', phone: '201-837-2524' },
    { image: 'images/la-mayoria-resto-bar-logo-web.fw_.png', phone: '862-249-9214' }
];

// Current slide index
let currentIndex = 0;

// Function to update the slide
function updateSlide(index) {
    // Update background image
    hero.style.backgroundImage = `url(${slides[index].image})`;

    // Update phone number
    const { phone } = slides[index];
    phoneNumber.textContent = `Call Now: ${phone}`;
    phoneNumber.href = `tel:${phone}`;
}

// Initial slide setup
updateSlide(currentIndex);

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to the last slide if at the beginning
    updateSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Loop to the first slide if at the end
    updateSlide(currentIndex);
});

// Automatic slide change every 4 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
}, 4000);
