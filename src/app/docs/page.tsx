import React from 'react';
import { MainLayout } from '@/components/MainLayout';

export default function DocsPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-slate-900">Design System Docs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
             <h3 className="mb-2 text-lg font-medium text-slate-900">Typography</h3>
             <p className="text-sm text-slate-500 mb-4">
               Figtree is used for UI text, while Menlo is used for data and code.
             </p>
             <div className="space-y-2">
               <div className="p-3 bg-slate-50 rounded border border-slate-100">
                 <span className="font-sans text-lg font-bold">Figtree Bold</span>
               </div>
               <div className="p-3 bg-slate-50 rounded border border-slate-100">
                 <span className="font-mono text-sm">Menlo Regular</span>
               </div>
             </div>
           </div>

           <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
             <h3 className="mb-2 text-lg font-medium text-slate-900">Colors</h3>
             <p className="text-sm text-slate-500 mb-4">
               Primary brand color is Autoleap Green (#0E7169).
             </p>
             <div className="flex gap-4">
               <div className="flex flex-col gap-1">
                 <div className="w-16 h-16 rounded bg-autoleap-green shadow-sm"></div>
                 <span className="text-xs font-mono text-slate-500">#0E7169</span>
               </div>
               <div className="flex flex-col gap-1">
                 <div className="w-16 h-16 rounded bg-slate-900 shadow-sm"></div>
                 <span className="text-xs font-mono text-slate-500">Slate-900</span>
               </div>
               <div className="flex flex-col gap-1">
                 <div className="w-16 h-16 rounded bg-slate-50 shadow-sm border border-slate-200"></div>
                 <span className="text-xs font-mono text-slate-500">Slate-50</span>
               </div>
             </div>
           </div>
        </div>
      </div>
    </MainLayout>
  );
}

