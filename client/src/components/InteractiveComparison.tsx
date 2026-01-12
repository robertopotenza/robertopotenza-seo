import { useState } from "react";
import { CheckCircle2, AlertTriangle, Info, Shield, Wrench, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function InteractiveComparison() {
  const [viewMode, setViewMode] = useState<"checklist" | "instruction">("checklist");

  return (
    <div className="bg-background border border-border/40 rounded-sm overflow-hidden mb-8 shadow-sm">
      <div className="bg-secondary/10 border-b border-border/40 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-medium text-primary flex items-center gap-2">
            <FileCheck size={18} className="text-accent" />
            Live Example: Pressure Transmitter Installation
          </h4>
          <p className="text-xs text-muted-foreground mt-1">
            Toggle between the current reactive approach and the future proactive standard.
          </p>
        </div>
        
        <div className="flex bg-background rounded-sm border border-border/40 p-1 shrink-0">
          <button
            onClick={() => setViewMode("checklist")}
            className={cn(
              "px-3 py-1.5 text-xs font-medium rounded-sm transition-all",
              viewMode === "checklist" 
                ? "bg-secondary text-primary shadow-sm" 
                : "text-muted-foreground hover:text-primary"
            )}
          >
            Checklist View (Current)
          </button>
          <button
            onClick={() => setViewMode("instruction")}
            className={cn(
              "px-3 py-1.5 text-xs font-medium rounded-sm transition-all",
              viewMode === "instruction" 
                ? "bg-accent text-white shadow-sm" 
                : "text-muted-foreground hover:text-primary"
            )}
          >
            Instruction View (Future)
          </button>
        </div>
      </div>

      <div className="p-6 min-h-[400px]">
        {viewMode === "checklist" ? (
          <div className="max-w-2xl mx-auto animate-in fade-in duration-300">
            <div className="border border-border/60 rounded-sm bg-white p-8 relative">
              <div className="absolute top-0 right-0 bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-bl-sm border-b border-l border-red-200">
                REACTIVE VERIFICATION
              </div>
              
              <div className="text-center mb-6 border-b border-border/40 pb-4">
                <h3 className="font-bold text-lg text-gray-800">PSSR CHECKLIST</h3>
                <p className="text-sm text-gray-500">Instrumentation & Analyzer Field Checklist</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-2 border-b border-gray-100">
                  <div className="w-5 h-5 border border-gray-300 rounded-sm mt-0.5"></div>
                  <div className="text-sm text-gray-600">Verify transmitter is mounted correctly.</div>
                </div>
                <div className="flex items-start gap-3 p-2 border-b border-gray-100">
                  <div className="w-5 h-5 border border-gray-300 rounded-sm mt-0.5"></div>
                  <div className="text-sm text-gray-600">Verify impulse lines are leak-free.</div>
                </div>
                <div className="flex items-start gap-3 p-2 border-b border-gray-100">
                  <div className="w-5 h-5 border border-gray-300 rounded-sm mt-0.5"></div>
                  <div className="text-sm text-gray-600">Verify electrical connections are tight.</div>
                </div>
                <div className="flex items-start gap-3 p-2 border-b border-gray-100">
                  <div className="w-5 h-5 border border-gray-300 rounded-sm mt-0.5"></div>
                  <div className="text-sm text-gray-600">Verify tag plate is correct.</div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between text-xs text-gray-400">
                <div>Operator Sign: ________________</div>
                <div>Date: ____/____/____</div>
              </div>
              
              <div className="mt-6 bg-red-50 p-3 rounded text-xs text-red-600 flex gap-2">
                <AlertTriangle size={16} className="shrink-0" />
                <p>Note: This document is completed AFTER the work is done. It does not guide the operator on HOW to perform the installation safely or correctly.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="border border-border/60 rounded-sm bg-white overflow-hidden relative shadow-lg">
              <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-bl-sm border-b border-l border-green-200">
                PROACTIVE GUIDANCE
              </div>

              {/* Header */}
              <div className="bg-slate-50 p-4 border-b border-border/40 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-slate-800">IWI-INST-001: Pressure Transmitter Installation</h3>
                  <p className="text-xs text-slate-500">Rev 1.0 | Integrated Work Instruction</p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded uppercase">Safety Critical</span>
                </div>
              </div>

              {/* Section 1: Safety & Prep */}
              <div className="grid grid-cols-2 border-b border-border/40">
                <div className="p-4 border-r border-border/40 bg-orange-50/30">
                  <h4 className="text-xs font-bold text-orange-700 uppercase mb-2 flex items-center gap-1">
                    <Shield size={12} /> Safety Requirements
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Standard PPE + Safety Glasses</li>
                    <li>• LOTO Permit # required</li>
                    <li>• Verify zero energy before start</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50/30">
                  <h4 className="text-xs font-bold text-blue-700 uppercase mb-2 flex items-center gap-1">
                    <Wrench size={12} /> Tools & Materials
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• 1/2" Wrench, Teflon Tape</li>
                    <li>• Rosemount 3051 Transmitter</li>
                    <li>• Leak detection fluid</li>
                  </ul>
                </div>
              </div>

              {/* Section 2: Step-by-Step Execution */}
              <div className="p-0">
                <div className="flex border-b border-border/40">
                  <div className="w-12 bg-slate-100 flex items-center justify-center font-bold text-slate-400 border-r border-border/40">1</div>
                  <div className="p-3 flex-1">
                    <h5 className="text-sm font-bold text-slate-800">Mount the Transmitter</h5>
                    <p className="text-xs text-slate-600 mt-1">Secure to 2" pipe stand using provided U-bolt. Ensure display is at eye level (approx 5ft).</p>
                  </div>
                  <div className="w-32 bg-slate-50 border-l border-border/40 p-2 flex flex-col justify-center items-center">
                    <div className="w-full h-16 bg-slate-200 rounded flex items-center justify-center text-[10px] text-slate-400">
                      [Visual Diagram]
                    </div>
                  </div>
                </div>

                <div className="flex border-b border-border/40 bg-yellow-50/20">
                  <div className="w-12 bg-yellow-50 flex items-center justify-center font-bold text-yellow-600 border-r border-yellow-100">2</div>
                  <div className="p-3 flex-1">
                    <h5 className="text-sm font-bold text-slate-800">Connect Impulse Lines</h5>
                    <p className="text-xs text-slate-600 mt-1">Install tubing with 1/2" Swagelok fittings. <span className="font-bold text-red-600">CRITICAL: Do not over-tighten (1-1/4 turns past finger tight).</span></p>
                    
                    {/* Embedded Verification */}
                    <div className="mt-2 bg-white border border-yellow-200 rounded p-2 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-yellow-700 uppercase">Verification Point</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400">Leak Check Passed?</span>
                        <div className="w-4 h-4 border border-slate-300 rounded bg-white"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-32 bg-slate-50 border-l border-border/40 p-2 flex flex-col justify-center items-center">
                    <div className="w-full h-16 bg-slate-200 rounded flex items-center justify-center text-[10px] text-slate-400">
                      [Torque Spec Img]
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-12 bg-slate-100 flex items-center justify-center font-bold text-slate-400 border-r border-border/40">3</div>
                  <div className="p-3 flex-1">
                    <h5 className="text-sm font-bold text-slate-800">Electrical Termination</h5>
                    <p className="text-xs text-slate-600 mt-1">Connect loop power (+/-) to terminal block. Ensure cable gland is tight to prevent moisture ingress.</p>
                  </div>
                  <div className="w-32 bg-slate-50 border-l border-border/40 p-2 flex flex-col justify-center items-center">
                    <div className="w-full h-16 bg-slate-200 rounded flex items-center justify-center text-[10px] text-slate-400">
                      [Wiring Diagram]
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-slate-50 p-3 border-t border-border/40 flex justify-between items-center text-xs text-slate-500">
                <div className="flex gap-4">
                  <span>Tech: ________________</span>
                  <span>Eng: ________________</span>
                </div>
                <div className="flex items-center gap-1 text-green-600 font-medium">
                  <CheckCircle2 size={12} />
                  Ready for Commissioning
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex gap-2 justify-center">
              <div className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full border border-green-100 flex items-center gap-1">
                <Info size={12} />
                <span>Guidance + Verification in one flow</span>
              </div>
              <div className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1">
                <Info size={12} />
                <span>Visual Aids Included</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
