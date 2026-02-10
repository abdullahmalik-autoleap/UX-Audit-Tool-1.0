import React from 'react';
import { Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AuditResults() {
  return (
    <div className="flex h-full flex-col gap-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-slate-900">Audit Analysis</h2>
          <div className="flex gap-6 font-mono text-xs text-slate-500">
             <span>ID: #WO-SCAN-102</span>
             <span>TIMESTAMP: 2026-02-10 17:00</span>
          </div>
        </div>
        <Button 
          variant="secondary" 
          className="rounded-full bg-slate-100 px-6 font-medium text-slate-700 hover:bg-slate-200"
        >
          Export to Figma
        </Button>
      </div>

      {/* Summary Grid */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <ScoreCard title="Accessibility Score" score="92" suffix="/100" />
        <ScoreCard title="Brand Compliance" score="85" suffix="/100" />
        <ScoreCard title="Hierarchy Check" score="78" suffix="/100" />
      </div>

      {/* Findings Table */}
      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-slate-900">Detected Violations</h3>
        <div className="overflow-hidden rounded-lg border border-slate-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">Issue Type</th>
                <th className="px-4 py-3 font-medium">Element</th>
                <th className="px-4 py-3 font-medium">Detected Value</th>
                <th className="px-4 py-3 font-medium">Severity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <FindingRow 
                issue="Contrast Ratio Fail" 
                element="Primary Button" 
                value="4.2:1 (Min 4.5:1)" 
                severity="High" 
              />
              <FindingRow 
                issue="Font Family Mismatch" 
                element="H2 Heading" 
                value="Arial (Exp. Figtree)" 
                severity="Medium" 
              />
              <FindingRow 
                issue="Spacing Inconsistency" 
                element="Card Padding" 
                value="18px (Exp. 16px)" 
                severity="Low" 
              />
              <FindingRow 
                issue="Icon Stroke Width" 
                element="Upload Icon" 
                value="2px (Exp. 1.5px)" 
                severity="Medium" 
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ScoreCard({ title, score, suffix }: { title: string, score: string, suffix: string }) {
  return (
     <div className="flex flex-col justify-between rounded-lg border border-slate-100 p-4">
        <div className="text-sm font-medium text-slate-500">{title}</div>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="font-mono text-3xl font-bold text-slate-900">{score}</span>
          <span className="font-mono text-xs text-slate-400">{suffix}</span>
        </div>
     </div>
  )
}

function FindingRow({ issue, element, value, severity }: { issue: string, element: string, value: string, severity: string }) {
  const severityColor = 
    severity === 'High' ? 'text-rose-600 bg-rose-50' : 
    severity === 'Medium' ? 'text-amber-600 bg-amber-50' : 
    'text-slate-600 bg-slate-50';

  return (
    <tr>
      <td className="px-4 py-1.5 font-medium text-slate-900">{issue}</td>
      <td className="px-4 py-1.5 text-slate-600">{element}</td>
      <td className="px-4 py-1.5 font-mono text-xs text-slate-500">{value}</td>
      <td className="px-4 py-1.5">
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${severityColor}`}>
          {severity}
        </span>
      </td>
    </tr>
  )
}

