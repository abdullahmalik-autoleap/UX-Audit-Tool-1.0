import React, { useEffect, useState } from 'react';

interface ScanningViewProps {
  onComplete: () => void;
}

export function ScanningView({ onComplete }: ScanningViewProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const messages = [
    "Initializing scan...",
    "Analyzing DOM nodes...",
    "Checking color contrast...",
    "Verifying typography hierarchy...",
    "Validating accessibility standards...",
    "Generating report..."
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < messages.length) {
        setLogs(prev => [...prev, messages[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8 py-12">
      {/* Pulse Animation */}
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="absolute h-full w-full animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-autoleap-green/20"></div>
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-autoleap-green shadow-lg">
           <div className="h-8 w-8 animate-[pulse_0.5s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full bg-white/90" />
        </div>
      </div>

      <h2 className="text-xl font-medium text-slate-900">Scanning Design...</h2>

      {/* System Logs */}
      <div className="w-full max-w-md rounded-lg bg-slate-950 p-6 shadow-inner ring-1 ring-slate-900/5">
        <div className="flex flex-col gap-2 font-mono text-xs text-emerald-400">
          {logs.map((log, index) => (
            <div key={index} className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-1 duration-200">
              <span className="text-emerald-500/50">{`>`}</span>
              {log}
            </div>
          ))}
          <div className="flex items-center gap-2">
             <span className="text-emerald-500/50">{`>`}</span>
             <span className="h-4 w-2 animate-pulse bg-emerald-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

