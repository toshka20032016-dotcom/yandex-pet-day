# Yandex Pet Day — Design Specification



> Десктоп: **1440×** (контент 1200px) · Мобайл: **360×**



## Концепция: «Тёплый tech для pet-индустрии»



Конференция про digital-продукты для животных — пересечение **технологичности** (AI, маркетплейсы, метрики) и **эмоциональной теплоты** (питомцы, забота, комьюнити). Визуальный язык балансирует между узнаваемым стилем Яндекса и самобытной pet-тематикой.



### Ключевые идеи



1. **Yandex DNA без копирования** — акцентный красный `#FC3F1D`, фон тёплый кремовый `#F7F5F0`.

2. **Pet = мягкость + данные** — hero с карточкой метрики (+47%) и плавающими тегами AI/лояльность.

3. **Иерархия через контраст секций** — светлые блоки чередуются с тёмным timeline.

4. **Практичность форм** — radio-карточки офлайн/онлайн с подсказками в UI.



---



## Figma-ready mockups



| Файл | Описание |

|------|----------|

| [`mockups/desktop-1440.html`](mockups/desktop-1440.html) | Статичный HTML для импорта в Figma (1440 px) |

| [`mockups/mobile-360.html`](mockups/mobile-360.html) | Статичный HTML для импорта в Figma (360 px) |

| [`mockups/desktop-1440.png`](mockups/desktop-1440.png) | Full-page скриншот live site @ 1440 |

| [`mockups/mobile-360.png`](mockups/mobile-360.png) | Full-page скриншот live site @ 360 |

| [`mockups/styles.css`](mockups/styles.css) | Копия `src/style.css` + Figma overrides |

| [`FIGMA-GUIDE.md`](FIGMA-GUIDE.md) | Пошаговая инструкция (RU) для share-ссылки |

| [`figma-structure.json`](figma-structure.json) | JSON-структура фреймов и слоёв |

| [`design-tokens.json`](design-tokens.json) | Design tokens для Tokens Studio |



**Live reference:** https://yandex-pet-day-opal.vercel.app



---



## Компоненты (React → Figma)



| React component | Figma frame / section | Описание |

|-----------------|----------------------|----------|

| `PageBackground` | Background layer | Orbs, paw patterns (fixed) |

| `Header` | Header 72px | Logo, nav, CTA / burger |

| `Hero` | Hero | Badges, H1, CTAs, stat card |

| `Benefits` | Benefits section | 2×2 grid benefit cards |

| `Speakers` + `SpeakerCard` | Speakers | 3 cards, avatar gradients |

| `Program` + `ConferenceTimeline` | Program (dark) | Vertical timeline |

| `Location` + `AcademyMap` | Location | SVG map + zone cards |

| `CtaBanner` | CTA strip (dark) | Eyebrow + button |

| `RegisterForm` | Registration | Form + format radio cards |

| `Faq` + `QuestionModal` | FAQ | Accordion + modal trigger |

| `Footer` | Footer (dark) | Copyright, links |

| `PetDecor` | Decorative | Dog/cat silhouettes |

| `AnimatedSection` | — | Scroll reveal (static in mockup) |

| `ui/PawIcon`, `ui/PetIcon`, `ui/Icon` | Icons | Lucide-based icons |



---



## Цветовая палитра



| Token | HEX | Использование |

|-------|-----|---------------|

| `--color-bg` | `#F7F5F0` | Основной фон |

| `--color-bg-dark` | `#12121A` | Program, CTA, Footer |

| `--color-surface` | `#FFFFFF` | Карточки, формы |

| `--color-surface-muted` | `#F0ECE4` | Register section |

| `--color-text` | `#1A1A24` | Заголовки, body |

| `--color-text-muted` | `#5C5C6E` | Вторичный текст |

| `--color-accent` | `#FC3F1D` | CTA, акценты, logo |

| `--color-secondary` | `#2D6A4F` | Локация, success |

| `--color-violet` | `#6C4DFF` | AI-тег |

| `--color-teal` | `#0D9488` | Loyalty-тег |



---



## Типографика



**Шрифт:** Onest (Google Fonts) — альтернатива Yandex Sans Text.



| Стиль | Desktop | Mobile | Weight | Line-height |

|-------|---------|--------|--------|-------------|

| H1 Hero | 52px | 28px | 800 | 1.08 |

| H2 Section | 40px | 28px | 800 | 1.15–1.2 |

| H3 Card | 20–22px | 20px | 700 | 1.3 |

| Body | 16px | 16px | 400 | 1.6 |

| Lead | 18px | 16px | 400 | 1.6 |

| Label | 13px | 13px | 700 | uppercase, +0.08em |

| Button | 15–16px | 15–16px | 600 | — |



---



## Spacing & layout



| Token | Desktop | Mobile |

|-------|---------|--------|

| Frame width | 1440px | 360px |

| Content max-width | 1200px | 328px (360 − 32) |

| Side padding | 120px (auto) | 16px |

| Section padding Y | 120–140px | 72px |

| Header height | 72px | 72px |

| Grid gap (benefits) | 20px | 20px |

| Grid gap (speakers) | 24px | 24px |

| Register columns gap | 80px | 32px |



### Border radius



| Token | Value |

|-------|-------|

| `--radius-sm` | 8px |

| `--radius-md` | 16px |

| `--radius-lg` | 24px |

| `--radius-xl` | 40px |

| `--radius-full` | 999px (pill buttons) |



---



## Адаптивность



| Breakpoint | Поведение |

|------------|-----------|

| >1024px | Full desktop layout |

| ≤1024px | Burger menu, single-column grids |

| ≤768px | Reduced padding, stacked timeline |

| ≤480px | Hero visual hidden, compact title |



---



## Как перенести в Figma



1. Следуйте [`FIGMA-GUIDE.md`](FIGMA-GUIDE.md) — импорт через **html.to.design**.

2. Импортируйте `design-tokens.json` через Tokens Studio.

3. Сверяйтесь с PNG-скриншотами и live site.

4. Откройте доступ «Anyone with the link can view».



---



## Ход мысли (для сдачи работы)



> Тёплая кремовая база вместо белого — pet-индустрия про заботу. Красный Yandex только на акцентах. Тёмная секция программы создаёт event atmosphere. Card-style radio в формах решает UX подсказок из ТЗ. Мобайл приоритизирует контент: hero-visual скрывается, thesis спикеров виден сразу.


