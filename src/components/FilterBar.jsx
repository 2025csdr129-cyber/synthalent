import React, { useState } from "react";
import { Search, Filter, ShieldCheck, Sparkles, Check, X, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function FilterBar({
  searchQuery,
  setSearchQuery,
  selectedContentType,
  setSelectedContentType,
  selectedSpecialization,
  setSelectedSpecialization,
  selectedTool,
  setSelectedTool,
  selectedBadge,
  setSelectedBadge,
  selectedAspectRatio,
  setSelectedAspectRatio,
  onResetFilters,
  totalResults,
  totalAll
}) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const contentTypes = ["All", "Social Reel", "Cinematic Film", "Animation", "Graphic Design"];
  const specializations = [
    "All Specializations",
    "AI Filmmaking",
    "Social Reels",
    "Motion Graphics",
    "Brand Identity",
    "3D Product Renders",
    "Graphic Design"
  ];
  const tools = [
    "All Tools",
    "Runway Gen-3",
    "Midjourney v6",
    "ComfyUI",
    "Blender",
    "After Effects",
    "DaVinci Resolve"
  ];
  const badges = [
    "All Badges",
    "AI Workflow Verified",
    "Commercial Safe",
    "Top 1% Talent",
    "Fast Deliveries"
  ];
  const aspectRatios = ["All Ratios", "9:16", "16:9", "1:1"];

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedContentType !== "All" ||
    selectedSpecialization !== "All Specializations" ||
    selectedTool !== "All Tools" ||
    selectedBadge !== "All Badges" ||
    selectedAspectRatio !== "All Ratios";

  return (
    <div className="bg-white rounded-2xl border border-[#E4E7E1] p-5 shadow-xs mb-8 transition-all">
      {/* Top Search & Primary Content Type Row */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A8374]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by creator name, style (e.g. anamorphic, matcha, 3D), or client..."
            className="w-full pl-11 pr-10 py-2.5 bg-[#F4F6F4] hover:bg-[#EFF2ED] focus:bg-white text-sm text-[#1C201A] placeholder-[#7A8374] rounded-xl border border-transparent focus:border-[#556B2F] focus:outline-hidden transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A8374] hover:text-[#1C201A] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Content Type Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          {contentTypes.map((type) => {
            const active = selectedContentType === type;
            return (
              <button
                key={type}
                onClick={() => setSelectedContentType(type)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  active
                    ? "bg-[#556B2F] text-white shadow-xs"
                    : "bg-[#F4F6F4] text-[#5A6255] hover:bg-[#E9EFE2] hover:text-[#1C201A]"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        {/* Advanced Filters Toggle Button */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
            showAdvanced || hasActiveFilters
              ? "bg-[#E9EFE2] border-[#556B2F] text-[#425524]"
              : "bg-white border-[#D8DDCF] text-[#5A6255] hover:bg-[#F4F6F4]"
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="w-2 h-2 rounded-full bg-[#556B2F]"></span>
          )}
        </button>
      </div>

      {/* Advanced Filter Expansion Bar */}
      {showAdvanced && (
        <div className="mt-4 pt-4 border-t border-[#E4E7E1] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-in fade-in duration-200">
          {/* Specialization Filter */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A8374] mb-1.5">
              Specialization
            </label>
            <div className="relative">
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full appearance-none bg-[#F4F6F4] border border-[#E4E7E1] rounded-xl px-3 py-2 text-xs text-[#1C201A] focus:outline-hidden focus:border-[#556B2F] pr-8"
              >
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#7A8374]" />
            </div>
          </div>

          {/* AI Tools Filter */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A8374] mb-1.5">
              AI Tools & Software
            </label>
            <div className="relative">
              <select
                value={selectedTool}
                onChange={(e) => setSelectedTool(e.target.value)}
                className="w-full appearance-none bg-[#F4F6F4] border border-[#E4E7E1] rounded-xl px-3 py-2 text-xs text-[#1C201A] focus:outline-hidden focus:border-[#556B2F] pr-8"
              >
                {tools.map((tool) => (
                  <option key={tool} value={tool}>
                    {tool}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#7A8374]" />
            </div>
          </div>

          {/* Verification Badge */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A8374] mb-1.5">
              Verification Trust Tier
            </label>
            <div className="relative">
              <select
                value={selectedBadge}
                onChange={(e) => setSelectedBadge(e.target.value)}
                className="w-full appearance-none bg-[#F4F6F4] border border-[#E4E7E1] rounded-xl px-3 py-2 text-xs text-[#1C201A] focus:outline-hidden focus:border-[#556B2F] pr-8"
              >
                {badges.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#7A8374]" />
            </div>
          </div>

          {/* Aspect Ratio */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A8374] mb-1.5">
              Reel Aspect Ratio
            </label>
            <div className="relative">
              <select
                value={selectedAspectRatio}
                onChange={(e) => setSelectedAspectRatio(e.target.value)}
                className="w-full appearance-none bg-[#F4F6F4] border border-[#E4E7E1] rounded-xl px-3 py-2 text-xs text-[#1C201A] focus:outline-hidden focus:border-[#556B2F] pr-8"
              >
                {aspectRatios.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#7A8374]" />
            </div>
          </div>
        </div>
      )}

      {/* Results Bar and Active Filter Pill Tags */}
      <div className="mt-3 pt-3 flex flex-wrap items-center justify-between text-xs text-[#5A6255] gap-2 border-t border-[#F0F2EE]">
        <div className="flex items-center gap-2">
          <span className="font-medium text-[#1C201A]">
            Showing <strong className="text-[#556B2F] font-bold">{totalResults}</strong> of {totalAll} verified creators
          </span>
          {hasActiveFilters && (
            <span className="bg-[#E9EFE2] text-[#425524] text-[11px] px-2 py-0.5 rounded-full font-semibold">
              Filters Active
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 text-xs text-[#556B2F] hover:text-[#3B4D28] font-semibold underline underline-offset-2 hover:opacity-80"
          >
            <X className="w-3.5 h-3.5" />
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
}
