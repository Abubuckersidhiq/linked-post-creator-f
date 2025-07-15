"use client";
import React, { useState, useRef, useEffect } from "react";

const User = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const Briefcase = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const Target = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Award = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const Sparkles = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const Copy = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const CheckCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Loader2 = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);

const Linkedin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const AlertCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
    />
  </svg>
);

const COMMON_SKILLS = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "TypeScript",
  "Java",
  "C#",
  "SQL",
  "HTML",
  "CSS",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Machine Learning",
  "Data Analysis",
  "Project Management",
  "Communication",
  "Leadership",
  "Problem Solving",
  "UI/UX Design",
  "Figma",
  "Git",
  "Agile",
  "Scrum",
  "Public Speaking",
  "Sales",
  "Marketing",
  "SEO",
  "Copywriting",
  "Cloud Computing",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Elasticsearch",
  "Microservices",
  "DevOps",
  "CI/CD",
  "Terraform",
  "Ansible",
];

export default function ProfileBuilder() {
  const [form, setForm] = useState({
    name: "",
    education: "",
    skills: [],
    experience: "",
    goals: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [linkedinLoaded, setLinkedinLoaded] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [skillSuggestions, setSkillSuggestions] = useState([]);
  const skillInputRef = useRef(null);

  // Validation function
  const validateForm = () => {
    const errors = {};

    if (!form.name.trim()) {
      errors.name = "Full name is required";
    } else if (form.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters long";
    }

    if (!form.education.trim()) {
      errors.education = "Education/Current role is required";
    } else if (form.education.trim().length < 5) {
      errors.education =
        "Please provide more details about your education/role";
    }

    if (form.skills.length === 0) {
      errors.skills = "At least one skill is required";
    } else if (form.skills.length > 20) {
      errors.skills = "Maximum 20 skills allowed";
    }

    if (!form.experience.trim()) {
      errors.experience = "Experience description is required";
    } else if (form.experience.trim().length < 10) {
      errors.experience =
        "Please provide more details about your experience (minimum 10 characters)";
    }

    if (!form.goals.trim()) {
      errors.goals = "Career goals are required";
    } else if (form.goals.trim().length < 10) {
      errors.goals =
        "Please provide more details about your career goals (minimum 10 characters)";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Clear validation error when user starts typing
  const clearValidationError = (fieldName) => {
    if (validationErrors[fieldName]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    if (window.location.search.includes("linkedin=success")) {
      fetch("http://localhost:3000/linkedin/profile")
        .then((res) => res.json())
        .then((profile) => {
          setForm((f) => ({
            ...f,
            name: [profile.localizedFirstName, profile.localizedLastName]
              .filter(Boolean)
              .join(" "),
            education: profile.headline || "",
          }));
          setLinkedinLoaded(true);
        })
        .catch(() => setError("Failed to load LinkedIn profile."));
    }
  }, []);

  // Handle skill input changes and suggestions
  const handleSkillInputChange = (e) => {
    const value = e.target.value;
    setSkillInput(value);
    clearValidationError("skills");

    if (value.length > 0) {
      const suggestions = COMMON_SKILLS.filter(
        (skill) =>
          skill.toLowerCase().includes(value.toLowerCase()) &&
          !form.skills.includes(skill)
      ).slice(0, 7);
      setSkillSuggestions(suggestions);
    } else {
      setSkillSuggestions([]);
    }
  };

  // Add skill from input or suggestion
  const addSkill = (skill) => {
    if (skill && !form.skills.includes(skill) && form.skills.length < 20) {
      setForm((f) => ({ ...f, skills: [...f.skills, skill] }));
      clearValidationError("skills");
    }
    setSkillInput("");
    setSkillSuggestions([]);
    skillInputRef.current?.focus();
  };

  // Remove skill
  const removeSkill = (skill) => {
    setForm((f) => ({ ...f, skills: f.skills.filter((s) => s !== skill) }));
  };

  // Handle Enter/Comma in skill input
  const handleSkillKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && skillInput.trim()) {
      e.preventDefault();
      addSkill(skillInput.trim());
    }
    if (e.key === "Backspace" && !skillInput && form.skills.length > 0) {
      removeSkill(form.skills[form.skills.length - 1]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    clearValidationError(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSummary("");
    setError("");

    try {
           const res = await fetch("http://localhost:3000/profile", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({
               ...form,
               skills: form.skills.join(", "),
             }),
           });
           const data = await res.json();

      setSummary(data.summary);
    } catch (err) {
      setError("Failed to generate profile. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg">
              <Linkedin className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LinkedIn Profile Builder
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create a compelling LinkedIn profile that stands out. Get discovered
            by recruiters and grow your professional network.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel - Form */}
          <div className="space-y-6">
            {/* LinkedIn Connect Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <button
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => setLinkedinLoaded(true)}
                  type="button"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect LinkedIn
                </button>
                {linkedinLoaded && (
                  <div className="flex items-center gap-2 text-emerald-600 font-medium">
                    <CheckCircle className="w-5 h-5" />
                    Connected successfully!
                  </div>
                )}
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 space-y-6"
            >
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <User className="w-5 h-5 text-blue-600" />
                  Full Name *
                </label>
                <input
                  className={`w-full bg-white/50 border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    validationErrors.name ? "border-red-500" : "border-gray-200"
                  }`}
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                />
                {validationErrors.name && (
                  <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.name}
                  </div>
                )}
              </div>

              {/* Education Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <Award className="w-5 h-5 text-purple-600" />
                  Education / Current Role *
                </label>
                <input
                  className={`w-full bg-white/50 border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    validationErrors.education
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  name="education"
                  placeholder="e.g., Software Engineer at Google"
                  value={form.education}
                  onChange={handleChange}
                />
                {validationErrors.education && (
                  <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.education}
                  </div>
                )}
              </div>

              {/* Skills Field */}
              <div className="space-y-2 relative">
                <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  Skills * (max 20)
                </label>
                <div className="relative">
                  <div
                    className={`w-full bg-white/50 border rounded-xl p-3 flex flex-wrap gap-2 min-h-[60px] focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all duration-200 ${
                      validationErrors.skills
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                  >
                    {form.skills.map((skill) => (
                      <span
                        key={skill}
                        className="flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm border border-blue-300"
                      >
                        {skill}
                        <button
                          type="button"
                          className="ml-2 text-blue-600 hover:text-red-500 focus:outline-none transition-colors"
                          onClick={() => removeSkill(skill)}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    <input
                      ref={skillInputRef}
                      className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-lg p-1"
                      type="text"
                      placeholder={
                        form.skills.length === 0
                          ? "Type skills (e.g., JavaScript, Python)..."
                          : "Add more skills..."
                      }
                      value={skillInput}
                      onChange={handleSkillInputChange}
                      onKeyDown={handleSkillKeyDown}
                    />
                  </div>
                  {skillSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg mt-1 z-30 max-h-48 overflow-y-auto">
                      {skillSuggestions.map((skill) => (
                        <div
                          key={skill}
                          className="px-4 py-3 cursor-pointer hover:bg-blue-50 text-gray-700 border-b border-gray-100 last:border-b-0 transition-colors"
                          onClick={() => addSkill(skill)}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {validationErrors.skills && (
                  <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.skills}
                  </div>
                )}
                <div className="text-sm text-gray-500">
                  {form.skills.length}/20 skills added
                </div>
              </div>

              {/* Experience Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <Briefcase className="w-5 h-5 text-orange-600" />
                  Experience *
                </label>
                <textarea
                  className={`w-full bg-white/50 border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[100px] resize-none ${
                    validationErrors.experience
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  name="experience"
                  placeholder="Describe your work experience and achievements..."
                  value={form.experience}
                  onChange={handleChange}
                />
                {validationErrors.experience && (
                  <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.experience}
                  </div>
                )}
              </div>

              {/* Goals Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <Target className="w-5 h-5 text-red-600" />
                  Career Goals *
                </label>
                <textarea
                  className={`w-full bg-white/50 border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[100px] resize-none ${
                    validationErrors.goals
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  name="goals"
                  placeholder="What are your career aspirations and goals?"
                  value={form.goals}
                  onChange={handleChange}
                />
                {validationErrors.goals && (
                  <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.goals}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl font-bold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Generating Your Profile...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6" />
                    Generate LinkedIn Profile
                  </>
                )}
              </button>
            </form>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 shadow-sm">
                {error}
              </div>
            )}
          </div>

          {/* Right Panel - Results */}
          <div className="space-y-6">
            {summary && (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        Your LinkedIn Profile
                      </h2>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="p-8 max-h-[600px] overflow-y-auto">
                  <div className="text-lg text-gray-800 whitespace-pre-line leading-relaxed font-medium">
                    {summary}
                  </div>
                </div>
              </div>
            )}

            {!summary && !loading && (
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/20 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Ready to Build Your Profile?
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Fill out the form to generate a professional LinkedIn
                    profile summary that gets you noticed.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    AI-Powered Content
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Professional Format
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Recruiter-Friendly
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Instant Results
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}