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
          <p className='when'>{c.date || c.status}</p>
          <div>
            <h3>{c.credentialUrl ? <a href={c.credentialUrl}>{c.name}</a> : c.name}</h3>
            <p className='where'>
              {c.issuer}
              {c.status !== 'Earned' && `, ${c.status}`}
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default Credentials
