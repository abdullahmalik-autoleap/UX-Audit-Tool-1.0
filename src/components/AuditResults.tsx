import React from 'react';
import { Share, AlertCircle, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AuditResultsProps {
    imagePreview: string | null;
}

export function AuditResults({ imagePreview }: AuditResultsProps) {
  // Mock sophisticated data
  const violations = [
    {
      type: "Contrast Ratio",
      element: "Primary Button Label",
      value: "3.2:1",
      expected: "Min 4.5:1",
      severity: "High",
      description: "Text contrast is too low for accessibility compliance (WCAG AA).",
      fix: "Darken text color to #FFFFFF or lighten background."
    },
    {
        type: "Touch Target",
        element: "Navigation Link",
        value: "24px",
        expected: "Min 44px",
        severity: "High",
        description: "Clickable area is too small for mobile users.",
        fix: "Increase padding to meet 44x44px target."
    },
    {
      type: "Typography",
      element: "H2 Heading",
      value: "Arial",
      expected: "Figtree",
      severity: "Medium",
      description: "Font family deviates from the defined design system.",
      fix: "Update font-family to 'Figtree'."
    },
    {
      type: "Spacing",
      element: "Card Padding",
      value: "18px",
      expected: "16px (1rem)",
      severity: "Low",
      description: "Padding does not align with the 4px grid system.",
      fix: "Adjust padding to 16px."
    },
    {
        type: "Iconography",
        element: "Upload Icon",
        value: "2px Stroke",
        expected: "1.5px Stroke",
        severity: "Medium",
        description: "Icon stroke width is inconsistent with brand guidelines.",
        fix: "Set stroke-width to 1.5px."
      },
  ];

  return (
    <div className="flex h-full flex-col animate-in fade-in duration-500 pb-10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-slate-900">Audit Analysis Report</h2>
          <div className="flex gap-6 font-mono text-xs text-slate-500">
             <span className="bg-slate-100 px-2 py-1 rounded text-slate-700">ID: #WO-SCAN-102</span>
             <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                Completed Successfully
             </span>
          </div>
        </div>
        <div className="flex gap-3">
             <Button variant="outline" className="rounded-full">
                Download PDF
             </Button>
            <Button 
            className="rounded-full bg-slate-900 px-6 font-medium text-white hover:bg-slate-800"
            >
            Export to Figma
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Visuals & Scores */}
        <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Score Summary */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Overall Score</h3>
                <div className="flex items-center justify-center py-4">
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-slate-100">
                        <svg className="absolute top-0 left-0 h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                             <circle cx="50" cy="50" r="46" fill="transparent" stroke="#0E7169" strokeWidth="8" strokeDasharray="289" strokeDashoffset="50" strokeLinecap="round" />
                        </svg>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold font-mono text-slate-900">82</span>
                            <span className="text-xs text-slate-500">/ 100</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-6">
                    <MiniScore label="A11y" score="92" color="text-emerald-600" />
                    <MiniScore label="Brand" score="74" color="text-amber-600" />
                    <MiniScore label="Layout" score="85" color="text-blue-600" />
                </div>
            </div>

            {/* Thumbnail */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                 <h3 className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">Analyzed Source</h3>
                 <div className="rounded-lg overflow-hidden border border-slate-200 bg-white aspect-video relative">
                    {imagePreview ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={imagePreview} alt="Analyzed UI" className="w-full h-full object-cover" />
                    ) : (
                        <div className="flex h-full items-center justify-center text-slate-300">No Image</div>
                    )}
                 </div>
            </div>
        </div>

        {/* Right Column: Detailed Findings */}
        <div className="lg:col-span-8 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-slate-900">Detailed Findings ({violations.length})</h3>
            
            <div className="flex flex-col gap-4">
                {violations.map((item, idx) => (
                    <FindingCard key={idx} item={item} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

function MiniScore({ label, score, color }: { label: string, score: string, color: string }) {
    return (
        <div className="flex flex-col items-center rounded bg-slate-50 p-2 text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase">{label}</span>
            <span className={`text-lg font-bold font-mono ${color}`}>{score}</span>
        </div>
    )
}

function FindingCard({ item }: { item: any }) {
    const isHigh = item.severity === 'High';
    const isMedium = item.severity === 'Medium';
    
    return (
        <div className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${isHigh ? 'bg-rose-100 text-rose-600' : isMedium ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                        {isHigh ? <AlertCircle size={18} /> : isMedium ? <AlertTriangle size={18} /> : <AlertCircle size={18} />}
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900">{item.type} Issue</h4>
                        <p className="text-sm text-slate-500">{item.element}</p>
                    </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${isHigh ? 'bg-rose-50 text-rose-700 border-rose-100' : isMedium ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                    {item.severity} Severity
                </span>
            </div>
            
            <div className="pl-[52px]">
                <p className="text-slate-700 text-sm mb-3 leading-relaxed">{item.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-50 rounded border border-slate-100 p-3">
                        <div className="text-xs text-slate-400 font-mono mb-1">DETECTED VALUE</div>
                        <div className="text-sm font-mono text-rose-600 font-medium">{item.value}</div>
                    </div>
                    <div className="bg-emerald-50/50 rounded border border-emerald-100 p-3">
                        <div className="text-xs text-emerald-600/70 font-mono mb-1">EXPECTED VALUE</div>
                        <div className="text-sm font-mono text-emerald-700 font-medium">{item.expected}</div>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-md border border-slate-100">
                    <CheckCircle2 size={16} className="text-autoleap-green" />
                    <span className="font-medium">Suggestion:</span>
                    <span>{item.fix}</span>
                </div>
            </div>
        </div>
    )
}
