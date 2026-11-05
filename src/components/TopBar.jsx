import { about, header } from '../portfolio'
import ThemeToggle from './ThemeToggle'

const TopBar = () => (
  <header className='top'>
    <a className='mark' href='#top'>
      {header.title}
    </a>
    <nav aria-label='Sections'>
      <a href='#work'>Work</a>
      <a href='#experience'>Experience</a>
      <a href='#credentials'>Credentials</a>
      <a href='#oss'>Open source</a>
      <a href='#skills'>Skills</a>
      <a href='#contact'>Contact</a>
    </nav>
    <ThemeToggle />
    <a className='btn' href={about.resume}>
      Resume
    </a>
  </header>
)

export default TopBar
