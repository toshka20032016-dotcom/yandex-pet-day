import { useEffect, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type QuestionModalProps = {
  open: boolean;
  onClose: () => void;
};

export function QuestionModal({ open, onClose }: QuestionModalProps) {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!open) {
      setSuccess(false);
      return;
    }

    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => {
      document.getElementById('q-name')?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = '';
      window.clearTimeout(timer);
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    let valid = true;

    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[required]').forEach((field) => {
      const ok = field.value.trim();
      field.classList.toggle('error', !ok);
      if (!ok) valid = false;
    });

    if (!valid) return;

    setSuccess(true);
    window.setTimeout(onClose, 1800);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal__backdrop" data-close-modal onClick={onClose} />
          <motion.div
            className="modal__panel"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="modal__close" type="button" aria-label="Закрыть" data-close-modal onClick={onClose}>
              &times;
            </button>
            <h2 id="modal-title">Задайте свой вопрос</h2>
            <p className="modal__subtitle">Мы ответим на почту в течение одного рабочего дня</p>
            <form className="modal-form" id="question-form" noValidate onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="q-name">Имя</label>
                <input type="text" id="q-name" name="name" required placeholder="Ваше имя" />
              </div>
              <div className="form-group">
                <label htmlFor="q-email">Почта</label>
                <input type="email" id="q-email" name="email" required placeholder="name@company.ru" />
              </div>
              <div className="form-group">
                <label htmlFor="q-text">Опишите ваш вопрос</label>
                <textarea
                  id="q-text"
                  name="question"
                  required
                  rows={4}
                  placeholder="Расскажите, что вас интересует"
                />
              </div>
              <button type="submit" className="btn btn--primary btn--full" disabled={success}>
                Отправить
              </button>
              {success && <p className="form-note">Спасибо! Мы скоро ответим на вашу почту.</p>}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
