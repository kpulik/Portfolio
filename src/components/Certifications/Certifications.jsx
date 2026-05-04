import { certifications } from '../../portfolio'
import './Certifications.css'

const Certifications = () => {
  if (!certifications.length) return null

  return (
    <section className='section certifications' id='certifications'>
      <h2 className='section__title'>Certifications</h2>
      <ul className='cert__list'>
        {certifications.map((cert) => (
          <li
            key={cert.name}
            className={`cert__item ${cert.issuer === 'CompTIA' || cert.name?.toLowerCase().includes('comptia') ? 'cert__item--large-logo' : ''}`}
          >
            <div className='cert__left'>
              {cert.image && (
                <a href={cert.credentialUrl} target='_blank' rel='noopener noreferrer' className='cert__logo-link'>
                  <img src={cert.image} alt={`${cert.name} badge`} className='cert__logo' />
                </a>
              )}

              <div className='cert__meta'>
                <span className='cert__name'>{cert.name}</span>
                <span className='cert__issuer'>{cert.issuer}</span>
                <span className='cert__date'>Earned: {cert.date}</span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='cert__verify'
                    aria-label={`Verify ${cert.name} credential`}
                  >
                    Verify
                  </a>
                )}
              </div>
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
