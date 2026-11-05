import { certifications, education } from '../portfolio'

const Credentials = () => (
  <section className='sec' id='credentials'>
    <h2>Education and credentials</h2>
    <div>
      {education.map((e) => (
        <article className='entry' key={e.degree}>
          <p className='when'>{e.date}</p>
          <div>
            <h3>{e.degree}</h3>
            <p className='where'>
              {e.school}, {e.location}
            </p>
            <p>{e.description}</p>
          </div>
        </article>
      ))}
      {certifications.map((c) => (
        <article className='entry' key={c.name}>
          <p className='when'>
            {c.date}
            <span className={`tag${c.status === 'Earned' ? ' earned' : ''}`}>{c.status}</span>
          </p>
          <div className='cert'>
            {c.image && (
              <a href={c.credentialUrl || undefined} aria-label={`${c.name} badge`}>
                <img src={c.image} alt={`${c.name} badge`} width='72' height='72' />
              </a>
            )}
            <div>
              <h3>{c.name}</h3>
              <p className='where'>
                {c.issuer}
                {c.credentialUrl && (
                  <>
                    {' '}
                    <a href={c.credentialUrl} aria-label={`Verify ${c.name} credential`}>
                      Verify
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default Credentials
