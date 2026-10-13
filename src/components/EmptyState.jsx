import React from "react";
import { SearchX, RotateCcw, Sparkles } from "lucide-react";

export default function EmptyState({ onReset, searchQuery, activeFiltersCount }) {
  return (
    <div className="bg-[#F4F6F4] border border-[#E4E7E1] rounded-2xl p-12 text-center max-w-xl mx-auto my-8 shadow-xs">
      <div className="w-16 h-16 bg-[#E9EFE2] rounded-2xl flex items-center justify-center mx-auto mb-5 text-[#556B2F]">
        <SearchX className="w-8 h-8" />
      </div>

      <h3 className="text-xl font-semibold text-[#1C201A] mb-2">
        No creators match your criteria
      </h3>

      <p className="text-sm text-[#5A6255] mb-6 leading-relaxed">
        {searchQuery ? (
          <>
            No creators found matching <span className="font-semibold text-[#1C201A]">"{searchQuery}"</span> with the currently selected filters.
          </>
        ) : (
          "We couldn't find any creators matching the specific combination of tools, content type, and verification status you've selected."
        )}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#556B2F] hover:bg-[#425524] text-white rounded-xl text-sm font-medium transition-all shadow-sm active:scale-95"
        >
          <RotateCcw className="w-4 h-4" />
          Reset All Filters ({activeFiltersCount})
        </button>

        <button
          onClick={() => onReset()}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#D8DDCF] hover:bg-[#FAF8F5] text-[#1C201A] rounded-xl text-sm font-medium transition-all"
        >
          <Sparkles className="w-4 h-4 text-[#556B2F]" />
          Browse All Creators
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-[#E4E7E1] text-xs text-[#7A8374]">
        Tip: Try broadening your search or toggling off specific AI tool filters like ComfyUI or Blender.
      </div>
    </div>
  );
}
