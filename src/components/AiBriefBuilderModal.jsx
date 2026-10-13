import React, { useState } from "react";
import { X, Sparkles, Wand2, Shield, CheckCircle, ArrowRight, Video, Film, Image as ImageIcon, Box, RefreshCw, Layers, DollarSign, Calendar, Sliders } from "lucide-react";
import { AI_BRIEF_PRESETS } from "../data/mockData";

export default function AiBriefBuilderModal({ isOpen, onClose, onPublishBrief, initialPreset = null }) {
  const [roughPrompt, setRoughPrompt] = useState(
    initialPreset?.prompt || "Need a vibrant 9:16 product reel for an organic ceremonial matcha brand"
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);

  // Form Fields
  const [title, setTitle] = useState(initialPreset?.structured?.title || "Vibrant Ceremonial Matcha 9:16 Social Reel Campaign");
  const [objective, setObjective] = useState(
    initialPreset?.structured?.objective ||
    "Produce 2 energetic, sensorially immersive 9:16 vertical reels showing our organic ceremonial matcha whisking and cold milk pour for TikTok & Instagram ads."
  );
  const [contentType, setContentType] = useState(initialPreset?.structured?.contentType || "Social Reel");
  const [aspectRatio, setAspectRatio] = useState(initialPreset?.structured?.aspectRatio || "9:16");
  const [licensingTier, setLicensingTier] = useState(initialPreset?.structured?.licensingTier || "Standard Commercial");
  const [budget, setBudget] = useState(initialPreset?.structured?.budget || "$2,800");
  const [deadline, setDeadline] = useState("Oct 28, 2026");
  const [deliverablesCount, setDeliverablesCount] = useState(initialPreset?.structured?.deliverables || 2);
  const [aesthetic, setAesthetic] = useState(
    initialPreset?.structured?.aesthetic || "Wabi-sabi minimalist kitchen, natural warm morning sunlight, macro liquid swirls, ASMR sound layering"
  );
  const [promptSeed, setPromptSeed] = useState(
    "Top-down aesthetic matcha whisking, velvety emerald foam rising, slow motion milk pour forming clouds, 9:16 vertical 4k"
  );
  const [requiredTools, setRequiredTools] = useState(["Runway Gen-3", "Premiere", "After Effects"]);

  const availableTools = ["Runway Gen-3", "Midjourney v6", "ComfyUI", "Blender", "DaVinci Resolve", "Premiere", "After Effects", "Magnific AI"];

  const handleSelectPreset = (preset) => {
    setRoughPrompt(preset.prompt);
    applyPresetData(preset);
  };

  const applyPresetData = (preset) => {
    setTitle(preset.structured.title);
    setObjective(preset.structured.objective);
    setContentType(preset.structured.contentType);
    setAspectRatio(preset.structured.aspectRatio);
    setLicensingTier(preset.structured.licensingTier);
    setBudget(preset.structured.budget);
    setDeliverablesCount(preset.structured.deliverables);
    setAesthetic(preset.structured.aesthetic);
    if (preset.structured.suggestedTools) {
      setRequiredTools(preset.structured.suggestedTools);
    }
  };

  const handleAutoStructure = () => {
    if (!roughPrompt.trim()) return;
    setIsGenerating(true);
    setGenerationStep(1);

    setTimeout(() => {
      setGenerationStep(2);
    }, 500);

    setTimeout(() => {
      setGenerationStep(3);
    }, 1100);

    setTimeout(() => {
      // Find matching preset or intelligently infer
      const matched = AI_BRIEF_PRESETS.find(
        (p) => roughPrompt.toLowerCase().includes(p.label.toLowerCase()) || p.prompt.toLowerCase().includes(roughPrompt.toLowerCase().slice(0, 15))
      );

      if (matched) {
        applyPresetData(matched);
      } else {
        // Intelligently infer based on prompt keywords
        const isWidescreen = roughPrompt.toLowerCase().includes("16:9") || roughPrompt.toLowerCase().includes("film") || roughPrompt.toLowerCase().includes("cinematic");
        const isAnimation = roughPrompt.toLowerCase().includes("animat") || roughPrompt.toLowerCase().includes("anime");
        const isDesign = roughPrompt.toLowerCase().includes("graphic") || roughPrompt.toLowerCase().includes("brand") || roughPrompt.toLowerCase().includes("packaging");

        if (isDesign) {
          setContentType("Graphic Design");
          setAspectRatio("1:1");
          setTitle(`Visual Identity: ${roughPrompt.slice(0, 36)}`);
          setLicensingTier("Exclusive Buyout");
          setBudget("$3,500");
          setAesthetic("Minimalist luxury editorial aesthetic, clean studio lighting, 300 DPI vector assets");
        } else if (isAnimation) {
          setContentType("Animation");
          setAspectRatio(isWidescreen ? "16:9" : "9:16");
          setTitle(`Animated Narrative: ${roughPrompt.slice(0, 36)}`);
          setLicensingTier("Standard Commercial");
          setBudget("$4,000");
          setAesthetic("Stylized 3D anime cel-shading, dynamic particle lighting, cohesive character consistency");
        } else if (isWidescreen) {
          setContentType("Cinematic Film");
          setAspectRatio("16:9");
          setTitle(`Cinematic Commercial: ${roughPrompt.slice(0, 36)}`);
          setLicensingTier("Exclusive Buyout");
          setBudget("$6,000");
          setAesthetic("Anamorphic 2.39:1 widescreen, natural cinematic grade, hyper-realistic atmospheric depth");
        } else {
          setContentType("Social Reel");
          setAspectRatio("9:16");
          setTitle(`Viral Short Campaign: ${roughPrompt.slice(0, 36)}`);
          setLicensingTier("Standard Commercial");
          setBudget("$2,500");
          setAesthetic("High-retention 3s opening hook, vibrant natural lighting, kinetic sound design at -14 LUFS");
        }

        setObjective(`Produce high-converting commercial deliverables addressing: "${roughPrompt}". Structured for high engagement and client brand guidelines.`);
        setPromptSeed(`${roughPrompt}, photorealistic, studio lighting, hyper-detailed 4k commercial render`);
      }

      setIsGenerating(false);
      setGenerationStep(0);
    }, 1600);
  };

  const toggleTool = (tool) => {
    if (requiredTools.includes(tool)) {
      setRequiredTools(requiredTools.filter((t) => t !== tool));
    } else {
      setRequiredTools([...requiredTools, tool]);
    }
  };

  const handlePublish = (e) => {
    e.preventDefault();
    const newBrief = {
      id: `brief-${Date.now()}`,
      brandName: "Acme Creative Studio",
      brandLogo: "✨",
      title,
      objective,
      contentType,
      aspectRatio,
      licensingTier,
      licensingDescription:
        licensingTier === "Exclusive Buyout"
          ? "Full perpetual exclusive buyout across all digital & broadcast channels."
          : licensingTier === "Standard Commercial"
          ? "12-month commercial paid ads and organic social promotion."
          : "Editorial non-paid organic social usage only.",
      budget,
      deadline,
      deliverablesCount: Number(deliverablesCount),
      status: "Accepting Pitches",
      requiredTools,
      safetyTier: "Commercial Safe (C2PA Verified)",
      pitchesCount: 0,
      tags: [`${aspectRatio}`, contentType, "AI Brief Builder"],
      aestheticDirection: aesthetic,
      promptSeed
    };

    onPublishBrief(newBrief);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white border border-[#E4E7E1] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative">
        {/* Modal Top Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-[#2C381A] to-[#3B4D28] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#556B2F] flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-5 h-5 text-[#D6E2C8]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Brand Brief Definition Workspace
                <span className="text-[10px] font-semibold bg-[#E9EFE2] text-[#35441E] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  AI-Assisted
                </span>
              </h2>
              <p className="text-xs text-[#D6E2C8]">
                Define your creative specs, commercial licensing tier, and let AI structure the technical parameters.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8 bg-[#FAF8F5]">
          {/* 1. MAGIC AI-ASSISTED BRIEF BUILDER CARD */}
          <div className="bg-white rounded-2xl border-2 border-[#556B2F]/30 p-5 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E9EFE2]/50 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Wand2 className="w-4 h-4 text-[#556B2F]" />
                <span className="text-xs font-bold text-[#1C201A] uppercase tracking-wider">
                  AI-Assisted Brief Builder Feature
                </span>
              </div>
              <span className="text-[11px] text-[#556B2F] font-semibold bg-[#E9EFE2] px-2 py-0.5 rounded-md">
                1-Sentence Auto Structuring
              </span>
            </div>

            <p className="text-xs text-[#5A6255] mb-3">
              Type a raw creative concept or idea. Our AI will analyze your intent, configure recommended aspect ratios, licensing tiers, budget ranges, and production pipeline specs.
            </p>

            {/* Input Box */}
            <div className="flex flex-col sm:flex-row items-stretch gap-2 mb-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={roughPrompt}
                  onChange={(e) => setRoughPrompt(e.target.value)}
                  placeholder="e.g. Need a vibrant 9:16 product reel for an organic ceremonial matcha brand..."
                  className="w-full px-4 py-2.5 bg-[#F4F6F4] text-xs sm:text-sm text-[#1C201A] rounded-xl border border-[#D8DDCF] focus:border-[#556B2F] focus:bg-white focus:outline-hidden transition-all"
                />
              </div>

              <button
                type="button"
                onClick={handleAutoStructure}
                disabled={isGenerating || !roughPrompt.trim()}
                className="px-5 py-2.5 bg-[#556B2F] hover:bg-[#425524] disabled:opacity-50 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#D6E2C8]" />
                    <span>Auto-Structuring...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#D6E2C8]" />
                    <span>Auto-Structure Brief</span>
                  </>
                )}
              </button>
            </div>

            {/* AI Generation Step Indicator */}
            {isGenerating && (
              <div className="p-3 bg-[#E9EFE2] rounded-xl text-xs text-[#35441E] flex items-center gap-2 animate-pulse mb-3">
                <Sparkles className="w-4 h-4 text-[#556B2F]" />
                <span>
                  {generationStep === 1 && "Step 1: Parsing creative intent & style anchors..."}
                  {generationStep === 2 && "Step 2: Assigning optimal aspect ratios & production pipeline..."}
                  {generationStep === 3 && "Step 3: Calculating commercial licensing & market rate benchmarks..."}
                </span>
              </div>
            )}

            {/* Quick Inspiration Chips */}
            <div>
              <div className="text-[11px] font-semibold text-[#7A8374] mb-1.5">
                Or try one of these instant brief templates:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {AI_BRIEF_PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    className="px-2.5 py-1 bg-[#F4F6F4] hover:bg-[#E9EFE2] hover:text-[#35441E] text-[#5A6255] rounded-lg text-xs font-medium border border-[#E4E7E1] transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 2. STRUCTURED BRIEF FORM WORKSPACE */}
          <form id="briefForm" onSubmit={handlePublish} className="bg-white rounded-2xl border border-[#E4E7E1] p-6 shadow-xs space-y-6">
            <h3 className="text-sm font-bold text-[#1C201A] uppercase tracking-wider flex items-center gap-2 border-b border-[#F0F2EE] pb-3">
              <Sliders className="w-4 h-4 text-[#556B2F]" />
              Structured Campaign Specifications
            </h3>

            {/* Campaign Title */}
            <div>
              <label className="block text-xs font-bold text-[#1C201A] mb-1.5">
                Campaign Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Vibrant Ceremonial Matcha 9:16 Social Reel Campaign"
                className="w-full px-3.5 py-2.5 bg-[#F4F6F4] rounded-xl text-sm border border-[#E4E7E1] focus:border-[#556B2F] focus:bg-white focus:outline-hidden"
              />
            </div>

            {/* Objective */}
            <div>
              <label className="block text-xs font-bold text-[#1C201A] mb-1.5">
                Campaign Creative Objective & Scope *
              </label>
              <textarea
                rows={3}
                required
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                placeholder="Detail what the creator should deliver, key hooks, pacing, and visual targets..."
                className="w-full px-3.5 py-2.5 bg-[#F4F6F4] rounded-xl text-xs sm:text-sm border border-[#E4E7E1] focus:border-[#556B2F] focus:bg-white focus:outline-hidden leading-relaxed"
              />
            </div>

            {/* Content Type & Aspect Ratio Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Content Type */}
              <div>
                <label className="block text-xs font-bold text-[#1C201A] mb-2">
                  Content Type *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "Social Reel", icon: Video, desc: "TikTok / Reels" },
                    { id: "Cinematic Film", icon: Film, desc: "16:9 Widescreen" },
                    { id: "Animation", icon: Box, desc: "3D & Anime Loops" },
                    { id: "Graphic Design", icon: ImageIcon, desc: "Identity & Key Art" }
                  ].map((ct) => {
                    const active = contentType === ct.id;
                    const Icon = ct.icon;
                    return (
                      <button
                        key={ct.id}
                        type="button"
                        onClick={() => setContentType(ct.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          active
                            ? "bg-[#E9EFE2] border-[#556B2F] text-[#35441E] shadow-2xs"
                            : "bg-[#F4F6F4] border-[#E4E7E1] text-[#5A6255] hover:bg-[#EFF2ED]"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`w-4 h-4 ${active ? "text-[#556B2F]" : "text-[#7A8374]"}`} />
                          <span className="text-xs font-bold">{ct.id}</span>
                        </div>
                        <div className="text-[10px] text-[#7A8374]">{ct.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Format & Aspect Ratio Selectors */}
              <div>
                <label className="block text-xs font-bold text-[#1C201A] mb-2">
                  Format & Aspect Ratio *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { ratio: "9:16", label: "Vertical", box: "w-4 h-7" },
                    { ratio: "16:9", label: "Widescreen", box: "w-7 h-4" },
                    { ratio: "1:1", label: "Square", box: "w-5 h-5" }
                  ].map((ar) => {
                    const active = aspectRatio === ar.ratio;
                    return (
                      <button
                        key={ar.ratio}
                        type="button"
                        onClick={() => setAspectRatio(ar.ratio)}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all ${
                          active
                            ? "bg-[#E9EFE2] border-[#556B2F] text-[#35441E] shadow-2xs"
                            : "bg-[#F4F6F4] border-[#E4E7E1] text-[#5A6255] hover:bg-[#EFF2ED]"
                        }`}
                      >
                        <div className={`border-2 ${active ? "border-[#556B2F] bg-[#556B2F]/20" : "border-[#7A8374]"} rounded-xs ${ar.box} mb-1.5`} />
                        <span className="text-xs font-bold">{ar.ratio}</span>
                        <span className="text-[10px] text-[#7A8374]">{ar.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Commercial-Use Licensing Tiers */}
            <div>
              <label className="block text-xs font-bold text-[#1C201A] mb-2">
                Commercial-Use Licensing Tier *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  {
                    tier: "Exclusive Buyout",
                    title: "Exclusive Buyout",
                    badge: "Highest Reach",
                    desc: "Perpetual worldwide exclusive rights across paid ads, web, TV, DOOH, and all brand channels."
                  },
                  {
                    tier: "Standard Commercial",
                    title: "Standard Commercial",
                    badge: "Most Popular",
                    desc: "12-month commercial paid digital ads + organic social promotion across Instagram, TikTok, and YouTube."
                  },
                  {
                    tier: "Editorial",
                    title: "Editorial / Organic Only",
                    badge: "Non-Paid",
                    desc: "Non-commercial or organic brand feeds only. Paid promotion not permitted."
                  }
                ].map((tierItem) => {
                  const active = licensingTier === tierItem.tier;
                  return (
                    <button
                      key={tierItem.tier}
                      type="button"
                      onClick={() => setLicensingTier(tierItem.tier)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        active
                          ? "bg-[#E9EFE2] border-[#556B2F] shadow-2xs ring-1 ring-[#556B2F]"
                          : "bg-[#F4F6F4] border-[#E4E7E1] hover:bg-[#EFF2ED]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-[#1C201A]">{tierItem.title}</span>
                        <span className="text-[9px] font-semibold bg-white border border-[#D8DDCF] px-1.5 py-0.5 rounded text-[#556B2F]">
                          {tierItem.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#5A6255] leading-relaxed">
                        {tierItem.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget & Deliverables Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1C201A] mb-1.5">
                  Campaign Budget *
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7A8374]" />
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="$2,500"
                    className="w-full pl-9 pr-3 py-2 bg-[#F4F6F4] rounded-xl text-xs sm:text-sm font-semibold border border-[#E4E7E1] focus:border-[#556B2F] focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C201A] mb-1.5">
                  Deliverables Count
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={deliverablesCount}
                  onChange={(e) => setDeliverablesCount(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F4F6F4] rounded-xl text-xs sm:text-sm font-semibold border border-[#E4E7E1] focus:border-[#556B2F] focus:bg-white focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C201A] mb-1.5">
                  Target Deadline
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7A8374]" />
                  <input
                    type="text"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-[#F4F6F4] rounded-xl text-xs sm:text-sm border border-[#E4E7E1] focus:border-[#556B2F] focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>
            </div>

            {/* Required Creator Tools Stack */}
            <div>
              <label className="block text-xs font-bold text-[#1C201A] mb-1.5">
                Preferred Creator AI Tools & Pipeline
              </label>
              <div className="flex flex-wrap gap-2">
                {availableTools.map((tool) => {
                  const selected = requiredTools.includes(tool);
                  return (
                    <button
                      key={tool}
                      type="button"
                      onClick={() => toggleTool(tool)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        selected
                          ? "bg-[#556B2F] text-white border-[#556B2F]"
                          : "bg-[#F4F6F4] text-[#5A6255] border-[#E4E7E1] hover:bg-[#EFF2ED]"
                      }`}
                    >
                      {selected ? `✓ ${tool}` : `+ ${tool}`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Aesthetic Direction */}
            <div>
              <label className="block text-xs font-bold text-[#1C201A] mb-1.5">
                Visual Aesthetic & Style Notes
              </label>
              <input
                type="text"
                value={aesthetic}
                onChange={(e) => setAesthetic(e.target.value)}
                placeholder="e.g. Wabi-sabi minimalist kitchen, natural warm morning sunlight, macro liquid swirls"
                className="w-full px-3.5 py-2.5 bg-[#F4F6F4] rounded-xl text-xs sm:text-sm border border-[#E4E7E1] focus:border-[#556B2F] focus:bg-white focus:outline-hidden"
              />
            </div>
          </form>
        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#E4E7E1] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#556B2F]">
            <Shield className="w-4 h-4" />
            <span className="font-medium">100% Escrow Protected & C2PA Provenance Certified</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-[#D8DDCF] bg-white hover:bg-[#F4F6F4] text-[#1C201A] rounded-xl text-xs font-semibold transition-all"
            >
              Cancel
            </button>

            <button
              type="submit"
              form="briefForm"
              className="px-6 py-2.5 bg-[#556B2F] hover:bg-[#425524] text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95 flex items-center gap-2"
            >
              <span>Publish Brief to Marketplace</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
