import { experience } from '../portfolio'

const Experience = () => (
  <section className='sec' id='experience'>
    <h2>Experience</h2>
    <div>
      {experience.map((e) => (
        <article className='entry' key={`${e.title}-${e.date}`}>
          <p className='when'>{e.date}</p>
          <div>
            <h3>{e.title}</h3>
            <p className='where'>
              {e.company}, {e.location}
            </p>
            <p>{e.description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default Experience
