'use client';
import React, { useState, useRef, useEffect } from "react";

const COMMON_SKILLS = [
  "JavaScript", "Python", "React", "Node.js", "TypeScript", "Java", "C#", "SQL", "HTML", "CSS", "AWS", "Azure", "Docker", "Kubernetes", "Machine Learning", "Data Analysis", "Project Management", "Communication", "Leadership", "Problem Solving", "UI/UX Design", "Figma", "Git", "Agile", "Scrum", "Public Speaking", "Sales", "Marketing", "SEO", "Copywriting", "Cloud Computing"
];

function highlightLine(line) {
  if (/skills?/i.test(line)) {
    return <span className="text-blue-600 font-semibold bg-blue-50 px-1 rounded">{line}</span>;
  }
  if (/goal|aspiration|ambition/i.test(line)) {
    return <span className="text-green-600 font-semibold bg-green-50 px-1 rounded">{line}</span>;
  }
  return line;
}

export default function ProfileBuilder() {
  const [form, setForm] = useState({
    name: "",
    education: "",
    skills: [],
    experience: "",
    goals: "",
  });
  const [summary, setSummary] = useState("");
  const [animatedLines, setAnimatedLines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [linkedinLoaded, setLinkedinLoaded] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [skillSuggestions, setSkillSuggestions] = useState([]);
  const skillInputRef = useRef(null);

  // Refined ChatGPT-like line-by-line animation
  useEffect(() => {
    if (!summary) {
      setAnimatedLines([]);
      return;
    }
    const lines = summary.split(/\n|\r/).filter(Boolean);
    setAnimatedLines([]);
    let i = 0;
    function showNextLine() {
      setAnimatedLines((prev) => [...prev, lines[i]]);
      i++;
      if (i < lines.length) {
        setTimeout(showNextLine, 700); // Slightly slower for clarity
      }
    }
    showNextLine();
    // eslint-disable-next-line
  }, [summary]);

  useEffect(() => {
    if (window.location.search.includes('linkedin=success')) {
      fetch('http://localhost:3000/linkedin/profile')
        .then(res => res.json())
        .then(profile => {
          setForm(f => ({
            ...f,
            name: [profile.localizedFirstName, profile.localizedLastName].filter(Boolean).join(' '),
            education: profile.headline || '',
          }));
          setLinkedinLoaded(true);
        })
        .catch(() => setError('Failed to load LinkedIn profile.'));
    }
  }, []);

  // Handle skill input changes and suggestions
  const handleSkillInputChange = (e) => {
    const value = e.target.value;
    setSkillInput(value);
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
    if (skill && !form.skills.includes(skill)) {
      setForm((f) => ({ ...f, skills: [...f.skills, skill] }));
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSummary("");
    setAnimatedLines([]);
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
      if (data.summary) setSummary(data.summary);
      else setError(data.error || "Unknown error");
    } catch (err) {
      setError("Failed to connect to backend.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-200 flex flex-col items-center justify-center p-0 sm:p-8 relative overflow-x-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#2563eb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="w-full max-w-5xl z-10">
        <div className="bg-white/95 rounded-3xl shadow-2xl p-8 sm:p-14 flex flex-col md:flex-row gap-12 border border-blue-100">
          {/* Left Section: Info, LinkedIn, Form */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <button
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl font-semibold shadow transition text-lg"
                onClick={() => window.open('http://localhost:3000/auth/linkedin', '_self')}
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="26" height="26" fill="currentColor"><path d="M27 0H5C2.2 0 0 2.2 0 5v22c0 2.8 2.2 5 5 5h22c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM9.4 27H5.7V12h3.7v15zm-1.9-17.1c-1.2 0-2.1-1-2.1-2.1 0-1.2 1-2.1 2.1-2.1 1.2 0 2.1 1 2.1 2.1 0 1.1-.9 2.1-2.1 2.1zm19.5 17.1h-3.7v-7.3c0-1.7 0-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.7v7.4h-3.7V12h3.5v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6v9z"/></svg>
                Connect LinkedIn
              </button>
              <span className="text-blue-700 font-extrabold text-2xl tracking-tight">LinkedIn Profile Builder</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-3 text-blue-900 leading-tight">Boost Your LinkedIn Presence Instantly</h1>
            <p className="mb-7 text-gray-700 text-lg font-medium">Effortlessly create a standout, LinkedIn-ready profile summary. Connect your LinkedIn account to auto-fill your details, then customize and generate a summary designed to maximize your professional reach and impact.</p>
            {linkedinLoaded && (
              <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded text-green-800 font-medium animate-fade-in">LinkedIn profile loaded! You can now review and edit your info below.</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label className="block text-lg font-semibold text-blue-700 mb-1">Name</label>
                <input
                  className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50/40 text-lg"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-blue-700 mb-1">Education / Headline</label>
                <input
                  className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50/40 text-lg"
                  name="education"
                  placeholder="Education or LinkedIn Headline"
                  value={form.education}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Skills Multi-Select Autocomplete */}
              <div>
                <label className="block text-lg font-semibold text-blue-700 mb-1">Skills</label>
                <div className="w-full border border-blue-200 bg-blue-50/40 rounded-lg p-2 flex flex-wrap gap-2 min-h-[48px] focus-within:ring-2 focus-within:ring-blue-400">
                  {form.skills.map((skill) => (
                    <span key={skill} className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      {skill}
                      <button
                        type="button"
                        className="ml-2 text-blue-500 hover:text-red-500 focus:outline-none"
                        onClick={() => removeSkill(skill)}
                        aria-label={`Remove ${skill}`}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                  <input
                    ref={skillInputRef}
                    className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-lg p-1"
                    type="text"
                    placeholder={form.skills.length === 0 ? "Start typing a skill..." : "Add more skills"}
                    value={skillInput}
                    onChange={handleSkillInputChange}
                    onKeyDown={handleSkillKeyDown}
                  />
                </div>
                {/* Suggestions dropdown */}
                {skillSuggestions.length > 0 && (
                  <div className="absolute bg-white border border-blue-200 rounded-lg shadow-lg mt-1 z-20 w-full max-w-md">
                    {skillSuggestions.map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 cursor-pointer hover:bg-blue-100 text-blue-800 text-base"
                        onClick={() => addSkill(skill)}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-lg font-semibold text-blue-700 mb-1">Experience</label>
                <textarea
                  className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50/40 text-lg min-h-[60px]"
                  name="experience"
                  placeholder="Experience"
                  value={form.experience}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-blue-700 mb-1">Goals</label>
                <textarea
                  className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50/40 text-lg min-h-[60px]"
                  name="goals"
                  placeholder="Goals"
                  value={form.goals}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xl font-bold px-4 py-3 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-600 transition disabled:opacity-60 tracking-wide"
                disabled={loading}
              >
                {loading ? "Generating..." : "Generate LinkedIn Profile Summary"}
              </button>
            </form>
            {error && (
              <div className="mt-6 p-4 bg-red-100 rounded text-red-700 border border-red-300 animate-fade-in">{error}</div>
            )}
          </div>
          {/* Right Section: Summary */}
          <div className="flex-1 flex flex-col justify-center items-center">
            {animatedLines.length > 0 && (
              <div className="w-full max-w-lg bg-white border border-blue-200 rounded-xl shadow-lg p-8 animate-fade-in flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="#2563eb"><path d="M27 0H5C2.2 0 0 2.2 0 5v22c0 2.8 2.2 5 5 5h22c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM9.4 27H5.7V12h3.7v15zm-1.9-17.1c-1.2 0-2.1-1-2.1-2.1 0-1.2 1-2.1 2.1-2.1 1.2 0 2.1 1 2.1 2.1 0 1.1-.9 2.1-2.1 2.1zm19.5 17.1h-3.7v-7.3c0-1.7 0-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.7v7.4h-3.7V12h3.5v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6v9z"/></svg>
                  <h2 className="text-xl sm:text-2xl font-bold text-blue-900">Your LinkedIn-Ready Profile Summary</h2>
                </div>
                <div className="w-full border-b border-blue-100 mb-4"></div>
                <div className="text-base sm:text-lg text-gray-800 whitespace-pre-line leading-relaxed font-mono w-full">
                  {animatedLines.map((line, idx) => (
                    <div
                      key={idx}
                      className="animate-fade-in"
                      style={{ animationDelay: `${idx * 0.7}s`, animationFillMode: 'backwards', opacity: 1, marginBottom: '0.7em' }}
                    >
                      {highlightLine(line)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Fade-in animation keyframes */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}