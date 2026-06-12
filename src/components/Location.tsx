import { AnimatedSection } from './AnimatedSection';

export function Location() {
  return (
    <AnimatedSection className="section location">
      <div className="container location__inner">
        <div className="location__map" aria-hidden="true">
          <div className="map-pin">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path
                d="M24 4C16.3 4 10 10.3 10 18c0 9.75 14 26 14 26s14-16.25 14-26c0-7.7-6.3-14-14-14z"
                fill="var(--color-accent)"
              />
              <circle cx="24" cy="18" r="5" fill="white" />
            </svg>
          </div>
        </div>
        <div className="location__info">
          <span className="section-label">Локация</span>
          <h2>Встречаемся в ивент&#8209;пространстве «Академия»</h2>
          <p className="location__address">Москва, Ленинградский проспект 31</p>
          <a className="btn btn--secondary" href="#register">
            Присоединяйтесь
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
