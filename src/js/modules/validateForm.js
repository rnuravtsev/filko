const validateForm = () => {
  const callbackForm = document.querySelector('.form--callback')
  const inputName = document.querySelector('.form__input--name')
  const inputPhone = document.querySelector('.form__input--phone')
  const inputAgree = document.querySelector('.form__input--checkbox')
  const buttonSubmit = document.querySelector('.modal__button--submit')
  const smallTextName = document.querySelector('.form-text--name')
  const smallTextPhone = document.querySelector('.form-text--phone')

  const setButtonSubmitDisabled = () => {
    buttonSubmit.classList.add('disabled')
    buttonSubmit.disabled = true
  }

  const setButtonSubmitNotDisabled = () => {
    buttonSubmit.classList.remove('disabled')
    buttonSubmit.disabled = false
  }

  const hideSmallText = (element) => {
    element.classList.add('visually-hidden')
  }

  const showSmallText = (element) => {
    element.classList.remove('visually-hidden')
  }

  const formState = {
    name: false,
    phone: false,
    agree: false,
  }

  setButtonSubmitDisabled()

  inputAgree.addEventListener('change', (evt) => {
    const { target } = evt
    if (target.checked) {
      formState.agree = true
    } else {
      formState.agree = false
    }
  })

  inputName.addEventListener('input', (evt) => {
    const { target } = evt
    if (target.value.length >= 1) {
      formState.name = true
      hideSmallText(smallTextName)
    } else {
      formState.name = false
      showSmallText(smallTextName)
    }
  })

  inputPhone.addEventListener('input', (evt) => {
    const { target } = evt
    const pattern = new RegExp(/^(\+)?(\(\d{2,3}\) ?\d|\d)(([ -]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/)
    if (pattern.test(target.value)) {
      formState.phone = true
      hideSmallText(smallTextPhone)
    } else {
      formState.phone = false
      showSmallText(smallTextPhone)
    }
  })

  callbackForm.addEventListener('change', () => {
    const { phone, name, agree } = formState
    if (phone && name && agree) {
      setButtonSubmitNotDisabled()
    } else {
      setButtonSubmitDisabled()
    }
  })
}

export default validateForm
