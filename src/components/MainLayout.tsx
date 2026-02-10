import React from 'react';
import { History, FileText, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen w-full flex-col bg-slate-50">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-slate-100 bg-white px-6">
        <div className="flex items-center gap-4">
          {/* Logo Placeholder */}
          <div className="h-8 w-8 rounded bg-slate-200" />
          <h1 className="font-sans text-2xl font-bold text-slate-900">Autoleap Lense</h1>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-100 bg-white py-6">
          <nav className="flex flex-col gap-1 px-4">
            <Button
              variant="ghost"
              className="justify-start font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              <History className="mr-2 h-4 w-4" strokeWidth={1.5} />
              Audit History
            </Button>
            <Button
              variant="ghost"
              className="justify-start font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              <FileText className="mr-2 h-4 w-4" strokeWidth={1.5} />
              Design System Docs
            </Button>
            <Button
              variant="ghost"
              className="justify-start font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              <Settings className="mr-2 h-4 w-4" strokeWidth={1.5} />
              Settings
            </Button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-8">
          <div className="mx-auto max-w-5xl">
             {children}
          </div>
        </main>
      </div>
    </div>
  );
}

