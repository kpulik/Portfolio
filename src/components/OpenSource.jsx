import { contributions } from '../portfolio'
import { splitName } from '../lib/text'

const OpenSource = () => (
  <section className='sec' id='oss'>
    <h2>Open source</h2>
    <div>
      {contributions.map((c) => {
        const [name, sub] = splitName(c.project)
        return (
          <article className='entry' key={c.pr}>
            <p className='when'>{c.prNumber ? `PR #${c.prNumber}` : ''}</p>
            <div>
              <h3>
                <a href={c.projectUrl}>{name}</a>
                {sub && <span className='p-sub'>{sub}</span>}
              </h3>
              <p>{c.description}</p>
              <p className='p-links'>
                <a href={c.pr}>Pull request</a>
                {c.issue && <a href={c.issue}>Issue</a>}
              </p>
              <p className='where'>{c.stack.join(', ')}</p>
            </div>
          </article>
        )
      })}
    </div>
  </section>
)

export default OpenSource
