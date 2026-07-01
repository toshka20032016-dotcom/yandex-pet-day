import type { AnchorHTMLAttributes, ReactNode } from 'react';

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'lg';
  glow?: boolean;
  full?: boolean;
  className?: string;
  onClick?: () => void;
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'aria-label'>;

export function CtaButton({
  href,
  children,
  variant = 'primary',
  size,
  glow,
  full,
  className = '',
  onClick,
  'aria-label': ariaLabel,
}: CtaButtonProps) {
  const classes = [
    'btn',
    variant === 'primary' ? 'btn--primary' : variant === 'ghost' ? 'btn--ghost' : 'btn--outline',
    size === 'lg' ? 'btn--lg' : size === 'sm' ? 'btn--sm' : '',
    glow ? 'btn--glow' : '',
    full ? 'btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a className={classes} href={href} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
