(function () {
  "use strict";

  /* ── Mobile menu ── */
  const burger = document.querySelector(".burger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      const open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      mobileMenu.hidden = open;
      burger.classList.toggle("is-open", !open);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burger.setAttribute("aria-expanded", "false");
        mobileMenu.hidden = true;
        burger.classList.remove("is-open");
      });
    });
  }

  /* ── Schedule timeline ── */
  if (typeof renderSchedule === "function") {
    renderSchedule("program-timeline");
  }

  /* ── Question modal ── */
  const questionModal = document.getElementById("question-modal");
  const openQuestionBtn = document.getElementById("open-question-modal");

  function openModal() {
    if (!questionModal) return;
    questionModal.hidden = false;
    document.body.style.overflow = "hidden";
    questionModal.querySelector("input")?.focus();
  }

  function closeModal() {
    if (!questionModal) return;
    questionModal.hidden = true;
    document.body.style.overflow = "";
  }

  openQuestionBtn?.addEventListener("click", openModal);

  questionModal?.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && questionModal && !questionModal.hidden) {
      closeModal();
    }
  });

  /* ── Format selection hints ── */
  const FORMAT_HINTS = {
    offline: "Количество мест ограничено",
    online: "Пришлём ссылку на трансляцию на почту за час до начала",
  };

  const formatHint = document.getElementById("format-hint");
  const formatRadios = document.querySelectorAll('input[name="format"]');

  function updateFormatHint(value) {
    if (!formatHint || !value) return;

    const text = formatHint.querySelector(".format-hint__text");
    formatHint.hidden = false;
    formatHint.classList.remove("format-hint--offline", "format-hint--online", "is-visible");

    requestAnimationFrame(() => {
      formatHint.classList.add(`format-hint--${value}`, "is-visible");
      if (text) text.textContent = FORMAT_HINTS[value];
    });
  }

  formatRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) updateFormatHint(radio.value);
    });
  });

  /* ── Form handling ── */
  function setButtonLoading(btn, loading) {
    if (!btn) return;
    const spinner = btn.querySelector(".btn__spinner");
    btn.classList.toggle("btn--loading", loading);
    btn.disabled = loading;
    if (spinner) spinner.hidden = !loading;
  }

  function handleQuestionForm() {
    const form = document.getElementById("question-form");
    const success = document.getElementById("question-success");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      form.querySelectorAll("[required]").forEach((field) => {
        const ok = field.value.trim();
        field.classList.toggle("error", !ok);
        if (!ok) valid = false;
      });

      if (!valid) return;

      if (success) success.hidden = false;
      form.querySelector('button[type="submit"]').disabled = true;
      setTimeout(closeModal, 1800);
    });
  }

  function handleRegisterForm() {
    const form = document.getElementById("register-form");
    const success = document.getElementById("register-success");
    const submitBtn = document.getElementById("register-submit");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      form.querySelectorAll("[required]").forEach((field) => {
        const ok = field.type === "radio"
          ? form.querySelector(`input[name="${field.name}"]:checked`)
          : field.value.trim();

        field.classList.toggle("error", !ok);
        if (!ok) valid = false;
      });

      if (!valid) return;

      setButtonLoading(submitBtn, true);

      setTimeout(() => {
        setButtonLoading(submitBtn, false);
        submitBtn.disabled = true;

        if (success) {
          success.hidden = false;
          success.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 1200);
    });
  }

  handleQuestionForm();
  handleRegisterForm();

  /* ── Scroll reveal (Intersection Observer) ── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
  );

  function observeRevealElements() {
    const selectors = [
      "[data-animate]",
      ".section-head",
      ".benefit-card",
      ".speaker-card",
      ".timeline__item",
      ".location__inner",
      ".register__intro",
      ".register-form",
      ".faq__intro",
      ".accordion__item",
    ];

    const seen = new Set();
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (seen.has(el)) return;
        seen.add(el);

        el.style.transitionDelay = `${Math.min(i * 60, 300)}ms`;
        revealObserver.observe(el);
      });
    });
  }

  observeRevealElements();
})();
