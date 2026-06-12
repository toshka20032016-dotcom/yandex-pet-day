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
  dog: [
    'M12 48c0-14 8-24 20-26',
    'M32 22c0-10 6-18 14-18s14 8 14 18',
    'M46 18c2-6 8-10 14-8',
    'M18 18c-2-6-8-10-14-8',
    'M28 30c-3 0-5 2-5 4s2 4 5 4 5-2 5-4-2-4-5-4z',
    'M24 48v8M36 48v8',
    'M20 56h20',
    'M58 38c4 2 8 8 8 16',
  ],
  cat: [
    'M20 14l-4-12 6 8',
    'M44 14l4-12-6 8',
    'M14 48c0-14 8-24 22-24s22 10 22 24',
    'M26 32c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3z',
    'M38 32c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3z',
    'M30 40c1 2 3 2 4 0',
    'M28 48v8M36 48v8',
    'M24 56h12',
    'M52 42c3 4 4 10 2 16',
  ],
  paw: [
    'M30 50c0-6 4-10 10-10s10 4 10 10',
    'M16 30a6 6 0 1 1 0 12 6 6 0 0 1 0-12z',
    'M30 20a6 6 0 1 1 0 12 6 6 0 0 1 0-12z',
    'M44 30a6 6 0 1 1 0 12 6 6 0 0 1 0-12z',
    'M22 38a4 4 0 1 1 0 8 4 4 0 0 1 0-8z',
    'M38 38a4 4 0 1 1 0 8 4 4 0 0 1 0-8z',
  ],
  bird: [
    'M10 32c8-12 24-12 32 0',
    'M42 32c6-2 10 2 10 8-2 4-8 6-14 4',
    'M22 28a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
    'M18 34l-4 2',
    'M26 40v6M34 40v6',
  ],
};

export function Silhouette({ paths, className = '', style, parallax = 140 }: SilhouetteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, parallax]);
  const pathList = Array.isArray(paths) ? paths : [paths];

  return (
    <motion.div
      ref={ref}
      className={`pet-decor ${className}`.trim()}
      style={{ ...style, ...(parallax ? { y } : {}) }}
      aria-hidden="true"
    >
      <motion.svg
        className="pet-decor__silhouette"
        viewBox="0 0 60 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
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
  style?: CSSProperties;
  parallax?: number;
};

export function PetDecor({ type, className = '', style, parallax }: PetDecorProps) {
  return (
    <Silhouette
      paths={silhouettes[type]}
      className={`pet-decor--${type}${className ? ` ${className}` : ''}`}
      style={style}
      parallax={parallax}
    />
  );
}

export function PetDecorLayer() {
  return (
    <div className="pet-decor-layer" aria-hidden="true">
      <PetDecor type="paw" className="pet-decor--hero-tr" parallax={80} />
    </div>
  );
}
