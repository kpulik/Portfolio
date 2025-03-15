import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  // If Contact ifno is empty in portfolio.js, returns nothing
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>

      {/* Title */}
      <h2 className='section__title'>Contact</h2>

      {/* Email Button */}
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email Me
        </span>
      </a>
    </section>
  )
}

export default Contact
