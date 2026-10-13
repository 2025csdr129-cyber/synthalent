import React, { useState } from "react";
import { Search, Bell, Sparkles, Plus, ChevronDown, Check, LogOut, User, Shield, Layers, HelpCircle, CheckCheck } from "lucide-react";

export default function Navbar({
  user,
  onSwitchRole,
  searchQuery,
  setSearchQuery,
  notifications,
  onMarkNotificationsRead,
  onOpenPrimaryCta,
  onOpenAuthModal
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const isBrand = user.role === "brand";

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E4E7E1] h-16 flex items-center px-4 sm:px-8 justify-between shadow-2xs">
      {/* Left: Brand Identity & Mobile Title */}
      <div className="flex items-center gap-3 min-w-[200px]">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3B4D28] to-[#556B2F] flex items-center justify-center text-white shadow-xs">
            <Sparkles className="w-5 h-5 text-[#D6E2C8]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-[#1C201A]">
                SYNTHALENT
              </span>
              <span className="text-[10px] font-bold bg-[#E9EFE2] text-[#35441E] px-1.5 py-0.2 rounded font-mono">
                AI
              </span>
            </div>
            <p className="text-[10px] text-[#7A8374] font-medium hidden sm:block">
              Creator Marketplace
            </p>
          </div>
        </div>
      </div>

      {/* Center: Global Search Bar */}
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A8374]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isBrand
                ? "Search creators, tools (Runway, Midjourney), or video styles..."
                : "Search active briefs, brands, or deliverables..."
            }
            className="w-full pl-9 pr-4 py-2 bg-[#F4F6F4] hover:bg-[#EFF2ED] focus:bg-white text-xs text-[#1C201A] placeholder-[#7A8374] rounded-xl border border-transparent focus:border-[#556B2F] focus:outline-hidden transition-all"
          />
        </div>
      </div>

      {/* Right Controls: Role Switcher, Notification Bell, Primary CTA, User Avatar */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick Role Switcher Pill */}
        <div className="hidden lg:flex items-center bg-[#F4F6F4] p-1 rounded-xl border border-[#E4E7E1]">
          <button
            onClick={() => onSwitchRole("brand")}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              isBrand
                ? "bg-white text-[#1C201A] shadow-xs border border-[#E4E7E1]"
                : "text-[#5A6255] hover:text-[#1C201A]"
            }`}
          >
            <span>🏢 Brand View</span>
          </button>
          <button
            onClick={() => onSwitchRole("creator")}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              !isBrand
                ? "bg-white text-[#1C201A] shadow-xs border border-[#E4E7E1]"
                : "text-[#5A6255] hover:text-[#1C201A]"
            }`}
          >
            <span>🎨 Creator View</span>
          </button>
        </div>

        {/* Dynamic Primary CTA Button */}
        <button
          onClick={onOpenPrimaryCta}
          className="px-3.5 sm:px-4 py-2 bg-[#556B2F] hover:bg-[#425524] text-white rounded-xl text-xs sm:text-sm font-semibold shadow-xs transition-all active:scale-95 flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>{isBrand ? "Publish Brief" : "Upload Work"}</span>
        </button>

        {/* Notification Bell with Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
            className="w-9 h-9 rounded-xl bg-[#F4F6F4] hover:bg-[#E9EFE2] text-[#1C201A] border border-[#E4E7E1] flex items-center justify-center relative transition-all"
            title="Notifications"
          >
            <Bell className="w-4 h-4 text-[#425524]" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#556B2F] text-white rounded-full text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl border border-[#E4E7E1] shadow-xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0F2EE] mb-3">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-[#1C201A] uppercase tracking-wider">
                    Notifications
                  </h4>
                  {unreadCount > 0 && (
                    <span className="text-[10px] bg-[#E9EFE2] text-[#35441E] font-bold px-1.5 py-0.2 rounded-full">
                      {unreadCount} New
                    </span>
                  )}
                </div>

                {unreadCount > 0 && (
                  <button
                    onClick={onMarkNotificationsRead}
                    className="text-[11px] text-[#556B2F] hover:underline font-medium flex items-center gap-1"
                  >
                    <CheckCheck className="w-3.5 h-3.5" />
                    Mark all read
                  </button>
                )}
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-3 rounded-xl border text-xs transition-colors ${
                      notif.read
                        ? "bg-[#F9FAF8] border-[#E4E7E1] text-[#5A6255]"
                        : "bg-[#F5F7F2] border-[#D6E2C8] text-[#1C201A] font-medium"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs text-[#1C201A]">
                        {notif.title}
                      </span>
                      <span className="text-[10px] text-[#7A8374]">{notif.time}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#5A6255]">
                      {notif.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Avatar & Menu Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2 p-1 rounded-xl hover:bg-[#F4F6F4] border border-transparent hover:border-[#E4E7E1] transition-all"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#556B2F]"
            />
            <ChevronDown className="w-3.5 h-3.5 text-[#7A8374] hidden sm:block" />
          </button>

          {/* User Menu Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl border border-[#E4E7E1] shadow-xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-2 border-b border-[#F0F2EE] mb-2">
                <div className="text-xs font-bold text-[#1C201A] truncate">{user.name}</div>
                <div className="text-[11px] text-[#7A8374] truncate">{user.email}</div>
                <div className="mt-1.5 inline-block text-[10px] font-bold bg-[#E9EFE2] text-[#35441E] px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Role: {isBrand ? "Brand / Agency" : "Content Creator"}
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <button
                  onClick={() => {
                    onSwitchRole(isBrand ? "creator" : "brand");
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#F4F6F4] text-[#1C201A] font-medium flex items-center justify-between"
                >
                  <span>Switch to {isBrand ? "Creator" : "Brand"} Persona</span>
                  <span className="text-[10px] text-[#556B2F] font-bold">Toggle</span>
                </button>

                <button
                  onClick={() => {
                    onOpenAuthModal();
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#F4F6F4] text-[#1C201A] font-medium flex items-center justify-between"
                >
                  <span>Switch Account / Sign Up</span>
                  <User className="w-3.5 h-3.5 text-[#7A8374]" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
