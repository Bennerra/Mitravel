const swiper1 = document.querySelector('.slider-container'),
			burger = document.querySelector('.burger'),
			menu = document.querySelector('.menu'),
			body = document.querySelector('body'),
			swiper2 = document.querySelector('.swiper-container'),
			video = document.querySelectorAll('.video'),
			playButtons = document.querySelectorAll('.main-slider__play');

let swiperSlider1 = new Swiper(swiper1, {
	centeredSlides: true,
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 105,
	// Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

burger.addEventListener('click', () => {
	burger.classList.toggle('_active'),
	menu.classList.toggle('_active'),
	body.classList.toggle('_lock');
});

let swiperSlider2 = new Swiper(swiper2, {
	loop: true,
	slidesPerView: 1,
	// Стрелки
  navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left',
  },
});

// video.forEach(playButton => {
// 	playButton.addEventListener('click', () => {
// 		video.play();
// 		console.log('el')
// 	})
// });

