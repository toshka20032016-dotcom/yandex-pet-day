import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Dog, DoorOpen, Presentation, type LucideIcon } from 'lucide-react';

type ZoneId = 'lecture' | 'coffee' | 'pet';

type Zone = {
  id: ZoneId;
  title: string;
  short: string;
  icon: LucideIcon;
  desc: string;
  accent: string;
  accentSoft: string;
};

const zones: Zone[] = [
  {
    id: 'lecture',
    title: 'Лекторий',
    short: 'Сцена',
    icon: Presentation,
    desc: 'Основная сцена и доклады спикеров',
    accent: '#a78bfa',
    accentSoft: 'rgba(167, 139, 250, 0.22)',
  },
  {
    id: 'coffee',
    title: 'Бизнес-завтрак',
    short: 'Кофе-зона',
    icon: Coffee,
    desc: 'Неформальное общение и нетворкинг',
    accent: '#ff6b4a',
    accentSoft: 'rgba(255, 107, 74, 0.2)',
  },
  {
    id: 'pet',
    title: 'Pet-friendly зона',
    short: 'Pet-zone',
    icon: Dog,
    desc: 'Вода, миски и место для отдыха вашего питомца',
    accent: '#2dd4bf',
    accentSoft: 'rgba(45, 212, 191, 0.18)',
  },
];

function zoneStroke(id: ZoneId, active: ZoneId | null, accent: string) {
  if (active === id) return accent;
  if (active && active !== id) return 'rgba(255, 255, 255, 0.12)';
  return 'rgba(255, 255, 255, 0.28)';
}

