import React from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <MainLayout>
      <div className="max-w-2xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-slate-900">Settings</h2>
        
        <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium text-slate-900">General Preferences</h3>
          <div className="space-y-4">
             <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">Dark Mode</div>
                  <div className="text-sm text-slate-500">Enable dark mode for the interface.</div>
                </div>
                <div className="h-6 w-11 rounded-full bg-slate-200"></div>
             </div>
             <div className="h-px bg-slate-100" />
             <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">Auto-Scan</div>
                  <div className="text-sm text-slate-500">Automatically start scan on upload.</div>
                </div>
                <div className="h-6 w-11 rounded-full bg-autoleap-green relative">
                   <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm"></div>
                </div>
             </div>
          </div>
        </div>

        <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium text-slate-900">API Configuration</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Figma Access Token</label>
              <input 
                type="password" 
                value="••••••••••••••••" 
                readOnly
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm font-mono text-slate-900 focus:border-autoleap-green focus:outline-none focus:ring-1 focus:ring-autoleap-green"
              />
            </div>
            <div className="flex justify-end">
              <Button variant="outline" size="sm">Update Token</Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
