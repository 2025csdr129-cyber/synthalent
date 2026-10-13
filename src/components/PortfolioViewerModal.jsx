import React, { useState, useEffect } from "react";
import { X, Play, Pause, Volume2, VolumeX, Sparkles, ShieldCheck, Heart, Eye, Download, Layers, Zap, ExternalLink } from "lucide-react";

export default function PortfolioViewerModal({ item, creator, onClose, onUseAsTemplate }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);
  const [liked, setLiked] = useState(false);

  // Simulate video playback progress
  useEffect(() => {
    if (!item) return undefined;

    let interval;
    if (isPlaying && item.duration !== "Static" && item.duration !== "Editorial" && item.duration !== "Print Suite") {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, item?.duration]);

  if (!item) return null;

  const isVertical = item.aspectRatio === "9:16";

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#141712] border border-white/10 rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Player Area */}
        <div className="flex-1 bg-black flex items-center justify-center p-4 relative min-h-[360px] lg:min-h-[580px] select-none">
          {/* Main Visual Container */}
          <div
            className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#090B08] ${
              isVertical
                ? "w-[270px] sm:w-[320px] aspect-9/16"
                : item.aspectRatio === "1:1"
                ? "w-[360px] sm:w-[420px] aspect-square"
                : "w-full max-w-[620px] aspect-16/9"
            }`}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isPlaying ? "scale-102" : "scale-100"
              }`}
            />

            {/* Simulated subtle grain & lighting sheen */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Video Player Controls Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col gap-2">
              {/* Progress Scrubber */}
              {item.duration !== "Static" && (
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    setProgress(Math.round((clickX / rect.width) * 100));
                  }}
                  className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer relative overflow-hidden group"
                >
                  <div
                    className="h-full bg-[#8FAE6F] group-hover:bg-[#B9CFA5] rounded-full transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              {/* Action Bar inside player */}
              <div className="flex items-center justify-between text-white/90 text-xs">
                <div className="flex items-center gap-3">
                  {item.duration !== "Static" && (
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      )}
                    </button>
                  )}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="font-mono text-[11px] text-white/70">
                    {item.duration}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 bg-white/10 rounded-md text-[10px] font-mono tracking-wider">
                    {item.aspectRatio}
                  </span>
                  <span className="px-2 py-0.5 bg-[#556B2F] text-white rounded-md text-[10px] font-semibold">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details & Specs Sidebar */}
        <div className="w-full lg:w-[400px] bg-[#1A1F17] p-6 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/10">
          <div>
            {/* Header with Creator Info */}
            {creator && (
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#556B2F]"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{creator.name}</h4>
                    <p className="text-xs text-[#A1AD96]">{creator.handle}</p>
                  </div>
                </div>

                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                    liked
                      ? "bg-rose-500/20 border-rose-500/50 text-rose-300"
                      : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${liked ? "fill-rose-400 text-rose-400" : ""}`} />
                  <span>{liked ? "Saved" : item.likes}</span>
                </button>
              </div>
            )}

            {/* Title & Metadata */}
            <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>

            <div className="flex items-center gap-4 text-xs text-[#A1AD96] mb-5">
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                {item.views} Views
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8FAE6F]" />
                Commercial Cleared
              </span>
            </div>

            {/* Generation Prompt Breakdown */}
            <div className="bg-[#242A20] rounded-2xl p-4 border border-white/5 mb-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B9CFA5] mb-2 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#B9CFA5]" />
                <span>Prompt Architecture:</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans italic bg-black/20 p-2.5 rounded-xl border border-white/5">
                "{item.promptSummary}"
              </p>
            </div>

            {/* Tools Used Stack */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#A1AD96] mb-2">
                <Zap className="w-3.5 h-3.5 text-[#8FAE6F]" />
                <span>Tools Applied:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {item.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-white/5 hover:bg-white/10 text-[#D6E2C8] rounded-lg text-xs font-medium border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Workflow Pipeline Note */}
            <div className="bg-[#242A20] rounded-2xl p-4 border border-white/5 mb-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B9CFA5] mb-1.5">
                <Layers className="w-3.5 h-3.5 text-[#8FAE6F]" />
                <span>Production Pipeline Technique:</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                {item.workflowNote}
              </p>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => onUseAsTemplate(item)}
              className="w-full py-2.5 bg-[#556B2F] hover:bg-[#6B8F41] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Use This Style in AI Brief Builder
            </button>
            <button
              onClick={onClose}
              className="w-full py-2 bg-white/5 hover:bg-white/10 text-white/80 rounded-xl text-xs font-medium transition-all"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
