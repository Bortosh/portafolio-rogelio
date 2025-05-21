import React from 'react'

type PRojectContainerProps = {
    scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void
    aboutRef: React.RefObject<HTMLElement | null>
    projectsRef: React.RefObject<HTMLElement | null>
    contactRef: React.RefObject<HTMLElement | null>
}

const ProjectContainer = ({ scrollToSection, aboutRef, contactRef, projectsRef }: PRojectContainerProps) => {
    return (
        <section ref={projectsRef} className="min-h-screen px-8 py-16 bg-gray-100 text-black">
            <h2 className="text-3xl font-semibold mb-6">Proyectos</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {/* Aquí irán las tarjetas de proyectos */}
            </div>
        </section>
    )
};
export default ProjectContainer;