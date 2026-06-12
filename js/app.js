(function () {
  "use strict";

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

  function handleForm(formId, successId) {
    const form = document.getElementById(formId);
    const success = document.getElementById(successId);
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

      if (success) {
        success.hidden = false;
        form.querySelector('button[type="submit"]').disabled = true;
      }

      if (formId === "question-form") {
        setTimeout(closeModal, 1800);
      }
    });
  }

  handleForm("register-form", "register-success");
  handleForm("question-form", "question-success");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".benefit-card, .speaker-card, .timeline__item").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });

  const style = document.createElement("style");
  style.textContent = ".is-visible { opacity: 1 !important; transform: translateY(0) !important; }";
  document.head.appendChild(style);
})();
