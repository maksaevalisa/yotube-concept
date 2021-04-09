const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
	slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-left',
    prevEl: '.channel-button-right',
  },

});