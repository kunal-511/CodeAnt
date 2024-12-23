import { Home, Code2, Cloud, HelpCircle, Settings } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-60 border-r h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <img
          src="/placeholder.svg"
          alt="CodeAnt AI Logo"
          width={32}
          height={32}
        />
        <span className="font-semibold">CodeAnt AI</span>
      </div>

      <div className="space-y-1">
        <a
          href="/repo"
          className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/10 text-primary"
        >
          <Home className="h-4 w-4" />
          Repositories
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
        >
          <Code2 className="h-4 w-4" />
          AI Code Review
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
        >
          <Cloud className="h-4 w-4" />
          Cloud Security
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
        >
          <HelpCircle className="h-4 w-4" />
          How to Use
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
        >
          <Settings className="h-4 w-4" />
          Settings
        </a>
      </div>
    </div>
  );
}
