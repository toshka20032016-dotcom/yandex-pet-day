import { AnimatedSection } from './AnimatedSection';
import { SpeakerCard } from './SpeakerCard';

const speakers = [
  {
    name: 'Андрей Соколов',
    role: 'Head of Product Design, Яндекс',
    topic: 'Расскажу, как компьютерное зрение меняет ветеринарию',
    avatar: 'АС',
    tag: 'Ведущий конференции',
    variant: 'design' as const,
  },
  {
    name: 'Мария Подольская',
    role: 'Head of AI, Лаборатория инноваций',
    topic: 'Покажу, почему зооморфизм — не мем, а драйвер удержания',
    avatar: 'МП',
    variant: 'ai' as const,
  },
  {
    name: 'Павел Сидоров',
    role: 'CEO, маркетплейс зоотоваров «Зоо\u2011Маркет»',
    topic: 'Разберу путь от стартапа до маркетплейса №1',
    avatar: 'ПС',
    variant: 'ceo' as const,
  },
];

export function Speakers() {
  return (
    <AnimatedSection className="section speakers" id="speakers">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section-label">Спикеры</span>
          <h2>Эксперты, которые знают pet&#8209;tech изнутри</h2>
        </div>
        <div className="speakers__grid">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
