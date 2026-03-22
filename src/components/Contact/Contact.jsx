import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact__wrapper'>
        <p className='contact__copy'>
          I&rsquo;m currently open to new opportunities. Whether you have a
          question, want to collaborate, or just want to say hi, my inbox is
          always open.
        </p>
        <a
          href={`mailto:${contact.email}`}
          className='btn btn--outline contact__btn'
        >
          Say Hello ↗
        </a>
      </div>
    </section>
  )
}

export default Contact
