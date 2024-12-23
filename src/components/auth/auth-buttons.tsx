import { Github, GitlabIcon, Key } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AuthButtons() {
  return (
    <div className="space-y-3">
      <Button
        variant="outline"
        className="w-full justify-start h-12 px-4"
        asChild
      >
        <a rel="stylesheet" href="#">
          <Github className="mr-2 h-4 w-4" />
          Sign in with Github
        </a>
      </Button>

      <Button
        variant="outline"
        className="w-full justify-start h-12 px-4"
        asChild
      >
        <a rel="stylesheet" href="#">
          <img
            src="/placeholder.svg"
            alt="Bitbucket"
            width={16}
            height={16}
            className="mr-2"
          />
          Sign in with Bitbucket
        </a>
      </Button>

      <Button
        variant="outline"
        className="w-full justify-start h-12 px-4"
        asChild
      >
        <a rel="stylesheet" href="#">
          <img
            src="/placeholder.svg"
            alt="Azure DevOps"
            width={16}
            height={16}
            className="mr-2"
          />
          Sign in with Azure Devops
        </a>
      </Button>

      <Button
        variant="outline"
        className="w-full justify-start h-12 px-4"
        asChild
      >
        <a rel="stylesheet" href="#">
          <GitlabIcon className="mr-2 h-4 w-4" />
          Sign in with GitLab
        </a>
      </Button>

      <Button
        variant="outline"
        className="w-full justify-start h-12 px-4"
        asChild
      >
        <a rel="stylesheet" href="#">
          <Key className="mr-2 h-4 w-4" />
          Sign in with SSO
        </a>
      </Button>
    </div>
  );
}
