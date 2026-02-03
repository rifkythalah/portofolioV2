import React from "react";
import { Briefcase, Sparkles } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import Timeline from "../ui/Timeline";
import BootcampModal from "../ui/BootcampModal";
import WorkExperienceModal from "../ui/WorkExperienceModal";
import { useWorkExperienceTabs, useBootcampModal, useWorkExperienceModal } from "../../hooks";

const WorkExperience = () => {
  const { activeTab, setActiveTab, tabs, currentData } = useWorkExperienceTabs();
  const { selectedBootcamp, isModalOpen: isBootcampModalOpen, handleOpenModal: handleOpenBootcamp, handleCloseModal: handleCloseBootcamp } = useBootcampModal();
  const { selectedWork, isModalOpen: isWorkModalOpen, handleOpenModal: handleOpenWork, handleCloseModal: handleCloseWork } = useWorkExperienceModal();

  return (
    <section id="work-experience" className="relative py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/10 rounded-full mx-auto mb-6">
              <Briefcase className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs md:text-sm text-white font-medium">My Journey</span>
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">Professional Journey</h2>
            <p className="text-sm md:text-base lg:text-lg text-white/50 max-w-2xl mx-auto">My Career Development, Education, and Skills Growth</p>
          </FadeIn>
        </div>

        {/* Tabs */}
        <FadeIn delay={200}>
          <div className="flex justify-center mb-12 md:mb-16 overflow-x-auto">
            <div className="inline-flex items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id ? "bg-gradient-to-r from-[#4BCFEC] to-[#2A9CC0] text-black shadow-lg shadow-[#4BCFEC]/20" : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn delay={300}>
          <Timeline
            items={currentData}
            key={activeTab}
            showSeeMore={activeTab === "bootcamp" || activeTab === "work"}
            onSeeMore={activeTab === "bootcamp" ? handleOpenBootcamp : activeTab === "work" ? handleOpenWork : undefined}
            seeMoreType={activeTab}
          />
        </FadeIn>
      </div>

      {/* Bootcamp Modal */}
      <BootcampModal bootcamp={selectedBootcamp} isOpen={isBootcampModalOpen} onClose={handleCloseBootcamp} />

      {/* Work Experience Modal */}
      <WorkExperienceModal work={selectedWork} isOpen={isWorkModalOpen} onClose={handleCloseWork} />
    </section>
  );
};

export default WorkExperience;
