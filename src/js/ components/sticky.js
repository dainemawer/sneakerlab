const isSticky = () => {
  const el = document.querySelector('.sticky')
  const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1), { threshold: [1] })

  observer.observe(el)
}

export default isSticky
