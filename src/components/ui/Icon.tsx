import {
  Zap,
  Users,
  PieChart,
  ShieldCheck,
  Monitor,
  MapPin,
  Laptop,
  PawPrint,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

const iconMap = {
  growth: Zap,
  networking: Users,
  analytics: PieChart,
  security: ShieldCheck,
  format: Monitor,
  mapPin: MapPin,
  laptop: Laptop,
  pawPrint: PawPrint,
  trendingUp: TrendingUp,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

type AppIconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function AppIcon({ name, className, strokeWidth = 1.5 }: AppIconProps) {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} strokeWidth={strokeWidth} />;
}
