import { useContext } from 'react';
import useScrollAnimation from './hooks/useScrollAnimation';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contributions from './components/Contributions/Contributions';
import Certifications from './components/Certifications/Certifications';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  useScrollAnimation();

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contributions />
        <Certifications />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
