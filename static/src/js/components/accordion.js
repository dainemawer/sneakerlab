/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
*   Simple accordion pattern example
*/

const Accordion = () => {
  Array.prototype.slice.call(document.querySelectorAll('.accordion')).forEach(function (accordion) {
    const allowMultiple = accordion.hasAttribute('data-allow-multiple')
    const allowToggle = (!allowMultiple) ? accordion.hasAttribute('data-allow-toggle') : allowMultiple

    const triggers = Array.prototype.slice.call(accordion.querySelectorAll('.accordion-trigger'))

    accordion.addEventListener('click', function (event) {
      const target = event.target

      if (target.classList.contains('accordion-trigger')) {
        const isExpanded = target.getAttribute('aria-expanded') === 'true'
        const active = accordion.querySelector('[aria-expanded="true"]')

        if (!allowMultiple && active && active !== target) {
          active.setAttribute('aria-expanded', 'false')
          document.getElementById(active.getAttribute('aria-controls')).setAttribute('hidden', '')

          if (!allowToggle) {
            active.removeAttribute('aria-disabled')
          }
        }

        if (!isExpanded) {
          target.setAttribute('aria-expanded', 'true')
          document.getElementById(target.getAttribute('aria-controls')).removeAttribute('hidden')

          if (!allowToggle) {
            target.setAttribute('aria-disabled', 'true')
          }
        } else if (allowToggle && isExpanded) {
          target.setAttribute('aria-expanded', 'false')
          document.getElementById(target.getAttribute('aria-controls')).setAttribute('hidden', '')
        }

        event.preventDefault()
      }
    })

    accordion.addEventListener('keydown', function (event) {
      const target = event.target
      const key = event.which.toString()

      const ctrlModifier = (event.ctrlKey && key.match(/33|34/));

      if (target.classList.contains('accordion-trigger')) {
        if (key.match(/38|40/) || ctrlModifier) {
          const index = triggers.indexOf(target)
          const direction = (key.match(/34|40/)) ? 1 : -1
          const length = triggers.length
          const newIndex = (index + length + direction) % length

          triggers[newIndex].focus()

          event.preventDefault()
        } else if (key.match(/35|36/)) {
          switch (key) {
            case '36':
              triggers[0].focus()
              break
            case '35':
              triggers[triggers.length - 1].focus()
              break
          }
          event.preventDefault()
        }
      }
    })

    // These are used to style the accordion when one of the buttons has focus
    accordion.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
      trigger.addEventListener('focus', function (event) {
        accordion.classList.add('focus')
      })

      trigger.addEventListener('blur', function (event) {
        accordion.classList.remove('focus')
      })
    })

    if (!allowToggle) {
      const expanded = accordion.querySelector('[aria-expanded="true"]')
      if (expanded) {
        expanded.setAttribute('aria-disabled', 'true')
      }
    }
  })
}

Accordion()
