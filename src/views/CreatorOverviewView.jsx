import React from "react";
import { BarChart3, TrendingUp, Users, DollarSign, Star, Film, Clock, ArrowRight, ShieldCheck, CheckCircle2, Plus } from "lucide-react";

export default function CreatorOverviewView({ user, briefs, onOpenUploadWork, onSelectTab }) {
  const stats = [
    { label: "Profile & Reel Views", value: "38.2K", change: "+24.5%", icon: BarChart3 },
    { label: "Brief Pitch Invites", value: "8 Active", change: "3 New Today", icon: Film },
    { label: "Escrow Earnings", value: "$6,450", change: "+$1,800 this mo", icon: DollarSign },
    { label: "Trust & Client Rating", value: "4.98 ★", change: "Top 1% Talent", icon: Star }
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-[#E4E7E1] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-bold text-[#1C201A]">Creator Studio Dashboard</h2>
            <span className="text-xs bg-[#E9EFE2] text-[#35441E] px-2 py-0.5 rounded-full font-bold">
              Verified Pipeline
            </span>
          </div>
          <p className="text-xs text-[#5A6255]">
            Welcome back, {user.name}. You have 2 active campaign deliveries and 4 new brand brief invitations.
          </p>
        </div>

        <button
          onClick={onOpenUploadWork}
          className="px-4 py-2.5 bg-[#556B2F] hover:bg-[#425524] text-white rounded-xl text-xs sm:text-sm font-semibold shadow-xs transition-all active:scale-95 flex items-center gap-2 whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          <span>Upload New Reel / Work</span>
        </button>
      </div>

      {/* Analytics Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E4E7E1] p-5 shadow-2xs space-y-2 hover:border-[#B9CFA5] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#7A8374]">{stat.label}</span>
                <div className="w-8 h-8 rounded-xl bg-[#F4F6F4] text-[#556B2F] flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-black text-[#1C201A]">{stat.value}</div>
              <div className="text-[11px] font-semibold text-[#556B2F] flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>{stat.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Milestone Contracts in Progress */}
      <div className="bg-white rounded-2xl border border-[#E4E7E1] p-6 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#1C201A] uppercase tracking-wider">
              Active Milestone Deliveries in Progress
            </h3>
            <p className="text-xs text-[#7A8374]">Milestone payments locked safely in Synthalent Escrow</p>
          </div>
          <button
            onClick={() => onSelectTab("deliveries")}
            className="text-xs font-semibold text-[#556B2F] hover:underline flex items-center gap-1"
          >
            <span>View All Deliveries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-[#D6E2C8] bg-[#F5F7F2] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm">🍵</span>
                <h4 className="font-bold text-sm text-[#1C201A]">Komorebi Matcha Co. — 3x 9:16 Social Reels</h4>
                <span className="text-[10px] font-bold bg-[#E9EFE2] text-[#35441E] px-2 py-0.5 rounded-full">
                  Milestone 2 of 3
                </span>
              </div>
              <p className="text-xs text-[#5A6255]">
                Current Phase: Generative Motion Synthesis in Runway Gen-3 Alpha. Next: DaVinci ACES Color Grading.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[10px] text-[#7A8374]">Escrow Locked</div>
                <div className="text-sm font-bold text-[#1C201A]">$2,800</div>
              </div>
              <button
                onClick={() => onSelectTab("deliveries")}
                className="px-3.5 py-1.5 bg-[#556B2F] hover:bg-[#425524] text-white rounded-xl text-xs font-semibold transition-all shadow-xs"
              >
                Submit Milestone
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[#E4E7E1] bg-[#FAF8F5] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm">⚡</span>
                <h4 className="font-bold text-sm text-[#1C201A]">Veloce Motors — Cyberpunk Hypercar Film</h4>
                <span className="text-[10px] font-bold bg-[#FAF8F5] text-[#745E2D] border border-[#EBE7DF] px-2 py-0.5 rounded-full">
                  Milestone 1 of 2
                </span>
              </div>
              <p className="text-xs text-[#5A6255]">
                Current Phase: Concept keyframing & prompt anchoring. 4K anamorphic frame test approved.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[10px] text-[#7A8374]">Escrow Locked</div>
                <div className="text-sm font-bold text-[#1C201A]">$3,650</div>
              </div>
              <button
                onClick={() => onSelectTab("deliveries")}
                className="px-3.5 py-1.5 bg-white border border-[#D8DDCF] hover:bg-[#F4F6F4] text-[#1C201A] rounded-xl text-xs font-semibold transition-all"
              >
                View Milestone
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Marketplace Briefs for Pitching */}
      <div className="bg-white rounded-2xl border border-[#E4E7E1] p-6 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#1C201A] uppercase tracking-wider">
              Incoming Brief Matches for Your Skills
            </h3>
            <p className="text-xs text-[#7A8374]">Based on your verified tools (Runway Gen-3, Midjourney v6, DaVinci)</p>
          </div>
          <button
            onClick={() => onSelectTab("incoming")}
            className="text-xs font-semibold text-[#556B2F] hover:underline"
          >
            Browse All Briefs →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {briefs.slice(0, 2).map((brief) => (
            <div
              key={brief.id}
              className="p-4 rounded-xl border border-[#E4E7E1] hover:border-[#B9CFA5] transition-all bg-[#FAF8F5] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-[#7A8374]">{brief.brandName}</span>
                  <span className="font-bold text-[#556B2F]">{brief.budget}</span>
                </div>
                <h4 className="font-bold text-sm text-[#1C201A] mb-1">{brief.title}</h4>
                <p className="text-xs text-[#5A6255] line-clamp-2 mb-3">
                  {brief.objective}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#EBE7DF] text-xs">
                <span className="text-[#7A8374]">{brief.aspectRatio} • {brief.contentType}</span>
                <button
                  onClick={() => alert(`Submitted pitch proposal for "${brief.title}"`)}
                  className="px-3 py-1 bg-[#556B2F] text-white rounded-lg text-xs font-semibold hover:bg-[#425524] transition-all"
                >
                  Quick Pitch
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
