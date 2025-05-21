import { useRef } from 'react';
import HeroContainer from './hero/HeroContainer';
import ContactContainer from './contacts/ContactContainer';
import AboutContainer from './about/AboutContainer';
import ProjectContainer from './projects/ProjectContainer';
import FooterContainer from './footer/FooterContainer';


function App() {

  // Referencias
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  // Función para hacer scroll suave
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scroll-smooth">
      {/* Hero */}

      <HeroContainer
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        heroRef={heroRef}
      />

      {/* Sobre mí */}
      <AboutContainer
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        heroRef={heroRef}
      />

      {/* Proyectos */}
      <ProjectContainer
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      {/* Contacto */}
      <ContactContainer
        scrollToSection={scrollToSection}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      {/* Footer */}
      <FooterContainer />
    </div>
  );
}

export default App;