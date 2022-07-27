const Filter = () => {
  const trigger = document.querySelector('[data-filter-trigger]')
  const panel = document.getElementById('filter-dropdown')

  trigger && trigger.addEventListener('click', () => {
    if (!panel.classList.contains('filter-active')) {
      trigger.innerHTML = 'Filter-'
      trigger.classList.add('focus:opacity-50')
      trigger.setAttribute('aria-expanded', 'true')
      panel.setAttribute('aria-hidden', 'false')
      panel.classList.add('filter-active')
    } else {
      trigger.innerHTML = 'Filter+'
      trigger.classList.remove('focus:opacity-50')
      trigger.setAttribute('aria-expanded', 'false')
      panel.setAttribute('aria-hidden', 'true')
      panel.classList.remove('filter-active')
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      trigger.innerHTML = 'Filter+'
      trigger.setAttribute('aria-expanded', 'false')
      panel.setAttribute('aria-hidden', 'true')
      panel.classList.remove('filter-active')
    }
  })

  document.addEventListener('mousedown', (e) => {
    if (!panel.contains(e.target) && e.target !== trigger) {
      trigger.innerHTML = 'Filter+'
      trigger.setAttribute('aria-expanded', 'false')
      panel.setAttribute('aria-hidden', 'true')
      panel.classList.remove('filter-active')
    }
  })
}

Filter()
