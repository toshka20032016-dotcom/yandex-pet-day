import { readFileSync, writeFileSync, appendFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const stylesPath = join(__dirname, 'styles.css');

// Append Figma mockup overrides once
const figmaOverrides = `
/* === Figma mockup overrides === */
[data-animate], .animate-on-scroll {
  opacity: 1 !important;
  transform: none !important;
  transition: none !important;
}
.hero-card--float { animation: none !important; }
.mockup-frame { margin: 0; overflow-x: hidden; }
.mockup-frame--desktop { width: 1440px; min-width: 1440px; }
.mockup-frame--mobile { width: 360px; min-width: 360px; }
.mockup-frame--desktop .nav, .mockup-frame--desktop .header__cta { display: flex !important; }
.mockup-frame--desktop .burger, .mockup-frame--desktop .mobile-menu { display: none !important; }
.mockup-frame--mobile .nav, .mockup-frame--mobile .header__cta { display: none !important; }
.mockup-frame--mobile .burger { display: flex !important; }
.mockup-frame--mobile .hero__visual { display: none !important; }
.mockup-frame--mobile .hero__grid { grid-template-columns: 1fr !important; }
.mockup-frame--mobile .hero { padding: 56px 0 80px !important; }
.mockup-frame--mobile .hero__title { font-size: 28px !important; }
.mockup-frame--mobile .hero__lead { font-size: 16px !important; }
.mockup-frame--mobile .hero__actions { flex-direction: column !important; }
.mockup-frame--mobile .hero__actions .btn { width: 100% !important; }
.mockup-frame--mobile .benefits__grid { grid-template-columns: 1fr !important; }
.mockup-frame--mobile .speakers__grid { grid-template-columns: 1fr !important; max-width: 100% !important; }
.mockup-frame--mobile .academy-map__zones { grid-template-columns: 1fr !important; }
.mockup-frame--mobile .register__grid { grid-template-columns: 1fr !important; gap: 32px !important; }
.mockup-frame--mobile .faq__grid { grid-template-columns: 1fr !important; gap: 32px !important; }
.mockup-frame--mobile .cta-banner__inner { flex-direction: column !important; text-align: center !important; }
.mockup-frame--mobile .cta-banner .btn--primary { width: 100% !important; }
.mockup-frame--mobile .timeline__item { grid-template-columns: 1fr !important; gap: 8px !important; padding: 16px !important; }
.mockup-frame--mobile .timeline { padding-left: 28px !important; }
.mockup-frame--mobile .timeline::before { left: 8px !important; }
.mockup-frame--mobile .timeline__marker { left: -32px !important; }
.mockup-frame--mobile .format-options { grid-template-columns: 1fr !important; }
.mockup-frame--mobile .register-form { padding: 28px !important; }
.mockup-frame--mobile .footer__org { margin-left: 0 !important; width: 100% !important; }
.mockup-frame--mobile .section { padding: 72px 0 !important; }
.mockup-frame--mobile { --container: calc(100% - 32px) !important; }
.mockup-frame--desktop { --container: min(1200px, calc(100% - 48px)) !important; }
.speaker-card--active .speaker-card__thesis { display: block !important; opacity: 1 !important; height: auto !important; margin-top: 16px !important; }
`;

let css = readFileSync(stylesPath, 'utf8');
if (!css.includes('Figma mockup overrides')) {
  appendFileSync(stylesPath, figmaOverrides);
}

const PAW = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M17,6A3,3 0 0,1 20,9A3,3 0 0,1 17,12A3,3 0 0,1 14,9A3,3 0 0,1 17,6M12,12A3,3 0 0,1 15,15A3,3 0 0,1 12,18A3,3 0 0,1 9,15A3,3 0 0,1 12,12M7,6A3,3 0 0,1 10,9A3,3 0 0,1 7,12A3,3 0 0,1 4,9A3,3 0 0,1 7,6Z"/></svg>';
const LOGO_PAW = '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="8" cy="7" r="3.5" fill="currentColor"/><circle cx="20" cy="7" r="3.5" fill="currentColor"/><circle cx="5" cy="15" r="3" fill="currentColor"/><circle cx="23" cy="15" r="3" fill="currentColor"/><ellipse cx="14" cy="20" rx="6" ry="5" fill="currentColor"/></svg>';
const MAP_PIN = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="hero__meta-icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';

const benefits = [
  { title: 'Выбрать удобный формат участия', text: 'Прийти лично или подключиться к онлайн‑трансляции из любой точки мира', highlight: false },
  { title: 'Завязать новые полезные знакомства', text: 'На конференции соберутся ключевые представители pet‑индустрии, владельцы digital‑продуктов, топ‑менеджеры технологических компаний и инвесторы', highlight: false },
  { title: 'Узнать о трендах и реальных кейсах', text: 'Ведущие эксперты рынка на реальных примерах покажут, как внедрение ИИ, работа с лояльностью и новые форматы монетизации приносят рост выручки', highlight: false },
  { title: 'Получить практические инструменты для роста', text: 'Вы унесёте с собой не только впечатления, но и готовые механики, которые сможете применить в своём продукте', highlight: true },
];

const speakers = [
  { name: 'Андрей Соколов', role: 'Head of Product Design, Яндекс', topic: 'Расскажу, как компьютерное зрение меняет ветеринарию', avatar: 'АС', tag: 'Ведущий конференции', grad: ['#fc3f1d', '#ff6b4a'], id: 'design' },
  { name: 'Мария Подольская', role: 'Head of AI, Лаборатория инноваций', topic: 'Покажу, почему зооморфизм — не мем, а драйвер удержания', avatar: 'МП', tag: null, grad: ['#6c4dff', '#9b7dff'], id: 'ai' },
  { name: 'Павел Сидоров', role: 'CEO, маркетплейс зоотоваров «Зоо‑Маркет»', topic: 'Разберу путь от стартапа до маркетплейса №1', avatar: 'ПС', tag: null, grad: ['#0d9488', '#2dd4bf'], id: 'ceo' },
];

const schedule = [
  { start: '10:00', end: '10:30', title: 'Приветственный кофе', speaker: 'Нетворкинг с участниками и партнёрами', tag: 'только офлайн', break: false, talk: true, highlight: false },
  { start: '11:00', end: '11:30', title: 'Вводное слово', break: false, talk: false, highlight: false },
  { start: '11:30', end: '12:10', title: 'Компьютерное зрение в ветеринарии', speaker: 'Андрей Соколов', break: false, talk: true, highlight: false },
  { start: '12:10', end: '12:50', title: 'Зооморфизм', speaker: 'Мария Подольская', break: false, talk: true, highlight: false },
  { start: '12:50', end: '13:10', title: 'Перерыв', break: true, talk: false, highlight: false },
  { start: '13:10', end: '13:40', title: 'От стартапа до маркетплейса №1', speaker: 'Павел Сидоров', break: false, talk: true, highlight: false },
  { start: '13:40', end: '15:00', title: 'Дискуссия', break: false, talk: false, highlight: true },
  { start: '15:00', end: '16:30', title: 'Нетворкинг', break: false, talk: false, highlight: false },
];

const faqItems = [
  { q: 'Кому точно стоит прийти на конференцию?', a: 'Владельцам и сотрудникам digital‑продуктов в сфере зообизнеса: маркетплейсы, ветклиники, приложения для груминга, зоомагазины, агрегаторы. А также маркетологам, продактам, дизайнерам и разработчикам, которые хотят зайти в этот быстрорастущий рынок или масштабировать свои проекты.' },
  { q: 'Я могу прийти с питомцем?', a: 'Да, если выбираете офлайн‑формат! Мы организуем специальную зону для животных с водой, мисками и необходимыми принадлежностями. Но убедительная просьба: убедитесь, что питомец социализирован и комфортно чувствует себя в обществе людей и других животных. О наличии питомца нужно предупредить заранее при регистрации.' },
  { q: 'Будет ли запись докладов для онлайн-участников?', a: 'Обязательно. Все зарегистрированные участники (и офлайн, и онлайн) получат доступ к видеозаписям, презентациям спикеров и текстовым расшифровкам в течение 3 дней после конференции. Доступ остаётся у вас навсегда.' },
  { q: 'Я из другого города. Есть ли смысл ехать в Москву или достаточно онлайн?', a: 'Зависит от ваших целей. Если вам нужны исключительно знания и контент — онлайн‑формата достаточно. Если вы ищете партнёров, инвесторов, хотите «вживую» пообщаться с лидерами рынка и почувствовать комьюнити — приезжайте. Офлайн‑участников ждёт закрытый бизнес‑завтрак и неформальное общение после основной программы.' },
  { q: 'Будут ли сертификаты или другие документы об участии?', a: 'Да, все участники (онлайн и офлайн) получают именной сертификат участника конференции.' },
];

function speakerCard(s, showThesis) {
  const thesisClass = showThesis ? ' speaker-card--active' : '';
  const thesisBlock = showThesis
    ? `<div class="speaker-card__thesis"><p>«${s.topic}»</p></div>`
    : '';
  const tag = s.tag ? `<span class="speaker-card__tag">${s.tag}</span>` : '';
  return `<article class="speaker-card${thesisClass} glow--warm">
    <div class="speaker-card__avatar">
      <svg class="speaker-card__portrait" viewBox="0 0 80 80" aria-hidden="true">
        <defs><linearGradient id="speaker-grad-${s.id}" x1="0" y1="0" x2="80" y2="80"><stop stop-color="${s.grad[0]}"/><stop offset="1" stop-color="${s.grad[1]}"/></linearGradient></defs>
        <circle cx="40" cy="40" r="40" fill="url(#speaker-grad-${s.id})"/>
        <circle cx="40" cy="32" r="14" fill="rgba(255,255,255,.25)"/>
        <ellipse cx="40" cy="58" rx="20" ry="14" fill="rgba(255,255,255,.2)"/>
        <text x="40" y="44" text-anchor="middle" fill="white" font-size="16" font-weight="700">${s.avatar}</text>
      </svg>
    </div>
    <div class="speaker-card__body">
      <h3>${s.name}</h3>
      <p class="speaker-card__role">${s.role}</p>
      ${tag}
      ${thesisBlock}
    </div>
  </article>`;
}

function timelineItem(item) {
  const classes = ['timeline__item'];
  if (item.break) classes.push('timeline__item--break');
  if (item.talk) classes.push('timeline__item--talk');
  if (item.highlight) classes.push('timeline__item--discussion', 'glow--warm');
  let extra = '';
  if (item.highlight) {
    extra = '<span class="timeline__type">Дискуссия</span><span class="timeline__badge">Ключевой блок · 1 ч 20 мин</span>';
  }
  const titleClass = item.talk || item.highlight ? 'timeline__title timeline__title--talk' : 'timeline__title';
  let speaker = '';
  if (item.speaker) {
    speaker = `<p class="timeline__speaker">${item.speaker}${item.tag ? `<span class="tag-inline">${item.tag}</span>` : ''}</p>`;
  } else if (item.tag) {
    speaker = `<p class="timeline__speaker"><span class="tag-inline">${item.tag}</span></p>`;
  }
  const pawSize = item.highlight ? 22 : 18;
  return `<div class="${classes.join(' ')}" role="listitem">
    <span class="timeline__marker" aria-hidden="true">${PAW.replace('width="18"', `width="${pawSize}"`).replace('height="18"', `height="${pawSize}"`)}</span>
    <time class="timeline__time">${item.start} – ${item.end}</time>
    <div class="timeline__content">
      <div class="timeline__header">
        <div class="timeline__pet-icon"><svg viewBox="0 0 40 40" width="32" height="32" fill="currentColor"><ellipse cx="20" cy="30" rx="11" ry="9"/></svg></div>
        <div class="timeline__text">${extra}<h3 class="${titleClass}">${item.title}</h3>${speaker}</div>
      </div>
    </div>
  </div>`;
}

function buildBody(variant) {
  const isMobile = variant === 'mobile';
  const showHeroVisual = !isMobile;
  const showSpeakerThesis = isMobile;

  return `<div class="page-bg" aria-hidden="true">
  <div class="orb orb--1"></div>
  <div class="orb orb--2"></div>
  <div class="orb orb--3"></div>
</div>

<header class="header" id="top">
  <div class="container header__inner">
    <a class="logo" href="#top" aria-label="Yandex Pet Day">
      <span class="logo__mark">${LOGO_PAW}</span>
      <span class="logo__text">Yandex <strong>Pet Day</strong></span>
    </a>
    <nav class="nav" aria-label="Навигация">
      <a href="#benefits">О конференции</a>
      <a href="#speakers">Спикеры</a>
      <a href="#program">Программа</a>
      <a href="#register">Регистрация</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="btn btn--sm btn--primary header__cta" href="#register">Участвовать</a>
    <button class="burger" type="button" aria-label="Меню"><span></span><span></span><span></span></button>
  </div>
</header>

<main>
  <section class="hero is-visible" data-animate>
    <div class="container hero__grid">
      <div class="hero__content">
        <div class="hero__badges">
          <span class="badge">20 июня 2026</span>
          <span class="badge badge--outline">11:00</span>
          <span class="badge badge--accent">Офлайн + Онлайн</span>
        </div>
        <h1 class="hero__title">Конференция по&nbsp;digital‑продуктам в&nbsp;сфере зообизнеса и&nbsp;сервисов для&nbsp;животных</h1>
        <p class="hero__lead">Разбираем кейсы: как зооморфизм в интерфейсах повышает удержание, почему ИИ‑диагностика питомцев — новый рынок, и как монетизировать аудиторию, которая готова платить за здоровье и комфорт своих животных</p>
        <div class="hero__actions">
          <a class="btn btn--primary btn--lg" href="#register">Участвовать</a>
          <a class="btn btn--ghost btn--lg" href="#program">Смотреть программу</a>
        </div>
        <p class="hero__meta">${MAP_PIN} Москва, ивент‑пространство «Академия»</p>
      </div>
      ${showHeroVisual ? `<div class="hero__visual" aria-hidden="true">
        <div class="hero-card hero-card--main">
          <div class="hero-card__icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div>
          <p>Pet‑tech</p>
          <strong>+47% рост рынка</strong>
        </div>
        <div class="hero-card hero-card--float hero-card--ai"><span>AI‑диагностика</span></div>
        <div class="hero-card hero-card--float hero-card--loyalty"><span>Зооморфизм &amp; лояльность</span></div>
      </div>` : ''}
    </div>
  </section>

  <section class="section benefits is-visible" id="benefits" data-animate>
    <div class="container">
      <div class="section-head">
        <span class="section-label">Вы сможете</span>
        <h2 class="text-gradient">Всё, что нужно для роста в&nbsp;pet‑индустрии</h2>
      </div>
      <div class="benefits__grid">
        ${benefits.map((b) => `<article class="benefit-card${b.highlight ? ' benefit-card--highlight' : ''} glow--warm">
          <div class="benefit-card__icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
          <div class="benefit-card__content"><h3>${b.title}</h3><p>${b.text}</p></div>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="section speakers is-visible" id="speakers" data-animate>
    <div class="container">
      <div class="section-head section-head--center">
        <span class="section-label">Спикеры</span>
        <h2 class="text-gradient">Эксперты, которые знают pet‑tech изнутри</h2>
      </div>
      <div class="speakers__grid">
        ${speakers.map((s) => speakerCard(s, showSpeakerThesis)).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="section program is-visible" id="program" data-animate>
    <div class="container">
      <div class="section-head">
        <span class="section-label">Программа</span>
        <h2 class="text-gradient">Расписание конференции</h2>
      </div>
      <div class="timeline" aria-label="Расписание конференции" role="list">
        ${schedule.map(timelineItem).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="section location is-visible" data-animate>
    <div class="container location__inner">
      <div class="location__header">
        <span class="section-label">Локация</span>
        <h2>Встречаемся в ивент‑пространстве «Академия»</h2>
        <p class="location__address">Москва, Ленинградский проспект 31</p>
      </div>
      <div class="academy-map">
        <svg class="academy-map__schematic" viewBox="0 0 800 320" role="img" aria-label="Схема площадки">
          <rect x="40" y="40" width="720" height="240" rx="16" fill="#f7f5f0" stroke="rgba(26,26,36,0.1)" stroke-width="1.5"/>
          <rect x="60" y="60" width="380" height="140" rx="8" fill="rgba(108,77,255,0.09)" stroke="#6c4dff" stroke-width="1.5"/>
          <text x="250" y="135" text-anchor="middle" fill="#6c4dff" font-size="13" font-weight="700">Лекторий</text>
          <rect x="460" y="60" width="280" height="80" rx="8" fill="rgba(252,63,29,0.09)" stroke="#fc3f1d" stroke-width="1.5"/>
          <text x="600" y="105" text-anchor="middle" fill="#fc3f1d" font-size="13" font-weight="700">Бизнес-завтрак</text>
          <rect x="60" y="220" width="680" height="40" rx="8" fill="rgba(45,106,79,0.09)" stroke="#2d6a4f" stroke-width="1.5"/>
          <text x="400" y="245" text-anchor="middle" fill="#2d6a4f" font-size="13" font-weight="700">Pet-friendly зона</text>
          <circle cx="720" cy="260" r="8" fill="#fc3f1d" opacity="0.35"/>
          <text x="720" y="280" text-anchor="middle" fill="rgba(26,26,36,0.35)" font-size="10">Вход</text>
        </svg>
        <div class="academy-map__zones">
          <article class="academy-zone glow--warm"><div class="academy-zone__icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg></div><h3 class="academy-zone__title">Лекторий</h3><p class="academy-zone__desc">Основная сцена и доклады спикеров</p></article>
          <article class="academy-zone glow--warm"><div class="academy-zone__icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg></div><h3 class="academy-zone__title">Бизнес-завтрак</h3><p class="academy-zone__desc">Неформальное общение и нетворкинг</p></article>
          <article class="academy-zone glow--warm"><div class="academy-zone__icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-2.576 2.6-2.576 4.5"/><path d="M9.5 8.5c.384 1.05 1.083 2.028 2.344 2.5 1.931.722 2.576 2.6 2.576 4.5"/><path d="M9.5 8.5V7a3.5 3.5 0 0 1 7 0v1.5"/></svg></div><h3 class="academy-zone__title">Pet-friendly зона</h3><p class="academy-zone__desc">Вода, миски и место для отдыха вашего питомца</p></article>
        </div>
      </div>
      <div class="location__cta"><a class="btn btn--primary" href="#register">Участвовать</a></div>
    </div>
  </section>

  <section class="cta-banner is-visible" data-animate>
    <div class="container cta-banner__inner">
      <div class="cta-banner__text">
        <span class="cta-banner__eyebrow">Осталось мало мест</span>
        <h2>20 июня — pet‑tech конференция года</h2>
        <p>Офлайн в Москве или онлайн из любой точки мира. Запишитесь сейчас — участие бесплатное.</p>
      </div>
      <a class="btn btn--primary btn--lg" href="#register-form">Зарегистрироваться</a>
    </div>
  </section>

  <section class="section register is-visible" id="register" data-animate>
    <div class="container register__grid">
      <div class="register__intro">
        <span class="section-label">Регистрация</span>
        <h2>Присоединяйтесь к&nbsp;конференции</h2>
        <p>Заполните форму — мы отправим подтверждение и все детали участия на вашу почту.</p>
      </div>
      <form class="register-form" id="register-form">
        <div class="form-group">
          <label for="reg-name">Имя</label>
          <input type="text" id="reg-name" name="name" placeholder="Введите ваше имя"/>
        </div>
        <div class="form-group">
          <label for="reg-email">Почта</label>
          <input type="email" id="reg-email" name="email" placeholder="example@mail.ru"/>
        </div>
        <fieldset class="form-group form-group--format">
          <legend>Выберите формат участия <span class="legend-hint">(онлайн / офлайн)</span></legend>
          <div class="format-options">
            <label class="format-option">
              <input type="radio" name="format" value="offline" checked/>
              <span class="format-option__box">
                <span class="format-option__icon">${MAP_PIN.replace('class="hero__meta-icon"', 'class="format-option__icon-svg"')}</span>
                <strong>Офлайн</strong>
                <small class="format-option__label">Москва, «Академия»</small>
              </span>
            </label>
            <label class="format-option">
              <input type="radio" name="format" value="online"/>
              <span class="format-option__box">
                <span class="format-option__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
                <strong>Онлайн</strong>
                <small class="format-option__label">Трансляция в прямом эфире</small>
              </span>
            </label>
          </div>
          <div class="format-hint" style="margin-top:16px">
            <span class="format-hint__icon">${MAP_PIN}</span>
            <p class="format-hint__text">Количество мест ограничено</p>
          </div>
        </fieldset>
        <button type="button" class="btn btn--primary btn--lg btn--full">Зарегистрироваться</button>
      </form>
    </div>
  </section>

  <section class="section faq is-visible" id="faq" data-animate>
    <div class="container faq__grid">
      <div class="faq__intro">
        <span class="section-label">Вопрос-ответ</span>
        <h2>Частые вопросы</h2>
        <button type="button" class="btn btn--outline">Остались вопросы</button>
      </div>
      <div class="accordion" role="list">
        ${faqItems.map((f) => `<details class="accordion__item"><summary>${f.q}</summary><p>${f.a}</p></details>`).join('\n        ')}
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="container footer__inner">
    <p>© Yandex Pet Day, 2026</p>
    <a href="#" class="footer__link">Политика конфиденциальности</a>
    <p class="footer__org">Организатор — Яндекс Реклама</p>
  </div>
</footer>`;
}

function buildHtml(variant) {
  const frameClass = variant === 'desktop' ? 'mockup-frame--desktop' : 'mockup-frame--mobile';
  const title = variant === 'desktop' ? 'Yandex Pet Day — Desktop 1440' : 'Yandex Pet Day — Mobile 360';
  const width = variant === 'desktop' ? '1440' : '360';
  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=${width}, initial-scale=1"/>
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="styles.css"/>
  <style>html, body { width: ${width}px; min-width: ${width}px; margin: 0; }</style>
</head>
<body class="mockup-frame ${frameClass}">
${buildBody(variant)}
</body>
</html>`;
}

writeFileSync(join(__dirname, 'desktop-1440.html'), buildHtml('desktop'), 'utf8');
writeFileSync(join(__dirname, 'mobile-360.html'), buildHtml('mobile'), 'utf8');
console.log('Generated desktop-1440.html and mobile-360.html');
