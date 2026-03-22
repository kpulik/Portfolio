import { skills } from '../../portfolio'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    label: 'Languages',
    items: ['Java', 'C/C++', 'Python', 'SQL'],
  },
  {
    label: 'Security',
    items: [
      'Network Security',
      'Firewalls',
      'Cloud Security',
      'AWS Security Best Practices',
      'TCP/IP',
      'Access Control',
      'Data Integrity',
      'Trusted Execution Environment (TEE)',
      'X25519 / X448 ECDH',
    ],
  },
  {
    label: 'Systems',
    items: [
      'UNIX Systems Programming',
      'Arm64 QEMU',
      'Ethernet',
      'Object-Oriented Design',
      'Software Design Patterns',
      'Algorithms',
      'Data Structures',
      'Database Design & Normalization',
    ],
  },
  {
    label: 'Tools & Cloud',
    items: ['AWS', 'Git'],
  },
]

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <div className='skills__grid'>
        {SKILL_CATEGORIES.map(({ label, items }) => (
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
