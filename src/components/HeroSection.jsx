import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          {/* Small badge */}
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-primary/10 text-primary">
            Fresher Frontend Developer
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I’m{" "}
            <span className="text-primary">Ankita</span>{" "}
            <span className="text-gradient">Rai</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate frontend developer who loves building clean,
            responsive, and user-friendly web applications using modern
            technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#projects" className="cosmic-button">
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground mb-1">
          Scroll down
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
