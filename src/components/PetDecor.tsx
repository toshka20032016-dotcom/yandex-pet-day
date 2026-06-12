import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export type PetDecorType = 'dog' | 'cat' | 'paw' | 'bird';

type SilhouetteProps = {
  paths: string | string[];
  className?: string;
  style?: CSSProperties;
  parallax?: number;
};

const silhouettes: Record<PetDecorType, string | string[]> = {
  dog: 'M20,80 Q20,30 50,30 T80,80 L80,90 Q50,80 20,90 Z',
  cat: 'M30,90 Q30,40 60,40 T90,90 Q60,80 30,90 Z',
  paw: [
    'M50,72 C48,58 58,46 70,48 C82,52 84,64 76,74 C68,84 54,82 50,72',
    'M32,44 A9,9 0 1 1 32,62 A9,9 0 1 1 32,44',
    'M48,28 A9,9 0 1 1 48,46 A9,9 0 1 1 48,28',
    'M64,28 A9,9 0 1 1 64,46 A9,9 0 1 1 64,28',
    'M80,44 A9,9 0 1 1 80,62 A9,9 0 1 1 80,44',
  ],
  bird: 'M12,58 Q38,22 58,42 Q78,62 92,32 M58,42 L58,68',
};

export function Silhouette({ paths, className = '', parallax = 140 }: SilhouetteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, parallax]);
  const pathList = Array.isArray(paths) ? paths : [paths];

  return (
    <motion.div ref={ref} className={`pet-decor ${className}`.trim()} style={{ y }} aria-hidden="true">
      <motion.svg
        className="pet-decor__silhouette pet-decor__stroke"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {pathList.map((d) => (
          <path key={d} d={d} />
        ))}
      </motion.svg>
    </motion.div>
  );
}

type PetDecorProps = {
  type: PetDecorType;
  className?: string;
  parallax?: number;
};

export function PetDecor({ type, className = '', parallax }: PetDecorProps) {
  return (
    <Silhouette
      paths={silhouettes[type]}
      className={`pet-decor--${type}${className ? ` ${className}` : ''}`}
      parallax={parallax}
    />
  );
}

export function PetDecorLayer() {
  return (
    <div className="pet-decor-layer" aria-hidden="true">
      <PetDecor type="paw" className="pet-decor--hero-tr" parallax={80} />
      <PetDecor type="bird" className="pet-decor--hero-bl" parallax={60} />
    </div>
  );
}
