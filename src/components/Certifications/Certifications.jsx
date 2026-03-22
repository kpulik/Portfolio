import { certifications } from '../../portfolio'
import './Certifications.css'

const Certifications = () => {
  if (!certifications.length) return null

  return (
    <section className='section certifications' id='certifications'>
      <h2 className='section__title'>Certifications</h2>
      <ul className='cert__list'>
        {certifications.map((cert) => (
          <li key={cert.name} className='cert__item'>
            <div className='cert__left'>
              <span className='cert__name'>{cert.name}</span>
              <span className='cert__issuer'>{cert.issuer} &middot; {cert.date}</span>
            </div>
            <span className={`cert__badge cert__badge--${cert.status === 'Earned' ? 'earned' : 'progress'}`}>
              {cert.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Certifications
