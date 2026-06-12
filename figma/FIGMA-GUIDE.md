# Как получить Figma-файл за 5 минут

> **Важно:** нативный файл `.fig` и публичная share-ссылка создаются только внутри Figma под вашим аккаунтом. Мы подготовили HTML-макеты и скриншоты — их можно импортировать за пару минут.

## Что уже готово в репозитории

| Файл | Назначение |
|------|------------|
| `figma/mockups/desktop-1440.html` | Полная десктопная версия (1440 px) |
| `figma/mockups/mobile-360.html` | Полная мобильная версия (360 px) |
| `figma/mockups/desktop-1440.png` | Скриншот для справки |
| `figma/mockups/mobile-360.png` | Скриншот для справки |
| `figma/design-tokens.json` | Цвета, шрифты, радиусы для Tokens Studio |
| `figma/figma-structure.json` | Структура фреймов и слоёв |
| `figma/DESIGN.md` | Спецификация для ручной сборки |

**Live reference:** https://yandex-pet-day-opal.vercel.app

---

## Пошаговая инструкция

### Шаг 1. Откройте Figma

1. Перейдите на [figma.com](https://www.figma.com) и войдите в аккаунт (бесплатный подходит).
2. Создайте новый файл: **File → New design file**.
3. Переименуйте файл в **Yandex Pet Day**.

### Шаг 2. Установите плагин html.to.design

1. В Figma: **Resources** (иконка ⊞) → вкладка **Plugins**.
2. Найдите **html.to.design** (автор: ‹div›RIOTS).
3. Нажмите **Install** / **Run**.

> Альтернатива: плагин **Anima** — тоже импортирует HTML, но html.to.design точнее для статичных лендингов.

### Шаг 3. Импортируйте макеты

**Вариант A — из локального HTML (рекомендуется):**

1. Склонируйте репозиторий или скачайте папку `figma/mockups/`.
2. Запустите плагин html.to.design → **Import from file**.
3. Выберите `desktop-1440.html` → дождитесь импорта.
4. Переименуйте полученный фрейм в **Desktop 1440**.
5. Повторите для `mobile-360.html` → фрейм **Mobile 360**.

**Вариант B — из live URL:**

1. В плагине выберите **Import from URL**.
2. Вставьте: `https://yandex-pet-day-opal.vercel.app`
3. Укажите viewport **1440** для десктопа, затем **360** для мобайла.
4. Переименуйте фреймы.

> Локальные HTML-файлы надёжнее: они зафиксированы под нужную ширину и без JS-анимаций.

### Шаг 4. Примените design tokens

1. Установите плагин **Tokens Studio for Figma** (опционально, для системности).
2. **Tokens Studio → Load from file** → выберите `figma/design-tokens.json`.
3. Создайте стили:
   - **Colors:** bg `#F7F5F0`, accent `#FC3F1D`, bg-dark `#12121A` и т.д.
   - **Text styles:** Onest 800 / 52px (H1), 800 / 40px (H2), 400 / 16px (Body).
4. Подключите шрифт **Onest** через плагин **Google Fonts** или [fonts.google.com](https://fonts.google.com/specimen/Onest).

### Шаг 5. Проверьте фреймы

- **Desktop 1440** — ширина 1440 px, контент ~1200 px по центру.
- **Mobile 360** — ширина 360 px, одноколоночная вёрстка, burger в header.
- Секции сверху вниз: Header → Hero → Benefits → Speakers → Program → Location → CTA → Register → FAQ → Footer.

### Шаг 6. Опубликуйте share-ссылку

1. Нажмите **Share** (правый верхний угол).
2. В поле «Invite» выберите **Anyone with the link**.
3. Права: **can view** (достаточно для сдачи ТЗ).
4. Скопируйте ссылку — она вида `https://www.figma.com/design/...`.

---

## Быстрый чеклист (5 минут)

- [ ] Новый файл Figma «Yandex Pet Day»
- [ ] Плагин html.to.design установлен
- [ ] Импорт `desktop-1440.html` → фрейм **Desktop 1440**
- [ ] Импорт `mobile-360.html` → фрейм **Mobile 360**
- [ ] Шрифт Onest подключён
- [ ] Share → Anyone with link can view

---

## Что нельзя сделать без Figma API token

| Действие | Статус |
|----------|--------|
| Сгенерировать `.fig` файл автоматически | ❌ Нужен Figma REST API + Personal Access Token |
| Создать share-ссылку без входа в Figma | ❌ Только через аккаунт пользователя |
| HTML → editable Figma layers | ✅ Через html.to.design (шаг 3) |
| Pixel-perfect reference | ✅ Live site + PNG скриншоты |

---

## Проблемы и решения

**Плагин не видит шрифт Onest** — установите через Google Fonts plugin, затем Replace fonts в html.to.design.

**Слои «разъехались»** — используйте PNG-скриншоты (`desktop-1440.png`, `mobile-360.png`) как underlay и выравнивайте поверх.

**Нужен ручной макет** — следуйте `figma/DESIGN.md` и `figma/figma-structure.json`.
