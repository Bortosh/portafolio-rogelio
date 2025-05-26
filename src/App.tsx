import { useRef } from 'react';
import HeroContainer from './hero/HeroContainer';
import ContactContainer from './contacts/ContactContainer';
import AboutContainer from './about/AboutContainer';
import ProjectContainer from './projects/ProjectContainer';
import FooterContainer from './footer/FooterContainer';


function App() {

  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scroll-smooth">
      <HeroContainer
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        heroRef={heroRef}
      />
      <AboutContainer
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        heroRef={heroRef}
      />
      <ProjectContainer
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <ContactContainer
        scrollToSection={scrollToSection}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <FooterContainer />
    </div>
  );
}

export default App;