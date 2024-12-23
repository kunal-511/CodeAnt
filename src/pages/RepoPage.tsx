import { useState } from "react";
import { Search } from "lucide-react";
import { RepositoryList } from "@/components/repository/repository-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/repository/sidebar";

const RepoPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex ">
      <Sidebar />
      <div className="p-6 w-full">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
            <p className="text-sm text-muted-foreground">
              33 total repositories
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Refresh All
            </Button>
            <Button size="sm">Add Repository</Button>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search Repositories"
            className="pl-9 w-[20vw]"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <RepositoryList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default RepoPage;
