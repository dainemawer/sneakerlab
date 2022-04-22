const PopUpNewsletter = () => {
  const panel = document.getElementById('popup-newsletter-modal')

  setTimeout(() => {
    panel.classList.add('popup-newsletter-active')
    document.body.classList.add('overlay-active')
  }, 3000)

  // Handle Escape Key Event
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      panel.classList.remove('popup-newsletter-active')
      document.body.classList.remove('overlay-active')
    }
  })

  // Handle Click Outside
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target)) {
      panel.classList.remove('popup-newsletter-active')
      document.body.classList.remove('overlay-active')
    }
  })
}

export default PopUpNewsletter
