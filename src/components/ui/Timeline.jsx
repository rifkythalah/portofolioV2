import React from "react";
import { CheckCircle2, Eye } from "lucide-react";
import { useTimeline, useCardSpotlight } from "../../hooks";

const Timeline = ({ items, onSeeMore, showSeeMore = false }) => {
  const { lineHeight, timelineRef } = useTimeline();
  const { cardRefs, handleMouseMove, handleMouseLeave } = useCardSpotlight();

  return (
    <>
      <div ref={timelineRef} className="relative">
        {/* Timeline Line Background */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10" />

        {/* Timeline Line Animated */}
        <div className="absolute left-6 md:left-1/2 top-0 w-0.5 bg-linear-to-b from-[#4BCFEC] via-[#4BCFEC]/70 to-[#2A9CC0] transition-all duration-300 ease-out" style={{ height: `${lineHeight}%` }} />

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-16">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-3rem)] ${isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                  <div className="group relative">
                    {/* Card with Spotlight Effect */}
                    <div
                      ref={(el) => (cardRefs.current[index] = el)}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl border border-white/10 p-6 hover:border-[#4BCFEC]/30 transition-all duration-300 ml-16 md:ml-0 overflow-hidden"
                      style={{
                        "--mouse-x": "0px",
                        "--mouse-y": "0px",
                      }}
                    >
                      {/* Spotlight Effect */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(75, 207, 236, 0.15), transparent 40%)`,
                        }}
                      />

                      {/* Card Content */}
                      <div className="relative z-10">
                        {/* Year Badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-[#4BCFEC]/10 border border-[#4BCFEC]/30 rounded-full mb-4 ${isEven ? "md:ml-auto" : ""}`}>
                          <span className="text-xs text-[#4BCFEC] font-medium">{item.year}</span>
                        </div>

                        {/* Title & Company */}
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-sm md:text-base text-[#4BCFEC] mb-1">{item.company}</p>
                        <p className="text-xs text-white/50 mb-4">{item.location}</p>

                        {/* Description */}
                        <p className="text-sm text-white/70 mb-4 leading-relaxed">{item.description}</p>

                        {/* Technologies */}
                        {item.technologies && item.technologies.length > 0 && (
                          <div className={`flex flex-wrap gap-2 mb-4 ${isEven ? "md:justify-end" : ""}`}>
                            {item.technologies.map((tech, i) => (
                              <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/80">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Achievements */}
                        {item.achievements && item.achievements.length > 0 && (
                          <div className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <div key={i} className={`flex items-start gap-2 ${isEven ? "md:flex-row-reverse md:text-right" : ""}`}>
                                <CheckCircle2 className="w-4 h-4 text-[#4BCFEC] flex-shrink-0 mt-0.5" />
                                <span className="text-xs text-white/60">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* See More Button - Show based on showSeeMore prop */}
                        {showSeeMore && onSeeMore && (
                          <button
                            onClick={() => onSeeMore(item)}
                            className={`mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#4BCFEC]/10 hover:bg-[#4BCFEC]/20 text-[#4BCFEC] border border-[#4BCFEC]/30 hover:border-[#4BCFEC]/50 rounded-lg text-sm font-medium transition-all duration-300 ${isEven ? "md:ml-auto" : ""}`}
                          >
                            <Eye className="w-4 h-4" />
                            <span>See More</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#4BCFEC]/20 to-[#2A9CC0]/20 border-4 border-black rounded-full z-10">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#4BCFEC] to-[#2A9CC0] rounded-full">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                </div>

                {/* Empty Space for Desktop Layout */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Timeline;
