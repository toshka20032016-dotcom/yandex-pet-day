import { AnimatedSection } from './AnimatedSection';

const speakers = [
  {
    initials: 'АС',
    name: 'Андрей Соколов',
    role: 'Head of Product Design, Яндекс',
    tag: 'Ведущий конференции',
    avatarClass: 'speaker-card__avatar--design',
    gradientId: 'grad1',
    stops: ['#fc3f1d', '#ff6b4a'],
  },
  {
    initials: 'МП',
    name: 'Мария Подольская',
    role: 'Head of AI, Лаборатория инноваций',
    avatarClass: 'speaker-card__avatar--ai',
    gradientId: 'grad2',
    stops: ['#6c4dff', '#9b7dff'],
  },
  {
    initials: 'ПС',
    name: 'Павел Сидоров',
    role: 'CEO, маркетплейс зоотоваров «Зоо\u2011Маркет»',
    avatarClass: 'speaker-card__avatar--ceo',
    gradientId: 'grad3',
    stops: ['#0d9488', '#2dd4bf'],
  },
];

export function Speakers() {
  return (
    <AnimatedSection className="section speakers" id="speakers">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section-label">Спикеры</span>
          <h2>Эксперты, которые знают pet&#8209;tech изнутри</h2>
        </div>
        <div className="speakers__grid">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="speaker-card">
              <div className={`speaker-card__avatar ${speaker.avatarClass}`}>
                <svg className="speaker-card__portrait" viewBox="0 0 80 80" aria-hidden="true">
                  <circle cx="40" cy="40" r="40" fill={`url(#${speaker.gradientId})`} />
                  <circle cx="40" cy="32" r="14" fill="rgba(255,255,255,.25)" />
                  <ellipse cx="40" cy="58" rx="20" ry="14" fill="rgba(255,255,255,.2)" />
                  <text x="40" y="44" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">
                    {speaker.initials}
                  </text>
                  <defs>
                    <linearGradient id={speaker.gradientId} x1="0" y1="0" x2="80" y2="80">
                      <stop stopColor={speaker.stops[0]} />
                      <stop offset="1" stopColor={speaker.stops[1]} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="speaker-card__body">
                <h3>{speaker.name}</h3>
                <p className="speaker-card__role">{speaker.role}</p>
                {speaker.tag && <span className="speaker-card__tag">{speaker.tag}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
