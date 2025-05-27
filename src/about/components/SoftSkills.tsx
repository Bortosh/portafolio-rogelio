
const SoftSkills = () => {
    return (
        <>
            {
                ['🤝 Trabajo en equipo', '🧠 Pensamiento lógico', '🗣️ Comunicación clara', '🚀 Proactividad', '📐 Atención al detalle'].map((skill) => (
                    <span
                        key={skill}
                        className="bg-brand-light/10 text-brand-light px-3 py-1 rounded-full border border-brand-light/20"
                    >
                        {skill}
                    </span>
                ))
            }
        </>
    )
}

export default SoftSkills;