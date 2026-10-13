import React, { useState } from "react";
import { X, Sparkles, Building2, Palette, ShieldCheck, ArrowRight, Lock, Mail, User, Globe, DollarSign, CheckCircle2 } from "lucide-react";

export default function AuthModal({ isOpen, onClose, onAuthSuccess, initialTab = "signup" }) {
  const [activeTab, setActiveTab] = useState(initialTab); // "login" | "signup"
  const [selectedRole, setSelectedRole] = useState("brand"); // "creator" | "brand"

  // Creator Sign Up Fields
  const [creatorName, setCreatorName] = useState("Elena Vance");
  const [creatorHandle, setCreatorHandle] = useState("@elenavance_ai");
  const [creatorSpecialty, setCreatorSpecialty] = useState("AI Filmmaking");
  const [creatorTool, setCreatorTool] = useState("Runway Gen-3");
  const [creatorEmail, setCreatorEmail] = useState("elena@synthreel.studio");
  const [creatorPassword, setCreatorPassword] = useState("••••••••••••");

  // Brand Sign Up Fields
  const [brandName, setBrandName] = useState("Acme Creative Studio");
  const [brandIndustry, setBrandIndustry] = useState("Lifestyle & DTC");
  const [brandBudget, setBrandBudget] = useState("$5,000 - $15,000 / mo");
  const [brandEmail, setBrandEmail] = useState("creative@acmestudios.com");
  const [brandPassword, setBrandPassword] = useState("••••••••••••");

  // Login Fields
  const [loginEmail, setLoginEmail] = useState("creative@acmestudios.com");
  const [loginPassword, setLoginPassword] = useState("••••••••••••");
  const [loginRole, setLoginRole] = useState("brand");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "signup") {
      const userData =
        selectedRole === "creator"
          ? {
              role: "creator",
              name: creatorName,
              handle: creatorHandle,
              specialty: creatorSpecialty,
              email: creatorEmail,
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
            }
          : {
              role: "brand",
              name: brandName,
              industry: brandIndustry,
              budget: brandBudget,
              email: brandEmail,
              avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
            };
      onAuthSuccess(userData);
    } else {
      const userData =
        loginRole === "creator"
          ? {
              role: "creator",
              name: "Elena Vance",
              handle: "@elenavance_ai",
              email: loginEmail,
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
            }
          : {
              role: "brand",
              name: "Acme Creative Studio",
              industry: "Lifestyle & DTC",
              email: loginEmail,
              avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
            };
      onAuthSuccess(userData);
    }
    onClose();
  };

  const handleQuickDemo = (role) => {
    if (role === "creator") {
      onAuthSuccess({
        role: "creator",
        name: "Elena Vance",
        handle: "@elenavance_ai",
        specialty: "AI Filmmaking",
        email: "elena@synthreel.studio",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
      });
    } else {
      onAuthSuccess({
        role: "brand",
        name: "Acme Creative Studio",
        industry: "Lifestyle & DTC",
        email: "creative@acmestudios.com",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
      });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white border border-[#E4E7E1] rounded-3xl max-w-xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative">
        {/* Top Header */}
        <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-[#E4E7E1] bg-[#FAF8F5] relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white hover:bg-[#F4F6F4] border border-[#E4E7E1] flex items-center justify-center text-[#5A6255] transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-xl bg-[#556B2F] flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-4 h-4 text-[#D6E2C8]" />
            </div>
            <span className="font-extrabold text-base tracking-tight text-[#1C201A]">
              SYNTHALENT
            </span>
          </div>

          <h2 className="text-xl font-bold text-[#1C201A]">
            {activeTab === "signup" ? "Create Your Synthalent Account" : "Welcome Back to Synthalent"}
          </h2>
          <p className="text-xs text-[#5A6255] mt-0.5">
            The AI-Powered Marketplace for World-Class Filmmakers, Animators & Brands.
          </p>

          {/* Dual Tabs (Login / Sign Up) */}
          <div className="flex items-center gap-2 mt-4 bg-[#E7EAE6] p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "signup"
                  ? "bg-white text-[#1C201A] shadow-xs"
                  : "text-[#5A6255] hover:text-[#1C201A]"
              }`}
            >
              Sign Up (New Account)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "login"
                  ? "bg-white text-[#1C201A] shadow-xs"
                  : "text-[#5A6255] hover:text-[#1C201A]"
              }`}
            >
              Log In (Existing Account)
            </button>
          </div>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:px-8 overflow-y-auto flex-1 space-y-5 bg-white">
          {activeTab === "signup" ? (
            <>
              {/* INTERACTIVE ROLE SELECTION TOGGLE */}
              <div>
                <label className="block text-xs font-bold text-[#1C201A] uppercase tracking-wider mb-2">
                  Choose Your Account Type *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Content Creator Toggle Card */}
                  <div
                    onClick={() => setSelectedRole("creator")}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedRole === "creator"
                        ? "bg-[#E9EFE2] border-[#556B2F] ring-1 ring-[#556B2F]"
                        : "bg-[#F4F6F4] border-[#E4E7E1] hover:bg-[#EFF2ED]"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#D6E2C8] flex items-center justify-center text-[#556B2F]">
                        <Palette className="w-5 h-5" />
                      </div>
                      {selectedRole === "creator" && (
                        <CheckCircle2 className="w-5 h-5 text-[#556B2F]" />
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-[#1C201A]">Content Creator</h3>
                    <p className="text-[11px] text-[#5A6255] mt-1 leading-snug">
                      Filmmakers, Animators, Reel Creators, and Generative Designers.
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      <span className="text-[9px] font-semibold bg-white/80 px-1.5 py-0.5 rounded text-[#35441E]">
                        Upload Portfolio
                      </span>
                      <span className="text-[9px] font-semibold bg-white/80 px-1.5 py-0.5 rounded text-[#35441E]">
                        Pitch on Briefs
                      </span>
                    </div>
                  </div>

                  {/* Brand / Agency Toggle Card */}
                  <div
                    onClick={() => setSelectedRole("brand")}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedRole === "brand"
                        ? "bg-[#E9EFE2] border-[#556B2F] ring-1 ring-[#556B2F]"
                        : "bg-[#F4F6F4] border-[#E4E7E1] hover:bg-[#EFF2ED]"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#D6E2C8] flex items-center justify-center text-[#556B2F]">
                        <Building2 className="w-5 h-5" />
                      </div>
                      {selectedRole === "brand" && (
                        <CheckCircle2 className="w-5 h-5 text-[#556B2F]" />
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-[#1C201A]">Brand / Agency</h3>
                    <p className="text-[11px] text-[#5A6255] mt-1 leading-snug">
                      Clients publishing briefs, hiring talent, and reviewing deliveries.
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      <span className="text-[9px] font-semibold bg-white/80 px-1.5 py-0.5 rounded text-[#35441E]">
                        AI Brief Builder
                      </span>
                      <span className="text-[9px] font-semibold bg-white/80 px-1.5 py-0.5 rounded text-[#35441E]">
                        Verified Escrow
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* DYNAMIC FORM FIELDS BASED ON ROLE */}
              {selectedRole === "creator" ? (
                <div className="space-y-3.5 bg-[#FAF8F5] p-4 rounded-2xl border border-[#EBE7DF]">
                  <div className="text-xs font-bold text-[#556B2F] flex items-center gap-1.5 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Creator Profile Details</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#1C201A] mb-1">
                        Full Name / Studio Name
                      </label>
                      <input
                        type="text"
                        required
                        value={creatorName}
                        onChange={(e) => setCreatorName(e.target.value)}
                        placeholder="Elena Vance"
                        className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#1C201A] mb-1">
                        Creator Handle
                      </label>
                      <input
                        type="text"
                        required
                        value={creatorHandle}
                        onChange={(e) => setCreatorHandle(e.target.value)}
                        placeholder="@elenavance_ai"
                        className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#1C201A] mb-1">
                        Primary Specialization
                      </label>
                      <select
                        value={creatorSpecialty}
                        onChange={(e) => setCreatorSpecialty(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
                      >
                        <option value="AI Filmmaking">AI Filmmaking (Cinematic)</option>
                        <option value="Social Reels">Social Reels & Shorts (9:16)</option>
                        <option value="Animation">Animation & 3D Loops</option>
                        <option value="Brand Identity">Brand Identity & Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#1C201A] mb-1">
                        Core AI Engine of Choice
                      </label>
                      <select
                        value={creatorTool}
                        onChange={(e) => setCreatorTool(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
                      >
                        <option value="Runway Gen-3">Runway Gen-3 Alpha</option>
                        <option value="Midjourney v6">Midjourney v6.1</option>
                        <option value="ComfyUI">ComfyUI / SDXL Flux</option>
                        <option value="Blender">Blender 3D + Generative</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#1C201A] mb-1">
                      Creator Email
                    </label>
                    <input
                      type="email"
                      required
                      value={creatorEmail}
                      onChange={(e) => setCreatorEmail(e.target.value)}
                      placeholder="elena@synthreel.studio"
                      className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-3.5 bg-[#FAF8F5] p-4 rounded-2xl border border-[#EBE7DF]">
                  <div className="text-xs font-bold text-[#556B2F] flex items-center gap-1.5 uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Brand / Agency Details</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#1C201A] mb-1">
                        Brand / Agency Name
                      </label>
                      <input
                        type="text"
                        required
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="Acme Creative Studio"
                        className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#1C201A] mb-1">
                        Industry Vertical
                      </label>
                      <select
                        value={brandIndustry}
                        onChange={(e) => setBrandIndustry(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
                      >
                        <option value="Lifestyle & DTC">Lifestyle & DTC</option>
                        <option value="Fashion & Luxury">Fashion & Luxury</option>
                        <option value="Automotive & Tech">Automotive & Tech</option>
                        <option value="Beverage & Food">Beverage & Food</option>
                        <option value="Creative Agency">Creative Agency</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#1C201A] mb-1">
                        Typical Monthly Content Spend
                      </label>
                      <select
                        value={brandBudget}
                        onChange={(e) => setBrandBudget(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
                      >
                        <option value="$2,000 - $5,000 / mo">$2,000 - $5,000 / mo</option>
                        <option value="$5,000 - $15,000 / mo">$5,000 - $15,000 / mo</option>
                        <option value="$15,000+ / mo">$15,000+ / mo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#1C201A] mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={brandEmail}
                        onChange={(e) => setBrandEmail(e.target.value)}
                        placeholder="creative@acmestudios.com"
                        className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* LOGIN TAB */
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1C201A] mb-1.5">
                  Select Role to Sign In As
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setLoginRole("brand")}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      loginRole === "brand"
                        ? "bg-[#E9EFE2] border-[#556B2F] text-[#35441E] font-bold"
                        : "bg-[#F4F6F4] border-[#E4E7E1] text-[#5A6255]"
                    }`}
                  >
                    🏢 Brand / Agency
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoginRole("creator")}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      loginRole === "creator"
                        ? "bg-[#E9EFE2] border-[#556B2F] text-[#35441E] font-bold"
                        : "bg-[#F4F6F4] border-[#E4E7E1] text-[#5A6255]"
                    }`}
                  >
                    🎨 Content Creator
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C201A] mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7A8374]" />
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-[#F4F6F4] rounded-xl text-xs sm:text-sm border border-[#E4E7E1] focus:border-[#556B2F] focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C201A] mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7A8374]" />
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-[#F4F6F4] rounded-xl text-xs sm:text-sm border border-[#E4E7E1] focus:border-[#556B2F] focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>
            </div>
          )}

          {/* PRIMARY OLIVE-GREEN ACTION BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-[#556B2F] hover:bg-[#425524] text-white rounded-xl text-sm font-bold transition-all shadow-sm active:scale-98 flex items-center justify-center gap-2 mt-4"
          >
            <span>
              {activeTab === "signup"
                ? "Create Account & Enter Marketplace"
                : `Log In as ${loginRole === "brand" ? "Brand" : "Creator"}`}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Quick Demo Shortcuts for Testing */}
          <div className="pt-3 border-t border-[#F0F2EE]">
            <div className="text-[11px] font-semibold text-[#7A8374] text-center mb-2">
              Instant 1-Click Demo Login:
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleQuickDemo("brand")}
                className="flex-1 py-1.5 px-2 bg-[#F4F6F4] hover:bg-[#E9EFE2] text-[#35441E] rounded-lg text-xs font-semibold border border-[#E4E7E1] transition-all"
              >
                🏢 Enter as Brand
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemo("creator")}
                className="flex-1 py-1.5 px-2 bg-[#F4F6F4] hover:bg-[#E9EFE2] text-[#35441E] rounded-lg text-xs font-semibold border border-[#E4E7E1] transition-all"
              >
                🎨 Enter as Creator
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
