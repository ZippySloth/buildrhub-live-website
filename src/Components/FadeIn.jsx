import { motion } from 'framer-motion';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? Math.min(delay, 0.1) : delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeIn;
