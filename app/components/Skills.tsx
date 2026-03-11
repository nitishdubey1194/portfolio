import { 
   SiTypescript, SiHtml5, SiPhp, SiRust,
  SiGo, SiNodedotjs, SiBun, SiDiscord, SiExpress, SiNextdotjs, SiReact, SiTailwindcss,
  SiSocketdotio, SiDocker, SiPrisma, SiMongodb, SiPostgresql, SiRedis, SiLinux, SiNginx,
  SiGithub, SiGit, SiCloudflare, 
  SiApache,
  SiShadcnui,
  SiCss,
  SiJavascript,
  SiSupabase,
  SiVercel,
  SiPython,
  SiOpenai,
  SiLangchain,
  SiOllama,
  SiMysql,
  SiStripe,
  SiRazorpay
} from "react-icons/si";

export default function SkillsPage() {
  const skills = [
    { icon: SiHtml5, label: "HTML" },
    { icon: SiCss, label: "CSS" },
    { icon: SiJavascript, label: "Javascript" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiPhp, label: "PHP" },
    { icon: SiNodedotjs, label: "Node.js" },
    { icon: SiExpress, label: "Express.js" },
    { icon: SiReact, label: "React" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: SiShadcnui, label: "Shadcn" },
    { icon: SiTailwindcss, label: "Tailwind" },
    { icon: SiSocketdotio, label: "Socket.io" },
    { icon: SiDocker, label: "Docker" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiMysql, label: "Mysql" },
    { icon: SiStripe, label: "Stripe" },
    { icon: SiRazorpay, label: "Razorpay" },
    { icon: SiRedis, label: "Redis" },
    { icon: SiLinux, label: "Linux" },
    { icon: SiApache, label: "Apache" },
    { icon: SiGithub, label: "GitHub" },
    { icon: SiGit, label: "Git" },
    { icon: SiCloudflare, label: "Cloudflare" },
    { icon: SiSupabase, label: "Supabase" },
    { icon: SiVercel, label: "Vercel" },
    { icon: SiPython, label: "Python" },
    { icon: SiOpenai, label: "OpenAI" },
    { icon: SiLangchain, label: "Langchain" },
    { icon: SiOllama, label: "Ollama" },
  ];

  return (
    
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-center p-6">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-10">
        My Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl w-full">
        {skills.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-blue-700/20 transition"
          >
            <Icon size={40} />
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
