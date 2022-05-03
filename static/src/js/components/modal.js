const Modal = () => {
  const triggers = document.querySelectorAll('[data-trigger-modal]')
  const close = document.querySelector('[data-close-modal]')
  const modal = document.querySelector('[data-modal]')

  triggers && triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault()

      if (!modal.classList.contains('modal-active')) {
        modal.classList.add('modal-active')
        document.body.style.overflow = 'hidden'
        e.target.setAttribute('aria-expanded', 'true')
        modal.setAttribute('aria-hidden', 'false')
      } else {
        modal.classList.remove('modal-active')
        document.body.style.overflow = 'auto'
        e.target.setAttribute('aria-expanded', 'false')
        modal.setAttribute('aria-hidden', 'true')
      }
    })

    document.addEventListener('mousedown', (e) => {
      if (!modal.contains(e.target) && e.target !== trigger) {
        modal.classList.remove('modal-active')
        document.body.style.overflow = 'auto'
        trigger.setAttribute('aria-expanded', 'false')
        modal.setAttribute('aria-hidden', 'true')
      }
    })

    close && close.addEventListener('click', (e) => {
      e.preventDefault()
      modal.classList.remove('modal-active')
      document.body.style.overflow = 'auto'
      trigger.setAttribute('aria-expanded', 'false')
      modal.setAttribute('aria-hidden', 'true')
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.classList.remove('modal-active')
        document.body.style.overflow = 'auto'
        trigger.setAttribute('aria-expanded', 'false')
        modal.setAttribute('aria-hidden', 'true')
      }
    })
  })
}

Modal()
