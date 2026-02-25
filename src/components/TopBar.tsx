import { Search, Bell, Mail, Command } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-surface/50 backdrop-blur-sm sticky top-0 z-20">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search task" 
          className="w-full bg-white border border-slate-100 rounded-2xl py-2.5 pl-10 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">
          <Command size={10} className="text-slate-400" />
          <span className="text-[10px] font-bold text-slate-400">F</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-xl transition-all relative">
            <Mail size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-surface" />
          </button>
          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-xl transition-all">
            <Bell size={20} />
          </button>
        </div>

        <div className="h-8 w-[1px] bg-slate-200" />

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-900">Totok Michael</p>
            <p className="text-[10px] text-slate-400">tmichael20@mail.com</p>
          </div>
          <img 
            src="https://picsum.photos/seed/user1/100/100" 
            alt="User" 
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
