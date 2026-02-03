import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../utils/constants";

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: PERSONAL_INFO.email,
    link: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: PERSONAL_INFO.location,
    link: null,
  },
];

export const socialLinks = [
  { icon: Github, url: SOCIAL_LINKS.github, label: "GitHub" },
  { icon: Linkedin, url: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Instagram, url: SOCIAL_LINKS.instagram, label: "Instagram" },
];
