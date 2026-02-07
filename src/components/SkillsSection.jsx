import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "ReactJS", category: "frontend" },
  { name: "Vite", category: "frontend" },

  { name: "NodeJS", category: "backend" },
  { name: "SQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Python", category: "backend" },

  { name: "C++", category: "programming" },
  { name: "Java", category: "programming" },
  { name: "OS/OOPS", category: "programming" },
  { name: "Git", category: "tools" },

   { name: "C++", category: "programming" },
  { name: "DBMS", category: "database" },
  { name: "DSA", category: "programming" },
  { name: "Docker", category: "tools" },
   
];

const categories = ["all", "frontend", "backend", "programming", "tools", "database"];

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
             className="group relative
              bg-primary/5 dark:bg-card/20
              backdrop-blur-md
              rounded-2xl p-6 text-center

              border border-primary/30 dark:border-primary/20

              transition-all duration-500
              hover:-translate-y-3
              hover:bg-primary/10 dark:hover:bg-card/40
              hover:border-primary/60
              hover:shadow-[0_0_40px_rgba(17,148,118,0.6)]"


            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                              transition duration-500
                              bg-gradient-to-br from-primary/40 via-transparent to-pink-500/40 blur-xl" />

              <h3 className="relative z-10 text-lg md:text-xl font-semibold tracking-wide text-primary">
                {skill.name}
              </h3>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
