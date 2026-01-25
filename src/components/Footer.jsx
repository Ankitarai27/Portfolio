import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-16 border-t border-border bg-card">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium">
            Ankita Rai
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Built with ❤️
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground hidden sm:block">
            Back to top
          </span>
          <a
            href="#hero"
            aria-label="Scroll to top"
            className="p-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
