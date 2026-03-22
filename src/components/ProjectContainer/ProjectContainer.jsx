import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project, index }) => (
  <article className='project'>
    <div className='project__header'>
      <span className='project__num'>
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className='project__links'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='project__link link--icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon fontSize='small' />
          </a>
        )}
        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='project__link link--icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LaunchIcon fontSize='small' />
          </a>
        )}
      </div>
    </div>

    {project.image && (
      <div className='project__image-wrapper'>
        <img
          src={project.image}
          alt={`${project.name} logo`}
          className='project__image'
          loading='lazy'
        />
      </div>
    )}

    <h3 className='project__name'>{project.name}</h3>
    <p className='project__description'>{project.description}</p>

    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
  </article>
)

export default ProjectContainer
