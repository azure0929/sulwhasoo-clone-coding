/* Window : scrollTo */
// innisfree-clone-coding 1차 과제 참고
const toTopEl = document.querySelector('.go-top')

window.addEventListener(
  'scroll',
  _.throttle(function () {
    if (window.scrollY > 300) {
      gsap.to(toTopEl, 0.2, {
        y: 0
      })
    } else {
      gsap.to(toTopEl, 0.2, {
        y: 100
      })
    }
  }, 300)
)

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.5, {
    scrollTo: 0
  })
})

/* Swiper : Pagination & Navigation */
// https://swiperjs.com/swiper-api#pagination api 참고
// https://ktsmemo.cafe24.com/s/SwiperJS/357 fade & clickable 참고
// https://ktsmemo.cafe24.com/s/SwiperJS/359 속도 참고
// https://swiperjs.com/types/interfaces/types_modules_autoplay.autoplayoptions autoplay(delay: 4000) 참고
const swiper = new Swiper('.mySwiper', {
  autoplay: {
    delay: 4000
  },
  effect: 'fade',
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev'
  }
})

// https://codepen.io/naradesign/pen/ZOEMyO <- swiper.js autoplay 정지 테스트 참고
