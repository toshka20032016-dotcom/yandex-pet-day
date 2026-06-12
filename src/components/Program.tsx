import { AnimatedSection } from './AnimatedSection';
import { ConferenceTimeline } from './ConferenceTimeline';

export function Program() {
  return (
    <AnimatedSection className="section program" id="program">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Программа</span>
          <h2>Расписание конференции</h2>
        </div>
        <ConferenceTimeline />
      </div>
    </AnimatedSection>
  );
}
