import React, { useState, useRef } from "react";
import { CheckCircle } from "../ui/Icons";

const COMMON_SKILLS = [
  "JavaScript", "Python", "React", "Node.js", "TypeScript", "Java", "C#", "SQL", "HTML", "CSS", "AWS", "Azure", "Docker", "Kubernetes", "Machine Learning", "Data Analysis", "Project Management", "Communication", "Leadership", "Problem Solving", "UI/UX Design", "Figma", "Git", "Agile", "Scrum", "Public Speaking", "Sales", "Marketing", "SEO", "Copywriting", "Cloud Computing", "GraphQL", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "Microservices", "DevOps", "CI/CD", "Terraform", "Ansible",
];

export default function ProfileForm({ linkedInUser, linkedInProfile, onSummary }) {
  const [form, setForm] = useState({
    name: linkedInProfile?.fullName || linkedInUser?.name || "",
    education: "",
    skills: [],
    experience: "",
    goals: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [skillSuggestions, setSkillSuggestions] = useState([]);
  const skillInputRef = useRef(null);

  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Full name is required";
    else if (form.name.trim().length < 2) errors.name = "Name must be at least 2 characters long";
    if (!form.education.trim()) errors.education = "Education/Current role is required";
    else if (form.education.trim().length < 5) errors.education = "Please provide more details about your education/role";
    if (form.skills.length === 0) errors.skills = "At least one skill is required";
    else if (form.skills.length > 20) errors.skills = "Maximum 20 skills allowed";
    if (!form.experience.trim()) errors.experience = "Experience description is required";
    else if (form.experience.trim().length < 10) errors.experience = "Please provide more details about your experience (minimum 10 characters)";
    if (!form.goals.trim()) errors.goals = "Career goals are required";
    else if (form.goals.trim().length < 10) errors.goals = "Please provide more details about your career goals (minimum 10 characters)";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearValidationError = (fieldName) => {
    if (validationErrors[fieldName]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const handleSkillInputChange = (e) => {
    const value = e.target.value;
    setSkillInput(value);
    clearValidationError("skills");
    if (value.length > 0) {
      const suggestions = COMMON_SKILLS.filter(
        (skill) => skill.toLowerCase().includes(value.toLowerCase()) && !form.skills.includes(skill)
      ).slice(0, 7);
      setSkillSuggestions(suggestions);
    } else {
      setSkillSuggestions([]);
    }
  };

  const addSkill = (skill) => {
    if (skill && !form.skills.includes(skill) && form.skills.length < 20) {
      setForm((f) => ({ ...f, skills: [...f.skills, skill] }));
      clearValidationError("skills");
    }
    setSkillInput("");
    setSkillSuggestions([]);
    skillInputRef.current?.focus();
  };

  const removeSkill = (skill) => {
    setForm((f) => ({ ...f, skills: f.skills.filter((s) => s !== skill) }));
  };

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
    if (!validateForm()) return;
    setLoading(true);
    setSummary("");
    try {
      const res = await fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, skills: form.skills.join(", ") }),
      });
      const data = await res.json();
      setSummary(data.summary);
      if (onSummary) onSummary(data.summary);
    } catch (err) {
      setSummary("Failed to generate profile. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8 w-full transition-all">
      <h3 className="text-2xl font-bold text-blue-700 mb-2">Build or Update Your Professional Profile</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
            placeholder="Your full name"
          />
          {validationErrors.name && <div className="text-red-600 text-sm mt-1">{validationErrors.name}</div>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Education / Current Role</label>
          <input
            type="text"
            name="education"
            value={form.education}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
            placeholder="e.g. B.Tech Student at XYZ University"
          />
          {validationErrors.education && <div className="text-red-600 text-sm mt-1">{validationErrors.education}</div>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Skills</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {form.skills.map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                {skill}
                <button type="button" onClick={() => removeSkill(skill)} className="ml-1 text-red-500 hover:text-red-700">×</button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={skillInput}
            onChange={handleSkillInputChange}
            onKeyDown={handleSkillKeyDown}
            ref={skillInputRef}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
            placeholder="Add a skill and press Enter"
          />
          {skillSuggestions.length > 0 && (
            <div className="bg-white border border-gray-200 rounded shadow mt-1 absolute z-10">
              {skillSuggestions.map((s) => (
                <div key={s} className="px-3 py-1 hover:bg-blue-100 cursor-pointer" onClick={() => addSkill(s)}>{s}</div>
              ))}
            </div>
          )}
          {validationErrors.skills && <div className="text-red-600 text-sm mt-1">{validationErrors.skills}</div>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Experience</label>
          <textarea
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 resize-none"
            placeholder="Describe your experience"
            rows={2}
          />
          {validationErrors.experience && <div className="text-red-600 text-sm mt-1">{validationErrors.experience}</div>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Career Goals</label>
          <textarea
            name="goals"
            value={form.goals}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 resize-none"
            placeholder="Describe your career goals"
            rows={2}
          />
          {validationErrors.goals && <div className="text-red-600 text-sm mt-1">{validationErrors.goals}</div>}
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 text-white px-6 py-2 rounded-lg font-bold mt-2 transition-all disabled:opacity-60" disabled={loading}>
          {loading ? "Generating..." : "Generate Profile Summary"}
        </button>
      </form>
      {summary && (
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-6 flex items-start gap-3 shadow-sm">
          <CheckCircle className="w-7 h-7 text-blue-500 mt-1" />
          <div>
            <h4 className="font-bold text-blue-700 mb-2 text-lg">Profile Summary</h4>
            <div className="whitespace-pre-line text-gray-800 text-base leading-relaxed">{summary}</div>
          </div>
        </div>
      )}
    </div>
  );
} 