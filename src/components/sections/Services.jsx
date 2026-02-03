import React from "react";
import { services } from "../../data/service";
import * as Icons from "lucide-react";
import { Sparkles } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Services = () => {
  return (
    <section id="services" className="relative py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#4BCFEC]/30 bg-[#4BCFEC]/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#4BCFEC]" />
              <span className="text-sm text-white font-medium">What I Offer</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 tracking-tight">My Services</h2>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = Icons[service.Icon] || Icons.Code2;
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="group relative bg-transparent rounded-2xl overflow-hidden border border-[#4BCFEC]/20 hover:border-[#4BCFEC]/50 transition-all duration-300 p-6 md:p-8 h-full">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-transparent rounded-xl">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-[#4BCFEC]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-md md:text-base text-white/60 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
