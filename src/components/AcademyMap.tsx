import { motion } from 'framer-motion';
import { Coffee, Dog, Presentation, type LucideIcon } from 'lucide-react';

const zones: { id: string; title: string; icon: LucideIcon; desc: string }[] = [
  { id: 'lecture', title: 'Лекторий', icon: Presentation, desc: 'Основная сцена и доклады спикеров' },
  { id: 'pet', title: 'Pet-friendly зона', icon: Dog, desc: 'Вода, миски и место для отдыха вашего питомца' },
  { id: 'coffee', title: 'Бизнес-завтрак', icon: Coffee, desc: 'Неформальное общение и нетворкинг' },
];

export function AcademyMap() {
  return (
    <div className="academy-map">
      <svg className="academy-map__schematic" viewBox="0 0 800 320" aria-hidden="true">
        <rect x="40" y="40" width="720" height="240" rx="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="60" y="60" width="380" height="140" rx="8" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
        <rect x="460" y="60" width="280" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
        <rect x="60" y="220" width="680" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
        <path d="M 400 40 L 400 280" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 6" />
        <circle cx="720" cy="260" r="8" fill="currentColor" opacity="0.4" />
      </svg>

      <div className="academy-map__zones">
        {zones.map((zone) => {
          const Icon = zone.icon;
          return (
            <motion.article
              key={zone.id}
              className="academy-zone glow--warm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="academy-zone__icon">
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
