import React from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DropZoneProps {
  onUpload: () => void;
}

export function DropZone({ onUpload }: DropZoneProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 p-12 text-center transition-colors hover:bg-slate-50">
      <div className="mb-4 rounded-full bg-slate-100 p-4">
        <Upload className="h-8 w-8 text-slate-500" strokeWidth={1.5} />
      </div>
      <h3 className="mb-2 text-lg font-medium text-slate-900">Upload Screenshot</h3>
      <p className="mb-6 max-w-sm text-sm text-slate-500">
        Drag and drop your UI screenshot here, or click to browse.
      </p>
      <Button 
        onClick={onUpload}
        className="bg-autoleap-green px-8 text-white hover:bg-autoleap-green/90"
      >
        Upload Image
      </Button>
    </div>
  );
}

