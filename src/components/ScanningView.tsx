import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ScanningViewProps {
  imagePreview: string | null;
  onComplete: () => void;
}

export function ScanningView({ imagePreview, onComplete }: ScanningViewProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const messages = [
    "Initializing neural network...",
    "Segmenting UI components...",
    "Analyzing color palette and contrast...",
    "Measuring whitespace and padding...",
    "Checking typography hierarchy...",
    "Cross-referencing design guidelines...",
    "Detecting accessibility violations...",
    "Compiling final audit report..."
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < messages.length) {
        setLogs(prev => [...prev, messages[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 600); // Slightly longer for more "weight"

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8 py-8 animate-in fade-in duration-500">
      <div className="flex w-full max-w-4xl gap-8 items-start justify-center">
        {/* Scanning Preview */}
        <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
          {imagePreview && (
            <>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src={imagePreview} 
                 alt="Scanning" 
                 className="w-full h-full object-contain"
               />
               {/* Scanner Overlay */}
               <div className="absolute inset-0 bg-autoleap-green/10 z-10 animate-pulse"></div>
               <div className="absolute top-0 left-0 w-full h-1 bg-autoleap-green shadow-[0_0_15px_rgba(14,113,105,0.8)] z-20 animate-[scan_2s_ease-in-out_infinite]" />
            </>
          )}
          {!imagePreview && (
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              No Image Loaded
            </div>
          )}
        </div>

        {/* System Logs */}
        <div className="w-full max-w-sm rounded-lg bg-slate-950 p-6 shadow-2xl ring-1 ring-slate-900/5 h-[300px] overflow-hidden flex flex-col">
           <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
             <span className="text-xs font-bold text-slate-400">SYSTEM TERMINAL</span>
             <div className="flex gap-1.5">
               <div className="w-2 h-2 rounded-full bg-slate-700"></div>
               <div className="w-2 h-2 rounded-full bg-slate-700"></div>
             </div>
           </div>
          <div className="flex flex-col gap-2 font-mono text-xs text-emerald-400 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="flex items-start gap-2 animate-in fade-in slide-in-from-left-1 duration-200">
                <span className="text-emerald-500/50 shrink-0 mt-0.5">{`>`}</span>
                <span>{log}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
               <span className="text-emerald-500/50">{`>`}</span>
               <span className="h-4 w-2 animate-pulse bg-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-xl font-medium text-slate-900">Analyzing UI Composition...</h2>
        <p className="text-sm text-slate-500">Please wait while our AI models process your design.</p>
      </div>
    </div>
  );
}
