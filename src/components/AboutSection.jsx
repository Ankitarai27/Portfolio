import { Code, GraduationCap, Trophy, Download, Award, Target, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
    return (
        <section id="about" className="py-28 px-4 relative overflow-hidden bg-[#050505]">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column: The Narrative */}
                    <div className="space-y-11 text-center lg:text-left">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
                                About <span className="text-primary">Me</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
                            <p>
                                I am <span className="text-foreground font-bold italic text-2xl">Ankita Rai</span>, 
                                a passionate developer and final year B.Tech student at 
                                <span className="text-foreground font-semibold"> NIT Patna</span>.
                            </p>
                            <p>
                                I am eager to learn, explore new technologies,
                                 and work on real-world projects where I can grow as a developer and contribute meaningfully to a team.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a href="#contact" className="cosmic-button px-8 py-3 rounded-xl font-bold">
                                Get In Touch
                            </a>
                            <a 
                                href="mailto:ankita.rai052005@gmail.com" 
                                className="flex items-center gap-2 px-8 py-3 rounded-xl border border-primary/30 text-primary hover:bg-primary/5 transition-all font-bold"
                            >
                                <Download className="h-4 w-4" /> Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Staggered Achievement Bento */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-8 lg:pt-0">
                        {/* High-Impact Adobe Card */}
                        <div className="md:row-span-2 p-9 rounded-3xl bg-[#0a0a0c]/80 border border-blue-500/20 group hover:border-blue-500/50 transition-all shadow-2xl flex flex-col justify-center">
                            <div className="p-4 rounded-2xl bg-blue-500/10 group-hover:rotate-12 text-blue-400 w-fit mb-6 transition-transform">
                                <Award className="h-8 w-8" />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">Adobe GenSolve</h4>
                            <p className="text-sm text-blue-400 mb-4 font-semibold uppercase tracking-wider">Top 100 Team</p>

                            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                                Secured a <span className="text-white font-bold underline decoration-red-600">Top 100</span> position 
                                out of 2.62L+ participants
                            </p>
                            <ul className="grid grid-cols-1 gap-3 text-sm">
                                <li className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="h-4 w-4 text-red-600" /> FastAPI & Next.js
                                </li>
                                <li className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="h-4 w-4 text-red-600" /> Dockerized Deployment
                                </li>
                            </ul>
                        </div>

                        {/* Walmart Section */}
                        <div className="p-6 rounded-3xl bg-[#0a0a0c]/80 border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.05)] group hover:border-yellow-500/50 transition-all">
                            <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-500 w-fit mb-4 group-hover:rotate-12 transition-transform">
                                <Target className="h-7 w-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Walmart CodeHers '25</h4>
                                <p className="text-xs text-yellow-500/80 font-semibold tracking-wide uppercase">Top 0.2% Nationwide</p>
                            </div>
                        </div>

                        {/* Coding Stats Card */}
                        <div className="p-6 rounded-3xl bg-[#0a0a0c]/80 border border-emerald-500/20 group hover:border-emerald-500/50 transition-all">
                            <div className="p-3 rounded-xl bg-emerald-500/10 group-hover:rotate-12 text-emerald-400 w-fit mb-4">
                                <Code className="h-6 w-6" />
                            </div>
                            <h4 className="font-bold text-white leading-tight">850+ DSA</h4>
                            <p className="text-xs text-muted-foreground mt-1 font-medium italic">Top 20% Global</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};