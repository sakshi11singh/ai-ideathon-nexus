import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  suffix?: string;
}

const StatsCard = ({ icon: Icon, value, label, suffix }: StatsCardProps) => {
  return (
    <div className="glass-card p-6 text-center hover-glow">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <Icon className="text-primary" size={24} />
      </div>
      <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
        {value}{suffix && <span className="text-2xl">{suffix}</span>}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
};

export default StatsCard;
