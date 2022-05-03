const Modal = () => {
  const triggers = document.querySelectorAll('[data-trigger-modal]')
  const close = document.querySelector('[data-close-modal]')
  const modal = document.querySelector('[data-modal]')

  triggers && triggers.forEach(trigger => {
    console.log(trigger)
    trigger.addEventListener('click', (e) => {
      e.preventDefault()

      if (!modal.classList.contains('modal-active')) {
        modal.classList.add('modal-active')
        document.body.style.overflow = 'hidden'
      } else {
        modal.classList.remove('modal-active')
        document.body.style.overflow = 'auto'
      }
    })

    document.addEventListener('mousedown', (e) => {
      if (!modal.contains(e.target) && e.target !== trigger) {
        modal.classList.remove('modal-active')
        document.body.style.overflow = 'auto'
      }
    })
  })

  close && close.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.remove('modal-active')
    document.body.style.overflow = 'auto'
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('modal-active')
      document.body.style.overflow = 'auto'
    }
  })
}

Modal()
