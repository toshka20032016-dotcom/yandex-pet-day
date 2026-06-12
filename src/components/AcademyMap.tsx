import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Dog, Presentation, type LucideIcon } from 'lucide-react';

type ZoneId = 'lecture' | 'coffee' | 'pet';

const zones: { id: ZoneId; title: string; icon: LucideIcon; desc: string; svg: { x: number; y: number; w: number; h: number }; accent: string }[] = [
  {
    id: 'lecture',
    title: 'Лекторий',
    icon: Presentation,
    desc: 'Основная сцена и доклады спикеров',
    svg: { x: 60, y: 60, w: 380, h: 140 },
    accent: '#6c4dff',
  },
  {
    id: 'coffee',
    title: 'Бизнес-завтрак',
    icon: Coffee,
    desc: 'Неформальное общение и нетворкинг',
    svg: { x: 460, y: 60, w: 280, h: 80 },
    accent: '#fc3f1d',
  },
  {
    id: 'pet',
    title: 'Pet-friendly зона',
    icon: Dog,
    desc: 'Вода, миски и место для отдыха вашего питомца',
    svg: { x: 60, y: 220, w: 680, h: 40 },
    accent: '#2d6a4f',
  },
];

export function AcademyMap() {
  const [activeZone, setActiveZone] = useState<ZoneId | null>(null);

  return (
    <div className="academy-map">
      <svg
        className="academy-map__schematic"
        viewBox="0 0 800 320"
        role="img"
        aria-label="Схема площадки «Академия»: Лекторий, Бизнес-завтрак, Pet-friendly зона"
      >
        <defs>
          <pattern id="academy-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(26,26,36,0.04)" strokeWidth="0.5" />
          </pattern>
        </defs>

        <rect x="40" y="40" width="720" height="240" rx="16" fill="url(#academy-grid)" stroke="rgba(26,26,36,0.1)" strokeWidth="1.5" />

        {zones.map((zone) => {
          const isActive = activeZone === zone.id;
          const { x, y, w, h } = zone.svg;

          return (
            <g
              key={zone.id}
              onMouseEnter={() => setActiveZone(zone.id)}
              onMouseLeave={() => setActiveZone(null)}
              style={{ cursor: 'pointer' }}
            >
              <motion.rect
                x={x}
                y={y}
                width={w}
                height={h}
                rx="8"
                fill={isActive ? `${zone.accent}18` : 'transparent'}
                stroke={isActive ? zone.accent : 'rgba(26,26,36,0.12)'}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray={isActive ? '0' : '6 4'}
                animate={{ scale: isActive ? 1.01 : 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
              />
              <text
                x={x + w / 2}
                y={y + h / 2 + 5}
                textAnchor="middle"
                fill={isActive ? zone.accent : 'rgba(26,26,36,0.35)'}
                fontSize="13"
                fontWeight="700"
                style={{ pointerEvents: 'none', transition: 'fill 0.3s' }}
              >
                {zone.title}
              </text>
            </g>
          );
        })}

        <circle cx="720" cy="260" r="8" fill="#fc3f1d" opacity={activeZone ? 0.7 : 0.35} />
        <text x="720" y="280" textAnchor="middle" fill="rgba(26,26,36,0.35)" fontSize="10" fontWeight="500">Вход</text>
      </svg>

      <div className="academy-map__zones">
        {zones.map((zone) => {
          const Icon = zone.icon;
          const isActive = activeZone === zone.id;

          return (
            <motion.article
              key={zone.id}
              className={`academy-zone glow--warm${isActive ? ' academy-zone--active' : ''}`}
              onMouseEnter={() => setActiveZone(zone.id)}
              onMouseLeave={() => setActiveZone(null)}
            >
              <div className="academy-zone__icon" style={isActive ? { background: `${zone.accent}18`, color: zone.accent } : undefined}>
                <Icon strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="academy-zone__title">{zone.title}</h3>
              <p className="academy-zone__desc">{zone.desc}</p>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
