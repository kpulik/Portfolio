import { useState, useEffect } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const roles = ['Cybersecurity Engineer', 'AI / ML Developer', 'Software Engineer']

const About = () => {
  const { name, description, resume, social } = about
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length)
        setVisible(true)
      }, 350)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <section className='about' id='about'>
      <div className='about__eyebrow'>
        <span className='about__dot' aria-hidden='true' />
        Available &middot; Graduating May 2026
      </div>

      {name && <h1 className='about__name'>{name}</h1>}

      <div className='about__role-wrapper' aria-live='polite'>
        <span className={`about__role${visible ? ' about__role--in' : ' about__role--out'}`}>
          {roles[roleIndex]}
        </span>
      </div>

      {description && <p className='about__desc'>{description}</p>}

      <div className='about__actions'>
        {resume && (
          <a
            href={resume}
            className='btn btn--outline'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Resume ↗
          </a>
        )}

        {social && (
          <div className='about__social'>
            {social.github && (
              <a
                href={social.github}
                aria-label='GitHub'
                className='about__social-link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='LinkedIn'
                className='about__social-link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
            {social.tryhackme && (
              <a
                href={social.tryhackme}
                aria-label='TryHackMe'
                className='about__social-link about__tryhackme link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/Portfolio/img/tryhackme-icon.svg' alt='TryHackMe' />
              </a>
            )}
            {social.hackerrank && (
              <a
                href={social.hackerrank}
                aria-label='HackerRank'
                className='about__social-link about__hackerrank link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/Portfolio/img/hackerrank-icon.webp' alt='HackerRank' />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default About
