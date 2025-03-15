import uniqid from 'uniqid';
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

/**
 * Projects component that renders a grid of project cards
 * Returns null if no projects are defined in the portfolio
 */
const Projects = () => {
  // Early return if projects array is empty
  if (!projects.length) return null

  return (
    // Main projects section with id for navigation
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      {/* Grid container for project cards */}
      <div className='projects__grid'>
        {/* Map through projects array and render a ProjectContainer for each */}
        {projects.map((project) => (
          <ProjectContainer 
            key={uniqid()}
            project={project} 
          />
        ))}
      </div>
    </section>
  )
}

export default Projects