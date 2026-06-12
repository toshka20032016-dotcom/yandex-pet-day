import { motion } from 'framer-motion';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  'aria-labelledby'?: string;
};

export const AnimatedSection = ({ children, className, id, 'aria-labelledby': ariaLabelledby }: AnimatedSectionProps) => {
  return (
    <motion.section
      className={className}
      id={id}
      aria-labelledby={ariaLabelledby}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};
