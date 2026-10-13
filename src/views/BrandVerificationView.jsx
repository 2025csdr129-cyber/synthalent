import React, { useState } from "react";
import { ShieldCheck, Lock, CheckCircle2, AlertCircle, FileCheck, Search, Sparkles, RefreshCw, Cpu, Layers } from "lucide-react";
import { VERIFICATION_STANDARDS } from "../data/mockData";

export default function BrandVerificationView() {
  const [testPrompt, setTestPrompt] = useState(
    "Cinematic commercial product shot of ceramic matcha bowl with natural dappled morning sunlight"
  );
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState({
    scanned: true,
    score: 99.4,
    ipClearance: "Passed - Safe for Global Broadcast",
    c2paHash: "0x8f2a...c491e (C2PA v2.1 Signed)",
    watermarkDetection: "Clean - No Synthetic Hallmarks Detected",
    humanInterventionScore: "Verified High (Human-in-the-loop Editing)"
  });

  const handleRunScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        scanned: true,
        score: Math.floor(Math.random() * 3 + 97) + 0.2,
        ipClearance: "Passed - Safe for Global Broadcast & Paid Media",
        c2paHash: `0x${Math.random().toString(16).substring(2, 8)}...${Math.random().toString(16).substring(2, 7)} (C2PA v2.1 Signed)`,
        watermarkDetection: "Clean - No Synthetic Hallmarks Detected",
        humanInterventionScore: "Verified High (Color Graded & Edited in DaVinci Resolve)"
      });
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-[#E4E7E1] shadow-2xs">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-[#E9EFE2] text-[#556B2F] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1C201A]">
              Synthalent Verification & Trust Center
            </h2>
            <p className="text-xs text-[#5A6255]">
              Enterprise-grade AI compliance protocols ensuring safe commercial use, model provenance, and IP integrity.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Protocol Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {VERIFICATION_STANDARDS.map((std) => (
          <div
            key={std.id}
            className="bg-white rounded-2xl border border-[#E4E7E1] p-5 shadow-2xs space-y-2 hover:border-[#B9CFA5] transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#35441E] bg-[#E9EFE2] px-2.5 py-1 rounded-lg border border-[#D6E2C8] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#556B2F]" />
                {std.badge}
              </span>
              <span className="text-[11px] font-mono font-semibold text-[#556B2F]">
                {std.status}
              </span>
            </div>

            <h3 className="font-bold text-sm text-[#1C201A] pt-1">{std.title}</h3>
            <p className="text-xs text-[#5A6255] leading-relaxed">
              {std.description}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive AI Compliance & Provenance Scanner Sandbox */}
      <div className="bg-white rounded-2xl border-2 border-[#556B2F]/20 p-6 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#556B2F]" />
            <h3 className="font-bold text-sm text-[#1C201A] uppercase tracking-wider">
              Interactive Creative Compliance & Provenance Scanner
            </h3>
          </div>
          <span className="text-xs font-bold text-[#556B2F] bg-[#E9EFE2] px-2.5 py-0.5 rounded-full">
            Live Sandbox
          </span>
        </div>

        <p className="text-xs text-[#5A6255]">
          Audit any generation prompt or asset description against Synthalent’s global trademark collision database and C2PA cryptographic authenticity standard.
        </p>

        {/* Prompt Input & Scan Action */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={testPrompt}
            onChange={(e) => setTestPrompt(e.target.value)}
            placeholder="Type prompt to test for copyright or trademark artifacts..."
            className="flex-1 px-4 py-2.5 bg-[#F4F6F4] text-xs sm:text-sm text-[#1C201A] rounded-xl border border-[#D8DDCF] focus:border-[#556B2F] focus:outline-hidden"
          />
          <button
            onClick={handleRunScan}
            disabled={isScanning || !testPrompt.trim()}
            className="px-5 py-2.5 bg-[#556B2F] hover:bg-[#425524] disabled:opacity-50 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center justify-center gap-2"
          >
            {isScanning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Running Compliance Audit...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Audit Asset Compliance</span>
              </>
            )}
          </button>
        </div>

        {/* Scan Results Card */}
        {scanResult.scanned && (
          <div className="bg-[#FAF8F5] border border-[#EBE7DF] rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EBE7DF]">
              <div>
                <span className="text-[10px] font-bold text-[#7A8374] uppercase tracking-wider">
                  Audit Verdict
                </span>
                <div className="text-base font-bold text-[#2C381A] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#556B2F]" />
                  <span>Commercial Ready — Cleared for Worldwide Ads</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-bold text-[#7A8374] uppercase tracking-wider">
                  Safety Rating
                </span>
                <div className="text-xl font-black text-[#556B2F]">
                  {scanResult.score}%
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3 rounded-xl border border-[#E4E7E1]">
                <span className="text-[#7A8374] font-medium block text-[11px]">IP & Trademark Clearance</span>
                <span className="font-bold text-[#1C201A]">{scanResult.ipClearance}</span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#E4E7E1]">
                <span className="text-[#7A8374] font-medium block text-[11px]">C2PA Metadata Hash</span>
                <span className="font-mono font-bold text-[#556B2F]">{scanResult.c2paHash}</span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#E4E7E1]">
                <span className="text-[#7A8374] font-medium block text-[11px]">Synthetic Watermark Check</span>
                <span className="font-bold text-[#1C201A]">{scanResult.watermarkDetection}</span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#E4E7E1]">
                <span className="text-[#7A8374] font-medium block text-[11px]">Human-in-the-Loop Verification</span>
                <span className="font-bold text-[#1C201A]">{scanResult.humanInterventionScore}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
