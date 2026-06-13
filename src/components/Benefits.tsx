import { motion } from 'framer-motion';

import { AnimatedSection } from './AnimatedSection';

import { AppIcon, type IconName } from './ui/Icon';



const benefits: {

  icon: IconName;

  title: string;

  text: string;

  highlight?: boolean;

  glowClass?: string;

  bento?: 'wide' | 'tall';

}[] = [

  {

    icon: 'format',

    title: 'Выбрать удобный формат участия',

    text: 'Прийти лично или подключиться к онлайн\u2011трансляции из любой точки мира',

    glowClass: 'glow--warm',

    bento: 'wide',

  },

  {

    icon: 'networking',

    title: 'Завязать новые полезные знакомства',

    text: 'На конференции соберутся ключевые представители pet\u2011индустрии, владельцы digital\u2011продуктов, топ\u2011менеджеры технологических компаний и инвесторы',

    glowClass: 'glow--warm',

  },

  {

    icon: 'analytics',

    title: 'Узнать о трендах и реальных кейсах',

    text: 'Ведущие эксперты рынка на реальных примерах покажут, как внедрение ИИ, работа с лояльностью и новые форматы монетизации приносят рост выручки',

    glowClass: 'glow--ai',

  },

  {

    icon: 'growth',

    title: 'Получить практические инструменты для роста',

    text: 'Вы унесёте с собой не только впечатления, но и готовые механики, которые сможете применить в своём продукте',

    highlight: true,

    glowClass: 'glow--warm',

    bento: 'tall',

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

      </div>

      <div className="container">

        <div className="section-head">

          <span className="section-label">Вы сможете</span>

          <h2 className="text-gradient">Всё, что нужно для роста в&nbsp;pet&#8209;индустрии</h2>

        </div>

        <div className="benefits__grid benefits__grid--bento">

          {benefits.map((item, index) => (

            <motion.article

              key={item.title}

              className={[

                'benefit-card glass-dark',

                item.highlight ? 'benefit-card--highlight' : '',

                item.glowClass ?? '',

                item.bento === 'wide' ? 'benefit-card--wide' : '',

                item.bento === 'tall' ? 'benefit-card--tall' : '',

              ]

                .filter(Boolean)

                .join(' ')}

              initial={{ opacity: 0, y: 24 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true, margin: '-60px' }}

              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}

              whileHover={{ y: -6 }}

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

