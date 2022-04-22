const Search = () => {
  const triggers = document.querySelectorAll('[data-id="js-trigger-search"]')
  const close = document.getElementById('close-search')
  const search = document.getElementById('search')

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault()
      if (!search.classList.contains('panel-active')) {
        search.classList.add('panel-active')
        document.body.classList.add('search-active')
      } else {
        search.classList.remove('panel-active')
        document.body.classList.remove('search-active')
      }
    })
  })

  close && close.addEventListener('click', (e) => {
    e.preventDefault()
    if (search.classList.contains('panel-active')) {
      search.classList.remove('panel-active')
      document.body.classList.remove('search-active')
    }
  })
}

export default Search
