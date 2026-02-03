import React from "react";
import { Send } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import { useContactForm } from "../../hooks/useContactForm";
import { contactInfo, socialLinks } from "../../data/contactData";

const Contact = () => {
  const { formData, status, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="relative py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
      {/* Radial Gradient Background */}
      <RadialGradientBackground variant="contact" />

      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#4BCFEC]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#2A9CC0]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center lg:text-left mb-12 md:mb-16">
          <FadeIn delay={0}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">Let's Connect</h2>
            <p className="text-sm md:text-base lg:text-lg text-white/50 max-w-2xl lg:max-w-none">I am always open to discussing new projects, creative ideas, or the opportunity to be part of your vision and mission.</p>
          </FadeIn>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Form */}
          <FadeIn delay={100}>
            <div className="bg-linear-to-br from-white/8 to-white/2 rounded-2xl border border-white/10 p-6 md:p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#4BCFEC]/50 focus:ring-2 focus:ring-[#4BCFEC]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#4BCFEC]/50 focus:ring-2 focus:ring-[#4BCFEC]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#4BCFEC]/50 focus:ring-2 focus:ring-[#4BCFEC]/20 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-[#4BCFEC] to-[#2A9CC0] hover:from-[#3BB5D6] hover:to-[#1F8AA8] disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#4BCFEC]/30 hover:shadow-[#4BCFEC]/50 hover:scale-[1.02] disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Message */}
                {status.message && <div className={`p-4 rounded-xl border ${status.type === "error" ? "bg-red-500/10 border-red-500/30 text-red-400" : "bg-[#4BCFEC]/10 border-[#4BCFEC]/30 text-[#4BCFEC]"}`}>{status.message}</div>}
              </form>
            </div>
          </FadeIn>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-4 p-6 bg-linear-to-br from-white/8 to-white/2 rounded-2xl border border-white/10 hover:border-[#4BCFEC]/30 transition-all duration-300 group">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-linear-to-br from-[#4BCFEC]/20 to-[#2A9CC0]/20 rounded-xl border border-[#4BCFEC]/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#4BCFEC]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs md:text-sm text-white/50 mb-1">{info.label}</p>
                      <p className="text-sm md:text-base text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                );

                return (
                  <FadeIn key={index} delay={200 + index * 100}>
                    {info.link ? (
                      <a href={info.link} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </FadeIn>
                );
              })}
            </div>

            {/* Social Links */}
            <FadeIn delay={400}>
              <div className="p-6 bg-linear-to-br from-white/8 to-white/2 rounded-2xl border border-white/10">
                <p className="text-sm text-white/50 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-[#4BCFEC]/10 border border-white/10 hover:border-[#4BCFEC]/30 rounded-xl transition-all duration-300 group hover:scale-110"
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5 text-white/70 group-hover:text-[#4BCFEC] transition-colors duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
