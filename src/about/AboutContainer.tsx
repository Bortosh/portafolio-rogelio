import React from 'react'
import { motion } from "framer-motion";
import DynamicStackText from './components/DynamicStackText'
import fotoPerfil from '../assets/rogelio-porfolio-removebg-preview.png'

type AboutContainerProps = {
    scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void
    aboutRef: React.RefObject<HTMLElement | null>
    projectsRef: React.RefObject<HTMLElement | null>
    heroRef: React.RefObject<HTMLElement | null>
}

function AboutContainer({ scrollToSection, heroRef, projectsRef, aboutRef }: AboutContainerProps) {


    return (
        <section
            ref={aboutRef}
            className="relative min-h-screen bg-brand-about-bg text-brand-light flex items-center px-4 sm:px-8 lg:px-16 py-20 pb-24"
        >
            <div className="max-w-7xl mx-auto w-full flex flex-col sm:gap-6">
                {/* Texto principal */}
                <div>
                    <h2 className="text-4xl sm:text-5xl font-title font-bold mb-6 text-brand-light">
                        Sobre mí
                    </h2>
                    <p className="font-body text-lg sm:text-xl leading-relaxed text-brand-light opacity-90">
                        Soy desarrollador de software enfocado en el desarrollo frontend con más de 5 años de experiencia creando interfaces modernas,
                        accesibles y centradas en el usuario. Me apasiona transformar ideas en productos funcionales
                        que combinan diseño limpio con un código bien estructurado.
                    </p>

                    <ul className="list-disc pl-6 mt-6 space-y-3 text-brand-light/90 text-base sm:text-lg">
                        <li>Experto en React y TypeScript con enfoque en Clean Code.</li>
                        <li>Colaborador en equipos ágiles con enfoque en el usuario final.</li>
                        <li>Apasionado por optimizar rendimiento y accesibilidad.</li>
                    </ul>

                    <p className="italic text-2xl text-brand-light/60 mt-6 max-w-4xl">
                        “Una buena interfaz es como una buena conversación: clara, fluida y humana.”
                    </p>

                    <div>
                        <h3 className="text-2xl font-semibold font-title text-brand-light mt-8 mb-3">
                            Actualmente estoy buscando
                        </h3>
                        <p className="font-body text-lg sm:text-xl leading-relaxed text-brand-light opacity-70">
                            Oportunidades remotas como Frontend Developer donde pueda aportar valor en proyectos reales,
                            colaborar en equipos modernos y seguir creciendo en tecnologías como React, TypeScript y arquitectura escalable.
                        </p>
                    </div>
                </div>

                {/* Tecnologías */}
                <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="flex-1">
                        <DynamicStackText />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="w-72 h-96 border border-brand-light/20 rounded-xl overflow-hidden bg-brand-about-bg"
                    >
                        <div className="w-72 h-96 border border-brand-about-bg/20 rounded-xl overflow-hidden bg-brand-about-bg">
                            <img
                                src={fotoPerfil}
                                alt="Rogelio Ramírez"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>



                </div>
            </div>

            {/* Botón: Ir a inicio */}
            <button
                onClick={() => scrollToSection(heroRef)}
                className="absolute top-6 right-6 border border-brand-light rounded-xs text-base px-10 py-2 hover:bg-brand-light hover:text-brand-bg transition duration-300 cursor-pointer shadow-sm"
            >
                ↑ Inicio
            </button>

            {/* Botón: Ir a Proyectos */}
            <button
                onClick={() => scrollToSection(projectsRef)}
                className="absolute bottom-6 right-6 border border-brand-light rounded-xs text-base px-6 py-2 hover:bg-brand-light hover:text-brand-bg transition duration-300 cursor-pointer shadow-sm"
            >
                ↓ Proyectos
            </button>
        </section>
    )
}

export default AboutContainer;
