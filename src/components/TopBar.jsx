import { about, header } from '../portfolio'

const TopBar = () => (
  <header className='top'>
    <a className='mark' href='#top'>
      {header.title}
    </a>
    <nav aria-label='Sections'>
      <a href='#work'>Work</a>
      <a href='#experience'>Experience</a>
      <a href='#credentials'>Credentials</a>
      <a href='#contact'>Contact</a>
    </nav>
    <a className='btn' href={about.resume}>
      Resume
    </a>
  </header>
)

export default TopBar
