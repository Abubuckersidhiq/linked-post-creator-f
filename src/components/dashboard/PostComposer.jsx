import React from "react";
import { Sparkles, Copy, Loader2, CheckCircle, AlertCircle, Linkedin, Award, Briefcase } from "../ui/Icons";

export default function PostComposer({
  postMessage,
  setPostMessage,
  aiPostLoading,
  aiPostError,
  handleAIPost,
  aiImageLoading,
  aiImageError,
  handleAIImage,
  handleImageUpload,
  uploadedImages,
  removeImage,
  sharingLoading,
  handleShare,
  shareSuccess,
  shareError
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8 w-full transition-all">
      <h3 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-purple-500" /> Create a Post
      </h3>
      <p className="text-gray-500 mb-6 text-base">Let AI help you write and generate images, or upload your own. Preview your post before sharing!</p>
      {/* Step 1: Write your post */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-600 font-bold">1.</span>
          <label className="text-lg font-semibold">Write your post</label>
        </div>
        <div className="relative">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 mb-2 text-base transition shadow-sm resize-none"
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
            className="absolute right-3 bottom-3 flex items-center gap-1 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 text-white px-3 py-2 rounded-lg font-medium shadow transition disabled:opacity-50 text-sm"
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
            className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 text-white px-4 py-2 rounded-lg font-medium shadow transition disabled:opacity-50 text-sm"
            title="Generate an image with AI"
          >
            <Sparkles className="w-4 h-4" />
            {aiImageLoading ? "Generating..." : "AI Image"}
          </button>
          <label className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-blue-400 text-gray-800 px-4 py-2 rounded-lg font-medium shadow cursor-pointer transition text-sm border border-gray-300">
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
        <div className={`mt-3 flex flex-wrap gap-4 items-center justify-start min-h-[120px] rounded-xl border-2 ${uploadedImages.length ? 'border-gray-200' : 'border-dashed border-blue-100 bg-blue-50'}`}>
          {uploadedImages.length ? (
            uploadedImages.map((img, idx) => (
              <div key={img} className="relative group">
                <img
                  src={img}
                  alt={`Post visual ${idx+1}`}
                  className="max-h-32 rounded-lg border border-gray-200 shadow-sm object-cover"
                  style={{ aspectRatio: '1/1', background: '#f3f4f6' }}
                />
                <button
                  type="button"
                  onClick={() => removeImage(img)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-80 hover:opacity-100 focus:ring-2 focus:ring-red-400 transition"
                  title="Remove image"
                >
                  ×
                </button>
              </div>
            ))
          ) : (
            <span className="text-gray-400 text-sm py-8">No image selected or generated yet</span>
          )}
        </div>
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
                className="max-h-24 rounded-lg border border-gray-200 shadow-sm object-cover"
                style={{ aspectRatio: '1/1', background: '#f3f4f6' }}
              />
            ))}
          </div>
        )}
      </div>
      <button
        onClick={handleShare}
        disabled={sharingLoading}
        className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 text-lg mt-2 ${sharingLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 text-white transform hover:scale-105"}`}
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
  );
} 