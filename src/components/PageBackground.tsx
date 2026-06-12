export function PageBackground() {
  return (
    <div className="page-bg" aria-hidden="true">
      <div className="orb orb--1" />
      <div className="orb orb--2" />
      <div className="orb orb--3" />
      <svg className="pet-pattern pet-pattern--hero" viewBox="0 0 200 200">
        <g opacity="0.04" fill="currentColor">
          <circle cx="30" cy="30" r="10" />
          <circle cx="50" cy="18" r="7" />
          <circle cx="18" cy="48" r="6" />
          <circle cx="42" cy="42" r="6" />
          <ellipse cx="36" cy="62" rx="14" ry="11" />
        </g>
      </svg>
      <svg className="pet-pattern pet-pattern--speakers" viewBox="0 0 200 200">
        <g opacity="0.05" fill="currentColor">
          <circle cx="160" cy="40" r="8" />
          <circle cx="178" cy="32" r="6" />
          <circle cx="150" cy="54" r="5" />
          <ellipse cx="168" cy="68" rx="12" ry="9" />
        </g>
      </svg>
    </div>
  );
}
