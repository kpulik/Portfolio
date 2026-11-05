import TopBar from './components/TopBar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Work from './components/Work'
import Experience from './components/Experience'
import Credentials from './components/Credentials'
import OpenSource from './components/OpenSource'
import Skills from './components/Skills'
import Contact from './components/Contact'
import SiteFooter from './components/SiteFooter'

const App = () => (
  <>
    <a className='skip' href='#work'>
      Skip to work
    </a>
    <TopBar />
    <main>
      <Hero />
      <Highlights />
      <Work />
      <Experience />
      <Credentials />
      <OpenSource />
      <Skills />
      <Contact />
    </main>
    <SiteFooter />
  </>
)

export default App
