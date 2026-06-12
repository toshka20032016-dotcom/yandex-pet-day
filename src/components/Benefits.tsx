import { AnimatedSection } from './AnimatedSection';

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 14h12M10 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Выбрать удобный формат участия',
    text: 'Прийти лично или подключиться к онлайн\u2011трансляции из любой точки мира',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="11" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M5 26c0-4 3-7 6-7s6 3 6 7M15 26c0-4 3-7 6-7s6 3 6 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Завязать новые полезные знакомства',
    text: 'На конференции соберутся ключевые представители pet\u2011индустрии, владельцы digital\u2011продуктов, топ\u2011менеджеры технологических компаний и инвесторы',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 24l8-16 6 8 4-6 8 14H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Узнать о трендах и реальных кейсах',
    text: 'Ведущие эксперты рынка на реальных примерах покажут, как внедрение ИИ, работа с лояльностью и новые форматы монетизации приносят рост выручки',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M8 16l4 4 12-12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Получить практические инструменты для роста',
    text: 'Вы унесёте с собой не только впечатления, но и готовые механики, которые сможете применить в своём продукте',
    highlight: true,
  },
];

export function Benefits() {
  return (
    <AnimatedSection className="section benefits" id="benefits">
      <div className="benefits__decor" aria-hidden="true">
        <svg className="benefits__lines" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path d="M0,200 Q300,80 600,200 T1200,180" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0,280 Q400,160 800,280 T1200,260" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="benefits__paws benefits__paws--left" viewBox="0 0 120 120">
          <g opacity="0.06" fill="currentColor">
            <circle cx="24" cy="24" r="10" />
            <circle cx="44" cy="14" r="7" />
            <circle cx="12" cy="40" r="6" />
            <circle cx="32" cy="36" r="6" />
            <ellipse cx="28" cy="54" rx="14" ry="11" />
          </g>
        </svg>
        <svg className="benefits__paws benefits__paws--right" viewBox="0 0 120 120">
          <g opacity="0.05" fill="currentColor">
            <circle cx="96" cy="96" r="10" />
            <circle cx="76" cy="106" r="7" />
            <circle cx="108" cy="80" r="6" />
            <circle cx="88" cy="84" r="6" />
            <ellipse cx="92" cy="66" rx="14" ry="11" />
          </g>
        </svg>
      </div>
      <div className="container">
        <div className="section-head">
          <span className="section-label">Вы сможете</span>
          <h2>Всё, что нужно для роста в&nbsp;pet&#8209;индустрии</h2>
        </div>
        <div className="benefits__grid">
          {benefits.map((item) => (
            <article key={item.title} className={`benefit-card${item.highlight ? ' benefit-card--highlight' : ''}`}>
              <div className="benefit-card__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
