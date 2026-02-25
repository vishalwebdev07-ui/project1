import { ArrowUpRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  isPrimary?: boolean;
}

export default function StatCard({ title, value, change, isPrimary }: StatCardProps) {
  return (
    <div className={`card flex-1 min-w-[200px] ${isPrimary ? 'bg-brand-primary text-white border-none' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-medium ${isPrimary ? 'text-white/70' : 'text-slate-500'}`}>{title}</span>
        <div className={`p-1.5 rounded-full ${isPrimary ? 'bg-white/20' : 'border border-slate-100'}`}>
          <ArrowUpRight size={14} />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-3xl font-bold mb-2">{value}</h3>
          <div className="flex items-center gap-1.5">
            <div className={`w-4 h-4 rounded flex items-center justify-center ${isPrimary ? 'bg-white/20' : 'bg-brand-primary/10'}`}>
              <span className={`text-[8px] font-bold ${isPrimary ? 'text-white' : 'text-brand-primary'}`}>S</span>
            </div>
            <span className={`text-[10px] ${isPrimary ? 'text-white/60' : 'text-slate-400'}`}>{change}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
