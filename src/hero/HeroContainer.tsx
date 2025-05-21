import React from "react";
import HeroBtn from "./components/HeroBtn";
import { Typewriter } from 'react-simple-typewriter';

type HeroContainerProps = {
    scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void
    aboutRef: React.RefObject<HTMLElement | null>
    projectsRef: React.RefObject<HTMLElement | null>
    contactRef: React.RefObject<HTMLElement | null>
    heroRef: React.RefObject<HTMLElement | null>
}

const HeroContainer = ({ scrollToSection, aboutRef, projectsRef, contactRef, heroRef }: HeroContainerProps) => {



    return (
        <section ref={heroRef} className="h-screen bg-brand-bg text-white flex flex-col justify-center items-center px-4">
            <h1 className="animate-fade-up font-title text-3xl sm:text-4xl md:text-5xl font-bold text-brand-light leading-tight tracking-wide text-center">
                Rogelio Ramírez Carmona
            </h1>
            <p className="font-body text-xl font-semibold mt-6 text-brand-light tracking-wide">
                Frontend Developer
            </p>
            <p className="font-mono text-sm sm:text-base lg:text-lg mt-2 text-brand-light opacity-70 max-w-md md:max-w-lg lg:max-w-xl text-center">
                <Typewriter
                    words={[
                        'Cada píxel cuenta, cada línea comunica.',
                        'Transformo ideas en interfaces vivas.',
                        'Codeando ideas simples con impacto real.',
                        'Componentes limpios, arquitectura escalable.',
                        'Código que se lee tan bien como funciona.',
                        'Diseños que resuelven problemas reales.',
                        'Experiencias que generan confianza.'
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={2000}
                />
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                {[
                    { label: 'Sobre mí', ref: aboutRef },
                    { label: 'Proyectos', ref: projectsRef },
                    { label: 'Contacto', ref: contactRef },
                ].map((btn, i) => (
                    <HeroBtn btn={btn} i={i} scrollToSection={scrollToSection} />
                ))}
            </div>
        </section>

    )
}

export default HeroContainer;