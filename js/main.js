const swiper = new Swiper('.channel1-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		1900: {
			slidesPerView: 6
		},
		1600: {
			slidesPerView: 5
		},
		1300: {
			slidesPerView: 4
		},
		1100: {
			slidesPerView: 3
		},
		800: {
			slidesPerView: 2
		}
	},

	// Navigation arrows
	navigation: {
		nextEl: '.channel1-button-right',
		prevEl: '.channel1-button-left',
	},

});

const swiperRecommended = new Swiper('.channel2-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		1600: {
			slidesPerView: 3
		},
		1100: {
			slidesPerView: 2
		}
	},

	// Navigation arrows
	navigation: {
		nextEl: '.channel2-button-right',
		prevEl: '.channel2-button-left',
	},

});

const swiperFoodDrink = new Swiper('.channel3-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		1900: {
			slidesPerView: 6
		},
		1600: {
			slidesPerView: 5
		},
		1300: {
			slidesPerView: 4
		},
		1100: {
			slidesPerView: 3
		},
		800: {
			slidesPerView: 2
		}
	},

	// Navigation arrows
	navigation: {
		nextEl: '.channel3-button-right',
		prevEl: '.channel3-button-left',
	},

});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group ');
searchBtn.addEventListener('click', () => {
	mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
	// swiper.destroy();
	// swiperRecommended.destroy();
	// swiperFoodDrink.destroy();
};