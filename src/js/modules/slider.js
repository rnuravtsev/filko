import Swiper, { Autoplay, EffectFade } from 'swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'

SwiperCore.use([Navigation, Pagination, Autoplay])

const createDefaultSwiper = ({ container, pagination }) => new Swiper(container, {
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
  // autoplay: {
  //   delay: 3000,
  // },
  centeredSlidesBounds: true,
  speed: 750,

  pagination: {
    el: pagination,
    clickable: true,
    type: 'bullets',
  },
})

export default createDefaultSwiper
