import { AnimatedSection } from './AnimatedSection';

export function CtaBanner() {
  return (
    <AnimatedSection className="cta-banner" aria-labelledby="cta-banner-title">
      <div className="container cta-banner__inner">
        <div className="cta-banner__text">
          <span className="cta-banner__eyebrow">Осталось мало мест</span>
          <h2 id="cta-banner-title">20 июня — pet&#8209;tech конференция года</h2>
          <p>Офлайн в Москве или онлайн из любой точки мира. Запишитесь сейчас — участие бесплатное.</p>
        </div>
        <a className="btn btn--primary btn--lg" href="#register-form">
          Зарегистрироваться
        </a>
      </div>
    </AnimatedSection>
  );
}
