import { AnimatedSection } from './AnimatedSection';
import { AcademyMap } from './AcademyMap';
import { cta } from '../content/cta';

export function Location() {
  return (
    <AnimatedSection className="section location">
      <div className="container location__inner">
        <div className="location__header">
          <span className="section-label">Локация</span>
          <h2>Встречаемся в ивент&#8209;пространстве «Академия»</h2>
          <p className="location__address">Москва, Ленинградский проспект 31</p>
          <p className="location__note">
            {cta.freeNote} · вход по записи
          </p>
        </div>

        <AcademyMap />
      </div>
    </AnimatedSection>
  );
}
