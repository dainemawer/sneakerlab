const Search = () => {
  const triggers = document.querySelectorAll('[data-id="js-trigger-search"]')

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault()
      const search = document.getElementById('search')

      if (!search.classList.contains('is-active')) {
        search.classList.add('is-active')
        document.body.classList.add('search-active')
      } else {
        search.classList.remove('is-active')
        document.body.classList.remove('search-active')
      }
    })
  })
}

export default Search
