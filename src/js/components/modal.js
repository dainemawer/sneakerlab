const Modal = () => {
  const trigger = document.querySelector('[data-trigger-modal]')
  const close = document.querySelector('[data-close-modal]')
  const modal = document.querySelector('[data-modal]')

  trigger && trigger.addEventListener('click', (e) => {
    e.preventDefault()

    if (!modal.classList.contains('modal-active')) {
      modal.classList.add('modal-active')
      document.body.style.overflow = 'hidden'
    } else {
      modal.classList.remove('modal-active')
      document.body.style.overflow = 'auto'
    }
  })

  close && close.addEventListener('click', (e) => {
    modal.classList.remove('modal-active')
    document.body.style.overflow = 'auto'
  })
}

export default Modal
