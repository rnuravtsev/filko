import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox'
import { throttle } from 'throttle-debounce'

const submitForm = () => {
  const callbackForm = document.querySelector('.form--callback')
  const buttonSubmit = document.querySelector('.modal__button')

  const postData = async (url, data) => {
    try {
      return await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      })
    } catch (e) {
      throw new Error(e)
    }
  }

  const callbackFormSubmitHandler = async (evt) => {
    evt.preventDefault()
    const formData = new window.FormData(callbackForm)
    const plainFormData = Object.fromEntries(formData.entries())
    const formDataJsonString = JSON.stringify(plainFormData)

    callbackForm.reset()
    Fancybox.close()

    const showAlert = async (options) => {
      buttonSubmit.classList.remove('modal__button--loading')
      await Swal.fire({
        showCloseButton: true,
        ...options,
      })
    }

    buttonSubmit.classList.add('modal__button--loading')

    const response = await postData('./form.php', formDataJsonString)
    if (response.ok) {
      await showAlert({
        title: 'Ваша заявка отправлена',
        text: 'В ближайшее время мы с вами свяжемся!',
        icon: 'success',
        timer: 2500,
      })
    } else {
      await showAlert({
        title: 'Не удалось соединиться с сервером',
        text: 'Извините, мы не получили ваши данные, попробуйте позже',
        icon: 'error',
        footer: 'Наш телефон:&emsp;<a class="contacts__link" href="tel:+7(917)274-01-92">+7 (917) 274-01-92</a>',
      })
    }
  }

  callbackForm.addEventListener('submit', throttle(1000, false, callbackFormSubmitHandler))
}

export default submitForm
