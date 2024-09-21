

var myCarousel = document.getElementById('carouselExampleDark');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  ride: true
});


const searchForm = document.querySelector('form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    // Redirect to search results page or display results on the same page
    window.location.href = `search-results.html?q=${searchTerm}`;
  }
});


// Add event listener to navbar toggler
document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', function () {
      const navbar = document.querySelector('.navbar-collapse');
      navbar.classList.toggle('show');
  });
});

// Add event listener to contact form submit
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Add form submission logic here
  });
});

const parallaxBackground = document.querySelector('.parallax-background');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  parallaxBackground.style.transform = `translateY(${scrollPosition * 0.8}px)`;
});









