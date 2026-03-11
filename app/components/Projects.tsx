export default function ProjectsPage() {
    const projects = [
        {
            title: "Personalized Allergy Tracker",
            desc: "AI-powered system that tracks user allergies and sends notifications based on symptoms and environmental triggers.",
            tech: "Nextjs • OpenAI • Vercel • Supabase • Shadcn"
        },
        {
            title: "AI Chatbot",
            desc: "Local LLM chatbot using Ollama with API integrations for intelligent conversations.",
            tech: "Python • Streamlit • Ollama • Langchain"
        },
        {
            title: "E-commerce Platform",
            desc: "Full-stack shopping platform with cart, payments, and order management.",
            tech: "Next.js • Node.js • Mysql • React-native"
        },
        {
            title: "Treasury & Single Window Government Projects",
            desc: "Worked on government digital platforms used for business approvals and treasury workflows.",
            tech: "Government Systems • APIs • PHP"
        },
        {
            title: "Aurora Jewellery Shopify Store",
            desc: "Customized Shopify jewellery store with theme development and payment integration.",
            tech: "Shopify • Liquid • E-commerce"
        }
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#020617] via-[#0a2540] to-[#020617] text-center p-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-10 pt-10">
                Projects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {projects.map(project => (
                    <div
                        key={project.title}
                        className="bg-gradient-to-b from-[#1e293b] to-[#111827] p-6 rounded-2xl border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:cursor-pointer transition-all duration-300"
                    >
                        <h3 className="text-2xl text-white font-bold mb-3 hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-gray-300 mb-4">
                            {project.desc}
                        </p>

                        <span className="text-sm text-blue-300 font-medium">
                            {project.tech}
                        </span>
                    </div>
                ))}
            </div>
        </main>
    );
}
