import { Mail, Phone } from "lucide-react";
import { PERSONAL_INFO } from "../../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skill", href: "#tech-stack" },
    { name: "Project", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-12 md:mb-16">
          {/* Left Side - Let's Work Together & Information */}
          <div className="flex flex-col justify-between">
            {/* Title with Blue Curved Line */}
            <div className="relative mb-8 md:mb-12">
              <div className="relative inline-block">
                {/* Blue Curved Line Behind */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-64 md:w-80 h-32 md:h-40">
                  <img src="./images/asset/Ellipse.png" alt="line" />
                </div>
                {/* Title Text */}
                <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Let's Work
                  <br />
                  Together
                </h2>
              </div>
            </div>

            {/* Information Section - Aligned with title */}
            <div className="m-8 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-6">Information</h3>
              <ul className="space-y-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-lg md:text-xl text-white/70 hover:text-[#4BCFEC] transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Hello & Contact */}
          <div className="flex flex-col justify-center">
            {/* Hello Section */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-2">
                Hallo Semua
                <span className="text-3xl">👋</span>
              </h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Terima kasih telah mengunjungi portofolio saya. Jika Anda tertarik untuk bekerja sama, memiliki pertanyaan, atau ingin berdiskusi lebih lanjut, silakan hubungi saya melalui email atau WhatsApp di bawah ini.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="flex items-center gap-4 p-6 bg-linear-to-br from-white/8 to-white/2 rounded-2xl border border-white/10 hover:border-[#4BCFEC]/30 transition-all duration-300 group">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-linear-to-br from-[#4BCFEC]/20 to-[#2A9CC0]/20 rounded-xl border border-[#4BCFEC]/30 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-[#4BCFEC]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs md:text-sm text-white/50 mb-1">Email</p>
                  <p className="text-sm md:text-base text-white font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${PERSONAL_INFO.telephone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-linear-to-br from-white/8 to-white/2 rounded-2xl border border-white/10 hover:border-[#4BCFEC]/30 transition-all duration-300 group"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-linear-to-br from-[#4BCFEC]/20 to-[#2A9CC0]/20 rounded-xl border border-[#4BCFEC]/30 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-[#4BCFEC]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs md:text-sm text-white/50 mb-1">WhatsApp</p>
                  <p className="text-sm md:text-base text-white font-medium">{PERSONAL_INFO.telephone}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm md:text-base text-white/70">
              © {currentYear} • <span className="font-semibold text-[#4BCFEC]">{PERSONAL_INFO.name}</span> • All rights reserved
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#4BCFEC] rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base font-medium text-white">open to work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Circle Bottom */}
      <div className="absolute bottom-8 left-8 w-12 h-12 md:w-16 md:h-16 opacity-5">
        <div className="w-full h-full border-4 border-white rounded-full animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;
