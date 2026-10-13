import React, { useState } from "react";
import { PackageCheck, ShieldCheck, CheckCircle2, Clock, UploadCloud, AlertCircle, DollarSign, FileCheck, ArrowRight } from "lucide-react";

export default function CreatorDeliveriesView() {
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submitNotes, setSubmitNotes] = useState("");
  const [deliverableUrl, setDeliverableUrl] = useState("https://drive.google.com/synthalent-reel-master-v2");
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedSuccess(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmittedSuccess(false);
    }, 1800);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="bg-white p-6 rounded-2xl border border-[#E4E7E1] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-bold text-[#1C201A]">Active Deliveries & Escrow Releases</h2>
            <span className="text-xs bg-[#E9EFE2] text-[#35441E] px-2 py-0.5 rounded-full font-bold">
              Escrow Guaranteed
            </span>
          </div>
          <p className="text-xs text-[#5A6255]">
            Submit your completed milestones for client review and trigger automated escrow release.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#EBE7DF] px-4 py-2 rounded-xl text-right">
          <div className="text-[10px] text-[#7A8374] font-medium">Total Escrow Locked</div>
          <div className="text-lg font-bold text-[#1C201A]">$6,450.00</div>
        </div>
      </div>

      {/* Contract 1: Komorebi Matcha Co. */}
      <div className="bg-white rounded-2xl border border-[#E4E7E1] p-6 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-[#F0F2EE]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#7A8374] mb-1">
              <span>🍵 Komorebi Matcha Co.</span>
              <span>•</span>
              <span className="font-semibold text-[#556B2F]">Standard Commercial Rights (12 Mo)</span>
            </div>
            <h3 className="text-lg font-bold text-[#1C201A]">
              Vibrant 9:16 Ceremonial Matcha Social Reel Campaign (3x Reels)
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-[10px] text-[#7A8374]">Contract Value</div>
              <div className="text-base font-bold text-[#1C201A]">$2,800</div>
            </div>
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-2 bg-[#556B2F] hover:bg-[#425524] text-white rounded-xl text-xs font-semibold shadow-xs transition-all active:scale-95 flex items-center gap-1.5"
            >
              <UploadCloud className="w-4 h-4" />
              <span>Submit Deliverable</span>
            </button>
          </div>
        </div>

        {/* Milestone Steps Timeline */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-[#7A8374] uppercase tracking-wider">
            Milestone Production Track:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Milestone 1 */}
            <div className="p-4 rounded-xl border border-[#D6E2C8] bg-[#F5F7F2] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#35441E] bg-[#E9EFE2] px-2 py-0.5 rounded-md">
                  Milestone 1 (30%)
                </span>
                <span className="text-xs font-bold text-[#556B2F] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Approved
                </span>
              </div>
              <h4 className="font-bold text-xs text-[#1C201A]">Styleframes & Visual Anchors</h4>
              <p className="text-[11px] text-[#5A6255]">
                Midjourney v6 color scripts & composition approved by brand.
              </p>
              <div className="text-[10px] text-[#556B2F] font-semibold pt-1">
                ✓ $900.00 Released to Payout
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="p-4 rounded-xl border-2 border-[#556B2F] bg-white space-y-2 relative shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-white bg-[#556B2F] px-2 py-0.5 rounded-md">
                  Milestone 2 (40%)
                </span>
                <span className="text-xs font-bold text-[#745E2D] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  In Review
                </span>
              </div>
              <h4 className="font-bold text-xs text-[#1C201A]">Diffusion Motion Synthesis</h4>
              <p className="text-[11px] text-[#5A6255]">
                3x 9:16 vertical motion cuts in Runway Gen-3 Alpha submitted for brand review.
              </p>
              <div className="text-[10px] text-[#1C201A] font-semibold pt-1">
                ⏳ $1,100.00 Pending Client Sign-Off
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="p-4 rounded-xl border border-[#E4E7E1] bg-[#F4F6F4] opacity-80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#7A8374] bg-[#E4E7E1] px-2 py-0.5 rounded-md">
                  Milestone 3 (30%)
                </span>
                <span className="text-xs text-[#7A8374]">Pending</span>
              </div>
              <h4 className="font-bold text-xs text-[#1C201A]">Final 4K Master & Audio Mix</h4>
              <p className="text-[11px] text-[#5A6255]">
                DaVinci Resolve ACES color grading + ASMR audio mix + C2PA provenance embed.
              </p>
              <div className="text-[10px] text-[#7A8374] font-semibold pt-1">
                🔒 $800.00 Locked in Escrow
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contract 2: Veloce Motors */}
      <div className="bg-white rounded-2xl border border-[#E4E7E1] p-6 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-[#F0F2EE]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#7A8374] mb-1">
              <span>⚡ Veloce Motors</span>
              <span>•</span>
              <span className="font-semibold text-[#556B2F]">Exclusive Perpetual Buyout</span>
            </div>
            <h3 className="text-base font-bold text-[#1C201A]">
              Cyberpunk Electric Supercar Cinematic Teaser (16:9 4K)
            </h3>
          </div>

          <div className="text-right">
            <div className="text-[10px] text-[#7A8374]">Contract Value</div>
            <div className="text-base font-bold text-[#1C201A]">$3,650</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#5A6255]">
          <span>Milestone 1 of 2 in production: 3D CAD Camera Pre-visualization in Blender.</span>
          <span className="font-semibold text-[#556B2F]">Due in 5 days</span>
        </div>
      </div>

      {/* Submit Deliverable Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#E4E7E1] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#1C201A]">Submit Milestone Deliverable</h3>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="text-[#7A8374] hover:text-[#1C201A]"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#5A6255]">
              Deliverables are securely reviewed by the client and audited for C2PA provenance credentials.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#1C201A] mb-1">Deliverable Asset Cloud Link *</label>
                <input
                  type="url"
                  required
                  value={deliverableUrl}
                  onChange={(e) => setDeliverableUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F4F6F4] rounded-xl border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1C201A] mb-1">Production Revision Notes</label>
                <textarea
                  rows={3}
                  value={submitNotes}
                  onChange={(e) => setSubmitNotes(e.target.value)}
                  placeholder="Summarize the adjustments made in this milestone (e.g. speed ramp refined, audio equalized to -14 LUFS)..."
                  className="w-full px-3 py-2 bg-[#F4F6F4] rounded-xl border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
                />
              </div>

              <div className="bg-[#E9EFE2] p-3 rounded-xl border border-[#D6E2C8] space-y-1 text-[11px] text-[#35441E]">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#556B2F]" />
                  <span>C2PA Content Credentials Signing Active</span>
                </div>
                <p>Digital signature will be appended to this submission verifying author identity and toolchain.</p>
              </div>

              {submittedSuccess ? (
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl font-bold text-center">
                  ✓ Deliverable successfully submitted to client!
                </div>
              ) : (
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 border border-[#E4E7E1] rounded-xl font-semibold text-[#1C201A]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#556B2F] text-white rounded-xl font-semibold shadow-xs hover:bg-[#425524]"
                  >
                    Confirm Submission
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
