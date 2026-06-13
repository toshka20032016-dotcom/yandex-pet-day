export function AnimatedGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`animated-grid ${className}`.trim()} aria-hidden="true">
      <div className="animated-grid__lines" />
      <div className="animated-grid__glow animated-grid__glow--coral" />
      <div className="animated-grid__glow animated-grid__glow--violet" />
    </div>
  );
}
