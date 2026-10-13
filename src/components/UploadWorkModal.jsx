import React, { useState } from "react";
import { X, UploadCloud, Sparkles, ShieldCheck, Check, Layers, Image as ImageIcon } from "lucide-react";

export default function UploadWorkModal({ isOpen, onClose, onUpload }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Social Reel");
  const [aspectRatio, setAspectRatio] = useState("9:16");
  const [duration, setDuration] = useState("0:15");
  const [promptSummary, setPromptSummary] = useState("");
  const [workflowNote, setWorkflowNote] = useState("");
  const [selectedTools, setSelectedTools] = useState(["Runway Gen-3", "Premiere"]);
  const [thumbnail, setThumbnail] = useState(
    "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80"
  );
  const [certified, setCertified] = useState(true);

  const availableTools = ["Runway Gen-3", "Midjourney v6", "ComfyUI", "Blender", "DaVinci Resolve", "Premiere", "After Effects", "Magnific AI"];

  const sampleThumbnails = [
    { label: "Vibrant Liquid Swirl", url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80" },
    { label: "Cyberpunk Rain City", url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80" },
    { label: "Luxury Glass Cosmetic", url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80" },
    { label: "Studio 3D Sneaker", url: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80" }
  ];

  const toggleTool = (tool) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter((t) => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newItem = {
      id: `p-${Date.now()}`,
      title,
      type,
      aspectRatio,
      duration,
      views: "1.2K",
      likes: "184",
      thumbnail,
      promptSummary: promptSummary || "Generative visual synthesis with custom camera motion trajectory.",
      toolsUsed: selectedTools,
      workflowNote: workflowNote || "Multi-stage human-in-the-loop post processing and optical flow stabilization."
    };

    onUpload(newItem);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white border border-[#E4E7E1] rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative">
        <div className="px-6 py-5 bg-[#556B2F] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <UploadCloud className="w-5 h-5 text-[#D6E2C8]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Upload New Work to Portfolio</h2>
              <p className="text-xs text-[#D6E2C8]">Showcase reels, motion loops, or design assets to prospective brand clients</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 space-y-5 bg-[#FAF8F5]">
          <div>
            <label className="block text-xs font-bold text-[#1C201A] mb-1.5">Piece Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Lumina: Botanical Drone Sequence"
              className="w-full px-3.5 py-2.5 bg-white rounded-xl text-sm border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1C201A] mb-1.5">Content Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-3 py-2 bg-white rounded-xl text-xs sm:text-sm border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
              >
                <option value="Social Reel">Social Reel</option>
                <option value="Cinematic Film">Cinematic Film</option>
                <option value="Animation">Animation</option>
                <option value="Graphic Design">Graphic Design</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C201A] mb-1.5">Aspect Ratio</label>
              <select
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value)}
                className="w-full px-3 py-2 bg-white rounded-xl text-xs sm:text-sm border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
              >
                <option value="9:16">9:16 Vertical</option>
                <option value="16:9">16:9 Widescreen</option>
                <option value="1:1">1:1 Square</option>
                <option value="4:5">4:5 Social</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C201A] mb-1.5">Duration</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="0:18"
                className="w-full px-3 py-2 bg-white rounded-xl text-xs sm:text-sm border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1C201A] mb-1.5">Visual Asset Thumbnail</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
              {sampleThumbnails.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setThumbnail(item.url)}
                  className={`cursor-pointer rounded-xl overflow-hidden border-2 relative transition-all ${
                    thumbnail === item.url ? "border-[#556B2F] ring-2 ring-[#556B2F]/30" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={item.url} alt={item.label} className="w-full h-16 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-black/60 text-white text-[9px] px-1 rounded">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1C201A] mb-1.5">Prompt & Architectural Concept</label>
            <textarea
              rows={2}
              value={promptSummary}
              onChange={(e) => setPromptSummary(e.target.value)}
              placeholder="Explain the visual prompt anchors and conditioning methodology..."
              className="w-full px-3.5 py-2 bg-white rounded-xl text-xs sm:text-sm border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1C201A] mb-1.5">Tools Applied</label>
            <div className="flex flex-wrap gap-1.5">
              {availableTools.map((t) => {
                const active = selectedTools.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleTool(t)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                      active ? "bg-[#556B2F] text-white border-[#556B2F]" : "bg-white text-[#5A6255] border-[#E4E7E1]"
                    }`}
                  >
                    {active ? `✓ ${t}` : `+ ${t}`}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1C201A] mb-1.5">Production Pipeline Technique Note</label>
            <textarea
              rows={2}
              value={workflowNote}
              onChange={(e) => setWorkflowNote(e.target.value)}
              placeholder="Detail your post-processing: upscaling, color grading, DaVinci audio mastering..."
              className="w-full px-3.5 py-2 bg-white rounded-xl text-xs sm:text-sm border border-[#E4E7E1] focus:border-[#556B2F] focus:outline-hidden"
            />
          </div>

          <label className="flex items-start gap-2.5 bg-[#E9EFE2] p-3 rounded-xl border border-[#D6E2C8] cursor-pointer">
            <input
              type="checkbox"
              checked={certified}
              onChange={(e) => setCertified(e.target.checked)}
              className="mt-0.5 rounded text-[#556B2F] focus:ring-[#556B2F]"
            />
            <span className="text-xs text-[#35441E] leading-relaxed">
              <strong>Synthalent Creator Trust Oath:</strong> I certify that this submission was created using licensed or commercial-safe AI models with human-in-the-loop post processing, free from copyright infringements.
            </span>
          </label>

          <div className="pt-3 border-t border-[#E4E7E1] flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-white border border-[#D8DDCF] text-xs font-semibold rounded-xl text-[#1C201A]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!certified || !title.trim()}
              className="px-5 py-2 bg-[#556B2F] hover:bg-[#425524] disabled:opacity-50 text-white text-xs font-semibold rounded-xl transition-all shadow-xs"
            >
              Publish to My Portfolio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
