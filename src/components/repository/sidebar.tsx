import {
  Home,
  Code2,
  Cloud,
  HelpCircle,
  Settings,
  PhoneCall,
  LogOut,
} from "lucide-react";
import { UserDropdown } from "./user-dropdown";

export function Sidebar() {
  return (
    <div className="w-60 border-r p-4 ">
      <div className="flex items-center gap-2 mb-8">
        <img src="/logo2.svg" alt="CodeAnt AI Logo" />
      </div>
      <div className="flex flex-col justify-between  h-[72%] ">
        <div className="space-y-1">
          <div className="my-2">
            <UserDropdown username="kunalgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg" />
          </div>
          <a
            href="/repo"
            className="flex items-center bg-[#1570EF] gap-2 px-3 py-2 rounded-md  text-white"
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

        <div>
          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
            >
              <PhoneCall className="h-4 w-4" />
              Support
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
