import React from 'react'

type ScrollBotonProps = {
    ref: React.RefObject<HTMLElement | null>
    text: string
    position: string
}

const ScrollBoton = ({ ref, text, position }: ScrollBotonProps) => {

    const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const up = "absolute top-6 right-6 border border-brand-light rounded-xs text-base px-10 py-2 hover:bg-brand-light hover:text-brand-hero-bg transition duration-300 cursor-pointer shadow-sm"

    const down = "absolute bottom-6 right-6 border border-brand-light rounded-xs text-base px-6 py-2 hover:bg-brand-light hover:text-brand-hero-bg transition duration-300 cursor-pointer shadow-sm"

    return (
        <button
            onClick={() => scrollToSection(ref)}
            className={position === 'up' ? up : down}
        >
            {text}
        </button>
    )
}

export default ScrollBoton;