import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import FilterBar from "../components/FilterBar";
import CreatorCard from "../components/CreatorCard";
import EmptyState from "../components/EmptyState";

export default function BrandDiscoverView({
  creators,
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
  totalAll,
  onSelectCreator,
  onDirectBrief,
  onOpenItem,
  onOpenBriefBuilder
}) {
  return (
    <div className="space-y-6">
      {/* Featured Header Banner */}
      <div className="bg-gradient-to-r from-[#2C381A] via-[#3B4D28] to-[#556B2F] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-[#D6E2C8] mb-3 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#D6E2C8]" />
            <span>AI-Powered Marketplace for World-Class Creative Talent</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight">
            Discover Verified AI Filmmakers, Animators & Reel Creators
          </h1>

          <p className="text-xs sm:text-sm text-[#D6E2C8] leading-relaxed mb-5">
            Hire pre-vetted creators with certified human-in-the-loop workflows, commercial-safe model licenses, and proven viral retention.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBriefBuilder}
              className="px-5 py-2.5 bg-white text-[#2C381A] hover:bg-[#FAF8F5] rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#556B2F]" />
              <span>Launch AI Brief Builder</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-white/80 bg-black/20 px-3 py-2 rounded-xl backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-[#8FAE6F]" />
              <span>100% Commercial IP Cleared</span>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Multi-Attribute Filter Bar */}
      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedContentType={selectedContentType}
        setSelectedContentType={setSelectedContentType}
        selectedSpecialization={selectedSpecialization}
        setSelectedSpecialization={setSelectedSpecialization}
        selectedTool={selectedTool}
        setSelectedTool={setSelectedTool}
        selectedBadge={selectedBadge}
        setSelectedBadge={setSelectedBadge}
        selectedAspectRatio={selectedAspectRatio}
        setSelectedAspectRatio={setSelectedAspectRatio}
        onResetFilters={onResetFilters}
        totalResults={creators.length}
        totalAll={totalAll}
      />

      {/* Creator Discovery Grid or Friendly Empty State */}
      {creators.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              onSelectCreator={onSelectCreator}
              onDirectBrief={onDirectBrief}
              onOpenItem={onOpenItem}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          onReset={onResetFilters}
          searchQuery={searchQuery}
          activeFiltersCount={
            (searchQuery ? 1 : 0) +
            (selectedContentType !== "All" ? 1 : 0) +
            (selectedSpecialization !== "All Specializations" ? 1 : 0) +
            (selectedTool !== "All Tools" ? 1 : 0) +
            (selectedBadge !== "All Badges" ? 1 : 0) +
            (selectedAspectRatio !== "All Ratios" ? 1 : 0)
          }
        />
      )}
    </div>
  );
}
