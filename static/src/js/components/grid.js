const Grid = () => {
  const buttons = document.querySelectorAll('[data-grid]')
  // const gridOptionTwo = document.querySelector('[data-grid="grid-2"]')
  const grid = document.getElementById('grid-toggle')

  for (const button of buttons) {
    button.addEventListener('click', (event) => {
      const { target } = event
      const active = document.querySelector('.grid-active')

      if (active) {
        active.classList.remove('grid-active')
      }

      target.classList.add('grid-active')

      if (target.dataset.columns === '4') {
        grid.classList.remove('md:grid-cols-2')
        grid.classList.add('md:grid-cols-4')
        grid.classList.add('grid-cols-2')
      } else {
        grid.classList.remove('grid-cols-2')
        grid.classList.remove('md:grid-cols-4')
        grid.classList.add('md:grid-cols-2')
      }
    })
  }
}

Grid()
