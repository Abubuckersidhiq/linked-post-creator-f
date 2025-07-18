"use client";
import { jwtDecode } from "jwt-decode";
import React, { useState, useRef, useEffect } from "react";
import Cropper from 'react-easy-crop';

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
  const [linkedInUser, setLinkedInUser] = useState(null); // This will store decoded id_token claims
  const [linkedInProfile, setLinkedInProfile] = useState(null); // Store full LinkedIn profile
  const [postMessage, setPostMessage] = useState(`🚀 Excited to share an early preview of **MultiPost AI** – an open-source, AI-powered post creation and publishing tool!

We're building MultiPost AI to help professionals easily generate and publish optimized posts across platforms like LinkedIn (with more to come: Indeed, Naukri, Instagram, Meta, and more).

✨ **What makes us different?**
- Built with LangChain and LangGraph for flexible, powerful AI workflows.
- Modern, privacy-friendly frontend using Next.js – **we do NOT store any user data**.
- User-friendly interface: edit images, captions, and posts with ease.
- 100% open source – we welcome feedback, ideas, and contributors!

🔗 Check out our progress and join us on GitHub:
- Backend: https://github.com/Abubuckersidhiq/linked-in-post-creator-b
- Frontend: https://github.com/Abubuckersidhiq/linked-post-creator-f

We're just getting started and your feedback or contributions would mean a lot. Try it out, star the repo, or open an issue/PR!

#OpenSource #AI #NextJS #LangChain #LangGraph #MultiPostAI #BuildInPublic

_Posted using MultiPost AI – the open-source AI post creator!_`);
  const [sharingLoading, setSharingLoading] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [shareError, setShareError] = useState("");
  const [aiPostLoading, setAiPostLoading] = useState(false);
  const [aiImageLoading, setAiImageLoading] = useState(false);
  const [aiPostError, setAiPostError] = useState("");
  const [aiImageError, setAiImageError] = useState("");
  const [aiImageUrl, setAiImageUrl] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [imagePrompt, setImagePrompt] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]); // Array of URLs
  const [showImageEditor, setShowImageEditor] = useState(false);
  const [imageToEdit, setImageToEdit] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // Helper to get cropped image as data URL
  const getCroppedImg = async (imageSrc, croppedAreaPixels) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );
    return canvas.toDataURL('image/jpeg');
  };
  // Helper to create image
  function createImage(url) {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', error => reject(error));
      img.setAttribute('crossOrigin', 'anonymous');
      img.src = url;
    });
  }

  // Open image editor for a specific image
  const openImageEditor = (imgUrl) => {
    setImageToEdit(imgUrl);
    setShowImageEditor(true);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
  };
  // Save cropped image
  const saveCroppedImage = async () => {
    if (imageToEdit && croppedAreaPixels) {
      const cropped = await getCroppedImg(imageToEdit, croppedAreaPixels);
      setUploadedImages((imgs) => imgs.map(img => img === imageToEdit ? cropped : img));
      setShowImageEditor(false);
      setImageToEdit(null);
    }
  };
  // Cancel editing
  const cancelEditImage = () => {
    setShowImageEditor(false);
    setImageToEdit(null);
  };

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
    const params = new URLSearchParams(window.location.search);
    const idTokenFromUrl = params.get("id_token");

    // Clear id_token from URL immediately to prevent re-processing on refresh
    if (idTokenFromUrl) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    let currentIdToken = localStorage.getItem("linkedin_id_token");

    // If we just got a new id_token from the URL, save it
    if (idTokenFromUrl) {
      localStorage.setItem("linkedin_id_token", idTokenFromUrl);
      currentIdToken = idTokenFromUrl;
    }

    if (currentIdToken) {
        try {
        const userClaims = jwtDecode(currentIdToken)
        setLinkedInUser(userClaims); // Set the decoded claims

        // Now, attempt to fetch the full profile from your backend
        fetch("http://localhost:3000/api/linkedin/profile", {
          credentials: 'include' // Important for sending cookies
        })
          .then((res) => {
            if (!res.ok) {
              if (res.status === 401) {
                localStorage.removeItem("linkedin_id_token");
          setLinkedInUser(null);
                setLinkedinLoaded(false);
                setError("Your LinkedIn session has expired. Please reconnect.");
              }
              throw new Error('Failed to load LinkedIn profile from backend.');
            }
            return res.json();
          })
        .then((profile) => {
            setLinkedInProfile(profile); // Save full profile for picture, etc.
          setForm((f) => ({
            ...f,
              name: profile.fullName || [profile.firstName, profile.lastName].filter(Boolean).join(" ") || profile.email || "",
              education: f.education || "", // Education is not available from LinkedIn OIDC, keep as is
          }));
          setLinkedinLoaded(true);
            setError("");
        })
          .catch((err) => {
            console.error("Error fetching LinkedIn profile from backend:", err);
            if (!error) {
                setError("Failed to load LinkedIn profile. Please try reconnecting.");
            }
          });

      } catch (e) {
        console.error("Error decoding id_token or processing LinkedIn data:", e);
        setLinkedInUser(null);
        localStorage.removeItem("linkedin_id_token");
        setError("Invalid LinkedIn token. Please reconnect.");
      }
    }
  }, []); // Run once on component mount

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

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        credentials: 'include'
      });
      setLinkedInUser(null);
      setLinkedinLoaded(false);
      localStorage.removeItem("linkedin_id_token");
      setForm({ // Reset form too
        name: "",
        education: "",
        skills: [],
        experience: "",
        goals: "",
      });
      setSummary("");
      setError("");
    } catch (err) {
      console.error("Logout failed:", err);
      setError("Failed to log out. Please try again.");
    }
  };

  // New function to handle sharing the post to LinkedIn
  const handleShareLinkedIn = async () => {
    if (!linkedInUser) {
      setShareError("Not connected to LinkedIn.");
      return;
    }
    if (!postMessage.trim()) {
      setShareError("Post message cannot be empty.");
      return;
    }

    setSharingLoading(true);
    setShareError("");
    setShareSuccess(false);

    try {
      const response = await fetch("http://localhost:3000/api/linkedin/share", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: postMessage }),
        credentials: 'include' // Important for sending the sessionId cookie
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to share post.");
      }

      const data = await response.json();
      setShareSuccess(true);
      // Optionally, reset message or provide user feedback
      setTimeout(() => setShareSuccess(false), 3000); // Clear success message after 3 seconds

    } catch (err) {
      console.error("Error sharing to LinkedIn:", err);
      setShareError(err.message || "An unexpected error occurred while sharing.");
    } finally {
      setSharingLoading(false);
    }
  };

  // Handle AI post suggestion (use textarea content as context)
  const handleAIPost = async () => {
    const context = postMessage.trim();
    const topic = context || prompt("What do you want to post about?");
    if (!topic) return;
    setAiPostLoading(true);
    setAiPostError("");
    try {
      const res = await fetch("http://localhost:3000/api/generate-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });
      if (!res.ok) throw new Error("Failed to generate post.");
      const data = await res.json();
      setPostMessage(data.post);
    } catch (err) {
      setAiPostError("AI suggestion failed. Try again.");
    } finally {
      setAiPostLoading(false);
    }
  };

  // Handle AI image generation (open modal)
  const handleAIImage = () => {
    setImagePrompt("");
    setShowImageModal(true);
  };
  const confirmAIImage = async () => {
    if (!imagePrompt.trim()) return;
    setAiImageLoading(true);
    setAiImageError("");
    try {
      const res = await fetch("http://localhost:3000/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: imagePrompt }),
      });
      if (!res.ok) throw new Error("Failed to generate image.");
      const data = await res.json();
      setAiImageUrl(data.imageUrl);
      setUploadedImages((imgs) => [...imgs, data.imageUrl]);
      setShowImageModal(false);
    } catch (err) {
      setAiImageError("AI image generation failed. Try again.");
    } finally {
      setAiImageLoading(false);
    }
  };
  const cancelAIImage = () => {
    setShowImageModal(false);
    setImagePrompt("");
  };

  // Handle multiple image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setUploadedImages((imgs) => [...imgs, ...urls]);
    setAiImageUrl(""); // Clear single AI image if any
  };
  // Remove an image
  const removeImage = (url) => {
    setUploadedImages((imgs) => imgs.filter(img => img !== url));
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
              MultiPost AI
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create, optimize, and share professional posts across platforms.<br/>
            Build your brand and grow your network with AI-powered content.
          </p>
          {/* Show profile picture and greeting if connected */}
          {linkedInUser && linkedInProfile && linkedInProfile.profilePicture && (
            <div className="flex flex-col items-center justify-center mt-4">
              <img src={linkedInProfile.profilePicture} alt="Profile" className="w-20 h-20 rounded-full border-4 border-blue-400 shadow-lg mb-2" />
            </div>
          )}
          {/* Personalized greeting */}
          {linkedInUser && (
            <div className="mt-4 text-2xl text-blue-700 font-bold animate-fade-in-up">
              Hey {linkedInUser.given_name || linkedInUser.name || linkedInUser.email || linkedInUser.sub}, Get Ready to make your profile
            </div>
          )}
          {/* Show connected as info below greeting for clarity */}
          {linkedInUser && (
            <div className="mt-2 text-lg text-emerald-700 font-semibold">
              Connected as: {linkedInUser.name || linkedInUser.email || linkedInUser.sub}
            </div>
          )}
          {linkedInUser && (
            <button
              onClick={handleLogout}
              className="mt-4 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-semibold shadow-md transition-all duration-300 mx-auto"
            >
              Logout LinkedIn
            </button>
          )}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel - Form */}
          <div className="space-y-6">
            {/* --- New MultiPost AI Post Creation Card --- */}
            {linkedInUser && (
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-100 mb-8 w-full">
                <h3 className="text-3xl font-extrabold text-blue-700 mb-1 flex items-center gap-2">
                  <Sparkles className="w-7 h-7 text-purple-500" /> Create a Post with MultiPost AI
                </h3>
                <p className="text-gray-600 mb-6 text-base">Let AI help you write and generate images, or upload your own. Preview your post before sharing!</p>
                {/* Step 1: Write your post */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-600 font-bold">1.</span>
                    <label className="text-lg font-semibold">Write your post</label>
                  </div>
                  <div className="relative">
                    <textarea
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-2 text-base transition shadow-sm"
                      rows="5"
                      value={postMessage}
                      onChange={e => setPostMessage(e.target.value)}
                      placeholder="Write your post here..."
                      disabled={sharingLoading}
                    ></textarea>
                    <button
                      type="button"
                      onClick={handleAIPost}
                      disabled={aiPostLoading}
                      className="absolute right-3 bottom-3 flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium shadow transition disabled:opacity-50 text-sm"
                      title="Let AI suggest a post for you"
                    >
                      <Sparkles className="w-4 h-4" />
                      {aiPostLoading ? "Generating..." : "Help me write"}
                    </button>
                  </div>
                  {aiPostError && <div className="text-red-600 text-sm mt-1 font-semibold">{aiPostError}</div>}
                </div>
                {/* Step 2: Add an image */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-600 font-bold">2.</span>
                    <label className="text-lg font-semibold">Add an image <span className="text-gray-400 font-normal">(optional)</span></label>
                  </div>
                  <div className="flex gap-2 mb-2">
                    <button
                      type="button"
                      onClick={handleAIImage}
                      disabled={aiImageLoading}
                      className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium shadow transition disabled:opacity-50 text-sm"
                      title="Generate an image with AI"
                    >
                      <Sparkles className="w-4 h-4" />
                      {aiImageLoading ? "Generating..." : "AI Image"}
                    </button>
                    <label className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium shadow cursor-pointer transition text-sm">
                      <Copy className="w-4 h-4" /> Upload Images
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                        multiple
                        disabled={aiImageLoading}
                      />
                    </label>
                  </div>
                  {aiImageError && <div className="text-red-600 text-sm mt-1 font-semibold">{aiImageError}</div>}
                  {/* Image Preview */}
                  <div className={`mt-3 flex flex-wrap gap-4 items-center justify-start min-h-[120px] rounded-xl border-2 ${uploadedImages.length ? 'border-gray-300' : 'border-dashed border-blue-200 bg-blue-50'}`}>
                    {uploadedImages.length ? (
                      uploadedImages.map((img, idx) => (
                        <div key={img} className="relative group">
                          <img
                            src={img}
                            alt={`Post visual ${idx+1}`}
                            className="max-h-32 rounded-lg border border-gray-300 shadow"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(img)}
                            className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-80 hover:opacity-100 transition"
                            title="Remove image"
                          >
                            ×
                          </button>
                          <button
                            type="button"
                            onClick={() => openImageEditor(img)}
                            className="absolute bottom-1 right-1 bg-blue-600 text-white rounded-full p-1 opacity-80 hover:opacity-100 transition"
                            title="Edit image"
                          >
                            ✎
                          </button>
                        </div>
                      ))
                    ) : (
                      <span className="text-gray-400 text-sm py-8">No image selected or generated yet</span>
                    )}
                  </div>
                  {/* Image Cropper Modal */}
                  {showImageEditor && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative flex flex-col items-center">
                        <h4 className="text-xl font-bold mb-4 text-blue-700 flex items-center gap-2">Crop Image</h4>
                        <div className="relative w-64 h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
                          <Cropper
                            image={imageToEdit}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={(_, croppedAreaPixels) => setCroppedAreaPixels(croppedAreaPixels)}
                          />
                        </div>
                        <div className="flex gap-3 mt-2 items-center w-full">
                          <label className="flex items-center gap-1 text-sm">
                            Zoom
                            <input
                              type="range"
                              min="1"
                              max="3"
                              step="0.01"
                              value={zoom}
                              onChange={e => setZoom(parseFloat(e.target.value))}
                            />
                          </label>
                        </div>
                        <div className="flex gap-3 justify-end mt-6 w-full">
                          <button
                            onClick={cancelEditImage}
                            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
                          >Cancel</button>
                          <button
                            onClick={saveCroppedImage}
                            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow"
                          >Save</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Step 3: Preview & Share */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-600 font-bold">3.</span>
                    <label className="text-lg font-semibold">Preview & Share</label>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-800 whitespace-pre-line min-h-[80px] text-base shadow-sm">
                    {postMessage}
                  </div>
                  {uploadedImages.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-4 items-center">
                      {uploadedImages.map((img, idx) => (
                        <img
                          key={img}
                          src={img}
                          alt={`Preview visual ${idx+1}`}
                          className="max-h-24 rounded-lg border border-gray-200 shadow"
                        />
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={handleShareLinkedIn}
                  disabled={!linkedInUser || sharingLoading}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 text-lg mt-2 ${
                    !linkedInUser || sharingLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105"
                  }`}
                >
                  {sharingLoading ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Sharing...
                    </>
                  ) : (
                    <>
                      <Linkedin className="w-6 h-6" />
                      Share on LinkedIn
                    </>
                  )}
                </button>
                {shareSuccess && (
                  <div className="text-emerald-700 mt-4 flex items-center gap-2 font-semibold text-base bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5" />
                    Posted successfully!
                  </div>
                )}
                {shareError && (
                  <div className="text-red-700 mt-4 flex items-center gap-2 font-semibold text-base bg-red-50 border border-red-200 rounded-lg p-3">
                    <AlertCircle className="w-5 h-5" />
                    {shareError}
                  </div>
                )}
              </div>
            )}

            {/* LinkedIn Connect Card (existing) */}
            { !linkedInUser && ( // Only show connect button if not already connected
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <button
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    window.location.href = "http://localhost:3000/auth/linkedin";
                  }}
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