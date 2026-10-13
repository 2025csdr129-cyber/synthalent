import React from "react";
import {
  Compass,
  Users,
  FileText,
  ShieldCheck,
  BarChart3,
  Film,
  Inbox,
  PackageCheck,
  Sparkles,
  ArrowRightLeft,
  Lock,
  ExternalLink
} from "lucide-react";

export default function Sidebar({ user, activeTab, onSelectTab, onSwitchRole }) {
  const isBrand = user.role === "brand";

  // Navigation Items dynamically adapting based on user role
  const brandNav = [
    { id: "overview", label: "Overview Feed", icon: Compass, count: null },
    { id: "discover", label: "Discover Creators", icon: Users, count: "Top 1%" },
    { id: "briefs", label: "Creative Briefs", icon: FileText, count: "AI Magic" },
    { id: "verification", label: "Verification Center", icon: ShieldCheck, count: "Safe" }
  ];

  const creatorNav = [
    { id: "analytics", label: "Overview Analytics", icon: BarChart3, count: "+24%" },
    { id: "portfolio", label: "My Portfolio", icon: Film, count: "Live" },
    { id: "incoming", label: "Incoming Briefs", icon: Inbox, count: "4 New" },
    { id: "deliveries", label: "Deliveries", icon: PackageCheck, count: "Escrow" }
  ];

  const currentNav = isBrand ? brandNav : creatorNav;

  return (
    <aside className="w-64 bg-white border-r border-[#E4E7E1] flex flex-col justify-between shrink-0 select-none hidden md:flex sticky top-16 h-[calc(100vh-64px)]">
      {/* Top Section */}
      <div className="p-4 space-y-6">
        {/* Role Pill Banner */}
        <div className="bg-[#FAF8F5] border border-[#EBE7DF] rounded-2xl p-3">
          <div className="text-[10px] font-bold text-[#7A8374] uppercase tracking-wider mb-1">
            Current Workspace
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">{isBrand ? "🏢" : "🎨"}</span>
              <div>
                <div className="text-xs font-bold text-[#1C201A] truncate max-w-[120px]">
                  {user.name}
                </div>
                <div className="text-[10px] text-[#556B2F] font-semibold">
                  {isBrand ? "Brand / Agency" : "Verified Creator"}
                </div>
              </div>
            </div>

            <button
              onClick={() => onSwitchRole(isBrand ? "creator" : "brand")}
              title="Switch role"
              className="p-1.5 rounded-lg bg-white border border-[#D8DDCF] hover:bg-[#E9EFE2] text-[#556B2F] transition-all"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Dynamic Navigation Links */}
        <div>
          <div className="px-3 text-[10px] font-bold text-[#7A8374] uppercase tracking-wider mb-2">
            {isBrand ? "Brand Navigation" : "Creator Navigation"}
          </div>

          <nav className="space-y-1">
            {currentNav.map((item) => {
              const active = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all group relative ${
                    active
                      ? "bg-[#E9EFE2] text-[#35441E] shadow-2xs font-bold"
                      : "text-[#5A6255] hover:bg-[#F4F6F4] hover:text-[#1C201A]"
                  }`}
                >
                  {/* Olive Green Active Indicator Line on the left */}
                  {active && (
                    <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#556B2F] rounded-r-full" />
                  )}

                  <div className="flex items-center gap-2.5">
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        active
                          ? "text-[#556B2F]"
                          : "text-[#7A8374] group-hover:text-[#1C201A]"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.count && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                        active
                          ? "bg-[#556B2F] text-white"
                          : "bg-[#F4F6F4] text-[#7A8374] group-hover:bg-[#E9EFE2] group-hover:text-[#35441E]"
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Trust & Compliance Card */}
      <div className="p-4 border-t border-[#F0F2EE]">
        <div className="bg-[#FAF8F5] border border-[#EBE7DF] rounded-2xl p-3.5 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C201A]">
            <ShieldCheck className="w-4 h-4 text-[#556B2F]" />
            <span>Synthalent Safe Protocol</span>
          </div>

          <p className="text-[11px] text-[#5A6255] leading-relaxed">
            Every contract is protected with C2PA provenance and milestone escrow release.
          </p>

          <div className="pt-1 flex items-center justify-between text-[10px] text-[#556B2F] font-semibold">
            <span>Enterprise Grade</span>
            <span>✓ 100% Cleared</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
