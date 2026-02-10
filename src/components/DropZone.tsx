import React, { useCallback, useRef, useState } from 'react';
import { Upload, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DropZoneProps {
  onUpload: (file: File) => void;
}

export function DropZone({ onUpload }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        onUpload(file);
      }
    }
  }, [onUpload]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(e.target.files[0]);
    }
  }, [onUpload]);

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center transition-all duration-200 ease-in-out",
        isDragging 
          ? "border-autoleap-green bg-autoleap-green/5 scale-[1.02]" 
          : "border-slate-200 hover:bg-slate-50"
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/*"
        onChange={handleFileSelect}
      />
      
      <div className={cn(
        "mb-4 rounded-full p-4 transition-colors",
        isDragging ? "bg-autoleap-green/10" : "bg-slate-100"
      )}>
        {isDragging ? (
           <ImageIcon className="h-8 w-8 text-autoleap-green" strokeWidth={1.5} />
        ) : (
           <Upload className="h-8 w-8 text-slate-500" strokeWidth={1.5} />
        )}
      </div>
      
      <h3 className="mb-2 text-lg font-medium text-slate-900">
        {isDragging ? "Drop to Upload" : "Upload Screenshot"}
      </h3>
      
      <p className="mb-6 max-w-sm text-sm text-slate-500">
        Drag and drop your UI screenshot here, or click the button below to browse your files.
      </p>
      
      <Button 
        onClick={onButtonClick}
        className="bg-autoleap-green px-8 text-white hover:bg-autoleap-green/90 rounded-full shadow-md transition-transform active:scale-95"
      >
        Select Image
      </Button>
    </div>
  );
}
