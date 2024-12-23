import { Card } from "@/components/ui/card";

interface IssuesCardProps {
  value: string;
  percentage: number;
  timeframe: string;
}

export function IssuesCard({ value, percentage, timeframe }: IssuesCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <img src="/pie.svg" alt="" />
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Issues Fixed</div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-blue-500 flex items-center gap-1">
            <span>↑ {percentage}%</span>
            <span className="text-muted-foreground">{timeframe}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
