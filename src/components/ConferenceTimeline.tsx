import { motion } from 'framer-motion';
import { PetIcon, getScheduleCategory, type PetCategory } from './ui/PetIcon';

export type ScheduleItem = {
  start: string;
  end: string;
  title: string;
  speaker?: string;
  tag?: string;
  highlight?: boolean;
};

const SCHEDULE: ScheduleItem[] = [
  {
    start: '10:00',
    end: '10:30',
    title: 'Приветственный кофе',
    speaker: 'Нетворкинг с участниками и партнёрами',
    tag: 'только офлайн',
  },
  {
    start: '11:00',
    end: '11:30',
    title: 'Вводное слово',
  },
  {
    start: '11:30',
    end: '12:10',
    title: 'Компьютерное зрение в ветеринарии',
    speaker: 'Андрей Соколов',
  },
  {
    start: '12:10',
    end: '12:50',
    title: 'Зооморфизм',
    speaker: 'Мария Подольская',
  },
  {
    start: '12:50',
    end: '13:10',
    title: 'Перерыв',
  },
  {
    start: '13:10',
    end: '13:40',
    title: 'От стартапа до маркетплейса №1',
    speaker: 'Павел Сидоров',
  },
  {
    start: '13:40',
    end: '15:00',
    title: 'Дискуссия',
    highlight: true,
  },
  {
    start: '15:00',
    end: '16:30',
    title: 'Нетворкинг',
  },
];

function formatTimeRange(start: string, end: string) {
  return `${start} – ${end}`;
}

function getGlowClass(category: PetCategory): string {
  if (category === 'ai') return 'glow--ai';
  if (category === 'marketplace' || category === 'networking') return 'glow--warm';
  if (category === 'loyalty' || category === 'discussion') return 'glow--warm';
  return '';
}

export function ConferenceTimeline() {
  return (
    <div className="timeline" aria-label="Расписание конференции" role="list">
      {SCHEDULE.map((item, index) => {
        const isBreak = item.title === 'Перерыв';
        const isTalk = Boolean(item.speaker);
        const category = getScheduleCategory(item);
        const glowClass = getGlowClass(category);
        const classes = ['timeline__item'];
        if (isBreak) classes.push('timeline__item--break');
        if (isTalk) classes.push('timeline__item--talk');
        if (item.highlight) classes.push('timeline__item--discussion');
        if (glowClass) classes.push(glowClass);

        return (
          <motion.div
            key={`${item.start}-${item.title}`}
            className={classes.join(' ')}
            role="listitem"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            whileHover={{ scale: 1.01 }}
          >
            <time className="timeline__time" dateTime={`2026-06-20T${item.start}`}>
              {formatTimeRange(item.start, item.end)}
            </time>
            <div className="timeline__content">
              <div className="timeline__header">
                <motion.div
                  className="timeline__pet-icon"
                  whileHover={{ scale: 1.2, color: '#FC3F1D' }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <PetIcon category={category} size={32} />
                </motion.div>
                <div className="timeline__text">
                  {item.highlight && (
                    <>
                      <span className="timeline__type">Дискуссия</span>
                      <span className="timeline__badge">Ключевой блок · 1 ч 20 мин</span>
                    </>
                  )}
                  <h3 className={isTalk || item.highlight ? 'timeline__title timeline__title--talk' : 'timeline__title'}>
                    {item.title}
                  </h3>
                  {item.speaker && (
                    <p className="timeline__speaker">
                      {item.speaker}
                      {item.tag && <span className="tag-inline">{item.tag}</span>}
                    </p>
                  )}
                  {!item.speaker && item.tag && (
                    <p className="timeline__speaker">
                      <span className="tag-inline">{item.tag}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
