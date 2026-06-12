import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { AppIcon, type IconName } from './ui/Icon';

const benefits: { icon: IconName; title: string; text: string; highlight?: boolean }[] = [
  {
    icon: 'format',
    title: 'Выбрать удобный формат участия',
    text: 'Прийти лично или подключиться к онлайн\u2011трансляции из любой точки мира',
  },
  {
    icon: 'networking',
    title: 'Завязать новые полезные знакомства',
    text: 'На конференции соберутся ключевые представители pet\u2011индустрии, владельцы digital\u2011продуктов, топ\u2011менеджеры технологических компаний и инвесторы',
  },
  {
    icon: 'analytics',
    title: 'Узнать о трендах и реальных кейсах',
    text: 'Ведущие эксперты рынка на реальных примерах покажут, как внедрение ИИ, работа с лояльностью и новые форматы монетизации приносят рост выручки',
  },
  {
    icon: 'growth',
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
            <motion.article
              key={item.title}
              className={`benefit-card${item.highlight ? ' benefit-card--highlight' : ''}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="benefit-card__icon"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <AppIcon name={item.icon} className="benefit-card__icon-svg" />
              </motion.div>
              <div className="benefit-card__content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
