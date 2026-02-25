import { motion } from 'motion/react';
import { Plus, FileText } from 'lucide-react';
import StatCard from '../components/StatCard';

const facultyAssignments = [
  { name: 'Dr. Alexandra Deff', role: 'Computer Science Dept.', status: 'Assigned', color: 'bg-emerald-500', img: 'https://picsum.photos/seed/alex/100/100' },
  { name: 'Prof. Edwin Adenike', role: 'Mechanical Engineering', status: 'Overloaded', color: 'bg-amber-500', img: 'https://picsum.photos/seed/edwin/100/100' },
  { name: 'Dr. Isaac Oluwatemilorun', role: 'Physics Laboratory', status: 'Pending', color: 'bg-rose-500', img: 'https://picsum.photos/seed/isaac/100/100' },
  { name: 'Prof. David Oshodi', role: 'Mathematics Faculty', status: 'Assigned', color: 'bg-amber-500', img: 'https://picsum.photos/seed/david/100/100' },
];

const recentAllocations = [
  { name: 'Main Auditorium A1', date: 'Feb 26, 2024', icon: '🏛️', color: 'text-blue-500' },
  { name: 'Chemistry Lab 302', date: 'Feb 28, 2024', icon: '🧪', color: 'text-emerald-500' },
  { name: 'IT Center Server Room', date: 'Feb 29, 2024', icon: '💻', color: 'text-amber-500' },
  { name: 'Library Study Wing', date: 'Mar 02, 2024', icon: '📚', color: 'text-orange-500' },
  { name: 'Sports Complex Hall', date: 'Mar 05, 2024', icon: '🏀', color: 'text-indigo-500' },
];

export default function Overview() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Resource Allocation</h1>
          <p className="text-sm text-slate-400">Manage campus facilities, faculty load, and departmental budgets.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-primary">
            <Plus size={18} />
            <span>New Request</span>
          </button>
          <button className="btn-outline">
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="flex gap-6 overflow-x-auto pb-2">
        <StatCard title="Total Facilities" value="142" change="3 new added this term" isPrimary />
        <StatCard title="Active Bookings" value="86" change="Increased from last week" />
        <StatCard title="Faculty Load" value="92%" change="Average across departments" />
        <StatCard title="Pending Requests" value="14" change="Awaiting approval" />
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Resource Utilization */}
        <div className="col-span-12 lg:col-span-5 card">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-900">Resource Utilization</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-brand-primary" />
                <span className="text-[10px] text-slate-400">Peak: 88%</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between h-48 px-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={day} className="flex flex-col items-center gap-3 group">
                <div className="relative w-8 bg-slate-50 rounded-full overflow-hidden h-32">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${[20, 75, 85, 95, 80, 65, 30][i]}%` }}
                    className={`absolute bottom-0 w-full rounded-full transition-all ${
                      i === 3 ? 'bg-brand-primary' : 
                      i > 4 ? 'bg-slate-200 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,white_2px,white_4px)]' : 
                      'bg-brand-primary/40'
                    } group-hover:bg-brand-primary`}
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-400">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Allocation Alerts */}
        <div className="col-span-12 lg:col-span-3 card flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900 mb-6">Urgent Alerts</h3>
            <div className="space-y-1">
              <p className="text-lg font-bold text-slate-900 leading-tight">Lab Capacity Warning</p>
              <p className="text-xs text-slate-400">Chemistry Wing: 98% Occupancy</p>
            </div>
          </div>
          <button className="w-full bg-brand-primary text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-brand-secondary transition-colors mt-6">
            <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center">
              <FileText size={12} className="text-white" />
            </div>
            <span>Review Allocation</span>
          </button>
        </div>

        {/* Active Allocations */}
        <div className="col-span-12 lg:col-span-4 card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900">Active Bookings</h3>
            <button className="flex items-center gap-1 text-[10px] font-bold text-slate-400 border border-slate-100 px-2 py-1 rounded-lg hover:bg-slate-50">
              <Plus size={12} />
              <span>New</span>
            </button>
          </div>
          <div className="space-y-4">
            {recentAllocations.map((item) => (
              <div key={item.name} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-lg ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-brand-primary transition-colors">{item.name}</p>
                    <p className="text-[10px] text-slate-400">Reserved: {item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Departmental Oversight */}
        <div className="col-span-12 lg:col-span-6 card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900">Faculty Assignments</h3>
            <button className="flex items-center gap-1 text-[10px] font-bold text-slate-400 border border-slate-100 px-2 py-1 rounded-lg hover:bg-slate-50">
              <Plus size={12} />
              <span>Assign</span>
            </button>
          </div>
          <div className="space-y-6">
            {facultyAssignments.map((member) => (
              <div key={member.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={member.img} alt={member.name} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">{member.name}</p>
                    <p className="text-[10px] text-slate-400">Dept: <span className="text-slate-600 font-medium">{member.role}</span></p>
                  </div>
                </div>
                <span className={`text-[10px] px-2 py-1 rounded-lg font-medium ${
                  member.status === 'Assigned' ? 'bg-emerald-50 text-emerald-600' : 
                  member.status === 'Pending' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {member.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Allocation */}
        <div className="col-span-12 lg:col-span-3 card">
          <h3 className="font-bold text-slate-900 mb-6">Budget Utilization</h3>
          <div className="relative flex items-center justify-center py-4">
            <svg className="w-40 h-24" viewBox="0 0 100 60">
              <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#F1F5F9" strokeWidth="12" strokeLinecap="round" />
              <path d="M 10 50 A 40 40 0 0 1 55 15" fill="none" stroke="#1A4D32" strokeWidth="12" strokeLinecap="round" strokeDasharray="125" strokeDashoffset="35" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2 text-center">
              <p className="text-3xl font-bold text-slate-900">68%</p>
              <p className="text-[10px] text-slate-400">Funds Allocated</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-brand-primary" />
              <span className="text-[10px] text-slate-400">Allocated</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-brand-secondary" />
              <span className="text-[10px] text-slate-400">Committed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-slate-200" />
              <span className="text-[10px] text-slate-400">Remaining</span>
            </div>
          </div>
        </div>


        {/* Session Monitor */}
        <div className="col-span-12 lg:col-span-3 card bg-brand-primary text-white border-none overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0, 50 0, 100 100" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M0 100 C 30 20, 60 20, 100 100" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <h3 className="text-xs font-medium text-white/70">Lab Session Timer</h3>
            <div className="py-6">
              <p className="text-4xl font-bold tracking-tight">00:45:12</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary hover:bg-white/90 transition-colors">
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-brand-primary rounded-full" />
                  <div className="w-1 h-3 bg-brand-primary rounded-full" />
                </div>
              </button>
              <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                <div className="w-3 h-3 bg-white rounded-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
