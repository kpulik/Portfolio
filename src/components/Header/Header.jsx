import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage } = header

  return (
    <header className='header'>
      <a href={homepage} className='header__logo' aria-label='home'>
        KP
      </a>
      <Navbar />
    </header>
  )
}

export default Header
