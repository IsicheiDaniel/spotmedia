const audioPlayer = document.getElementById('audio-player');
const searchOverlay = document.getElementById('searchOverlay');
const searchButtonIcon = document.querySelector('.search-btn i');

const tracks = {
  sample1: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  sample2: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  sample3: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
};

function playAudio(trackKey) {
  if (tracks[trackKey]) {
    audioPlayer.src = tracks[trackKey];
    audioPlayer.style.display = "block";
    audioPlayer.play();
  }
}

function toggleSearch() {
  const isVisible = searchOverlay.style.display === "flex";
  searchOverlay.style.display = isVisible ? "none" : "flex";
  searchButtonIcon.className = isVisible ? "fas fa-search" : "fas fa-times";
}

// Initialize Swiper
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    freeMode: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // }
  });
});

function handleOverlayClick(e) {
  const box = e.target.closest('.search-box');
  if (!box) {
    toggleSearch();
  }
}

const featuredSwiper = new Swiper('.featuredSwiper', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 800, // smoother transition
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next-featured',
    prevEl: '.swiper-button-prev-featured',
  },
  pagination: {
    el: '.swiper-pagination-featured',
    clickable: true,
  }
});

