import { useEffect } from 'react'

/**
 * Adds a `section--visible` class to every `.section` element
 * as it enters the viewport, triggering a CSS fade-up animation.
 * Runs once per element (observer disconnects after firing).
 */
const useScrollAnimation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
}

export default useScrollAnimation
