import { Download, ChevronDown } from "lucide-react";
import { PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import ShinyText from "../animations/ShinyText";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import Snowfall from "react-snowfall";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open(PERSONAL_INFO.resume, "_blank");
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Snowfall Effect */}
      <Snowfall color="#4BCFEC" snowflakeCount={100} style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }} />

      {/* Enhanced Background Effects */}
      <RadialGradientBackground variant="hero" />

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
        {/* Profile Image with Circle Background */}
        <FadeIn delay={0}>
          <div className="relative inline-block mb-8">
            {/* Profile Photo */}
            <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] mx-auto rounded-full overflow-hidden border-4 border-[#4BCFEC]/30 shadow-2xl shadow-[#4BCFEC]/20">
              <img src="/images/asset/hero-profil.png" alt={PERSONAL_INFO.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </FadeIn>

        {/* Greeting Text */}
        <FadeIn delay={100}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
            Hi! I'm <span className="font-semibold">{PERSONAL_INFO.name}</span> <span className="inline-block">👋</span>
            <br />
            <ShinyText text="IT Enthusiast" speed={3} delay={0.5} color="#4BCFEC" shineColor="#ffffff" spread={120} direction="left" className="font-medium" />
          </h1>
        </FadeIn>

        {/* Welcome Message */}
        <FadeIn delay={200}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed px-4">Welcome to my portfolio. Please explore my work and contact me if you'd like to discuss or collaborate.</p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Let's Connect Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-[#4BCFEC] to-[#2A9CC0] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#4BCFEC]/50 hover:scale-[1.02] w-full sm:w-auto"
            >
              <span className="relative z-10">Let's Connect</span>
              <span className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300">🙌</span>
            </button>

            {/* My Resume Button */}
            <button
              onClick={handleDownloadResume}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/5 hover:border-[#4BCFEC]/50 transition-all duration-300 w-full sm:w-auto"
            >
              <span>My Resume</span>
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Section */}
      <button onClick={() => scrollToSection("about")} className="animate-bounce absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white hover:text-white/80 transition-colors" aria-label="scroll down">
        <ChevronDown className="w-6 h-6 animate-bounce text-primary" />
      </button>
    </section>
  );
};

export default Hero;
