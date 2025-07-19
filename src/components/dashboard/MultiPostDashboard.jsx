"use client";
import { jwtDecode } from "jwt-decode";
import React, { useState, useRef, useEffect } from "react";
import PlatformConnect from "./PlatformConnect";
import PostComposer from "./PostComposer";
import ProfileForm from "./ProfileForm";
import { User, Briefcase, Target, Award, Sparkles, Copy, CheckCircle, Loader2, Linkedin, AlertCircle } from "../ui/Icons";
// ... (all other imports and SVGs remain unchanged)

// ... (all helper functions remain unchanged)

export default function MultiPostDashboard() {
  const [postMessage, setPostMessage] = useState("");
  const [aiPostLoading, setAiPostLoading] = useState(false);
  const [aiPostError, setAiPostError] = useState("");
  const [aiImageLoading, setAiImageLoading] = useState(false);
  const [aiImageError, setAiImageError] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showImageEditor, setShowImageEditor] = useState(false);
  const [imageToEdit, setImageToEdit] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [sharingLoading, setSharingLoading] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [shareError, setShareError] = useState("");
  const [linkedInUser, setLinkedInUser] = useState(null);
  const [linkedInProfile, setLinkedInProfile] = useState(null);
  const [error, setError] = useState("");
  const [linkedinLoaded, setLinkedinLoaded] = useState(false);

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
        const userClaims = jwtDecode(currentIdToken);
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
            setLinkedinLoaded(true);
            setError("");
          })
          .catch((err) => {
            console.error("Error fetching LinkedIn profile from backend:", err);
            setError("Failed to load LinkedIn profile. Please try reconnecting.");
          });
      } catch (e) {
        console.error("Error decoding id_token or processing LinkedIn data:", e);
        setLinkedInUser(null);
        localStorage.removeItem("linkedin_id_token");
        setError("Invalid LinkedIn token. Please reconnect.");
      }
    }
  }, []);

  const handleAIPost = async () => {
    setAiPostLoading(true);
    setAiPostError("");
    try {
      const res = await fetch("http://localhost:3000/api/generate-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: postMessage }),
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

  // Stub for handleAIImage
  const handleAIImage = () => {
    // TODO: Implement AI image generation logic
    setAiImageError("");
    setShowImageEditor(true);
  };

  // Stub for handleImageUpload
  const handleImageUpload = (e) => {
    // TODO: Implement image upload logic
    setAiImageError("");
    const files = Array.from(e.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setUploadedImages((imgs) => [...imgs, ...urls]);
  };

  const removeImage = (url) => {
    setUploadedImages((imgs) => imgs.filter(img => img !== url));
  };

  const openImageEditor = (imgUrl) => {
    setImageToEdit(imgUrl);
    setShowImageEditor(true);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
  };

  const saveCroppedImage = async () => {
    if (imageToEdit && croppedAreaPixels) {
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
      const cropped = await getCroppedImg(imageToEdit, croppedAreaPixels);
      setUploadedImages((imgs) => imgs.map(img => img === imageToEdit ? cropped : img));
      setShowImageEditor(false);
      setImageToEdit(null);
    }
  };

  const cancelEditImage = () => {
    setShowImageEditor(false);
    setImageToEdit(null);
  };

  const handleShareLinkedIn = async () => {
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
        credentials: 'include'
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to share post.");
      }
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 3000);
    } catch (err) {
      setShareError(err.message || "An unexpected error occurred while sharing.");
    } finally {
      setSharingLoading(false);
    }
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
      setLinkedInProfile(null);
      setError("");
    } catch (err) {
      setError("Failed to log out. Please try again.");
    }
  };

  // Update all UI text and content to refer to MultiPost AI and multiple platforms, not just LinkedIn
  // Add placeholders for future platforms (e.g., Naukri, Indeed, Instagram, Facebook...)
  // Update descriptions, headings, and help text to reflect the multi-platform, AI-powered nature
  // Add a section for "Connect more platforms" (with LinkedIn enabled, others as "coming soon")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration remains unchanged */}
      <div className="absolute inset-0 overflow-hidden">
        {/* ... existing blob backgrounds ... */}
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
            Build your brand and grow your network with AI-powered content.<br/>
            <span className="font-semibold text-blue-700">Now supporting LinkedIn. Coming soon: Naukri, Indeed, Instagram, Facebook, and more!</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {linkedInUser ? (
            <>
              <ProfileForm linkedInUser={linkedInUser} linkedInProfile={linkedInProfile} />
              <PostComposer
                postMessage={postMessage}
                setPostMessage={setPostMessage}
                aiPostLoading={aiPostLoading}
                aiPostError={aiPostError}
                handleAIPost={handleAIPost}
                aiImageLoading={aiImageLoading}
                aiImageError={aiImageError}
                handleAIImage={handleAIImage}
                handleImageUpload={handleImageUpload}
                uploadedImages={uploadedImages}
                removeImage={removeImage}
                openImageEditor={openImageEditor}
                showImageEditor={showImageEditor}
                imageToEdit={imageToEdit}
                crop={crop}
                zoom={zoom}
                setCrop={setCrop}
                setZoom={setZoom}
                setCroppedAreaPixels={setCroppedAreaPixels}
                saveCroppedImage={saveCroppedImage}
                cancelEditImage={cancelEditImage}
                sharingLoading={sharingLoading}
                handleShare={handleShareLinkedIn}
                shareSuccess={shareSuccess}
                shareError={shareError}
              />
            </>
          ) : (
            // Show connect card if not connected
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
              </div>
            </div>
          )}
        </div>
        {/* Platform connect section always visible */}
        <div className="mt-8">
          <PlatformConnect
            onLinkedInConnect={() => { window.location.href = "http://localhost:3000/auth/linkedin"; }}
            linkedInConnected={!!linkedInUser}
          />
        </div>
      </div>
      {/* ... existing styles ... */}
    </div>
  );
} 