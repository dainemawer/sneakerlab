const Filter = () => {
  const trigger = document.querySelector('[data-filter-trigger]')
  const panel = document.getElementById('filter-dropdown')

  trigger && trigger.addEventListener('click', () => {
    if (!panel.classList.contains('filter-active')) {
      trigger.innerHTML = 'Filter-'
      trigger.setAttribute('aria-expanded', 'true')
      panel.setAttribute('aria-hidden', 'false')
      panel.classList.add('filter-active')
    } else {
      trigger.innerHTML = 'Filter+'
      trigger.setAttribute('aria-expanded', 'false')
      panel.setAttribute('aria-hidden', 'true')
      panel.classList.remove('filter-active')
    }
  })
}

export default Filter