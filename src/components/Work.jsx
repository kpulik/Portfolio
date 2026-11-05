import { projects } from '../portfolio'
import { splitName } from '../lib/text'

// Groups match by name prefix. Any project not listed lands in "More projects",
// so new entries in portfolio.js always show up.
const GROUPS = [
  {
    title: 'Security and systems',
    open: true,
    prefixes: ['AutoSIEM', 'Security Toolkit API', 'Toyota', 'Secure Home Lab'],
  },
  { title: 'Software tools', prefixes: ['GroupUs', 'VaultChat', 'AI Dev Utility'] },
  {
    title: 'Machine learning',
    prefixes: ['Breast Cancer', 'Handwritten Digit', 'Diabetes', 'Transformer', 'Automotive Drowsiness'],
  },
  { title: 'Math and finance', prefixes: ['Linear Algebra', 'Quantitative Stock'] },
]

const groupFor = (project) => GROUPS.findIndex((g) => g.prefixes.some((p) => project.name.startsWith(p)))

const Work = () => {
  const buckets = [...GROUPS.map((g) => ({ ...g, items: [] })), { title: 'More projects', items: [] }]
  projects.forEach((p) => {
    const i = groupFor(p)
    buckets[i === -1 ? buckets.length - 1 : i].items.push(p)
  })

  return (
    <section className='sec' id='work'>
      <h2>Selected work</h2>
      <div>
        {buckets
          .filter((b) => b.items.length)
          .map((b) => (
            <div className='group' key={b.title}>
              <h3>{b.title}</h3>
              <div className='list'>
                {b.items.map((p) => {
                  const [name, sub] = splitName(p.name)
                  return (
                    <details className='proj' key={p.name} open={b.open || undefined}>
                      <summary>
                        <span className='p-name'>
                          {name}
                          {sub && <span className='p-sub'>{sub}</span>}
                        </span>
                        <span className='p-stack'>{p.stack.join(', ')}</span>
                        <i className='plus' aria-hidden='true' />
                      </summary>
                      <div className='p-body'>
                        <p>{p.description}</p>
                        {p.sourceCode && (
                          <p className='p-links'>
                            <a href={p.sourceCode}>Source code</a>
                          </p>
                        )}
                      </div>
                    </details>
                  )
                })}
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Work
