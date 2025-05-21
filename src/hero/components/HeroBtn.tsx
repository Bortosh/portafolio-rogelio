import React from 'react'

type HeroBtnProps = {
    scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void
    btn: {
        label: string;
        ref: React.RefObject<HTMLElement | null>;
    }
    i: number
}

const HeroBtn = ({ scrollToSection, btn, i }: HeroBtnProps) => {
    
    return (
        <button
            key={i}
            onClick={() => scrollToSection(btn.ref)}
            className="min-w-[120px] px-4 sm:px-6 py-2 rounded-xs text-sm font-medium border border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-bg cursor-pointer transition duration-500 text-center"
        >
            {btn.label}
        </button>
    )
}

export default HeroBtn;