import Cookies from 'js-cookie'

const cookie = () => {
  const messageElement = document.querySelector('.cookie-notification')
  if (!Cookies.get('cookie-agreement')) {
    showMessage()
  } else {
    initCounter()
  }
  ((function(m, e, t, r, i, k, a) {
    // eslint-disable-next-line no-param-reassign,prefer-rest-params
    m[i] = m[i] || function() { (m[i].a = m[i].a || []).push(arguments) }
    // eslint-disable-next-line no-param-reassign,prefer-destructuring,no-unused-expressions,no-sequences
    m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
  }(window, document, 'script', '//mc.yandex.ru/metrika/tag.js', 'ym')))
  function addClass (o, c) {
    const re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g')
    if (!o || re.test(o.className)) {
      return
    }
    // eslint-disable-next-line no-param-reassign
    o.className = (o.className + ' ' + c).replace(/\s+/g, ' ').replace(/(^ | $)/g, '')
  }
  function removeClass (o, c) {
    const re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g')
    if (!o) {
      return
    }
    // eslint-disable-next-line no-param-reassign
    o.className = o.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '')
  }
  function hideMessage () {
    addClass(messageElement, 'cookie-notification_hidden_yes')
  }
  function showMessage () {
    removeClass(messageElement, 'cookie-notification_hidden_yes')
  }
  function saveAnswer () {
    hideMessage()

    Cookies.set('cookie-agreement', '1')
  }
  function initCounter () {
    // eslint-disable-next-line no-undef
    ym(85771986, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    })
    saveAnswer()
  }
  document.querySelector('#yes').addEventListener('click', function () {
    initCounter()
  })
}

export default cookie
