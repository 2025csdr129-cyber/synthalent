import React, { useState } from "react";
import { Sparkles, Plus, Calendar, DollarSign, Layers, Shield, Users, CheckCircle2, Sliders, ArrowRight, MessageSquare, ExternalLink } from "lucide-react";

export default function BrandBriefsView({ briefs, onOpenBriefBuilder, onSelectBrief }) {
  const [filterTab, setFilterTab] = useState("all");

  const filteredBriefs =
    filterTab === "all"
      ? briefs
      : filterTab === "active"
      ? briefs.filter((b) => b.status === "Accepting Pitches")
      : briefs.filter((b) => b.status !== "Accepting Pitches");

  return (
    <div className="space-y-6">
      {/* Top Header Row with AI Builder CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E4E7E1] shadow-2xs">
        <div>
          <h2 className="text-xl font-bold text-[#1C201A] flex items-center gap-2">
            <span>Creative Briefs & Campaign Workspace</span>
            <span className="text-xs bg-[#E9EFE2] text-[#35441E] px-2 py-0.5 rounded-full font-bold">
              {briefs.length} Active
            </span>
          </h2>
          <p className="text-xs text-[#5A6255] mt-1">
            Manage your published campaign definitions, technical aspect ratios, commercial licensing tiers, and incoming creator pitches.
          </p>
        </div>

        <button
          onClick={onOpenBriefBuilder}
          className="px-5 py-2.5 bg-[#556B2F] hover:bg-[#425524] text-white rounded-xl text-xs sm:text-sm font-semibold shadow-xs transition-all active:scale-95 flex items-center gap-2 whitespace-nowrap"
        >
          <Sparkles className="w-4 h-4 text-[#D6E2C8]" />
          <span>+ Create New Brief</span>
        </button>
      </div>

      {/* AI Brief Builder Feature Callout Card */}
      <div className="bg-gradient-to-r from-[#FAF8F5] to-[#F4F6F4] rounded-2xl border border-[#D8DDCF] p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#556B2F] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
            <Sparkles className="w-5 h-5 text-[#D6E2C8]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1C201A]">
              Need to publish a campaign fast? Use AI-Assisted Brief Builder
            </h4>
            <p className="text-xs text-[#5A6255] mt-0.5 leading-relaxed max-w-2xl">
              Just write a 1-sentence prompt (e.g., "Need a vibrant 9:16 product reel for Instagram") and watch the workspace auto-fill format specs, licensing terms, and suggested creator pipelines.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenBriefBuilder}
          className="px-4 py-2 bg-white hover:bg-[#E9EFE2] border border-[#556B2F] text-[#35441E] rounded-xl text-xs font-bold transition-all whitespace-nowrap shadow-2xs"
        >
          Try AI Auto-Structure →
        </button>
      </div>

      {/* Brief Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-[#E4E7E1] pb-3 text-xs font-semibold">
        <button
          onClick={() => setFilterTab("all")}
          className={`px-3 py-1.5 rounded-lg transition-all ${
            filterTab === "all" ? "bg-[#556B2F] text-white" : "text-[#5A6255] hover:bg-[#F4F6F4]"
          }`}
        >
          All Briefs ({briefs.length})
        </button>
        <button
          onClick={() => setFilterTab("active")}
          className={`px-3 py-1.5 rounded-lg transition-all ${
            filterTab === "active" ? "bg-[#556B2F] text-white" : "text-[#5A6255] hover:bg-[#F4F6F4]"
          }`}
        >
          Accepting Pitches ({briefs.filter((b) => b.status === "Accepting Pitches").length})
        </button>
        <button
          onClick={() => setFilterTab("review")}
          className={`px-3 py-1.5 rounded-lg transition-all ${
            filterTab === "review" ? "bg-[#556B2F] text-white" : "text-[#5A6255] hover:bg-[#F4F6F4]"
          }`}
        >
          Reviewing Shortlist ({briefs.filter((b) => b.status !== "Accepting Pitches").length})
        </button>
      </div>

      {/* Briefs Cards List */}
      <div className="space-y-4">
        {filteredBriefs.map((brief) => (
          <div
            key={brief.id}
            className="bg-white rounded-2xl border border-[#E4E7E1] hover:border-[#B9CFA5] p-6 shadow-xs hover:shadow-md transition-all space-y-4"
          >
            {/* Top Row: Title, Status, Aspect Ratio */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-base">{brief.brandLogo}</span>
                  <span className="text-xs font-bold text-[#7A8374]">{brief.brandName}</span>
                  <span className="text-xs text-[#D8DDCF]">•</span>
                  <span className="text-[11px] font-bold bg-[#E9EFE2] text-[#35441E] px-2 py-0.5 rounded-full">
                    {brief.status}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1C201A]">
                  {brief.title}
                </h3>
              </div>

              {/* Format & Licensing Badges */}
              <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                <span className="px-2.5 py-1 bg-[#F4F6F4] text-[#1C201A] font-mono text-xs font-bold rounded-lg border border-[#E4E7E1]">
                  {brief.aspectRatio}
                </span>
                <span className="px-2.5 py-1 bg-[#556B2F] text-white text-xs font-semibold rounded-lg shadow-2xs">
                  {brief.contentType}
                </span>
                <span className="px-2.5 py-1 bg-[#FAF8F5] text-[#35441E] text-xs font-semibold rounded-lg border border-[#D8DDCF]">
                  {brief.licensingTier}
                </span>
              </div>
            </div>

            {/* Campaign Objective */}
            <p className="text-xs sm:text-sm text-[#4A4F46] leading-relaxed">
              {brief.objective}
            </p>

            {/* Aesthetic Direction & Prompt Seed */}
            <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EBE7DF] text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#745E2D] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#8A7039]" />
                <span>Visual Aesthetic Direction:</span>
              </div>
              <p className="text-[#5A6255] text-xs italic">
                "{brief.aestheticDirection}"
              </p>
            </div>

            {/* Key Specs Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="bg-[#F4F6F4] p-2.5 rounded-xl border border-[#E4E7E1]">
                <div className="text-[10px] text-[#7A8374] font-medium">Budget</div>
                <div className="text-sm font-bold text-[#1C201A]">{brief.budget}</div>
              </div>

              <div className="bg-[#F4F6F4] p-2.5 rounded-xl border border-[#E4E7E1]">
                <div className="text-[10px] text-[#7A8374] font-medium">Deliverables</div>
                <div className="text-sm font-bold text-[#1C201A]">{brief.deliverablesCount} Assets</div>
              </div>

              <div className="bg-[#F4F6F4] p-2.5 rounded-xl border border-[#E4E7E1]">
                <div className="text-[10px] text-[#7A8374] font-medium">Target Deadline</div>
                <div className="text-sm font-bold text-[#1C201A]">{brief.deadline}</div>
              </div>

              <div className="bg-[#F4F6F4] p-2.5 rounded-xl border border-[#E4E7E1]">
                <div className="text-[10px] text-[#7A8374] font-medium">Pitches Received</div>
                <div className="text-sm font-bold text-[#556B2F]">{brief.pitchesCount} Creators</div>
              </div>
            </div>

            {/* Tools & Action Row */}
            <div className="pt-3 border-t border-[#F0F2EE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] font-bold text-[#7A8374] uppercase tracking-wider">
                  Required Tools:
                </span>
                {brief.requiredTools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-[#F4F6F4] text-[#35441E] text-[11px] font-medium rounded-md border border-[#E4E7E1]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert(`Reviewing ${brief.pitchesCount} pitches for "${brief.title}"`)}
                  className="px-4 py-1.5 bg-[#556B2F] hover:bg-[#425524] text-white text-xs font-semibold rounded-xl transition-all shadow-xs"
                >
                  Review Pitches ({brief.pitchesCount})
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
