import React from 'react';
import { MainLayout } from '@/components/MainLayout';

export default function HistoryPage() {
  const audits = [
    { id: 'WO-SCAN-102', date: '2026-02-10', score: 92, status: 'Completed' },
    { id: 'WO-SCAN-101', date: '2026-02-09', score: 85, status: 'Completed' },
    { id: 'WO-SCAN-100', date: '2026-02-08', score: 78, status: 'Review Needed' },
  ];

  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-slate-900">Audit History</h2>
        <div className="rounded-lg border border-slate-100 bg-white overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 font-medium">Audit ID</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Score</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {audits.map((audit) => (
                <tr key={audit.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-mono text-slate-900">{audit.id}</td>
                  <td className="px-6 py-4 font-mono text-slate-600">{audit.date}</td>
                  <td className="px-6 py-4 font-bold font-mono text-slate-900">{audit.score}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      audit.status === 'Completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {audit.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
