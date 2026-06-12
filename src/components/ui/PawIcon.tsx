import { motion } from 'framer-motion';

type PawIconProps = {
  className?: string;
  size?: number;
  variant?: 'default' | 'break' | 'highlight';
};

export function PawIcon({ className = '', size = 20, variant = 'default' }: PawIconProps) {
  return (
    <motion.svg
      className={`timeline__paw ${className}`.trim()}
      data-variant={variant}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 2a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m-3 9a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m6 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3M12 13.73c2.67 0 6.17 1.36 7.35 5.3H4.65c1.18-3.94 4.68-5.3 7.35-5.3Z"
      />
    </motion.svg>
  );
}
