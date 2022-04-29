const AddToCart = () => {
  const triggers = document.querySelectorAll('[data-add-to-cart]')
  const panel = document.getElementById('add-to-cart-modal')

  triggers.forEach(trigger => {
    // Handle Click Event
    trigger.addEventListener('click', (e) => {
      e.preventDefault()
      if (!panel.classList.contains('add-to-cart-active')) {
        panel.classList.add('add-to-cart-active')
        document.body.classList.add('atc-overlay-active')
      } else {
        panel.classList.remove('add-to-cart-active')
        document.body.classList.remove('atc-overlay-active')
      }
    })

    document.addEventListener('mousedown', (e) => {
      if (!panel.contains(e.target) && e.target !== trigger) {
        panel.classList.remove('add-to-cart-active')
        document.body.classList.remove('atc-overlay-active')
      }
    })
  })

  // Handle Escape Key Event
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      panel.classList.remove('add-to-cart-active')
      document.body.classList.remove('atc-overlay-active')
    }
  })
}

AddToCart()
