import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AuthButtons } from "./auth-buttons";

export function LoginForm() {
  return (
    <div className="w-full max-w-[50vw] rounded-xl    space-y-6 p-10 bg-[#FFFFFF]">
      <div className="text-center space-y-4">
        <img src="/logo.svg" alt="CodeAnt AI Logo" className="mx-auto" />
        <h1 className="text-2xl font-bold">Welcome to CodeAnt AI</h1>
      </div>

      <Tabs defaultValue="saas" className="w-full">
        <TabsList className="grid grid-cols-2 w-full mb-6">
          <TabsTrigger value="saas">SAAS</TabsTrigger>
          <TabsTrigger value="self-hosted">Self Hosted</TabsTrigger>
        </TabsList>

        <TabsContent value="saas">
          <AuthButtons
            imgSrc="/github.svg"
            altText="Github"
            buttonText="Sign in with Github"
          />
          <AuthButtons
            imgSrc="/bitbucket.svg"
            altText="Bitbucket"
            buttonText=" Sign in with Bitbucket"
          />
          <AuthButtons
            imgSrc="/azure.svg"
            altText="Azure"
            buttonText=" Sign in with Azure Devops"
          />
          <AuthButtons
            imgSrc="/gitlab.svg"
            altText="gitlab"
            buttonText=" Sign in with GitLab"
          />
        </TabsContent>

        <TabsContent value="self-hosted">
          <AuthButtons
            imgSrc="/gitlab.svg"
            altText="gitlab"
            buttonText=" Self Hosted GitLab"
          />
          <AuthButtons
            imgSrc="/key.svg"
            altText="key"
            buttonText=" Sign in with SSO"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
