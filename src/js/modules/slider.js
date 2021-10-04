import Swiper, { Autoplay, EffectFade } from 'swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'

SwiperCore.use([Navigation, Pagination, Autoplay])

const createDefaultSwiper = ({ container, pagination }) => new Swiper(container, {
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  // autoHeight: true,
  centeredSlidesBounds: true,
  speed: 750,

  pagination: {
    el: pagination,
    clickable: true,
    type: 'bullets',
  },
})

export default createDefaultSwiper
