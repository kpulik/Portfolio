import { useEffect, useState } from 'react'

const ScrollTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null
  return (
    <a className='scrolltop' href='#top'>
      Back to top
    </a>
  )
}

export default ScrollTop
