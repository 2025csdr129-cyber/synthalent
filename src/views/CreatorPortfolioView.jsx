import React from "react";
import { Plus, Play, Layers, Eye, Heart } from "lucide-react";

export default function CreatorPortfolioView({ user, portfolioItems, onOpenUploadWork, onOpenItem }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-[#E4E7E1] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-bold text-[#1C201A]">My Showcase Portfolio & Reels</h2>
            <span className="text-xs bg-[#E9EFE2] text-[#35441E] px-2 py-0.5 rounded-full font-bold">
              {portfolioItems.length} Published
            </span>
          </div>
          <p className="text-xs text-[#5A6255]">
            Prospective brands discover your technical abilities through these high-res reels, prompt breakdowns, and pipeline notes.
          </p>
        </div>

        <button
          onClick={onOpenUploadWork}
          className="px-5 py-2.5 bg-[#556B2F] hover:bg-[#425524] text-white rounded-xl text-xs sm:text-sm font-semibold shadow-xs transition-all active:scale-95 flex items-center gap-2 whitespace-nowrap"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>+ Upload Work</span>
        </button>
      </div>

      {/* Production Pipeline Banner */}
      <div className="bg-[#FAF8F5] border border-[#EBE7DF] rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#745E2D] uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4 text-[#8A7039]" />
            <span>Public Production Pipeline Specification</span>
          </div>
          <p className="text-xs text-[#5A6255]">
            Midjourney v6.1 LoRA Anchoring → Runway Gen-3 Motion Synthesis → Magnific 4K Upscale → DaVinci Resolve ACES Color & Audio
          </p>
        </div>
        <span className="px-3 py-1 bg-white border border-[#D8DDCF] text-[#556B2F] text-xs font-bold rounded-xl whitespace-nowrap">
          ✓ Verified by Synthalent
        </span>
      </div>

      {/* Portfolio Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenItem(item, { name: user.name, handle: user.handle, avatar: user.avatar })}
            className="group bg-white rounded-2xl border border-[#E4E7E1] hover:border-[#B9CFA5] overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all flex flex-col"
          >
            <div className="relative aspect-16/10 bg-black overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#556B2F] transition-all">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              <div className="absolute top-2 left-2 flex gap-1">
                <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono rounded">
                  {item.aspectRatio}
                </span>
                <span className="px-2 py-0.5 bg-[#556B2F] text-white text-[10px] font-semibold rounded">
                  {item.type}
                </span>
              </div>

              <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/60 text-white font-mono text-[10px] rounded">
                {item.duration}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-sm text-[#1C201A] group-hover:text-[#556B2F] transition-colors mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5A6255] line-clamp-2 leading-relaxed mb-3">
                  {item.promptSummary}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {item.toolsUsed.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#F4F6F4] text-[#2C381A] rounded-md text-[10px] font-medium border border-[#E4E7E1]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#F0F2EE] flex items-center justify-between text-xs text-[#7A8374]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    {item.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    {item.likes}
                  </span>
                </div>
                <span className="font-semibold text-[#556B2F]">Inspect & Play →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
