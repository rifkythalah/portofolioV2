import { TECHNOLOGIES } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
import { Code2, Sparkles } from "lucide-react";

const TechStackTechnology = () => {
  const duplicatedTechnologies = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section id="tech-stack" className="relative py-16 md:py-20 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/10 rounded-full mx-auto">
              <Code2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs md:text-sm text-white font-medium">Technology Stack & Tools</span>
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            {/* Subtitle */}
            <p className="text-sm md:text-base lg:text-lg text-white/50 max-w-2xl mx-auto my-6">Technologies I Use in Learning and Application Development</p>
          </FadeIn>
        </div>

        {/* Tech Stack Scrolling Container */}
        <FadeIn delay={200}>
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Grid - pauses on hover */}
            <div className="tech-scroll-container group/scroll">
              <div className="tech-scroll-content">
                {duplicatedTechnologies.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div key={index} className="shrink-0 w-28 sm:w-32 md:w-36 lg:w-40">
                      <div className="relative group">
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500" style={{ backgroundColor: tech.color }}></div>

                        {/* Card */}
                        <div className="relative bg-white/5 border border-white/10 rounded-xl p-2 md:p-4 lg:p-5 hover:border-primary/30 transition-all duration-500 flex flex-col items-center justify-center gap-1.5 md:gap-3 aspect-square">
                          <div className="text-2xl md:text-4xl lg:text-5xl transition-transform duration-100 group-hover:scale-150" style={{ color: tech.color }}>
                            <Icon />
                          </div>
                          <span className="text-[9px] md:text-xs lg:text-sm font-medium text-white/90 text-center leading-tight">{tech.name}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TechStackTechnology;
