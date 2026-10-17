import { skillCategories } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skillCategories.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <div className='skills__grid'>
        {skillCategories.map(({ label, items }) => (
          <div key={label} className='skills__category'>
            <h4 className='skills__category-label'>{label}</h4>
            <ul className='skills__list'>
              {items.map((skill) => (
                <li key={skill} className='skills__item'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
