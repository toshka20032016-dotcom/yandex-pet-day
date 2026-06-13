import { motion } from 'framer-motion';
import { Mic2, Coffee, Users, Sparkles, PauseCircle, MessageCircle } from 'lucide-react';

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
  { start: '11:00', end: '11:30', title: 'Вводное слово' },
  {
    start: '11:30',
    end: '12:10',
    title: '«Компьютерное зрение в ветеринарии»',
    speaker: 'Андрей Соколов, Head of Product Design, Яндекс',
  },
  {
    start: '12:10',
    end: '12:50',
    title: '«Зооморфизм как драйвер лояльности»',
    speaker: 'Мария Подольская, Head of AI, Лаборатория инноваций',
  },
  { start: '12:50', end: '13:10', title: 'Перерыв' },
  {
    start: '13:10',
    end: '13:40',
    title: '«От стартапа до маркетплейса №1: ошибки и победы»',
    speaker: 'Павел Сидоров — CEO, маркетплейс зоотоваров «Зоо-Маркет»',
  },
  {
    start: '13:40',
    end: '15:00',
    title: '«Инвестиции в Pet-технологии: пузырь или новая нефть?»',
    highlight: true,
  },
  { start: '15:00', end: '16:30', title: 'Нетворкинг' },
];

type SessionType = 'coffee' | 'opening' | 'talk' | 'break' | 'discussion' | 'networking';

function getSessionType(item: ScheduleItem): SessionType {
  if (item.title === 'Перерыв') return 'break';
  if (item.highlight) return 'discussion';
  if (item.title === 'Вводное слово') return 'opening';
  if (item.title.includes('кофе')) return 'coffee';
  if (item.title === 'Нетворкинг') return 'networking';
  return 'talk';
}

const typeConfig: Record<
  SessionType,
  { label: string; icon: typeof Mic2; className: string }
> = {
  talk: { label: 'Доклад', icon: Mic2, className: 'schedule-tag--talk' },
  break: { label: 'Перерыв', icon: PauseCircle, className: 'schedule-tag--break' },
  opening: { label: 'Открытие', icon: Sparkles, className: 'schedule-tag--opening' },
  coffee: { label: 'Нетворкинг', icon: Coffee, className: 'schedule-tag--coffee' },
  discussion: { label: 'Дискуссия', icon: MessageCircle, className: 'schedule-tag--discussion' },
  networking: { label: 'Нетворкинг', icon: Users, className: 'schedule-tag--networking' },
};

function formatTimeRange(start: string, end: string) {
  return `${start} – ${end}`;
}

export function ConferenceTimeline() {
  return (
    <div className="schedule-glass" aria-label="Расписание конференции">
      <div className="schedule-glass__glow" aria-hidden="true" />
      <div className="schedule-glass__scroll">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Время</th>
              <th>Тип</th>
              <th>Сессия</th>
              <th>Спикер / формат</th>
            </tr>
          </thead>
          <tbody>
            {SCHEDULE.map((item, index) => {
              const type = getSessionType(item);
              const config = typeConfig[type];
              const Icon = config.icon;

              return (
                <motion.tr
                  key={`${item.start}-${item.title}`}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className={item.highlight ? 'schedule-table__row--highlight' : undefined}
                >
                  <td>
                    <time dateTime={`2026-06-20T${item.start}`} className="schedule-table__time">
                      {formatTimeRange(item.start, item.end)}
                    </time>
                  </td>
                  <td>
                    <span className={`schedule-tag ${config.className}`}>
                      <Icon size={12} aria-hidden="true" />
                      {config.label}
                    </span>
                  </td>
                  <td className="schedule-table__title">{item.title}</td>
                  <td className="schedule-table__host">
                    {item.speaker ?? '—'}
                    {item.tag && <span className="schedule-table__tag">{item.tag}</span>}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="schedule-glass__beam" aria-hidden="true" />
    </div>
  );
}
