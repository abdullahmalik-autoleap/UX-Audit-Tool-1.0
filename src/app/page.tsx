"use client";

import React, { useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import { DropZone } from '@/components/DropZone';
import { ScanningView } from '@/components/ScanningView';
import { AuditResults } from '@/components/AuditResults';

export default function Home() {
  const [view, setView] = useState<'upload' | 'scanning' | 'results'>('upload');

  const handleUpload = () => {
    setView('scanning');
  };

  const handleScanComplete = () => {
    setView('results');
  };

  return (
    <MainLayout>
      <div className="flex min-h-[600px] flex-col rounded-lg bg-white p-8 shadow-sm">
        {view === 'upload' && (
          <div className="flex flex-1 flex-col justify-center">
            <DropZone onUpload={handleUpload} />
          </div>
        )}
        {view === 'scanning' && (
           <div className="flex flex-1 flex-col justify-center">
             <ScanningView onComplete={handleScanComplete} />
           </div>
        )}
        {view === 'results' && (
          <div className="flex flex-1 flex-col">
             <AuditResults />
          </div>
        )}
      </div>
    </MainLayout>
  );
}
