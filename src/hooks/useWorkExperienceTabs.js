import { useState } from "react";
import { workExperience } from "../data/workExperience";
import { educationData } from "../data/education";
import { bootcampData } from "../data/bootcamp";
import { organizationalData } from "../data/organizational";

// custom hook to manage work experience tabs 
export const useWorkExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education", data: educationData },
    { id: "work", label: "Work", data: workExperience },
    { id: "bootcamp", label: "Bootcamp", data: bootcampData },
    { id: "organizational", label: "Organizational", data: organizationalData },
  ];

  const currentData = tabs.find((tab) => tab.id === activeTab)?.data || [];

  return {
    activeTab,
    setActiveTab,
    tabs,
    currentData,
  };
};
