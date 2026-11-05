import { skillCategories } from '../portfolio'

const Skills = () => (
  <section className='sec' id='skills'>
    <h2>Skills</h2>
    <div className='skills'>
      {skillCategories.map((s) => (
        <div className='skill' key={s.label}>
          <h3>{s.label}</h3>
          <p>{s.items.join(', ')}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Skills
