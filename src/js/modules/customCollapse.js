const customCollapse = () => {
  const customCollapseContent = document.querySelector('.custom-collapse__content')
  const customCollapseButton = document.querySelector('.custom-collapse__button--expand.btn')
  const customCollapseIcon = document.querySelector('.custom-collapse__icon--expand')

  customCollapseButton.addEventListener('click', () => {
    customCollapseContent.classList.toggle('show')
    customCollapseIcon.classList.toggle('show')
  })
}

export default customCollapse
