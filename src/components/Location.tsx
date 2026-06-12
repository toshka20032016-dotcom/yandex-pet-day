import { AnimatedSection } from './AnimatedSection';
import { AppIcon } from './ui/Icon';

export function Location() {
  return (
    <AnimatedSection className="section location">
      <div className="container location__inner">
        <div className="location__map" aria-hidden="true">
          <div className="map-pin">
            <AppIcon name="mapPin" className="map-pin__icon" />
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
