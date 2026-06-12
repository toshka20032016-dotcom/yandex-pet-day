# Yandex Pet Day — Design Specification

> Десктоп: **1440×** (контент 1200px) · Мобайл: **360×**

## Концепция: «Тёплый tech для pet-индустрии»

Конференция про digital-продукты для животных — это пересечение **технологичности** (AI, маркетплейсы, метрики) и **эмоциональной теплоты** (питомцы, забота, комьюнити). Визуальный язык балансирует между узнаваемым стилем Яндекса и самобытной pet-тематикой.

### Ключевые идеи

1. **Yandex DNA без копирования** — акцентный красный `#FC3F1D` (фирменный Yandex Red), но фон тёплый кремовый, а не холодный белый. Это отличает pet-мероприятие от корпоративных продуктовых страниц.
2. **Pet = мягкость + данные** — hero-блок с «карточкой метрики» (+47% рост рынка) и плавающими тегами AI/лояльность. Лапки как декоративный паттерн, не как детский мультик.
3. **Иерархия через контраст секций** — светлые блоки (benefits, speakers) чередуются с тёмным timeline (program), создавая ритм скролла.
4. **Практичность форм** — radio-карточки офлайн/онлайн с подсказками прямо в UI, как требует ТЗ.

---

## Цветовая палитра

| Token | HEX | Использование |
|-------|-----|---------------|
| `--color-bg` | `#F7F5F0` | Основной фон |
| `--color-bg-dark` | `#12121A` | Program, Footer |
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

**Шрифт:** Onest (Google Fonts) — геометрический grotesk, близкий к Yandex Sans Text.

| Стиль | Size | Weight | Line-height |
|-------|------|--------|-------------|
| H1 Hero | 52px / 28px mob | 800 | 1.08 |
| H2 Section | 40px / 28px mob | 800 | 1.15 |
| H3 Card | 20px | 700 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Lead | 18px | 400 | 1.65 |
| Label | 13px | 700 | — (uppercase, +0.08em) |
| Button | 15–16px | 600 | — |

---

## Сетка и отступы

- **Desktop frame:** 1440px, контент max 1200px, боковые поля 120px
- **Mobile frame:** 360px, боковые поля 16px
- **Section padding:** 96px vertical (64px mobile)
- **Grid gaps:** 20–64px в зависимости от блока
- **Border radius:** 8 / 16 / 24 / 32px + pill buttons

---

## Компоненты Figma

### Header (72px)
- Logo: paw icon 40×40 + «Yandex **Pet Day**»
- Nav links + CTA «Участвовать»
- Mobile: burger → slide menu

### Hero
- Badges: дата, время, формат
- H1 + lead paragraph
- 2 CTA buttons (primary + ghost)
- Visual: stat card + floating tags

### Benefit cards (2×2 grid → 1 col mobile)
- Icon 56×56, title, description
- Highlight card с gradient bg

### Speaker cards (3 col → 1 col)
- Avatar 88×88 gradient circles с инициалами
- Name, role, optional tag

### Timeline
- Dark bg, vertical line + dots
- Talk items с accent dot glow

### Registration form
- Name, Email, Format radio cards
- Submit «Зарегистрироваться»

### FAQ Accordion
- `<details>` pattern, + icon rotation
- Button «Остались вопросы» → Modal

### Modal
- 480px width, backdrop blur
- Name, Email, Question textarea

---

## Адаптивность

| Breakpoint | Поведение |
|------------|-----------|
| >1024px | Full desktop layout |
| ≤1024px | Hide nav, show burger; single column grids |
| ≤768px | Reduced padding, stacked timeline |
| ≤480px | Hide hero visual, compact hero title |

---

## Как перенести в Figma

1. Создайте файл **Yandex Pet Day**
2. Frames: `Desktop 1440` и `Mobile 360`
3. Импортируйте `design-tokens.json` через Tokens Studio или вручную
4. Используйте шрифт **Onest** (доступен в Google Fonts plugin)
5. Сверстайте компоненты по списку выше
6. Откройте доступ «Anyone with the link can view»

**Live reference:** задеплоенный сайт — pixel-perfect реализация макета.

---

## Ход мысли (для сдачи работы)

> Выбрал тёплую кремовую базу вместо стерильного белого — pet-индустрия про заботу и эмоции. Красный Yandex — только на акцентах (CTA, logo, timeline dots), чтобы не перегружать. Тёмная секция программы создаёт «event atmosphere» и отделяет информационно-насыщенный блок. Формы с card-style radio решают UX-задачу подсказок из ТЗ без дополнительных tooltip'ов. Мобильная версия приоритизирует контент: hero-visual скрывается на 480px, формы и FAQ остаются полнофункциональными.
