import { AnimatedGrid } from './ui/AnimatedGrid';

export function PageBackground() {
  return (
    <div className="page-bg" aria-hidden="true">
      <AnimatedGrid className="page-bg__animated-grid" />
      <div className="orb orb--1" />
      <div className="orb orb--2" />
      <div className="orb orb--3" />
      <div className="orb orb--4" />
    </div>
  );
}
