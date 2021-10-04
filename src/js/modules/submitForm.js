import swal from 'sweetalert'
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
  callbackForm.addEventListener('submit', throttle(1000, false, async (evt) => {
    evt.preventDefault()
    const formData = new window.FormData(callbackForm)
    const plainFormData = Object.fromEntries(formData.entries())
    const formDataJsonString = JSON.stringify(plainFormData)

    const showAlert = async (options) => {
      const { title, message, responseType } = options
      buttonSubmit.classList.remove('modal__button--loading')
      await swal(title, message, responseType)
    }

    buttonSubmit.classList.add('modal__button--loading')

    try {
      const response = await postData('./form.php', formDataJsonString)
      if (response.ok) {
        await showAlert({
          title: 'Yes',
          message: 'Мы скоро вам перезвоним',
          responseType: 'success',
        })
        callbackForm.reset()
        Fancybox.close()
      } else {
        await showAlert({
          title: 'Ouch',
          message: 'Something goes wrong!',
          responseType: 'error',
        })
      }
    } catch (e) {
      await showAlert({
        title: 'Ouch',
        message: 'Something goes wrong!',
        responseType: 'error',
      })
    }
  }))
}

export default submitForm
