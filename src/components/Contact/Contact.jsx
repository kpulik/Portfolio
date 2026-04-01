import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const coffeeLinkLabel = contact.buyMeACoffee
    ? contact.buyMeACoffee.replace(/^https?:\/\//, '')
    : ''

  if (!contact.email && !contact.buyMeACoffee && !contact.buyMeACoffeeQr) {
    return null
  }

  return (
    <section className='section contact' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact__wrapper'>
        <p className='contact__copy'>
          I&rsquo;m currently open to new opportunities. Whether you have a
          question, want to collaborate, or just want to say hi, my inbox is
          always open.
        </p>
        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className='btn btn--outline contact__btn'
          >
            Say Hello ↗
          </a>
        )}

        {contact.buyMeACoffeeQr && (
          <div className='contact__support'>
            <p className='contact__support-title'>Enjoying my work?</p>
            <p className='contact__support-copy'>
              Scan this QR code to support my projects on Buy Me a Coffee.
            </p>
            <a
              href={contact.buyMeACoffee || '#contact'}
              className='contact__qr-link'
              target={contact.buyMeACoffee ? '_blank' : undefined}
              rel={contact.buyMeACoffee ? 'noreferrer' : undefined}
              aria-label='Open Buy Me a Coffee page'
            >
              <span className='contact__qr-frame'>
                <img
                  className='contact__qr-image'
                  src={contact.buyMeACoffeeQr}
                  alt='Buy Me a Coffee QR code'
                  loading='lazy'
                />
              </span>
              <span className='contact__qr-caption'>
                Scan or tap to buy me a coffee ↗
              </span>
            </a>

            {contact.buyMeACoffee && (
              <a
                href={contact.buyMeACoffee}
                className='btn btn--outline contact__support-btn'
                target='_blank'
                rel='noreferrer'
              >
                {coffeeLinkLabel} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
