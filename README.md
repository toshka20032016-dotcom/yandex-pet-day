# Yandex Pet Day — Landing Page

Лендинг конференции **Yandex Pet Day** — digital-продукты в сфере зообизнеса и сервисов для животных.

**Live:** https://yandex-pet-day-opal.vercel.app

## Стек

- React 19 + TypeScript
- Vite 7
- Framer Motion (scroll-анимации, timeline, форма)
- Деплой: [Vercel](https://vercel.com)
- Шрифт: [Onest](https://fonts.google.com/specimen/Onest) (альтернатива Yandex Sans Text)

## Структура

```
├── index.html              # Vite entry
├── src/
│   ├── App.tsx             # Корневой компонент
│   ├── style.css           # Стили + design tokens
│   └── components/         # Секции лендинга
├── figma/                  # Design spec для Figma
├── vite.config.ts
└── vercel.json             # Конфиг Vercel
```

## Локальная разработка

```bash
npm install
npm run dev
```

Откройте http://localhost:5173

Сборка для production:

```bash
npm run build
npm run preview
```

## Секции

- Hero с датой, временем и CTA
- «Вы сможете» — 4 карточки преимуществ
- Спикеры
- Программа (timeline с staggered-анимацией)
- Локация
- Форма регистрации (офлайн/онлайн, динамические подсказки)
- FAQ + модалка «Остались вопросы»
- Footer

## Дизайн

Подробное описание концепции, палитры и типографики — в [`figma/DESIGN.md`](figma/DESIGN.md).

## Организатор

Яндекс Реклама · © Yandex Pet Day, 2026
