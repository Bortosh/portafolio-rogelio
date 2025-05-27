import React from 'react'
import DynamicStackText from './components/DynamicStackText'
import PhotoProfile from './components/PhotoProfile'
import SoftSkills from './components/SoftSkills'
import ScrollBoton from '../components/ScrollBoton'

type AboutContainerProps = {
    aboutRef: React.RefObject<HTMLElement | null>
    projectsRef: React.RefObject<HTMLElement | null>
    heroRef: React.RefObject<HTMLElement | null>
}

const AboutContainer = ({ heroRef, projectsRef, aboutRef }: AboutContainerProps) => {

    return (
        <section
            ref={aboutRef}
            className="relative min-h-screen bg-brand-about-bg text-brand-light flex items-center px-4 sm:px-8 lg:px-16 py-20 pb-24"
        >
            <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row gap-10 items-start justify-center">
                <PhotoProfile />
                <div className="flex flex-col gap-6 max-w-5xl text-lg sm:text-xl text-brand-light/90 leading-relaxed">
                    <h2 className="text-4xl sm:text-5xl font-title font-bold mb-2 text-brand-light">
                        Sobre mí
                    </h2>

                    <p>
                        Soy desarrollador de software enfocado en el desarrollo frontend con más de 5 años de experiencia creando interfaces modernas,
                        accesibles y centradas en el usuario. Me apasiona transformar ideas en productos funcionales
                        que combinan diseño limpio con un código bien estructurado.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Experto en React y TypeScript con enfoque en Clean Code.</li>
                        <li>Colaborador en equipos ágiles con enfoque en el usuario final.</li>
                        <li>Apasionado por optimizar rendimiento y accesibilidad.</li>
                    </ul>

                    <p className="italic text-brand-light/70">
                        “Una buena interfaz es como una buena conversación: clara, fluida y humana.”
                    </p>

                    <div>
                        <h3 className="text-2xl font-semibold font-title text-brand-light mt-4 mb-2">
                            Actualmente estoy buscando
                        </h3>
                        <p>
                            Oportunidades remotas como Frontend Developer donde pueda aportar valor en proyectos reales,
                            colaborar en equipos modernos y seguir creciendo en tecnologías como React, TypeScript y arquitectura escalable.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold font-title text-brand-light mt-6 mb-2">
                            Lo que me diferencia
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-brand-light/80">
                            <li>Pienso como diseñador, pero ejecuto como desarrollador.</li>
                            <li>Convierto requisitos ambiguos en interfaces claras y usables.</li>
                            <li>No solo escribo código, entrego experiencias fluidas.</li>
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4 text-sm sm:text-base">
                        <SoftSkills />
                    </div>
                    <div className="pt-1">
                        <DynamicStackText />
                    </div>
                </div>
            </div>

            <ScrollBoton
                ref={heroRef}
                text='↑ Inicio'
                position={'up'}
            />
            <ScrollBoton
                ref={projectsRef}
                text='↓ Proyectos'
                position={'down'}
            />
        </section>
    )
}

export default AboutContainer
