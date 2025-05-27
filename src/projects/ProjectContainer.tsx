import ScrollBoton from '../components/ScrollBoton';
import devtree from '../assets/devtree.png'
import fintech from '../assets/fintech_ramirez.jpg'
import palmeras from '../assets/las_palmeras.png'
import veterinaria from '../assets/veterinaria.png'
import criptos from '../assets/criptoMonedas.png'
import bebidas from '../assets/bebidas.png'
import gastos from '../assets/gastos.png'
import clima from '../assets/clima.png'

const projects = [
    {
        nombre: 'DevTree',
        imagen: devtree,
        descripcion: 'DevTree es una plataforma tipo Linktree pensada para desarrolladores, que permite centralizar sus redes, proyectos y perfiles profesionales en un solo enlace personalizable. Su diseño responsivo y su arquitectura moderna ofrecen una experiencia clara y profesional.',
        tecnologias: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Netlify'],
        repo_front: 'https://github.com/Bortosh/Devtree_Frontend',
        repo_back: 'https://github.com/Bortosh/Devtree_Backend',
        demo: 'https://devtree-rogx.netlify.app/',
    },
    {
        nombre: 'Landing Financiera - FintechPro Ramirez',
        imagen: fintech,
        descripcion: 'Landing page moderna y responsiva diseñada para presentar los servicios de una plataforma financiera. Integra animaciones sutiles y una arquitectura optimizada para velocidad y claridad de contenido.',
        tecnologias: ['React', 'NextJS', 'TypeScript', 'Tailwind', 'Vercel'],
        repo_front: 'https://github.com/Bortosh/landing_financiera',
        demo: 'https://www.fintechramirez.xyz/',
    },
    {
        nombre: 'Finca Las Palmeras - Rozo',
        imagen: palmeras,
        descripcion: 'Sitio web informativo y optimizado para finca turística. Ofrece una experiencia responsiva con enfoque en usabilidad, permitiendo a los visitantes conocer servicios, ubicación y medios de contacto de forma rápida y atractiva.',
        tecnologias: ['React', 'TypeScript', 'Tailwind', 'MaterialUi', 'Netlify'],
        repo_front: 'https://github.com/Bortosh/new-palmera-rozo',
        demo: 'https://fincalaspalmeras.co/',
    },
    {
        nombre: 'Veterinaria',
        imagen: veterinaria,
        descripcion: 'Aplicación web CRUD para gestión veterinaria. Permite registrar, editar y eliminar pacientes de forma dinámica. Diseñada con enfoque en usabilidad y buenas prácticas de desarrollo frontend.',
        tecnologias: ['React', 'TypeScript', 'Tailwind', 'Netlify'],
        repo_front: '',
        demo: 'https://veterinaria-rogx.netlify.app/',
    },
    {
        nombre: 'Cotizador de Cripto Monedas',
        imagen: criptos,
        descripcion: 'Aplicación web CRUD para gestión veterinaria. Permite registrar, editar y eliminar pacientes de forma dinámica. Diseñada con enfoque en usabilidad y buenas prácticas de desarrollo frontend.',
        tecnologias: ['React', 'TypeScript', 'Tailwind', 'APIs', 'Netlify'],
        repo_front: '',
        demo: 'https://crypro-rogx.netlify.app/',
    },
    {
        nombre: 'Recetas de Bebidas y Cócteles',
        imagen: bebidas,
        descripcion: 'Aplicación web para búsqueda y exploración de recetas de bebidas y cócteles, basada en ingredientes o nombres. Utiliza React con consumo de APIs externas, y ofrece una experiencia interactiva y responsiva para usuarios interesados en mixología.',
        tecnologias: ['React', 'TypeScript', 'Tailwind', 'APIs', 'Netlify'],
        repo_front: 'https://github.com/Bortosh/drink-app',
        demo: 'https://drink-app-rogx.netlify.app/',
    },
    {
        nombre: 'Planificador de gastos personales',
        imagen: gastos,
        descripcion: 'Aplicación de control de gastos personales que permite registrar, categorizar y visualizar los gastos mensuales. Desarrollada con React, ofrece una interfaz clara e intuitiva con filtrado dinámico y persistencia de datos en localStorage.',
        tecnologias: ['React', 'TypeScript', 'Tailwind', 'Netlify'],
        repo_front: '',
        demo: 'https://control-gastos-rogx.netlify.app/',
    },
    {
        nombre: 'Buscador del clima',
        imagen: clima,
        descripcion: 'Aplicación del clima que muestra información meteorológica en tiempo real según la ubicación del usuario o una ciudad buscada. Construida con React y consumo de API, ofrece datos como temperatura, humedad y condiciones del clima con una interfaz limpia y responsiva.',
        tecnologias: ['React', 'TypeScript', 'Tailwind', 'APIs', 'Netlify'],
        repo_front: '',
        demo: 'https://weather-app-rogx.netlify.app/',
    },
];

type ProjectContainerProps = {
    projectsRef: React.RefObject<HTMLElement | null>;
    aboutRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
}

const ProjectContainer = ({ projectsRef, aboutRef, contactRef }: ProjectContainerProps) => {

    return (
        <section
            ref={projectsRef}
            className="relative min-h-screen bg-brand-project-bg text-brand-light px-4 sm:px-8 py-20"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-title font-bold mb-12 text-center">
                    Proyectos Destacados
                </h2>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div
                            key={project.nombre}
                            className={`p-5 flex flex-col md:flex-row items-center gap-8 group transition duration-600 hover:bg-brand-hero-bg/50 hover:shadow-lg rounded-xl ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <img
                                src={project.imagen}
                                alt={project.nombre}
                                className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
                            />
                            <div className="flex-1 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-semibold">{project.nombre}</h3>
                                <p className="text-brand-light/80">{project.descripcion}</p>
                                <ul className="flex flex-wrap gap-2 text-sm">
                                    {project.tecnologias.map((tech) => (
                                        <li
                                            key={tech}
                                            className="px-2 py-1 border border-brand-accent/30 text-brand-accent rounded-xs"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex gap-4 justify-center md:justify-start">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        className="text-brand-accent hover:underline"
                                    >
                                        🔗 Demo
                                    </a>
                                    {project.repo_front && project.repo_back ? (
                                        <>
                                            <a
                                                href={project.repo_front}
                                                target="_blank"
                                                className="text-brand-accent hover:underline"
                                            >
                                                📂 Código Front
                                            </a>
                                            <a
                                                href={project.repo_back}
                                                target="_blank"
                                                className="text-brand-accent hover:underline"
                                            >
                                                📂 Código Back
                                            </a>
                                        </>
                                    ) : project.repo_front ? (
                                        <a
                                            href={project.repo_front}
                                            target="_blank"
                                            className="text-brand-accent hover:underline"
                                        >
                                            📂 Código
                                        </a>
                                    ) : null}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ScrollBoton ref={aboutRef} text="↑ Sobre Mi" position={'up'} />
            <ScrollBoton ref={contactRef} text="↓ Contacto" position={'down'} />
        </section>
    );
};

export default ProjectContainer;