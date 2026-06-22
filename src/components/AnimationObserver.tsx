'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimationObserver() {
  const pathname = usePathname()

  useEffect(() => {
    // Slight delay to ensure DOM is fully painted after route change
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      )

      const staggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const children = entry.target.querySelectorAll('.stagger-child')
              children.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add('in-view')
                }, index * 80)
              })
              staggerObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
      )

      // Observe all animatable elements
      const animEls = document.querySelectorAll('.anim')
      animEls.forEach((el) => observer.observe(el))

      // Observe stagger containers
      const staggerContainers = document.querySelectorAll('.stagger-container')
      staggerContainers.forEach((el) => staggerObserver.observe(el))
    }, 100)

    return () => {
      clearTimeout(timeout)
    }
  }, [pathname])

  return null
}
