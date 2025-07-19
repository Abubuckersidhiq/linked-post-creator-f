import React from "react";
import { Linkedin, Briefcase, Award, CheckCircle } from "../ui/Icons";

export default function PlatformConnect({ onLinkedInConnect, linkedInConnected }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 mt-8">
      <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
        <span className="inline-block"><svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg></span>
        Connect More Platforms
      </h3>
      <div className="flex flex-wrap gap-4 items-center">
        <button
          className={`flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 ${linkedInConnected ? 'opacity-60 cursor-not-allowed' : ''}`}
          onClick={onLinkedInConnect}
          type="button"
          disabled={linkedInConnected}
        >
          <Linkedin className="w-5 h-5" />
          {linkedInConnected ? 'LinkedIn Connected' : 'Connect LinkedIn'}
          {linkedInConnected && <CheckCircle className="w-5 h-5 text-emerald-500 ml-2" />}
        </button>
        <button className="flex items-center gap-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg opacity-60 cursor-not-allowed" type="button" disabled>
          <Briefcase className="w-5 h-5" /> Naukri (Coming Soon)
        </button>
        <button className="flex items-center gap-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg opacity-60 cursor-not-allowed" type="button" disabled>
          <Briefcase className="w-5 h-5" /> Indeed (Coming Soon)
        </button>
        <button className="flex items-center gap-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg opacity-60 cursor-not-allowed" type="button" disabled>
          <Award className="w-5 h-5" /> Instagram (Coming Soon)
        </button>
        <button className="flex items-center gap-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg opacity-60 cursor-not-allowed" type="button" disabled>
          <Award className="w-5 h-5" /> Facebook (Coming Soon)
        </button>
      </div>
      <p className="text-gray-500 mt-4 text-sm">MultiPost AI is an AI-powered post creation and publishing tool designed to generate and publish optimized posts across professional platforms like LinkedIn, and soon expanding to Indeed and Naukri.</p>
    </div>
  );
} 