import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export function StatsCard({ title, stats }: StatsCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/logosmall.svg"
          alt="CodeAnt AI Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
