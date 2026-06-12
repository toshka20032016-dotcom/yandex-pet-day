import { AnimatedSection } from './AnimatedSection';
import { ConferenceTimeline } from './ConferenceTimeline';
import { PetDecor } from './PetDecor';

export function Program() {
  return (
    <AnimatedSection className="section program" id="program">
      <PetDecor type="dog" className="pet-decor--program-bl" parallax={120} />
      <PetDecor type="cat" className="pet-decor--program-tr" parallax={180} />
      <div className="container">
        <div className="section-head">
          <span className="section-label">Программа</span>
          <h2 className="text-gradient">Расписание конференции</h2>
        </div>
        <ConferenceTimeline />
      </div>
    </AnimatedSection>
  );
}
