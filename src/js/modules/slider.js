import Swiper, { Autoplay, EffectFade } from 'swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'

SwiperCore.use([Navigation, Pagination, Autoplay])

const createDefaultSwiper = ({ container, pagination }) => new Swiper(container, {
  // autoplay: {
  //   delay: 500,
  // },
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  loop: true,
  speed: 750,
  pagination: {
    el: pagination,
    clickable: true,
    type: 'bullets',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
})

export default createDefaultSwiper
