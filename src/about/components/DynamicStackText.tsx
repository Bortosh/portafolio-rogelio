import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { defaultColor, techColors, techWords } from '../data/techColors';

function DynamicStackText() {
    const [currentWord, setCurrentWord] = useState('');

    const dynamicColor = techColors[currentWord] || defaultColor;

    return (
        <div className="mt-12">
            <p className="text-lg sm:text-xl text-brand-light font-body mb-2">
                Desarrollo increíbles proyectos con:
            </p>
            <p className={`text-3xl sm:text-4xl font-mono font-semibold h-12 ${dynamicColor}`}>
                <Typewriter
                    words={techWords}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1800}
                    onType={(count: number) => {
                        const word = techWords[count % techWords.length];
                        setCurrentWord(word);
                    }}
                />
            </p>
        </div>
    );
}

export default DynamicStackText;