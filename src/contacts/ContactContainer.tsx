import React from 'react'

type ContactContainerProps = {
    scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void
    projectsRef: React.RefObject<HTMLElement | null>
    contactRef: React.RefObject<HTMLElement | null>
}

const ContactContainer = ({ scrollToSection, projectsRef, contactRef }: ContactContainerProps) => {

    return (
        <section ref={contactRef} className="min-h-screen bg-brand-contact-bg text-brand-light flex flex-col justify-center items-center px-4 sm:px-8 py-20 text-center">
            <div className="max-w-3xl">
                <h2 className="text-4xl sm:text-5xl font-title font-bold mb-6 text-brand-light">
                    Hablemos
                </h2>

                <p className="text-lg sm:text-xl text-brand-light/90 mb-8 leading-relaxed">
                    Siempre estoy abierto a nuevas ideas, propuestas y oportunidades. Si tienes un proyecto en mente o estás buscando un desarrollador frontend para un nuevo desafío, estaré encantado de escucharte. Seguro podemos crear juntos algo increíble.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                        href="mailto:rogelio@email.com"
                        className="border border-brand-light px-6 py-2 rounded-xs text-brand-light hover:bg-brand-light hover:text-brand-bg transition"
                    >
                        Enviarme un correo
                    </a>

                    <a
                        href="/Rogelio-Ramirez-CV.pdf"
                        download
                        className="border border-brand-light px-6 py-2 rounded-xs text-brand-light hover:bg-brand-light hover:text-brand-bg transition"
                    >
                        Descargar CV
                    </a>

                    <a
                        href="https://github.com/rogx-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-light hover:text-brand-accent underline"
                    >
                        Visita mi GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ContactContainer;