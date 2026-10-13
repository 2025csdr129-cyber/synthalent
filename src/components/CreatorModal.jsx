import React, { useState } from "react";
import { X, Star, ShieldCheck, MapPin, Clock, DollarSign, Sparkles, Layers, Zap, ExternalLink, Play, CheckCircle2, MessageSquare, Send } from "lucide-react";

export default function CreatorModal({ creator, onClose, onDirectBrief, onOpenItem }) {
  const [activeTab, setActiveTab] = useState("portfolio"); // "portfolio" | "pipeline" | "trust"

  if (!creator) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white border border-[#E4E7E1] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative">
        {/* Header Banner & Close */}
        <div className="relative h-44 bg-gradient-to-r from-[#3B4D28] via-[#556B2F] to-[#6C8539] p-6 text-white flex items-end justify-between">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md flex items-center justify-center text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Quick Badges in Header */}
          <div className="absolute top-4 left-6 flex flex-wrap gap-2">
            {creator.verifiedBadges.map((b, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-white/20"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#D6E2C8]" />
                {b}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-[#D6E2C8] bg-black/30 px-3 py-1 rounded-full backdrop-blur-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>Avg Turnaround: <strong>{creator.turnaround}</strong></span>
          </div>
        </div>

        {/* Profile Info Row with Overlapping Avatar */}
        <div className="px-6 sm:px-8 pt-0 pb-4 border-b border-[#E4E7E1] bg-white relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-12 sm:-mt-14 mb-4">
            <div className="flex items-end gap-4">
              <div className="relative">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-white shadow-md"
                />
                <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#556B2F] text-white flex items-center justify-center ring-4 ring-white text-xs font-bold">
                  ✓
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-[#1C201A]">{creator.name}</h2>
                  <div className="flex items-center gap-1 bg-[#F4F6F4] px-2 py-0.5 rounded-md text-xs font-bold text-[#1C201A]">
                    <Star className="w-3.5 h-3.5 fill-[#556B2F] text-[#556B2F]" />
                    {creator.rating}
                    <span className="text-[#7A8374] font-normal">({creator.reviewsCount})</span>
                  </div>
                </div>
                <p className="text-xs text-[#7A8374] font-mono">{creator.handle}</p>
                <p className="text-sm font-semibold text-[#425524] mt-0.5">{creator.roleTitle}</p>
                <div className="flex items-center gap-2 text-xs text-[#5A6255] mt-1">
                  <MapPin className="w-3 h-3 text-[#7A8374]" />
                  <span>{creator.location}</span>
                </div>
              </div>
            </div>

            {/* Rates & Direct Action */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-[#7A8374]">Starting from</div>
                <div className="text-lg font-bold text-[#1C201A]">{creator.startingRate}</div>
              </div>

              <button
                onClick={() => onDirectBrief(creator)}
                className="px-5 py-2.5 bg-[#556B2F] hover:bg-[#425524] text-white rounded-xl text-sm font-semibold shadow-sm transition-all active:scale-95 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Hire / Send Brief
              </button>
            </div>
          </div>

          {/* Bio text */}
          <p className="text-xs sm:text-sm text-[#4A4F46] leading-relaxed max-w-3xl mb-4">
            {creator.bio}
          </p>

          {/* Specialization & Tools tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-[#7A8374] uppercase tracking-wider">
              Specialties:
            </span>
            {creator.specializations.map((spec, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 bg-[#E9EFE2] text-[#35441E] rounded-md text-xs font-semibold"
              >
                {spec}
              </span>
            ))}
            <span className="text-[#D6DBD4]">|</span>
            <span className="text-[11px] font-bold text-[#7A8374] uppercase tracking-wider">
              Tools:
            </span>
            {creator.tools.map((tool, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 bg-[#F4F6F4] text-[#2C381A] rounded-md text-xs font-medium border border-[#E4E7E1]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 sm:px-8 border-b border-[#E4E7E1] bg-[#FAF8F5] flex items-center gap-6 text-xs font-semibold">
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`py-3 relative transition-colors ${
              activeTab === "portfolio"
                ? "text-[#556B2F] font-bold"
                : "text-[#5A6255] hover:text-[#1C201A]"
            }`}
          >
            <span>Portfolio & Reel Showcase ({creator.portfolioItems.length})</span>
            {activeTab === "portfolio" && (
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#556B2F]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("pipeline")}
            className={`py-3 relative transition-colors ${
              activeTab === "pipeline"
                ? "text-[#556B2F] font-bold"
                : "text-[#5A6255] hover:text-[#1C201A]"
            }`}
          >
            <span>Production Pipeline & Tool Architecture</span>
            {activeTab === "pipeline" && (
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#556B2F]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("trust")}
            className={`py-3 relative transition-colors ${
              activeTab === "trust"
                ? "text-[#556B2F] font-bold"
                : "text-[#5A6255] hover:text-[#1C201A]"
            }`}
          >
            <span>Client Proof & Verification Audit</span>
            {activeTab === "trust" && (
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#556B2F]" />
            )}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-white">
          {activeTab === "portfolio" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {creator.portfolioItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenItem(item, creator)}
                  className="group bg-[#F4F6F4] rounded-2xl border border-[#E4E7E1] overflow-hidden cursor-pointer hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative aspect-16/10 bg-black overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#556B2F] transition-all">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 flex gap-1">
                      <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono rounded">
                        {item.aspectRatio}
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/60 text-white font-mono text-[10px] rounded">
                      {item.duration}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-semibold text-sm text-[#1C201A] group-hover:text-[#556B2F] transition-colors mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#5A6255] line-clamp-2 leading-relaxed mb-3">
                        {item.promptSummary}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E4E7E1] flex items-center justify-between text-[11px] text-[#7A8374]">
                      <span>{item.toolsUsed.slice(0, 2).join(" • ")}</span>
                      <span className="font-medium text-[#556B2F]">Inspect Specs →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "pipeline" && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-[#FAF8F5] border border-[#EBE7DF] rounded-2xl p-5">
                <h4 className="text-sm font-bold text-[#1C201A] mb-1 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#556B2F]" />
                  Verified Production Pipeline
                </h4>
                <p className="text-xs text-[#5A6255]">
                  This creator has demonstrated end-to-end technical mastery of the generative synthesis lifecycle.
                  All deliverables strictly follow this human-in-the-loop workflow:
                </p>
              </div>

              <div className="relative border-l-2 border-[#D6E2C8] ml-4 pl-6 space-y-6">
                {creator.pipeline.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[31px] top-0 w-5 h-5 rounded-full bg-[#556B2F] text-white flex items-center justify-center text-[10px] font-bold">
                      {idx + 1}
                    </div>
                    <h5 className="font-semibold text-sm text-[#1C201A]">{step.step}</h5>
                    <p className="text-xs text-[#5A6255] mt-1 leading-relaxed bg-[#F4F6F4] p-3 rounded-xl border border-[#E4E7E1]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "trust" && (
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="bg-[#E9EFE2] border border-[#D6E2C8] rounded-2xl p-5">
                <h4 className="font-bold text-[#35441E] text-sm flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#556B2F]" />
                  Synthalent Trust Audit: Passed (100% Score)
                </h4>
                <p className="text-xs text-[#425524] leading-relaxed">
                  Creator {creator.name} holds active verified certifications for commercial safe weights, non-hallmark guarantees, and IP-cleared dataset conditioning.
                </p>
              </div>

              <div className="border border-[#E4E7E1] rounded-2xl p-5 space-y-3">
                <h5 className="font-semibold text-xs text-[#7A8374] uppercase tracking-wider">
                  Past Brand Collaborations & Specs
                </h5>
                <div className="flex flex-wrap gap-2">
                  {creator.sampleClients.map((client, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#F4F6F4] text-[#1C201A] rounded-xl text-xs font-semibold border border-[#E4E7E1]"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-[#E4E7E1] rounded-2xl p-5 space-y-2">
                <h5 className="font-semibold text-xs text-[#7A8374] uppercase tracking-wider">
                  Turnaround & Commercial Licensing
                </h5>
                <div className="text-xs text-[#4A4F46] space-y-1">
                  <p>• Standard 48-72h turnaround on 9:16 vertical reels</p>
                  <p>• Commercial buyout and advertising clearances included in contract</p>
                  <p>• 2 rounds of revisions included per milestone</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 sm:px-8 border-t border-[#E4E7E1] bg-[#FAF8F5] flex items-center justify-between">
          <div className="text-xs text-[#7A8374]">
            Synthalent Escrow Protection active on all contracts
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#D8DDCF] bg-white hover:bg-[#F4F6F4] text-[#1C201A] rounded-xl text-xs font-semibold transition-all"
            >
              Close
            </button>
            <button
              onClick={() => onDirectBrief(creator)}
              className="px-5 py-2 bg-[#556B2F] hover:bg-[#425524] text-white rounded-xl text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              Send Brief to {creator.name.split(" ")[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
