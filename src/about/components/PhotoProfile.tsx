import { motion } from 'framer-motion'
import fotoPerfil from '../../assets/rogelio-porfolio-removebg-preview.png'

const PhotoProfile = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="w-72 h-96 rounded-xl overflow-hidden border border-brand-light/20 bg-brand-about-bg shrink-0"
        >
            <img
                src={fotoPerfil}
                alt="Rogelio Ramírez"
                className="w-full h-full object-cover"
            />
        </motion.div>
    )
}

export default PhotoProfile;