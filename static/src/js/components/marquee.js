const Marquee = () => {
  const elements = document.querySelectorAll('.marquee')
  const lastScrollPos = 0
  let speed = 4
  let timer

  elements.forEach(function (el) {
    const container = el.querySelector('.inner')
    const content = el.querySelector('.inner > *')

    const elWidth = content.offsetWidth

    const clone = content.cloneNode(true)
    container.appendChild(clone)

    let progress = 1
    function loop () {
      progress = progress - speed
      if (progress <= elWidth * -1) {
        progress = 0
      }

      container.style.transform = 'translateX(' + progress + 'px)'
      container.style.transform += 'skewX(' + speed * 0.4 + 'deg)'
      window.requestAnimationFrame(loop)
    }

    loop()
  })

  window.addEventListener('scroll', function () {
    const maxScrollValue = 12
    const newScrollPos = window.scrollY
    let scrollValue = newScrollPos - lastScrollPos
    if (scrollValue > maxScrollValue) scrollValue = maxScrollValue
    else if (scrollValue < -maxScrollValue) scrollValue = -maxScrollValue
    speed = scrollValue
    clearTimeout(timer)
    timer = setTimeout(handleSpeedClear, 10);
  });
  function handleSpeedClear () {
    speed = 2
  }
}

export default Marquee
