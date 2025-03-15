import { useContext, useState } from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, experience, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {/* Projects Nav */}
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {/* Skills Nav */}
        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {/* Experience Nav */}
        {experience.length ? (
          <li className='nav__list-item'>
            <a
              href='#experience'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Experience
            </a>
          </li>
        ) : null}

        {/* Contact Nav */}
        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

     {/* Theme Button */}
      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      {/* Hamburger Icon for Nav in MOBILE VIEW */}
      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
