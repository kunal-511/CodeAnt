import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AuthButtons } from "./auth-buttons";

export function LoginForm() {
  return (
    <div className="w-full max-w-md space-y-6 px-4 bg-[#FFFFFF]">
      <div className="text-center space-y-4">
        <img src="/logo.svg" alt="CodeAnt AI Logo" className="mx-auto" />
        <h1 className="text-2xl font-bold">Welcome to CodeAnt AI</h1>
      </div>

      <Tabs defaultValue="saas" className="w-full">
        <TabsList className="grid grid-cols-2 w-full mb-6">
          <TabsTrigger value="saas">SAAS</TabsTrigger>
          <TabsTrigger value="self-hosted">Self Hosted</TabsTrigger>
        </TabsList>
      </Tabs>

      <AuthButtons />
    </div>
  );
}
