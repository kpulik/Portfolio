import { about, contact } from '../portfolio'

const Contact = () => {
  const { social } = about
  const links = [
    ['LinkedIn', social.linkedin],
    ['GitHub', social.github],
    ['TryHackMe', social.tryhackme],
    ['HackerRank', social.hackerrank],
    ['Buy me a coffee', contact.buyMeACoffee],
  ].filter(([, href]) => href)

  return (
    <section className='sec contact' id='contact'>
      <h2>Contact</h2>
      <div>
        {contact.email && (
          <a className='mail' href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        )}
        <p className='links'>
          {links.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </p>
        <p className='note'>
          I&rsquo;m currently open to new opportunities. Whether you have a question, want to collaborate, or
          just want to say hi, my inbox is always open.
        </p>
        {contact.buyMeACoffeeQr && (
          <div className='qr'>
            <img src={contact.buyMeACoffeeQr} alt='Buy Me a Coffee QR code' width='96' height='96' />
            <p>Enjoying my work? Scan the code to support my projects.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
