import React from "react";
import { Code2, Sparkles, Instagram, Github, Linkedin, MessageCircle } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS, SOFTSKILL } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
import Snowfall from "react-snowfall";

const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-20 bg-black overflow-hidden">
      <Snowfall color="#4BCFEC" snowflakeCount={100} style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }} />
      {/* Squareling Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 md:-left-16 bottom-10 md:bottom-20 w-32 h-32 md:w-48 md:h-48 opacity-80">
          <img src="./images/asset/squareling.png" alt="line" className="w-full h-full object-contain" style={{ transform: "rotate(0deg)" }} />
        </div>

        <div className="absolute -right-20 md:-right-16 top-10 md:top-20 w-32 h-32 md:w-48 md:h-48 opacity-80">
          <img src="./images/asset/squareling.png" alt="line" className="w-full h-full object-contain" style={{ transform: "rotate(180deg)" }} />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <FadeIn delay={0}>
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/10 rounded-full w-fit">
                  <Code2 className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs md:text-sm text-white font-medium">About Me</span>
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight">Exploring Web Development Through Learning and Practice</h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col gap-3">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p key={index} className="text-sm md:text-base text-white/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>

              {/* Soft Skills */}
              <FadeIn delay={300}>
                <div className="flex flex-wrap gap-3 mt-6">
                  {SOFTSKILL.map((skill, index) => (
                    <div key={index} className="px-4 py-2.5 bg-transparent border border-[#4BCFEC]/50 text-white text-sm font-medium rounded-lg hover:border-[#4BCFEC]/50 hover:bg-[#4BCFEC]/5 transition-all duration-300 cursor-default">
                      {skill}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column - Image Illustration */}
          <FadeIn delay={200}>
            <div className="relative md:block">
              <div className="relative overflow-hidden rounded-2xl aspect-[10/12] max-w-sm mx-auto md:ml-auto">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden p-[2px] md:p-[3px]">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-2xl"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(75, 207, 236, 0.8), transparent)",
                      animation: "spin 8s linear infinite",
                    }}
                  ></div>
                </div>

                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden m-[2px] md:m-[3px] h-[calc(100%-4px)] md:h-[calc(100%-6px)] bg-gray-900">
                  <img src="./images/asset/about-profile.jpg" alt="Developer Profile" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Social Media Icons */}
                <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-2 md:gap-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-2 md:px-5 md:py-3 shadow-xl">
                      <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center hover:scale-125 transition-transform duration-300 cursor-pointer">
                        <Instagram className="w-full h-full text-[#4BCFEC]/50" />
                      </a>

                      <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center hover:scale-125 transition-transform duration-300 cursor-pointer">
                        <Github className="w-full h-full text-[#4BCFEC]/50" />
                      </a>

                      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center hover:scale-125 transition-transform duration-300 cursor-pointer">
                        <Linkedin className="w-full h-full text-[#4BCFEC]/50" />
                      </a>

                      <a
                        href={`https://wa.me/${PERSONAL_INFO.telephone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center hover:scale-125 transition-transform duration-300 cursor-pointer"
                      >
                        <MessageCircle className="w-full h-full text-[#4BCFEC]/50" />
                      </a>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
