import React, { useState } from "react";
import { Inbox, Sparkles, Send, ShieldCheck, DollarSign, Calendar, Sliders, CheckCircle2 } from "lucide-react";

export default function CreatorIncomingBriefsView({ briefs, user }) {
  const [pitchSubmitted, setPitchSubmitted] = useState({});

  const handlePitch = (briefId, title) => {
    setPitchSubmitted((prev) => ({ ...prev, [briefId]: true }));
    setTimeout(() => {
      alert(`Your pitch proposal for "${title}" has been submitted to the brand!`);
    }, 200);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-[#E4E7E1] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-bold text-[#1C201A]">Open Marketplace Briefs & Invitations</h2>
            <span className="text-xs bg-[#E9EFE2] text-[#35441E] px-2 py-0.5 rounded-full font-bold">
              {briefs.length} Open
            </span>
          </div>
          <p className="text-xs text-[#5A6255]">
            Review creative briefs looking for your generative toolchain, submit proposals, and secure escrow contracts.
          </p>
        </div>
      </div>

      {/* Briefs Grid */}
      <div className="space-y-4">
        {briefs.map((brief) => {
          const hasPitched = pitchSubmitted[brief.id];
          return (
            <div
              key={brief.id}
              className="bg-white rounded-2xl border border-[#E4E7E1] hover:border-[#B9CFA5] p-6 shadow-xs space-y-4 transition-all"
            >
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

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#F4F6F4] text-[#1C201A] font-mono text-xs font-bold rounded-lg border border-[#E4E7E1]">
                    {brief.aspectRatio}
                  </span>
                  <span className="px-2.5 py-1 bg-[#556B2F] text-white text-xs font-semibold rounded-lg">
                    {brief.contentType}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A4F46] leading-relaxed">
                {brief.objective}
              </p>

              <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EBE7DF] text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#745E2D] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#8A7039]" />
                  <span>Aesthetic Direction:</span>
                </div>
                <p className="text-[#5A6255] text-xs italic">
                  "{brief.aestheticDirection}"
                </p>
              </div>

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
                  <div className="text-[10px] text-[#7A8374] font-medium">Licensing Tier</div>
                  <div className="text-sm font-bold text-[#556B2F] truncate">{brief.licensingTier}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F0F2EE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-bold text-[#7A8374] uppercase tracking-wider">
                    Preferred Tools:
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

                <button
                  onClick={() => handlePitch(brief.id, brief.title)}
                  disabled={hasPitched}
                  className={`px-5 py-2 rounded-xl text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5 ${
                    hasPitched
                      ? "bg-[#E9EFE2] text-[#35441E] border border-[#D6E2C8] cursor-default"
                      : "bg-[#556B2F] hover:bg-[#425524] text-white active:scale-95"
                  }`}
                >
                  {hasPitched ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#556B2F]" />
                      <span>Pitch Proposal Sent</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Apply & Submit Pitch</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
