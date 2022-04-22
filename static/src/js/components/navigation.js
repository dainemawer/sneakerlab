const Navigation = () => {
  const trigger = document.getElementById('mobile-navigation-trigger')
  const nav = document.getElementById('mobile-navigation')

  trigger && trigger.addEventListener('click', () => {
    if (!nav.classList.contains('menu-visible')) {
      document.body.classList.add('overflow-hidden')
      nav.classList.add('menu-visible')
      trigger.innerHTML = 'Close'
      nav.setAttribute('aria-hidden', 'false')
      trigger.setAttribute('aria-expanded', 'true')
    } else {
      document.body.classList.remove('overflow-hidden')
      nav.classList.remove('menu-visible')
      trigger.innerHTML = 'Menu'
      nav.setAttribute('aria-hidden', 'true')
      trigger.setAttribute('aria-expanded', 'false')
    }
  })
}

export default Navigation
