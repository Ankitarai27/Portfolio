import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "ReactJS", category: "frontend" },
  { name: "Vite", category: "frontend" },

  { name: "NodeJS", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Python", category: "backend" },

  { name: "C++", category: "programming" },
  { name: "Java", category: "programming" },
  { name: "OS/OOPS", category: "programming" },
  { name: "Git", category: "tools" },
];

const categories = ["all", "frontend", "backend", "programming", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-3 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-15">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground scale-105 shadow-lg"
                  : "bg-secondary/40 hover:bg-primary/20 hover:scale-105"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
             className="group relative bg-card/30 backdrop-blur-md rounded-2xl p-6 text-center
                border border-border/50
                transition-all duration-500
                hover:-translate-y-3
                hover:bg-card/80
                hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]"

            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                              transition duration-500
                              bg-gradient-to-br from-primary/40 via-transparent to-pink-500/40 blur-xl" />

              <h3 className="relative z-10 text-lg md:text-xl font-semibold tracking-wide text-foreground">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
