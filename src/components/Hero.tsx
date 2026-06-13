import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { AppIcon } from './ui/Icon';
import { PetDecorLayer } from './PetDecor';

export function Hero() {
  return (
    <AnimatedSection className="hero">
      <PetDecorLayer />
      <div className="hero__mesh" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <motion.div
            className="hero__badges"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge">20 июня 2026</span>
            <span className="badge badge--outline">11:00</span>
            <span className="badge badge--accent">Офлайн + Онлайн</span>
          </motion.div>
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Yandex Pet Day — конференция по digital-продуктам для pet-индустрии
          </motion.p>
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Конференция по&nbsp;digital&#8209;продуктам в&nbsp;сфере зообизнеса и&nbsp;сервисов для&nbsp;животных
          </motion.h1>
          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            Разбираем кейсы: как зооморфизм в интерфейсах повышает удержание, почему ИИ&#8209;диагностика питомцев — новый
            рынок, и как монетизировать аудиторию, которая готова платить за здоровье и комфорт своих животных
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
          >
            <a className="btn btn--primary btn--lg" href="#register">
              Участвовать
            </a>
            <a className="btn btn--ghost btn--lg" href="#program">
              Смотреть программу
            </a>
          </motion.div>
          <motion.p
            className="hero__meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
          >
            <AppIcon name="mapPin" className="hero__meta-icon" />
            Москва, ивент&#8209;пространство «Академия» · онлайн-трансляция
          </motion.p>
        </div>
        <motion.div
          className="hero__visual"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="hero-card hero-card--main glass-card">
            <div className="hero-card__icon">
              <AppIcon name="trendingUp" className="hero-card__icon-svg" />
            </div>
            <p>Pet&#8209;tech рынок</p>
            <strong>+47% за год</strong>
            <span className="hero-card__chip">Тренд 2026</span>
          </div>
          <motion.div
            className="hero-card hero-card--float hero-card--ai glass-card"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>AI&#8209;диагностика</span>
          </motion.div>
          <motion.div
            className="hero-card hero-card--float hero-card--loyalty glass-card"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span>Зооморфизм &amp; лояльность</span>
          </motion.div>
          <div className="paw-trail">
            <svg viewBox="0 0 200 120" fill="none">
              <g opacity=".15" fill="currentColor">
                <circle cx="20" cy="20" r="8" />
                <circle cx="40" cy="12" r="6" />
                <circle cx="12" cy="36" r="5" />
                <circle cx="28" cy="32" r="5" />
                <ellipse cx="24" cy="48" rx="10" ry="8" />
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
