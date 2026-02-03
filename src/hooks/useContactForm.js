import { useState } from "react";
import emailjs from "@emailjs/browser";

// Custom hook to manage contact form state and submission
export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate email format 
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceID = "service_z71lyqr";
      const templateID = "template_vvc0llr";
      const publicKey = "pheVvwUr8QfwPKcIP";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "athallahrifqi29@gmail.com",
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);
    }
  };

  return {
    formData,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
