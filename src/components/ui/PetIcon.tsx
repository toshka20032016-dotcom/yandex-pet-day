import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export type PetCategory =
  | 'ai'
  | 'loyalty'
  | 'marketplace'
  | 'networking'
  | 'break'
  | 'discussion';

type PetIconProps = {
  category: PetCategory;
  className?: string;
  size?: number;
};

const svgPaths: Record<PetCategory, ReactNode> = {
  ai: (
    <>
      <ellipse cx="20" cy="28" rx="14" ry="12" />
      <circle cx="14" cy="14" r="5" />
      <circle cx="26" cy="14" r="5" />
      <circle cx="8" cy="22" r="4" />
      <circle cx="32" cy="22" r="4" />
      <circle cx="16" cy="26" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="24" cy="26" r="2" fill="currentColor" opacity="0.6" />
      <path d="M14 32 Q20 36 26 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </>
  ),
  loyalty: (
    <>
      <ellipse cx="20" cy="30" rx="12" ry="10" />
      <circle cx="12" cy="16" r="5" />
      <circle cx="28" cy="16" r="5" />
      <circle cx="6" cy="26" r="4" />
      <circle cx="34" cy="26" r="4" />
      <path d="M20 18 L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M16 10 L24 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </>
  ),
  marketplace: (
    <>
      <rect x="8" y="18" width="24" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 22 L20 14 L32 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <ellipse cx="20" cy="38" rx="8" ry="5" opacity="0.5" />
      <circle cx="16" cy="44" r="3" opacity="0.4" />
      <circle cx="24" cy="44" r="3" opacity="0.4" />
    </>
  ),
  networking: (
    <>
      <ellipse cx="20" cy="32" rx="10" ry="8" />
      <circle cx="14" cy="20" r="4" />
      <circle cx="26" cy="20" r="4" />
      <circle cx="8" cy="28" r="3.5" />
      <circle cx="32" cy="28" r="3.5" />
    </>
  ),
  break: (
    <>
      <ellipse cx="20" cy="30" rx="11" ry="9" />
      <circle cx="13" cy="18" r="4.5" />
      <circle cx="27" cy="18" r="4.5" />
      <circle cx="7" cy="27" r="3.5" />
      <circle cx="33" cy="27" r="3.5" />
    </>
  ),
  discussion: (
    <>
      <ellipse cx="12" cy="30" rx="7" ry="6" opacity="0.7" />
      <circle cx="8" cy="20" r="3" opacity="0.7" />
      <circle cx="14" cy="18" r="2.5" opacity="0.7" />
      <ellipse cx="28" cy="30" rx="7" ry="6" opacity="0.7" />
      <circle cx="24" cy="20" r="3" opacity="0.7" />
      <circle cx="30" cy="18" r="2.5" opacity="0.7" />
    </>
  ),
};

export function PetIcon({ category, className = '', size = 40 }: PetIconProps) {
  return (
    <motion.svg
      className={`pet-icon pet-icon--${category} ${className}`}
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      whileHover={{ scale: 1.15 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {svgPaths[category]}
    </motion.svg>
  );
}

export function getScheduleCategory(item: {
  title: string;
  speaker?: string;
  highlight?: boolean;
  tag?: string;
}): PetCategory {
  if (item.highlight) return 'discussion';
  if (item.title === 'Перерыв') return 'break';
  if (item.title.includes('Компьютерное зрение') || item.title.includes('ветеринар')) return 'ai';
  if (item.title.includes('Зооморфизм')) return 'loyalty';
  if (item.title.includes('маркетплейс') || item.title.includes('стартапа')) return 'marketplace';
  if (item.title === 'Нетворкинг' || item.tag) return 'networking';
  return 'break';
}
