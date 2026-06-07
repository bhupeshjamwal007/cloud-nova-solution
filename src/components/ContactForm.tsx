"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Strict Regex for Email Validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Strict Regex for Phone Validation (allows optional +, digits, spaces, dashes, min 10 digits effectively)
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!emailRegex.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (!value.trim()) {
          error = "Mobile number is required";
        } else if (!phoneRegex.test(value)) {
          error = "Please enter a valid 10+ digit mobile number";
        }
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field as the user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final check before submission
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      message: validateField("message", formData.message),
    };
    
    setErrors(newErrors);

    // If any error exists, stop submission
    if (Object.values(newErrors).some((err) => err !== "")) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 rounded-3xl bg-[#030303]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.05)] relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff] rounded-full blur-[100px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff00e5] rounded-full blur-[100px] opacity-5 pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 relative z-10"
          >
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold magic-text mb-2">Get In Touch</h2>
              <p className="text-gray-400">Fill out the form below and we will get back to you shortly.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={cn(
                    "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00e5ff] transition-colors",
                    errors.name && "border-red-500 focus:border-red-500 bg-red-500/5"
                  )}
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={cn(
                    "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00e5ff] transition-colors",
                    errors.email && "border-red-500 focus:border-red-500 bg-red-500/5"
                  )}
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Mobile Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={cn(
                    "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00e5ff] transition-colors",
                    errors.phone && "border-red-500 focus:border-red-500 bg-red-500/5"
                  )}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Company (Optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00e5ff] transition-colors"
                  placeholder="Your Company Ltd."
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                className={cn(
                  "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00e5ff] transition-colors resize-none",
                  errors.message && "border-red-500 focus:border-red-500 bg-red-500/5"
                )}
                placeholder="How can we help you?"
              />
              {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full py-4 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#00b3ff] text-black font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 gap-6 relative z-10 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-[#00e5ff]/20 flex items-center justify-center border border-[#00e5ff]/50 shadow-[0_0_30px_rgba(0,229,255,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Message Sent!</h2>
              <p className="text-gray-400">Thank you for reaching out. We will get back to you as soon as possible.</p>
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-6 px-8 py-3 rounded-full border border-[#00e5ff]/50 text-[#00e5ff] hover:bg-[#00e5ff]/10 transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
