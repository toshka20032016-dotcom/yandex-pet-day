const items = [
  'Pet-tech',
  'AI-диагностика',
  'Зооморфизм',
  'Лояльность',
  'Маркетплейсы',
  'Ветеринария',
  'Монетизация',
  'Инвестиции',
  'Digital-продукты',
  'Яндекс Реклама',
];

export function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            {item}
            <span className="marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
