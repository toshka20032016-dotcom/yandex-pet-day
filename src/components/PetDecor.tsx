import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export type PetDecorType = 'dog' | 'cat' | 'paw';

type SilhouetteProps = {
  paths: string | string[];
  className?: string;
  style?: CSSProperties;
  parallax?: number;
};

/** Monoline stroke silhouettes — cat, dog, and paw accent */
const silhouettes: Record<PetDecorType, string | string[]> = {
  dog: [
    'M18,72 C14,58 16,44 26,38 C30,35 32,30 34,24 C36,18 42,16 46,20 C48,22 50,28 54,30 C62,34 70,42 72,52 C74,62 70,72 60,76 C48,80 36,78 28,74 C22,72 20,74 18,72',
    'M34,24 C32,18 28,14 24,16',
    'M46,20 C50,14 56,12 58,18',
    'M72,52 C78,48 82,52 80,58',
  ],
  cat: [
    'M22,74 C18,60 20,46 32,40 C36,38 38,34 40,28 C42,22 48,20 52,24 C54,26 56,32 60,34 C68,38 74,46 76,56 C78,66 72,74 62,78 C50,82 38,80 28,76 C24,74 22,76 22,74',
    'M40,28 L36,16 L42,22',
    'M52,24 L58,14 L54,22',
    'M76,56 C82,50 86,54 84,62 C82,68 76,70 74,66',
  ],
  paw: [
    'M50,72 C48,58 58,46 70,48 C82,52 84,64 76,74 C68,84 54,82 50,72',
    'M32,44 A9,9 0 1 1 32,62 A9,9 0 1 1 32,44',
    'M48,28 A9,9 0 1 1 48,46 A9,9 0 1 1 48,28',
    'M64,28 A9,9 0 1 1 64,46 A9,9 0 1 1 64,28',
    'M80,44 A9,9 0 1 1 80,62 A9,9 0 1 1 80,44',
  ],
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
      <PetDecor type="cat" className="pet-decor--hero-tr" parallax={80} />
      <PetDecor type="dog" className="pet-decor--hero-bl" parallax={60} />
    </div>
  );
}
