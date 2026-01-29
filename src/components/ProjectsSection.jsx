import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Shorty — URL Shortener",
    description:
      "A modern full-stack URL shortening service built with React, Node.js, and MongoDB. Features secure authentication, protected routes, and responsive UI.",
    image: "/projects/ss4.png",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ankitarai27/Shorty_url",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "This portfolio showcases my skills and projects as a fresher web developer using React and TailwindCSS.",
    image: "/projects/ss2.png",
    tags: ["React", "TailwindCSS", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ankitarai27/Portfolio",
  },
  {
    id: 3,
    title: "Adobe Hackathon 2025 – PDF Insights",
    description:
      "Upload PDFs, process them via FastAPI, and view insights on a Next.js frontend. Built for Adobe Hackathon 2025.",
    image: "/projects/ss3.png",
    tags: ["Next.js", "React", "FastAPI", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ankitarai27/Adobe-Hackathon-2025",
  },
  {
    id: 4,
    title: "Project Management To-Do List",
    description:
      "A task management app to create, track, and complete tasks with progress bars and confetti celebration upon completion.",
    image: "/projects/ss4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://ankitarai27.github.io/Project_Management/",
    githubUrl: "https://github.com/Ankitarai27/Project_Management",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe Game",
    description:
      "Classic two-player tic-tac-toe game built using HTML, CSS, and JavaScript.",
    image: "/projects/ss5.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ankitarai27/Tic-Tac-Toe",
  },
  {
    id: 6,
    title: "Calculator",
    description: "A simple calculator to perform basic arithmetic operations.",
    image: "/projects/ss6.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ankitarai27/Calculator.",
  },
  {
    id: 7,
    title: "Dice Game",
    description: "A simple dice rolling game built with HTML, CSS, and JavaScript.",
    image: "/projects/ss7.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://ankitarai27.github.io/Dice-GAME/",
    githubUrl: "https://github.com/Ankitarai27/Dice-GAME",
  },
  {
    id: 8,
    title: "Guess The Number",
    description: "A number guessing game implemented with HTML, CSS, and JavaScript.",
    image: "/projects/ss3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ankitarai27/GuessTheNumber",
  },
  {
    id: 9,
    title: "Sparathon Hackathon – ML Backend",
    description:
      "A backend built with FastAPI serving ML models (XGBoost, Prophet) for various predictive tasks.",
    image: "/projects/ss6.png",
    tags: ["Python", "FastAPI", "ML", "XGBoost", "Prophet"],
    demoUrl: "#",
    githubUrl: "https://github.com/CodebugClasher/WarehouseIQ",
  },
  {
    id: 10,
    title: "Snake Water Gun",
    description:
      "A classic game of Snake, Water, Gun implemented with JavaScript.",
    image: "/projects/ss10.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://ankitarai27.github.io/Game/",
    githubUrl: "https://github.com/Ankitarai27/Game",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Here are some of my projects demonstrating my skills in full-stack development,
          UI/UX design, and innovative solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="px-4 py-2 bg-primary text-white rounded-full flex items-center gap-1 hover:bg-primary/90 transition"
                    >
                      Demo <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="px-4 py-2 bg-white text-primary rounded-full flex items-center gap-1 hover:bg-gray-100 transition"
                    >
                      Code <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Ankitarai27"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
