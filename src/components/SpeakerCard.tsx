import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SpeakerVariant = 'design' | 'ai' | 'ceo';

type SpeakerCardProps = {
  name: string;
  role: string;
  topic: string;
  avatar: string;
  tag?: string;
  variant: SpeakerVariant;
};

const variantConfig: Record<
  SpeakerVariant,
  { gradientId: string; stops: [string, string]; glowClass: string }
> = {
  design: {
    gradientId: 'speaker-grad-design',
    stops: ['#fc3f1d', '#ff6b4a'],
    glowClass: 'glow--warm',
  },
  ai: {
    gradientId: 'speaker-grad-ai',
    stops: ['#6c4dff', '#9b7dff'],
    glowClass: 'glow--ai',
  },
  ceo: {
    gradientId: 'speaker-grad-ceo',
    stops: ['#0d9488', '#2dd4bf'],
    glowClass: 'glow--teal',
  },
};

export function SpeakerCard({ name, role, topic, avatar, tag, variant }: SpeakerCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { gradientId, stops, glowClass } = variantConfig[variant];
  const showThesis = isHovered || isMobile;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <motion.article
      className={`speaker-card${showThesis ? ' speaker-card--active' : ''} ${glowClass}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, boxShadow: 'var(--shadow-md)' }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="speaker-card__avatar">
        <svg className="speaker-card__portrait" viewBox="0 0 80 80" aria-hidden="true">
          <circle cx="40" cy="40" r="40" fill={`url(#${gradientId})`} />
          <circle cx="40" cy="32" r="14" fill="rgba(255,255,255,.25)" />
          <ellipse cx="40" cy="58" rx="20" ry="14" fill="rgba(255,255,255,.2)" />
          <text x="40" y="44" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">
            {avatar}
          </text>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="80" y2="80">
              <stop stopColor={stops[0]} />
              <stop offset="1" stopColor={stops[1]} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="speaker-card__body">
        <h3>{name}</h3>
        <p className="speaker-card__role">{role}</p>
        {tag && <span className="speaker-card__tag">{tag}</span>}

        <AnimatePresence initial={false}>
          {showThesis && (
            <motion.div
              className="speaker-card__thesis"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <p>«{topic}»</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
