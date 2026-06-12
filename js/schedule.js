/**
 * Conference schedule — single source of truth.
 * Rendered into #program-timeline by renderSchedule().
 */
const SCHEDULE = [
  {
    start: "10:00",
    end: "10:30",
    title: "Приветственный кофе",
    type: "networking",
    speaker: "Нетворкинг с участниками и партнёрами",
    tag: "только офлайн",
  },
  {
    start: "11:00",
    end: "11:30",
    title: "Вводное слово",
    type: "opening",
  },
  {
    start: "11:30",
    end: "12:10",
    title: "Компьютерное зрение в ветеринарии",
    type: "talk",
    speaker: "Андрей Соколов",
  },
  {
    start: "12:10",
    end: "12:50",
    title: "Зооморфизм",
    type: "talk",
    speaker: "Мария Подольская",
  },
  {
    start: "12:50",
    end: "13:10",
    title: "Перерыв",
    type: "break",
  },
  {
    start: "13:10",
    end: "13:40",
    title: "От стартапа до маркетплейса №1",
    type: "talk",
    speaker: "Павел Сидоров",
  },
  {
    start: "13:40",
    end: "15:00",
    title: "Инвестиции в Pet-технологии: пузырь или новая нефть?",
    type: "discussion",
    label: "Дискуссия",
  },
  {
    start: "15:00",
    end: "16:30",
    title: "Нетворкинг",
    type: "networking",
  },
];

const TYPE_LABELS = {
  talk: "Доклад",
  break: "Перерыв",
  discussion: "Дискуссия",
  networking: "Нетворкинг",
  opening: "Открытие",
};

function formatTimeRange(start, end) {
  return `${start} – ${end}`;
}

function buildTimelineItem(item) {
  const classes = ["timeline__item"];
  if (item.type === "break") classes.push("timeline__item--break");
  if (item.type === "talk" || item.type === "opening") classes.push("timeline__item--talk");
  if (item.type === "discussion") classes.push("timeline__item--discussion");
  if (item.type === "networking" && !item.tag) classes.push("timeline__item--networking");

  const typeLabel = item.label || TYPE_LABELS[item.type];
  const showType = typeLabel && item.type !== "opening" && item.type !== "networking";
  const isTalk = item.type === "talk" || item.type === "discussion";
  const titleClass = isTalk ? "timeline__title timeline__title--talk" : "timeline__title";

  let speakerHtml = "";
  if (item.speaker) {
    speakerHtml = `<p class="timeline__speaker">${item.speaker}`;
    if (item.tag) {
      speakerHtml += ` <span class="tag-inline">${item.tag}</span>`;
    }
    speakerHtml += "</p>";
  } else if (item.tag) {
    speakerHtml = `<p class="timeline__speaker"><span class="tag-inline">${item.tag}</span></p>`;
  }

  const badgeHtml =
    item.type === "discussion"
      ? `<span class="timeline__badge">Ключевой блок · 1 ч 20 мин</span>`
      : "";

  return `
    <article class="${classes.join(" ")}" data-animate>
      <time class="timeline__time" datetime="2026-06-20T${item.start}">${formatTimeRange(item.start, item.end)}</time>
      <div class="timeline__content">
        ${showType ? `<span class="timeline__type">${typeLabel}</span>` : ""}
        ${badgeHtml}
        <h3 class="${titleClass}">${item.type === "discussion" ? `«${item.title}»` : item.title}</h3>
        ${speakerHtml}
      </div>
    </article>
  `;
}

function renderSchedule(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = SCHEDULE.map(buildTimelineItem).join("");
  container.setAttribute("role", "list");
  container.querySelectorAll(".timeline__item").forEach((el) => el.setAttribute("role", "listitem"));
}

if (typeof window !== "undefined") {
  window.renderSchedule = renderSchedule;
}
