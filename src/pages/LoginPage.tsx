import { LoginForm } from "@/components/auth/login-form";
import { IssuesCard } from "@/components/stats/issues-card";
import { StatsCard } from "@/components/stats/stats-card";

const LoginPage = () => {
  const stats = [
    { value: "30+", label: "Language Support" },
    { value: "10k+", label: "Developers" },
    { value: "100k+", label: "Hours Saved" },
  ];
  return (
    <div className="min-h-screen flex bg-[#FAFAFA]">
      {/* Stats Section - Hidden on mobile */}
      <div className="hidden md:flex md:w-1/2 p-6 flex-col relative">
        <div className="space-y-8 bg-[#FFFFFF] absolute">
          <StatsCard title="AI to Detect & Autofix Bad Code" stats={stats} />
        </div>

        {/* Position IssuesCard */}
        <div className="absolute top-28 left-48">
          <IssuesCard value="500K+" percentage={14} timeframe="This week" />
        </div>

        {/* Background logo */}
        <img
          src="/bglogo.svg"
          alt=""
          className="h-[46vh] bottom-0 left-0 absolute"
        />
      </div>

      {/* Login Section - Full width on mobile */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center min-h-screen md:min-h-0">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
