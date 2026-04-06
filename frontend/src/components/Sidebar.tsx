'use client';

import { useState } from 'react';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import {
  LayoutDashboard,
  MessageCircle,
  Users,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Globe,
  Bot,
  Columns3,
  GraduationCap,
} from 'lucide-react';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/conversations', label: 'Conversas', icon: MessageCircle },
  { href: '/leads-pos', label: 'Leads', icon: GraduationCap },
  { href: '/kanban', label: 'Kanban IA', icon: Columns3 },
  { href: '/ai-config', label: 'Config IA', icon: Bot },
  { href: '/users', label: 'Usuários', icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const getInitials = (name: string) =>
    name
      ? name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
      : '??';

  return (
    <aside
      className={`
        ${collapsed ? 'w-[72px]' : 'w-[250px]'}
        h-screen bg-[#0a1628] flex flex-col
        transition-all duration-300 ease-in-out flex-shrink-0
        border-r border-white/[0.06]
      `}
    >
      {/* ── Logo ── */}
      <div className="h-16 flex items-center px-4 border-b border-white/[0.06]">
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center w-full' : ''}`}>
          <div className="w-9 h-9 rounded-lg bg-[#1D4ED8] flex items-center justify-center flex-shrink-0">
            <Globe className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-white font-semibold text-[15px] tracking-tight leading-tight">
                Intercâmbio
              </span>
              <span className="text-[10px] text-[#93c5fd] font-medium tracking-wide">
                Platform
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── Navegação ── */}
      <nav className="flex-1 py-5 px-3 space-y-1 overflow-y-auto">
        {!collapsed && (
          <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest px-3 mb-3">
            Menu
          </p>
        )}

        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          const Icon = item.icon;

          return (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`
                  relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium
                  transition-all duration-200
                  ${isActive
                    ? 'bg-[#1D4ED8]/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                  }
                  ${collapsed ? 'justify-center' : ''}
                `}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#1D4ED8] rounded-r-full" />
                )}
                <Icon
                  className={`w-[18px] h-[18px] flex-shrink-0 transition-colors duration-200 ${
                    isActive ? 'text-[#3b82f6]' : 'text-gray-500 group-hover:text-gray-300'
                  }`}
                />
                {!collapsed && <span>{item.label}</span>}
              </Link>

              {collapsed && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 bg-[#1e293b] text-white text-xs font-medium rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 border border-white/[0.06]">
                  {item.label}
                  <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#1e293b]" />
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* ── Rodapé ── */}
      <div className="px-3 pb-4 space-y-2 border-t border-white/[0.06] pt-4">
        {user && !collapsed && (
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl bg-white/[0.03]">
            <div className="w-9 h-9 rounded-lg bg-[#1D4ED8]/30 flex items-center justify-center text-[#3b82f6] text-xs font-bold flex-shrink-0">
              {getInitials(user.name)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-200 truncate leading-tight">{user.name}</p>
              <p className="text-[11px] text-gray-500 truncate leading-tight">{user.email}</p>
            </div>
          </div>
        )}

        {user && collapsed && (
          <div className="relative group flex justify-center">
            <div className="w-9 h-9 rounded-lg bg-[#1D4ED8]/30 flex items-center justify-center text-[#3b82f6] text-xs font-bold cursor-default">
              {getInitials(user.name)}
            </div>
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 bg-[#1e293b] text-white text-xs font-medium rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 border border-white/[0.06]">
              {user.name}
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-gray-500 hover:text-red-400 hover:bg-red-400/[0.06] transition-all duration-200 text-[13px] ${collapsed ? 'justify-center' : ''}`}
        >
          <LogOut className="w-[16px] h-[16px] flex-shrink-0" />
          {!collapsed && <span>Sair</span>}
        </button>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-gray-600 hover:text-gray-300 hover:bg-white/[0.04] transition-all duration-200 text-[13px] ${collapsed ? 'justify-center' : ''}`}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <><ChevronLeft className="w-4 h-4" /><span>Recolher</span></>}
        </button>
      </div>
    </aside>
  );
}