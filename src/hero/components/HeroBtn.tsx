import React from 'react'

type HeroBtnProps = {
    btn: {
        label: string;
        ref: React.RefObject<HTMLElement | null>;
    }
    i: number
}

const HeroBtn = ({ btn, i }: HeroBtnProps) => {

    const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <button
            key={i}
            onClick={() => scrollToSection(btn.ref)}
            className="min-w-[120px] px-4 sm:px-6 py-2 rounded-xs text-sm font-medium border border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-hero-bg cursor-pointer transition duration-500 text-center"
        >
            {btn.label}
        </button>
    )
}

export default HeroBtn;