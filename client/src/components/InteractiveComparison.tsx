import { useState } from "react";
import { CheckCircle2, AlertTriangle, Info, Shield, Wrench, FileCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";

import { Tablet, Smartphone } from "lucide-react";

export function InteractiveComparison() {
  const [viewMode, setViewMode] = useState<"checklist" | "instruction">("checklist");
  const [scenario, setScenario] = useState<"transmitter" | "valve">("transmitter");

  return (
    <div className="bg-background border border-border/40 rounded-sm overflow-hidden mb-8 shadow-sm">
      {/* Top Controls */}
      <div className="bg-secondary/10 border-b border-border/40 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-medium text-primary flex items-center gap-2">
            <FileCheck size={18} className="text-accent" />
            Live Example: {scenario === "transmitter" ? "Pressure Transmitter Installation" : "Control Valve Maintenance"}
          </h4>
          <p className="text-xs text-muted-foreground mt-1">
            Toggle between the current reactive approach and the future proactive standard.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          {/* Scenario Selector */}
          <div className="flex bg-background rounded-sm border border-border/40 p-1">
            <button
              onClick={() => setScenario("transmitter")}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-sm transition-all",
                scenario === "transmitter" 
                  ? "bg-primary/10 text-primary font-bold" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              Transmitter
            </button>
            <button
              onClick={() => setScenario("valve")}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-sm transition-all",
                scenario === "valve" 
                  ? "bg-primary/10 text-primary font-bold" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              Valve Maint.
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex bg-background rounded-sm border border-border/40 p-1">
            <button
              onClick={() => setViewMode("checklist")}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-sm transition-all",
                viewMode === "checklist" 
                  ? "bg-secondary text-primary shadow-sm" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              Checklist View
            </button>
            <button
              onClick={() => setViewMode("instruction")}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-sm transition-all flex items-center gap-1",
                viewMode === "instruction" 
                  ? "bg-accent text-white shadow-sm" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <Tablet size={12} /> Tablet View
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 min-h-[500px] bg-slate-50/50">
        {viewMode === "checklist" ? (
          <div className="max-w-2xl mx-auto animate-in fade-in duration-300">
            <div className="border border-border/60 rounded-sm bg-white p-8 relative shadow-sm">
              <div className="absolute top-0 right-0 bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-bl-sm border-b border-l border-red-200">
                REACTIVE VERIFICATION
              </div>
              
              <div className="text-center mb-6 border-b border-border/40 pb-4">
                <h3 className="font-bold text-lg text-gray-800">PSSR CHECKLIST</h3>
                <p className="text-sm text-gray-500">
                  {scenario === "transmitter" ? "Instrumentation & Analyzer Field Checklist" : "Mechanical Maintenance Field Checklist"}
                </p>
              </div>

              <div className="space-y-4">
                {scenario === "transmitter" ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-3 p-2 border-b border-gray-100">
                      <div className="w-5 h-5 border border-gray-300 rounded-sm mt-0.5"></div>
                      <div className="text-sm text-gray-600">Verify valve packing is tight.</div>
                    </div>
                    <div className="flex items-start gap-3 p-2 border-b border-gray-100">
                      <div className="w-5 h-5 border border-gray-300 rounded-sm mt-0.5"></div>
                      <div className="text-sm text-gray-600">Verify actuator stroke is calibrated.</div>
                    </div>
                    <div className="flex items-start gap-3 p-2 border-b border-gray-100">
                      <div className="w-5 h-5 border border-gray-300 rounded-sm mt-0.5"></div>
                      <div className="text-sm text-gray-600">Verify flange bolts are torqued.</div>
                    </div>
                    <div className="flex items-start gap-3 p-2 border-b border-gray-100">
                      <div className="w-5 h-5 border border-gray-300 rounded-sm mt-0.5"></div>
                      <div className="text-sm text-gray-600">Verify positioner feedback signal.</div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between text-xs text-gray-400">
                <div>Operator Sign: ________________</div>
                <div>Date: ____/____/____</div>
              </div>
              
              <div className="mt-6 bg-red-50 p-3 rounded text-xs text-red-600 flex gap-2">
                <AlertTriangle size={16} className="shrink-0" />
                <p>Note: This document is completed AFTER the work is done. It does not guide the operator on HOW to perform the task safely or correctly.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Tablet Frame Simulation */}
            <div className="border-4 border-slate-800 rounded-[2rem] bg-slate-800 overflow-hidden shadow-2xl relative">
              {/* Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-800 rounded-b-xl z-20"></div>
              
              {/* Screen Content */}
              <div className="bg-slate-50 h-[600px] overflow-y-auto scrollbar-hide relative">
                <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-slate-200 p-4 pt-6 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[10px] font-bold text-accent uppercase tracking-wider">Active Task</div>
                      <h3 className="font-bold text-slate-800 leading-tight">
                        {scenario === "transmitter" ? "Install Pressure Transmitter" : "Control Valve PM"}
                      </h3>
                    </div>
                    <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">
                      In Progress
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  {/* Safety Card */}
                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
                    <h4 className="text-xs font-bold text-orange-800 uppercase mb-2 flex items-center gap-1">
                      <Shield size={12} /> Critical Safety
                    </h4>
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      <div className="bg-white p-2 rounded border border-orange-100 min-w-[60px] text-center">
                        <div className="text-[10px] font-bold text-slate-600">LOTO</div>
                        <CheckCircle2 size={12} className="mx-auto mt-1 text-green-500" />
                      </div>
                      <div className="bg-white p-2 rounded border border-orange-100 min-w-[60px] text-center">
                        <div className="text-[10px] font-bold text-slate-600">PPE</div>
                        <CheckCircle2 size={12} className="mx-auto mt-1 text-green-500" />
                      </div>
                      <div className="bg-white p-2 rounded border border-orange-100 min-w-[60px] text-center">
                        <div className="text-[10px] font-bold text-slate-600">Permit</div>
                        <CheckCircle2 size={12} className="mx-auto mt-1 text-green-500" />
                      </div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="space-y-3">
                    {scenario === "transmitter" ? (
                      <>
                        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm opacity-50">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-slate-400">Step 1</span>
                            <CheckCircle2 size={14} className="text-green-500" />
                          </div>
                          <p className="text-sm text-slate-600 line-through">Mount transmitter to pipe stand.</p>
                        </div>

                        <div className="bg-white border-l-4 border-accent rounded-lg p-4 shadow-md ring-1 ring-accent/10">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-accent">Step 2 (Current)</span>
                            <span className="bg-accent/10 text-accent text-[10px] px-2 py-0.5 rounded-full font-bold">Action Required</span>
                          </div>
                          <h5 className="font-bold text-slate-800 mb-1">Connect Impulse Lines</h5>
                          <p className="text-sm text-slate-600 mb-3">Install tubing with 1/2" Swagelok fittings. Do not over-tighten.</p>
                          
                          <div className="bg-slate-100 rounded-md h-32 mb-3 flex items-center justify-center text-slate-400 text-xs border border-slate-200 border-dashed">
                            [Visual: Torque Spec Diagram]
                          </div>

                          <button className="w-full bg-accent text-white text-sm font-medium py-2 rounded-md shadow-sm hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
                            <CheckCircle2 size={14} /> Confirm Leak Check
                          </button>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm opacity-50">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-slate-400">Step 3</span>
                            <div className="w-4 h-4 border border-slate-300 rounded-full"></div>
                          </div>
                          <p className="text-sm text-slate-600">Terminate electrical connections.</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm opacity-50">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-slate-400">Step 1</span>
                            <CheckCircle2 size={14} className="text-green-500" />
                          </div>
                          <p className="text-sm text-slate-600 line-through">Isolate and depressurize valve.</p>
                        </div>

                        <div className="bg-white border-l-4 border-accent rounded-lg p-4 shadow-md ring-1 ring-accent/10">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-accent">Step 2 (Current)</span>
                            <span className="bg-accent/10 text-accent text-[10px] px-2 py-0.5 rounded-full font-bold">Action Required</span>
                          </div>
                          <h5 className="font-bold text-slate-800 mb-1">Inspect Packing Gland</h5>
                          <p className="text-sm text-slate-600 mb-3">Check for signs of leakage. Tighten packing nuts evenly if needed.</p>
                          
                          <div className="bg-slate-100 rounded-md h-32 mb-3 flex items-center justify-center text-slate-400 text-xs border border-slate-200 border-dashed">
                            [Visual: Packing Nut Sequence]
                          </div>

                          <button className="w-full bg-accent text-white text-sm font-medium py-2 rounded-md shadow-sm hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
                            <CheckCircle2 size={14} /> Log Inspection Result
                          </button>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm opacity-50">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-slate-400">Step 3</span>
                            <div className="w-4 h-4 border border-slate-300 rounded-full"></div>
                          </div>
                          <p className="text-sm text-slate-600">Calibrate positioner stroke.</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 flex justify-around items-center text-slate-400">
                  <div className="flex flex-col items-center gap-1 text-accent">
                    <FileCheck size={18} />
                    <span className="text-[10px] font-medium">Tasks</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Smartphone size={18} />
                    <span className="text-[10px] font-medium">Assets</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Users size={18} />
                    <span className="text-[10px] font-medium">Team</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                <span className="font-bold text-primary">Mobile-First Design:</span> Operators access instructions directly at the point of work, with integrated safety checks and visual aids.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
