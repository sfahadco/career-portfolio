/* App — composes every section in order. To add a section: create it under
   src/components/, add it to PORTFOLIO.nav (data.js) for the scroll-spy, and
   drop it into the tree below. To remove one, delete its line here. */
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div style={{ background: 'var(--bg-canvas)', color: 'var(--text-primary)', minHeight: '100vh', fontFamily: 'var(--font-sans)' }}>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
