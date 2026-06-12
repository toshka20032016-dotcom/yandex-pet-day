import { motion } from 'framer-motion';

type PawIconProps = {
  className?: string;
  size?: number;
  variant?: 'default' | 'break' | 'highlight';
};

const PAW_PATH =
  'M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M17,6A3,3 0 0,1 20,9A3,3 0 0,1 17,12A3,3 0 0,1 14,9A3,3 0 0,1 17,6M12,12A3,3 0 0,1 15,15A3,3 0 0,1 12,18A3,3 0 0,1 9,15A3,3 0 0,1 12,12M7,6A3,3 0 0,1 10,9A3,3 0 0,1 7,12A3,3 0 0,1 4,9A3,3 0 0,1 7,6Z';

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
      <path fill="currentColor" d={PAW_PATH} />
    </motion.svg>
  );
}
