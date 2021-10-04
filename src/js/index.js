import 'nodeModules/popper.js'
import 'nodeModules//bootstrap/dist/js/bootstrap.min'
import Inputmask from 'nodeModules/inputmask/lib/inputmask'

import submitForm from './modules/submitForm'
import validateForm from './modules/validateForm'

import 'bootstrap/scss/bootstrap.scss'
import '@fancyapps/ui/src/Fancybox/Fancybox.scss'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import '../scss/style.scss'

import createDefaultSwiper from './modules/slider'
import { customScroll } from './utils'
import customCollapse from './modules/customCollapse'

document.querySelectorAll('a[href^="#"]').forEach((el) => {
  el.addEventListener('click', function (evt) {
    evt.preventDefault()
    customScroll(el.attributes.href.value)
  })
})

document.addEventListener('DOMContentLoaded', () => {
  createDefaultSwiper({
    container: '.consumers__swiper',
    pagination: '.consumers-swiper-pagination',
    navNext: '.consumers-swiper-button-next',
    navPrev: '.consumers-swiper-button-prev',
  })

  if (window.innerWidth < 768) {
    document.querySelectorAll('.main-nav__item').forEach((el) => {
      el.addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.remove('show')
      })
    })
  }

  Inputmask({ mask: '+7(999)999-99-99' }).mask('.form__input--phone')
  submitForm()
  validateForm()
  customCollapse()
})
