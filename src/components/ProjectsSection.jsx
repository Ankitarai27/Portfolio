import { ArrowRight, ExternalLink, Github, Terminal, Cpu, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 11,
    title: "HR Assistance Chatbot",
    description: "AI HR buddy using Gemini & OpenAI APIs. Implemented secure JWT authentication and optimized data flow for automated recruitment tasks.",
    image: "/projects/ss11.png",
    tags: ["Gemini API", "Node", "React", "MongoDB","JWT","OpenAI API","Mongoose"],
    demoUrl: "https://hr-buddy-intern-assignment.vercel.app/",
    githubUrl: "https://github.com/Ankitarai27/hr-buddy-intern-assignment",
    featured: true
  },
  
  {
    id: 3,
    title: "Adobe PDF Insights",
    description: "National-level project securing Top 100 out of 2.62L+ participants. Achieved 90%+ accuracy in heading and outline extraction using a role-based FastAPI engine.",
    image: "/projects/ss3.png",
    tags: ["FastAPI", "Next.js","Python", "Docker","react.js"],
    demoUrl: "https://github.com/Ankitarai27/Adobe-Hackathon-2025",
    githubUrl: "https://github.com/Ankitarai27/Adobe-Hackathon-2025",
    featured: true,
    badge: "Adobe Top 100"
  },
  {
    id: 1,
    title: "Shorty — URL Shortener",
    description: "Full-stack service with collision-safe Nano ID generation. Reduced link-sharing time by 70% with real-time click tracking and analytics.",
    image: "/projects/ss1.png",
    tags: ["MongoDB", "Node.js", "Express", "React"],
    demoUrl: "https://github.com/Ankitarai27/Shorty_url",
    githubUrl: "https://github.com/Ankitarai27/Shorty_url",
    featured: true
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "Modern portfolio built with React and Vite, featuring a glassmorphism UI and system-aware dark theme to showcase engineering logs.",
    image: "/projects/ss2.png",
    tags: ["React", "Vite", "TailwindCSS", "JavaScript"],
    demoUrl: "https://ankita-portfolio-nitp.vercel.app/",
    githubUrl: "https://github.com/Ankitarai27/Portfolio"
  },
  // {
  //   id: 9,
  //   title: "Sparathon — ML Backend",
  //   description: "Predictive warehouse management backend utilizing XGBoost and Prophet models for demand forecasting and inventory optimization.",
  //   image: "/projects/ss6.png",
  //   tags: ["Python", "FastAPI", "ML", "XGBoost"],
  //   demoUrl: "https://github.com/CodebugClasher/WarehouseIQ",
  //   githubUrl: "https://github.com/CodebugClasher/WarehouseIQ"
  // },
  {
    id: 4,
    title: "Project Management Hub",
    description: "Task tracking app with progress visualization and persistent data storage. Built to streamline workflow with interactive UI feedback.",
    image: "/projects/ss4.png",
    tags: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    demoUrl: "https://ankitarai27.github.io/Project_Management/",
    githubUrl: "https://github.com/Ankitarai27/Project_Management"
  },
  
  {
    id: 5,
    title: "React Tic-Tac-Toe",
    description: "A modern take on the classic game featuring a state-managed React backend for real-time move tracking and win detection.",
    image: "/projects/ss5.png",
    tags: ["React", "JavaScript", "TailwindCSS", "Game Logic"],
    demoUrl: "https://tic-tac-toe-lake-six.vercel.app/",
    githubUrl: "https://github.com/Ankitarai27/Tic_Tac_Toe"
  },
  {
    id: 6,
    title: "Engineering Calculator",
    description: "Precise arithmetic tool with a clean interface, designed to handle basic engineering calculations with instant feedback.",
    image: "/projects/ss6.png",
    tags: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    demoUrl: "https://ankitarai27.github.io/Calculator/",
    githubUrl: "https://github.com/Ankitarai27/Calculator."
  },
  {
    id: 7,
    title: "Interactive Dice Game",
    description: "A logic-based random generation game focused on clean DOM manipulation and responsive mobile-first design.",
    image: "/projects/ss7.png",
    tags: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    demoUrl: "https://ankitarai27.github.io/Dice-GAME/",
    githubUrl: "https://github.com/Ankitarai27/Dice-GAME"
  },
  {
    id: 10,
    title: "Snake Water Gun",
    description: "Classic Indian logic game built with JavaScript, showcasing functional programming and conditional logic flow.",
    image: "/projects/ss10.png",
    tags: ["JavaScript", "HTML", "CSS", "Game Logic"],
    demoUrl: "https://ankitarai27.github.io/Game/",
    githubUrl: "https://github.com/Ankitarai27/Game"
  },
  {
    id: 8,
    title: "Guess The Number",
    description: "A number guessing game implemented with HTML, CSS, and JavaScript.",
    image: "/projects/ss8.png",
    tags: ["HTML", "CSS", "JavaScript", "Game Logic"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ankitarai27/GuessTheNumber",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-primary">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-primary/40 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent opacity-80" />
                
                {project.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-red-600/90 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {project.badge}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-8 space-y-4">
                {/* <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase tracking-widest font-bold">
                  <Terminal size={14} />
                  <span>{project.tags[0]} // {project.tags[1]}</span>
                </div> */}
                
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* All Tags Visible Now */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-[9px] font-bold border border-white/5 bg-white/5 rounded-md text-gray-500 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all"
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/10"
                  >
                    Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="https://github.com/Ankitarai27"
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl border-2 border-primary/50 text-primary font-bold hover:bg-primary/10 transition-all group"
          >
            Explore My Entire GitHub
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};