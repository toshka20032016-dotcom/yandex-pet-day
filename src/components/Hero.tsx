import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { AnimatedGrid } from './ui/AnimatedGrid';
import { AppIcon } from './ui/Icon';
import { CtaButton } from './ui/CtaButton';
import { cta } from '../content/cta';

export function Hero() {
  return (
    <AnimatedSection className="hero hero--premium">
      <AnimatedGrid className="hero__grid-bg" />
      <div className="hero__mesh" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <motion.div
            className="hero__badges"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge badge--neon">20 июня 2026</span>
            <span className="badge badge--outline">11:00</span>
            <span className="badge badge--accent">Офлайн + Онлайн</span>
          </motion.div>
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Yandex Pet Day · Яндекс Реклама
          </motion.p>
          <motion.h1
            className="hero__title hero__title--gradient"
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
            <CtaButton href={cta.anchors.register} size="lg" glow>
              {cta.primary}
            </CtaButton>
            <CtaButton href={cta.anchors.program} variant="ghost" size="lg">
              {cta.exploreProgram}
            </CtaButton>
          </motion.div>
          <motion.p
            className="hero__meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
          >
            <AppIcon name="mapPin" className="hero__meta-icon" />
            Москва, «Академия» · онлайн-трансляция
          </motion.p>
        </div>
        <motion.div
          className="hero__visual"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="hero-card hero-card--main glass-dark">
            <div className="hero-card__icon">
              <AppIcon name="trendingUp" className="hero-card__icon-svg" />
            </div>
            <p>Pet&#8209;tech рынок</p>
            <strong>+47%</strong>
            <span className="hero-card__chip">Рост за год</span>
          </div>
          <motion.div
            className="hero-card hero-card--float hero-card--ai glass-dark"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>AI&#8209;диагностика</span>
          </motion.div>
          <motion.div
            className="hero-card hero-card--float hero-card--loyalty glass-dark"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span>Зооморфизм</span>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
