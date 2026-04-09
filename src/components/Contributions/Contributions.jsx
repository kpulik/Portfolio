import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import { contributions } from '../../portfolio'
import './Contributions.css'

const Contributions = () => {
  if (!contributions.length) return null

  return (
    <section className='section contributions' id='contributions'>
      <h2 className='section__title'>Open Source Contributions</h2>
      <div className='contributions__list'>
        {contributions.map((c) => (
          <article key={c.pr} className='contrib'>
            <div className='contrib__header'>
              <a
                href={c.projectUrl}
                className='contrib__project'
                target='_blank'
                rel='noopener noreferrer'
              >
                {c.project}
              </a>
              <div className='contrib__links'>
                {c.issue && (
                  <a
                    href={c.issue}
                    className='contrib__link link--icon'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='related issue'
                    title='Issue'
                  >
                    <LaunchIcon fontSize='small' />
                  </a>
                )}
                <a
                  href={c.pr}
                  className='contrib__link link--icon'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='pull request'
                  title='Pull Request'
                >
                  <GitHubIcon fontSize='small' />
                </a>
              </div>
            </div>

            <p className='contrib__desc'>{c.description}</p>

            <div className='contrib__footer'>
              {c.stack && (
                <ul className='contrib__stack'>
                  {c.stack.map((tag) => (
                    <li key={tag} className='contrib__stack-item'>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
              <a
                href={c.pr}
                className='contrib__pr-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                View PR &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Contributions
