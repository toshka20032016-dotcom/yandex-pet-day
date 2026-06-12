import { AnimatedSection } from './AnimatedSection';

export function Hero() {
  return (
    <AnimatedSection className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__badges">
            <span className="badge">20 июня 2026</span>
            <span className="badge badge--outline">11:00</span>
            <span className="badge badge--accent">Офлайн + Онлайн</span>
          </div>
          <h1 className="hero__title">
            Конференция по&nbsp;digital&#8209;продуктам в&nbsp;сфере зообизнеса и&nbsp;сервисов для&nbsp;животных
          </h1>
          <p className="hero__lead">
            Разбираем кейсы: как зооморфизм в интерфейсах повышает удержание, почему ИИ&#8209;диагностика питомцев — новый
            рынок, и как монетизировать аудиторию, которая готова платить за здоровье и комфорт своих животных
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href="#register">
              Участвовать
            </a>
            <a className="btn btn--ghost btn--lg" href="#program">
              Смотреть программу
            </a>
          </div>
          <p className="hero__meta">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5c0-2.5-2-4.5-4.5-4.5z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle cx="8" cy="6" r="1.5" fill="currentColor" />
            </svg>
            Москва, ивент&#8209;пространство «Академия»
          </p>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero-card hero-card--main">
            <div className="hero-card__icon">🐕</div>
            <p>Pet&#8209;tech</p>
            <strong>+47% рост рынка</strong>
          </div>
          <div className="hero-card hero-card--float hero-card--ai">
            <span>AI&#8209;диагностика</span>
          </div>
          <div className="hero-card hero-card--float hero-card--loyalty">
            <span>Зооморфизм &amp; лояльность</span>
          </div>
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
        </div>
      </div>
    </AnimatedSection>
  );
}
