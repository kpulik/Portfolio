import { experience, education } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  const items = [
    ...education.map(e => ({
      type: 'education',
      date: e.date,
      title: e.degree,
      subtitle: `${e.school} · ${e.location}`,
      desc: e.description,
    })),
    ...experience.map(e => ({
      type: 'work',
      date: e.date,
      title: e.title,
      subtitle: `${e.company} · ${e.location}`,
      desc: e.description,
    })),
  ]

  if (!items.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='timeline'>
        {items.map((item, i) => (
          <div key={i} className={`timeline-item timeline-item--${item.type}`}>
            <div className='timeline-date'>{item.date}</div>
            <h3 className='timeline-title'>{item.title}</h3>
            <div className='timeline-subtitle'>{item.subtitle}</div>
            <p className='timeline-desc'>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