export function AcademyMap() {
  const [activeZone, setActiveZone] = useState<ZoneId | null>(null);

  const setZone = (id: ZoneId | null) => setActiveZone(id);

  return (
    <div className="academy-map">
      <div className="academy-map__schematic-wrap">
        <p className="academy-map__legend" aria-hidden>
          <span>1 этаж · ивент-пространство «Академия»</span>
          <span className="academy-map__legend-n">С</span>
        </p>

        <svg
          className="academy-map__schematic"
          viewBox="0 0 920 400"
          role="img"
          aria-label="Схема площадки «Академия»: Лекторий, Бизнес-завтрак, Pet-friendly зона, вход"
        >
          <defs>
            <pattern id="academy-floor-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />
            </pattern>
            <linearGradient id="academy-panel-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
            </linearGradient>
            <filter id="academy-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Building shell */}
          <rect x="32" y="32" width="856" height="336" rx="20" fill="url(#academy-panel-bg)" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
          <rect x="48" y="48" width="824" height="304" rx="14" fill="url(#academy-floor-grid)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

          {/* Corridor */}
          <rect x="48" y="48" width="824" height="56" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <text x="72" y="82" fill="rgba(148,163,184,0.9)" fontSize="11" fontWeight="600" letterSpacing="0.12em">
            ФОЙЕ / РЕГИСТРАЦИЯ
          </text>

          {/* Coffee zone — top right */}
          <g
            className="academy-map__zone"
            onMouseEnter={() => setZone('coffee')}
            onMouseLeave={() => setZone(null)}
            onFocus={() => setZone('coffee')}
            onBlur={() => setZone(null)}
            tabIndex={0}
            role="button"
            aria-label="Бизнес-завтрак"
          >
            <motion.rect
              x="520"
              y="56"
              width="336"
              height="40"
              rx="8"
              fill={activeZone === 'coffee' ? zones[1].accentSoft : 'rgba(255,107,74,0.08)'}
              stroke={zoneStroke('coffee', activeZone, zones[1].accent)}
              strokeWidth={activeZone === 'coffee' ? 2.5 : 1.5}
              animate={{ opacity: activeZone && activeZone !== 'coffee' ? 0.55 : 1 }}
            />
            <text x="688" y="82" textAnchor="middle" fill={activeZone === 'coffee' ? zones[1].accent : 'rgba(248,250,252,0.85)'} fontSize="13" fontWeight="700">
              Бизнес-завтрак
            </text>
            {[580, 640, 700, 760].map((cx) => (
              <circle key={cx} cx={cx} cy="76" r="4" fill={activeZone === 'coffee' ? zones[1].accent : 'rgba(255,107,74,0.45)'} />
            ))}
          </g>

          {/* Lecture hall */}
          <g
            className="academy-map__zone"
            onMouseEnter={() => setZone('lecture')}
            onMouseLeave={() => setZone(null)}
            onFocus={() => setZone('lecture')}
            onBlur={() => setZone(null)}
            tabIndex={0}
            role="button"
            aria-label="Лекторий"
          >
            <motion.rect
              x="64"
              y="120"
              width="560"
              height="168"
              rx="12"
              fill={activeZone === 'lecture' ? zones[0].accentSoft : 'rgba(167,139,250,0.08)'}
              stroke={zoneStroke('lecture', activeZone, zones[0].accent)}
              strokeWidth={activeZone === 'lecture' ? 2.5 : 1.5}
              animate={{ opacity: activeZone && activeZone !== 'lecture' ? 0.55 : 1 }}
            />
            {/* Stage */}
            <rect x="88" y="136" width="512" height="28" rx="6" fill="rgba(167,139,250,0.25)" stroke="rgba(167,139,250,0.5)" strokeWidth="1.5" />
            <text x="344" y="155" textAnchor="middle" fill="#e9d5ff" fontSize="10" fontWeight="700" letterSpacing="0.14em">
              СЦЕНА
            </text>
            {/* Seating rows */}
            {[200, 224, 248, 272].map((y) => (
              <g key={y}>
                {[120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560].map((cx) => (
                  <rect key={`${y}-${cx}`} x={cx} y={y} width="28" height="14" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
                ))}
              </g>
            ))}
            <text x="344" y="210" textAnchor="middle" fill={activeZone === 'lecture' ? zones[0].accent : 'rgba(248,250,252,0.9)'} fontSize="16" fontWeight="800">
              Лекторий
            </text>
          </g>

          {/* Side lounge / networking */}
          <rect x="640" y="120" width="216" height="168" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="6 4" />
          <text x="748" y="148" textAnchor="middle" fill="rgba(148,163,184,0.75)" fontSize="10" fontWeight="600" letterSpacing="0.1em">
            НЕТВОРКИНГ
          </text>
          <circle cx="700" cy="200" r="22" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <circle cx="796" cy="200" r="22" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <circle cx="748" cy="248" r="22" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

          {/* Pet-friendly zone */}
          <g
            className="academy-map__zone"
            onMouseEnter={() => setZone('pet')}
            onMouseLeave={() => setZone(null)}
            onFocus={() => setZone('pet')}
            onBlur={() => setZone(null)}
            tabIndex={0}
            role="button"
            aria-label="Pet-friendly зона"
          >
            <motion.rect
              x="64"
              y="304"
              width="792"
              height="48"
              rx="10"
              fill={activeZone === 'pet' ? zones[2].accentSoft : 'rgba(45,212,191,0.08)'}
              stroke={zoneStroke('pet', activeZone, zones[2].accent)}
              strokeWidth={activeZone === 'pet' ? 2.5 : 1.5}
              animate={{ opacity: activeZone && activeZone !== 'pet' ? 0.55 : 1 }}
            />
            <text x="460" y="334" textAnchor="middle" fill={activeZone === 'pet' ? zones[2].accent : 'rgba(248,250,252,0.88)'} fontSize="14" fontWeight="700">
              Pet-friendly зона
            </text>
            {[180, 280, 380, 480, 580, 680, 780].map((cx) => (
              <circle key={cx} cx={cx} cy="328" r="5" fill={activeZone === 'pet' ? zones[2].accent : 'rgba(45,212,191,0.4)'} opacity="0.8" />
            ))}
          </g>

          {/* Walls / dividers */}
          <line x1="640" y1="104" x2="640" y2="304" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="48" y1="104" x2="872" y2="104" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="48" y1="288" x2="872" y2="288" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />

          {/* Entrance */}
          <g filter={activeZone ? undefined : 'url(#academy-glow)'}>
            <rect x="832" y="168" width="56" height="72" rx="6" fill="rgba(255,107,74,0.12)" stroke="#ff6b4a" strokeWidth="2" />
            <path d="M860 200 L876 212 L860 224 Z" fill="#ff6b4a" />
            <text x="860" y="258" textAnchor="middle" fill="#ff6b4a" fontSize="12" fontWeight="700">
              Вход
            </text>
          </g>

          {/* Compass */}
          <g transform="translate(80, 360)">
            <circle r="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <path d="M0 -9 L3 0 L0 9 L-3 0 Z" fill="#ff6b4a" />
            <text y="24" textAnchor="middle" fill="rgba(148,163,184,0.7)" fontSize="9" fontWeight="600">
              С
            </text>
          </g>
        </svg>

        <div className="academy-map__hint">
          <DoorOpen size={14} aria-hidden />
          <span>Наведите на зону схемы или карточку ниже</span>
        </div>
      </div>

      <div className="academy-map__zones">
        {zones.map((zone) => {
          const Icon = zone.icon;
          const isActive = activeZone === zone.id;

          return (
            <motion.article
              key={zone.id}
              className={`academy-zone glow--warm${isActive ? ' academy-zone--active' : ''}`}
              onMouseEnter={() => setZone(zone.id)}
              onMouseLeave={() => setZone(null)}
              style={
                isActive
                  ? { borderColor: `${zone.accent}66`, boxShadow: `0 0 32px -8px ${zone.accent}` }
                  : undefined
              }
            >
              <div
                className="academy-zone__icon"
                style={isActive ? { background: zone.accentSoft, color: zone.accent } : undefined}
              >
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
