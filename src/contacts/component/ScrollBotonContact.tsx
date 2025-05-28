import React from 'react'

type ScrollBotonProps = {
    ref: React.RefObject<HTMLElement | null>
}

const ScrollBotonContact = ({ ref }: ScrollBotonProps) => {

    const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <button
            onClick={() => scrollToSection(ref)}
            className="absolute top-6 right-6 border border-brand-light rounded-xs text-base px-10 py-2 hover:bg-brand-light hover:text-brand-hero-bg transition duration-300 cursor-pointer shadow-sm"
        >
            ↑ Proyectos
        </button>
    )
}

export default ScrollBotonContact;