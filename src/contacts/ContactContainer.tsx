import React from 'react';
import { FaEnvelope, FaDownload, FaGithub, FaLinkedin  } from 'react-icons/fa';
import ScrollBotonContact from './component/ScrollBotonContact';

type ContactContainerProps = {
    projectsRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
};

const ContactContainer = ({ projectsRef, contactRef }: ContactContainerProps) => {

    return (
        <section
            ref={contactRef}
            className="relative min-h-screen bg-brand-contact-bg text-brand-light flex flex-col justify-center items-center px-4 sm:px-8 py-20 text-center"
        >

            <div className="max-w-4xl">
                <p className="text-sm uppercase tracking-wide text-brand-light/50 mb-2">
                    Contacto directo
                </p>
                <h2 className="text-4xl sm:text-5xl font-title font-bold mb-6 text-brand-light">
                    Hablemos
                </h2>

                <p className="text-lg sm:text-xl text-brand-light/90 mb-8 leading-relaxed max-w-5xl mx-auto">
                    ¿Tienes una idea en mente o estás buscando un frontend developer para tu próximo proyecto?
                    Me especializo en construir interfaces modernas, funcionales y con una arquitectura frontend escalable.
                    Además, cuento con experiencia en desarrollo backend con Node.js y Express, lo que me permite integrarme fácilmente en entornos fullstack.
                    Estoy disponible y listo para ayudarte a convertir esa visión en una experiencia digital profesional y atractiva.
                </p>


                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                    <a
                        href="mailto:rogelios-1992@hotmail.com"
                        className="flex items-center gap-2 border border-brand-light px-6 py-2 rounded-xs text-brand-light hover:bg-brand-light hover:text-brand-hero-bg transition transform hover:scale-105 duration-300"
                    >
                        <FaEnvelope /> Enviarme un correo
                    </a>
                    <a
                        href="/CV_ATS_ROGELIO_RAMIREZ_CARMONA_ENGLISH.docx"
                        download
                        className="flex items-center gap-2 border border-brand-light px-6 py-2 rounded-xs text-brand-light hover:bg-brand-light hover:text-brand-hero-bg transition transform hover:scale-105 duration-300"
                    >
                        <FaDownload /> Descargar CV
                    </a>

                    <a
                        href="https://github.com/Bortosh?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-brand-light px-6 py-2 rounded-xs text-brand-light hover:bg-brand-light hover:text-brand-hero-bg transition transform hover:scale-105 duration-300"
                    >
                        <FaGithub /> Visita mi GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rogelio-ramirez-carmona/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-brand-light px-6 py-2 rounded-xs text-brand-light hover:bg-brand-light hover:text-brand-hero-bg transition transform hover:scale-105 duration-300"
                    >
                        <FaLinkedin /> Visita mi Linkedin
                    </a>
                </div>

                <p className="text-sm text-brand-light/50 italic mt-10">
                    “Las grandes ideas comienzan con una buena conversación.”
                </p>

                <div className="border-t border-brand-light/20 mt-14 pt-6 text-sm text-brand-light/40">
                    Gracias por visitar mi portafolio. ¡Hablemos pronto!
                </div>

                <ScrollBotonContact
                    ref={projectsRef}
                />
            </div>
        </section>
    );
};

export default ContactContainer;
