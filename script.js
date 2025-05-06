// Swiper Init
const swiper = new Swiper('.swiper', {
  slidesPerView: 2.2,
  spaceBetween: 15,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 4.5
    },
    1024: {
      slidesPerView: 6
    }
  }
});

// Toggle search overlay
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');

searchBtn.onclick = () => {
  searchOverlay.style.display = 'flex';
};

closeSearch.onclick = () => {
  searchOverlay.style.display = 'none';
};

// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

menuToggle.onclick = () => {
  if (!menuOpen) {
    mobileMenu.style.right = '0';
    menuOpen = true;
  } else {
    mobileMenu.style.right = '-220px';
    menuOpen = false;
  }
};
