import { useEffect, useState } from 'react'
import { about, contact } from '../portfolio'

// Positioning and availability carried over from the previous site, where they were hard-coded in the hero.
const ROLES = ['Cybersecurity Engineer', 'AI / ML Developer', 'Software Engineer']
const STATUS = 'Graduated May 2026. Available now.'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const Hero = () => {
  const [first, ...rest] = about.name.split(' ')
  const [i, setI] = useState(0)
  const [still] = useState(prefersReducedMotion)

  useEffect(() => {
    if (still) return undefined
    const id = setInterval(() => setI((n) => (n + 1) % ROLES.length), 3200)
    return () => clearInterval(id)
  }, [still])

  const { social } = about
  const links = [
    ['GitHub', social.github],
    ['LinkedIn', social.linkedin],
    ['TryHackMe', social.tryhackme],
    ['HackerRank', social.hackerrank],
  ].filter(([, href]) => href)

  return (
    <section id='top' className='hero'>
      <h1>
        <span>{first}</span>
        <span>{rest.join(' ')}</span>
      </h1>
      <div>
        <p className='status'>
          <i aria-hidden='true' />
          {STATUS}
        </p>
        <p className='role'>
          {still ? (
            ROLES.join(', ')
          ) : (
            <>
              <span className='sr'>{ROLES.join(', ')}</span>
              <span className='cycle' key={i} aria-hidden='true'>
                {ROLES[i]}
              </span>
            </>
          )}
        </p>
        <p className='lede'>{about.description}</p>
        <p className='actions'>
          <a className='btn primary' href={about.resume}>
            Read the resume
          </a>
          <a className='btn' href={`mailto:${contact.email}`}>
            Email me
          </a>
        </p>
        <p className='social'>
          {links.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </p>
      </div>
    </section>
  )
}

export default Hero
