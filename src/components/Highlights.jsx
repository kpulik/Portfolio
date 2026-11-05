import { contributions, projects } from '../portfolio'
import { splitName } from '../lib/text'

// Everything here is the first sentence of an existing entry in portfolio.js, unedited.
const firstSentence = (text) => {
  const i = text.indexOf('. ')
  return i === -1 ? text : text.slice(0, i + 1)
}

const PROJECT_PREFIXES = ['AutoSIEM', 'Security Toolkit API', 'Toyota']

const Highlights = () => {
  const picks = PROJECT_PREFIXES.map((prefix) => projects.find((p) => p.name.startsWith(prefix)))
    .filter(Boolean)
    .map((p) => ({
      key: p.name,
      title: splitName(p.name)[0],
      text: firstSentence(p.description),
      link: p.sourceCode ? { label: 'Source code', href: p.sourceCode } : { label: 'Read more', href: '#work' },
    }))

  const merged = contributions.find((c) => c.prNumber)
  if (merged) {
    picks.push({
      key: merged.pr,
      title: splitName(merged.project)[0],
      text: firstSentence(merged.description),
      link: { label: `Pull request #${merged.prNumber}`, href: merged.pr },
    })
  }

  return (
    <section className='band' aria-labelledby='picks-h'>
      <h2 id='picks-h'>Start with these four</h2>
      <ul className='picks'>
        {picks.map((p) => (
          <li className='pick' key={p.key}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <a href={p.link.href}>{p.link.label}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Highlights
