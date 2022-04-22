const isSticky = () => {
  const sticky = document.querySelector('.sticky')

  const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1),
    { threshold: [1] }
  )

  observer.observe(sticky)
}

export default isSticky
