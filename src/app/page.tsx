"use client";

import React, { useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import { DropZone } from '@/components/DropZone';
import { ScanningView } from '@/components/ScanningView';
import { AuditResults } from '@/components/AuditResults';

export default function Home() {
  const [view, setView] = useState<'upload' | 'scanning' | 'results'>('upload');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleUpload = (file: File) => {
    // Create a local URL for the uploaded file
    const objectUrl = URL.createObjectURL(file);
    setSelectedImage(objectUrl);
    setView('scanning');
  };

  const handleScanComplete = () => {
    setView('results');
  };

  return (
    <MainLayout>
      <div className="flex min-h-[600px] flex-col rounded-lg bg-white shadow-sm">
        {view === 'upload' && (
          <div className="flex flex-1 flex-col justify-center p-8">
            <DropZone onUpload={handleUpload} />
          </div>
        )}
        {view === 'scanning' && (
           <div className="flex flex-1 flex-col justify-center p-8">
             <ScanningView 
                imagePreview={selectedImage}
                onComplete={handleScanComplete} 
             />
           </div>
        )}
        {view === 'results' && (
          <div className="flex flex-1 flex-col p-8">
             <AuditResults imagePreview={selectedImage} />
          </div>
        )}
      </div>
    </MainLayout>
  );
}
