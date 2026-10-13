import React, { useState } from "react";
import { Star, ShieldCheck, CheckCircle2, Play, Sparkles, Clock, ArrowUpRight, Zap, Layers } from "lucide-react";

export default function CreatorCard({ creator, onSelectCreator, onDirectBrief, onOpenItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl border border-[#E4E7E1] hover:border-[#B9CFA5] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col overflow-hidden group"
    >
      {/* Featured Reel / Media Preview Thumbnail */}
      <div className="relative aspect-16/10 bg-[#1A2016] overflow-hidden cursor-pointer" onClick={() => onSelectCreator(creator)}>
        <img
          src={creator.featuredReel.thumbnail}
          alt={creator.featuredReel.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-105 opacity-90" : "scale-100 opacity-95"
          }`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Aspect Ratio & Duration Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold rounded-md border border-white/10 uppercase tracking-wider">
            {creator.featuredReel.aspectRatio}
          </span>
          <span className="px-2 py-0.5 bg-[#556B2F]/90 backdrop-blur-md text-white text-[10px] font-semibold rounded-md shadow-xs">
            {creator.contentType}
          </span>
        </div>

        {/* Turnaround Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md text-white/90 px-2 py-0.5 rounded-md text-[10px] font-medium border border-white/10">
          <Clock className="w-3 h-3 text-[#B9CFA5]" />
          <span>{creator.turnaround}</span>
        </div>

        {/* Play Reel Action Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-all duration-300 ${
              isHovered ? "scale-110 bg-[#556B2F] border-transparent text-white shadow-lg" : "scale-90 opacity-80"
            }`}
          >
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Reel Title at Bottom */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
          <div>
            <p className="text-[11px] text-[#D6E2C8] font-medium tracking-wide">Featured Work</p>
            <h4 className="text-sm font-semibold truncate text-white">{creator.featuredReel.title}</h4>
          </div>
          <span className="text-[11px] text-white/70 font-mono bg-black/40 px-1.5 py-0.5 rounded">
            {creator.featuredReel.duration}
          </span>
        </div>
      </div>

      {/* Creator Info Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header with Avatar & Name */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#556B2F] text-white flex items-center justify-center ring-2 ring-white text-[9px]">
                  ✓
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-semibold text-sm text-[#1C201A] group-hover:text-[#556B2F] transition-colors">
                    {creator.name}
                  </h3>
                </div>
                <p className="text-xs text-[#7A8374]">{creator.handle}</p>
                <p className="text-[11px] font-medium text-[#425524] mt-0.5">{creator.roleTitle}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 bg-[#F4F6F4] px-2 py-1 rounded-lg border border-[#E4E7E1]">
              <Star className="w-3.5 h-3.5 fill-[#556B2F] text-[#556B2F]" />
              <span className="text-xs font-bold text-[#1C201A]">{creator.rating}</span>
              <span className="text-[10px] text-[#7A8374]">({creator.reviewsCount})</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
            {creator.verifiedBadges.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#E9EFE2] text-[#35441E] border border-[#D6E2C8]"
              >
                <ShieldCheck className="w-3 h-3 text-[#556B2F]" />
                {badge}
              </span>
            ))}
          </div>

          {/* Tools Used Tags */}
          <div className="mb-3">
            <div className="text-[10px] uppercase font-bold text-[#7A8374] tracking-wider mb-1 flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#556B2F]" />
              <span>Production Tools:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {creator.tools.slice(0, 4).map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-[#F4F6F4] text-[#2C381A] rounded-md text-[11px] font-medium border border-[#E4E7E1]"
                >
                  {tool}
                </span>
              ))}
              {creator.tools.length > 4 && (
                <span className="px-1.5 py-0.5 bg-[#F4F6F4] text-[#7A8374] rounded-md text-[10px]">
                  +{creator.tools.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Workflow Pipeline Highlight Note */}
          <div className="bg-[#FAF8F5] border border-[#EBE7DF] rounded-xl p-2.5 mb-4 text-xs">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#745E2D] uppercase tracking-wider mb-1">
              <Layers className="w-3 h-3 text-[#8A7039]" />
              <span>Verified Workflow Pipeline:</span>
            </div>
            <p className="text-[#4A4F46] text-[11px] leading-relaxed line-clamp-2">
              {creator.pipeline.map((p) => p.step.replace(/\d+\.\s*/, "")).join(" → ")}
            </p>
          </div>
        </div>

        {/* Bottom Rates & Actions */}
        <div className="pt-3 border-t border-[#F0F2EE] flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] text-[#7A8374] font-medium">Starting from</div>
            <div className="text-xs font-bold text-[#1C201A]">{creator.startingRate}</div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectCreator(creator)}
              className="px-3 py-1.5 bg-[#F4F6F4] hover:bg-[#E9EFE2] text-[#35441E] text-xs font-semibold rounded-xl border border-[#E4E7E1] transition-all"
            >
              View Pipeline
            </button>
            <button
              onClick={() => onDirectBrief(creator)}
              className="px-3 py-1.5 bg-[#556B2F] hover:bg-[#425524] text-white text-xs font-semibold rounded-xl shadow-xs transition-all active:scale-95"
            >
              Hire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
