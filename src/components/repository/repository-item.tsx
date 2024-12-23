import { Badge } from "@/components/ui/badge";

interface RepositoryItemProps {
  name: string;
  isPublic: boolean;
  language: string;
  size: string;
  updatedAt: string;
}

const languageColors: Record<string, string> = {
  React: "bg-blue-500",
  Javascript: "bg-yellow-500",
  Python: "bg-green-500",
  Swift: "bg-orange-500",
  Java: "bg-red-500",
  "HTML/CSS": "bg-purple-500",
};

export function RepositoryItem({
  name,
  isPublic,
  language,
  size,
  updatedAt,
}: RepositoryItemProps) {
  return (
    <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{name}</h3>
          <Badge variant={isPublic ? "secondary" : "outline"}>
            {isPublic ? "Public" : "Private"}
          </Badge>
        </div>
        <span className="text-sm text-muted-foreground">
          Updated {updatedAt}
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span
            className={`w-2 h-2 rounded-full ${languageColors[language]}`}
          />
          {language}
        </div>
        <div>{size}</div>
      </div>
    </div>
  );
}
