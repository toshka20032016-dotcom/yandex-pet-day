import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

type Format = 'offline' | 'online' | null;

const FORMAT_HINTS: Record<'offline' | 'online', { icon: string; text: string }> = {
  offline: {
    icon: '📍',
    text: 'Офлайн-участие: приходите в «Академию» на Ленинградском проспекте. Можно взять питомца — предупредите при регистрации. После программы — закрытый бизнес-завтрак.',
  },
  online: {
    icon: '💻',
    text: 'Онлайн-участие: ссылка на трансляцию придёт на почту за день до события. Запись, презентации и расшифровки — в личном кабинете через 3 дня после конференции.',
  },
};

export function RegisterForm() {
  const [format, setFormat] = useState<Format>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const selectedFormat = formData.get('format') as Format;

    const nextErrors: Record<string, boolean> = {
      name: !name,
      email: !email,
      format: !selectedFormat,
    };
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) return;

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <AnimatedSection className="section register" id="register">
      <div className="container register__grid">
        <div className="register__intro">
          <span className="section-label">Регистрация</span>
          <h2>Присоединяйтесь к&nbsp;конференции</h2>
          <p>Заполните форму — мы отправим подтверждение и все детали участия на вашу почту.</p>
        </div>
        <form className="register-form" id="register-form" noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="reg-name">Имя</label>
            <input
              type="text"
              id="reg-name"
              name="name"
              required
              autoComplete="name"
              placeholder="Введите ваше имя"
              className={errors.name ? 'error' : undefined}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-email">Почта</label>
            <input
              type="email"
              id="reg-email"
              name="email"
              required
              autoComplete="email"
              placeholder="example@mail.ru"
              className={errors.email ? 'error' : undefined}
            />
          </div>
          <fieldset className="form-group form-group--format">
            <legend>
              Выберите формат участия <span className="legend-hint">(онлайн / офлайн)</span>
            </legend>
            <div className="format-options">
              <label className="format-option">
                <input
                  type="radio"
                  name="format"
                  value="offline"
                  required
                  checked={format === 'offline'}
                  onChange={() => setFormat('offline')}
                />
                <span className="format-option__box">
                  <span className="format-option__icon" aria-hidden="true">
                    📍
                  </span>
                  <strong>Офлайн</strong>
                  <small className="format-option__label">Москва, «Академия»</small>
                </span>
              </label>
              <label className="format-option">
                <input
                  type="radio"
                  name="format"
                  value="online"
                  checked={format === 'online'}
                  onChange={() => setFormat('online')}
                />
                <span className="format-option__box">
                  <span className="format-option__icon" aria-hidden="true">
                    💻
                  </span>
                  <strong>Онлайн</strong>
                  <small className="format-option__label">Трансляция в прямом эфире</small>
                </span>
              </label>
            </div>
            <AnimatePresence mode="wait">
              {format && (
                <motion.div
                  key={format}
                  className="format-hint"
                  aria-live="polite"
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <span className="format-hint__icon" aria-hidden="true">
                    {FORMAT_HINTS[format].icon}
                  </span>
                  <p className="format-hint__text">{FORMAT_HINTS[format].text}</p>
                </motion.div>
              )}
            </AnimatePresence>
            {errors.format && !format && <p className="form-error">Выберите формат участия</p>}
          </fieldset>
          <button
            type="submit"
            className={`btn btn--primary btn--lg btn--full${loading ? ' btn--loading' : ''}`}
            id="register-submit"
            disabled={loading || success}
          >
            <span className="btn__label">{success ? 'Заявка отправлена' : 'Зарегистрироваться'}</span>
            {loading && <span className="btn__spinner" aria-hidden="true" />}
          </button>
          {success && (
            <p className="form-note form-note--success" role="status">
              Спасибо! Мы отправили подтверждение на вашу почту.
            </p>
          )}
        </form>
      </div>
    </AnimatedSection>
  );
}
