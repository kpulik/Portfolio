import { about, contact } from '../portfolio'

const Hero = () => {
  const [first, ...rest] = about.name.split(' ')

  return (
    <section id='top' className='hero'>
      <h1>
        <span>{first}</span>
        <span>{rest.join(' ')}</span>
      </h1>
      <div>
        <p className='role'>{about.role}</p>
        <p className='lede'>{about.description}</p>
        <p className='actions'>
          <a className='btn primary' href={about.resume}>
            Read the resume
          </a>
          <a className='btn' href={`mailto:${contact.email}`}>
            Email me
          </a>
        </p>
      </div>
    </section>
  )
}

export default Hero
