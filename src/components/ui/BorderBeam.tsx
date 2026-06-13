import type { ReactNode } from 'react';

type BorderBeamProps = {
  children: ReactNode;
  className?: string;
};

export function BorderBeam({ children, className = '' }: BorderBeamProps) {
  return (
    <div className={`border-beam ${className}`.trim()}>
      <div className="border-beam__inner">{children}</div>
    </div>
  );
}
