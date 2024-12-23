import { RepositoryItem } from "./repository-item";

const repositories = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    isPublic: false,
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    isPublic: false,
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    isPublic: true,
    language: "Swift",
    size: "3096 KB",
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    isPublic: false,
    language: "Java",
    size: "6210 KB",
    updatedAt: "6 days ago",
  },
  //   {
  //     name: "blog-website",
  //     isPublic: true,
  //     language: "HTML/CSS",
  //     size: "1876 KB",
  //     updatedAt: "4 days ago",
  //   },
  //   {
  //     name: "social-network",
  //     isPublic: false,
  //     language: "PHP",
  //     size: "5432 KB",
  //     updatedAt: "7 days ago",
  //   },
];

interface RepositoryListProps {
  searchTerm: string;
}

export function RepositoryList({ searchTerm }: RepositoryListProps) {
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredRepositories.length > 0 ? (
        filteredRepositories.map((repo) => (
          <RepositoryItem key={repo.name} {...repo} />
        ))
      ) : (
        <p className="text-muted-foreground">No repositories found.</p>
      )}
    </div>
  );
}
