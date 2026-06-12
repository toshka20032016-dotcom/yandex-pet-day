import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { SpeakerCard } from './SpeakerCard';
import { PetDecor } from './PetDecor';

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
      <PetDecor type="dog" className="pet-decor--speakers-tr" parallax={160} />
      <PetDecor type="cat" className="pet-decor--speakers-bl" parallax={100} />
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section-label">Спикеры</span>
          <h2 className="text-gradient">Эксперты, которые знают pet&#8209;tech изнутри</h2>
        </div>
        <div className="speakers__grid">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            >
              <SpeakerCard {...speaker} />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
