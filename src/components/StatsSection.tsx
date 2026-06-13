import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const stats = [
  { value: '47%', label: 'рост pet-tech рынка за год' },
  { value: '3', label: 'спикера — лидеры индустрии' },
  { value: '6+', label: 'часов контента и нетворкинга' },
  { value: '2', label: 'формата — офлайн и онлайн' },
];

export function StatsSection() {
  return (
    <AnimatedSection className="stats-section">
      <div className="container">
        <div className="stats-section__grid">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              className="stats-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <span className="stats-card__value">{item.value}</span>
              <span className="stats-card__label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
