import { useEffect, useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`} id="top">
      <div className="container header__inner">
        <a className="logo" href="#top" aria-label="Yandex Pet Day">
          <span className="logo__mark">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="8" cy="7" r="3.5" fill="currentColor" />
              <circle cx="20" cy="7" r="3.5" fill="currentColor" />
              <circle cx="5" cy="15" r="3" fill="currentColor" />
              <circle cx="23" cy="15" r="3" fill="currentColor" />
              <ellipse cx="14" cy="20" rx="6" ry="5" fill="currentColor" />
            </svg>
          </span>
          <span className="logo__text">
            Yandex <strong>Pet Day</strong>
          </span>
        </a>
        <nav className="nav" aria-label="Навигация">
          <a href="#benefits">О конференции</a>
          <a href="#speakers">Спикеры</a>
          <a href="#program">Программа</a>
          <a href="#register">Регистрация</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn--sm btn--primary header__cta" href="#register">
          Участвовать
        </a>
        <button
          className={`burger${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="mobile-menu" id="mobile-menu" hidden={!menuOpen}>
        <nav aria-label="Мобильная навигация">
          <a href="#benefits" onClick={closeMenu}>
            О конференции
          </a>
          <a href="#speakers" onClick={closeMenu}>
            Спикеры
          </a>
          <a href="#program" onClick={closeMenu}>
            Программа
          </a>
          <a href="#register" onClick={closeMenu}>
            Регистрация
          </a>
          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>
          <a className="btn btn--primary" href="#register" onClick={closeMenu}>
            Участвовать
          </a>
        </nav>
      </div>
    </header>
  );
}
