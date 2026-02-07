import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", category: "frontend", icon: "html5" },
  { name: "CSS", category: "frontend", icon: "css" },
  { name: "JavaScript", category: "frontend", icon: "javascript" },
  { name: "React", category: "frontend", icon: "react" },
  { name: "Vite", category: "frontend", icon: "vite" },

  // Backend
  { name: "Node.js", category: "backend", icon: "nodedotjs" },
  { name: "Python", category: "backend", icon: "python" },

  // Database
  { name: "MySQL", category: "database", icon: "mysql" },
  { name: "MongoDB", category: "database", icon: "mongodb" },

  // Programming
  { name: "C++", category: "programming", icon: "cplusplus" },
  { name: "Java", category: "programming", icon: "openjdk" },
  { name: "Linux / OS", category: "programming", icon: "linux" },
  { name: "DSA", category: "programming", icon: "leetcode" },

  // Tools
  { name: "Git", category: "tools", icon: "git" },
  { name: "Docker", category: "tools", icon: "docker" },
];


const categories = ["all", "frontend", "backend", "programming", "tools", "database"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-3 overflow-hidden relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize border",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary scale-105 shadow-lg"
                  : "bg-secondary/20 border-transparent hover:bg-primary/20 hover:scale-105 text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group relative  backdrop-blur-md rounded-2xl p-8 text-center border border-primary/10 transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)]"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 blur-xl" />

              <div className="relative z-10 flex flex-col items-center gap-4">
                {/* Fixed Image Container */}
                <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <img
                    src={
                      skill.icon === "openjdk"
                        ? "https://cdn.simpleicons.org/openjdk/22c55e"
                        : `https://cdn.simpleicons.org/${skill.icon}`
                    }
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://cdn.simpleicons.org/codeforces/22c55e";
                    }}
                  />
                </div>

                
                <h3 className="text-sm md:text-base font-semibold tracking-wide text-foreground/80 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
