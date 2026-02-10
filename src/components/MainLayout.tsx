"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { History, FileText, Settings, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Audit History',
      href: '/history',
      icon: History,
    },
    {
      label: 'Design System Docs',
      href: '/docs',
      icon: FileText,
    },
    {
      label: 'Settings',
      href: '/settings',
      icon: Settings,
    },
  ];

  return (
    <div className="flex h-screen w-full flex-col bg-slate-50">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-slate-100 bg-white px-6">
        <Link href="/" className="flex items-center gap-4 group">
          {/* Logo Placeholder */}
          <div className="h-8 w-8 rounded bg-slate-200 group-hover:bg-slate-300 transition-colors" />
          <h1 className="font-sans text-2xl font-bold text-slate-900">Autoleap Lense</h1>
        </Link>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-100 bg-white py-6">
          <nav className="flex flex-col gap-1 px-4">
             {/* Adding explicit New Audit link for better UX, though not explicitly requested in list, it's safer for navigation */}
             <Link href="/">
               <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start font-medium",
                    pathname === "/" 
                      ? "bg-slate-50 text-slate-900" 
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <Home className="mr-2 h-4 w-4" strokeWidth={1.5} />
                  New Audit
                </Button>
             </Link>

             <div className="my-2 h-px bg-slate-100 mx-2" />

            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start font-medium",
                    pathname.startsWith(item.href)
                      ? "bg-autoleap-green/10 text-autoleap-green" // Active state style
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" strokeWidth={1.5} />
                  {item.label}
                </Button>
              </Link>
            ))}
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
