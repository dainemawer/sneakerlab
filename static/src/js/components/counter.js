const Counter = () => {
  const cartItems = document.querySelectorAll('[data-cart-item]')

  cartItems.forEach(item => {
    let count = 1
    const increment = item.querySelector('[data-cart-increment]')
    const decrement = item.querySelector('[data-cart-decrement]')
    const counter = item.querySelector('[name="quantity"]')

    increment.addEventListener('click', (e) => {
      e.preventDefault()
      count++
      counter.value = count
    })

    decrement.addEventListener('click', (e) => {
      e.preventDefault()
      if (count > 1) {
        count--
        counter.value = count
      }
    })
  })
}

Counter()
