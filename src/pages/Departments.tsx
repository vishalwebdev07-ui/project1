import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  ArrowUpRight,
  School,
  Award,
  BookMarked
} from 'lucide-react';
import { motion } from 'motion/react';

const deptStats = [
  { label: 'Total Faculties', value: '8', icon: School, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Total Students', value: '12,400', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Faculty Members', value: '840', icon: GraduationCap, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Active Courses', value: '320', icon: BookMarked, color: 'text-rose-600', bg: 'bg-rose-50' },
];

const departments = [
  { id: 1, name: 'Computer Science', head: 'Dr. Sarah Johnson', faculty: 45, students: 1200, research: 'AI & Data Science', rating: 4.8 },
  { id: 2, name: 'Mechanical Engineering', head: 'Prof. Michael Chen', faculty: 38, students: 850, research: 'Robotics', rating: 4.6 },
  { id: 3, name: 'Physics', head: 'Dr. Robert Wilson', faculty: 25, students: 400, research: 'Quantum Mechanics', rating: 4.9 },
  { id: 4, name: 'Mathematics', head: 'Prof. Elena Rodriguez', faculty: 30, students: 550, research: 'Applied Math', rating: 4.7 },
  { id: 5, name: 'Business School', head: 'Dr. David Miller', faculty: 55, students: 2100, research: 'Global Markets', rating: 4.5 },
  { id: 6, name: 'Natural Sciences', head: 'Prof. Lisa Wang', faculty: 42, students: 950, research: 'Biotechnology', rating: 4.6 },
];

const topPerformers = [
  { name: 'Dept. of Physics', metric: 'Research Output', value: '98%', trend: '+12%' },
  { name: 'Computer Science', metric: 'Student Placement', value: '95%', trend: '+5%' },
  { name: 'Engineering', metric: 'Grant Funding', value: '$2.4M', trend: '+18%' },
];

export default function Departments() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Departments Dashboard</h1>
          <p className="text-sm text-slate-400">Overview of university faculties, academic performance, and staff distribution.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-outline">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="btn-primary">
            <Plus size={18} />
            <span>Add Department</span>
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deptStats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card flex items-center gap-4"
          >
            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Department Grid */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Academic Units</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search departments..." 
                className="bg-white border border-slate-100 rounded-xl py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary/20 w-64"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, i) => (
              <motion.div 
                key={dept.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="card group hover:border-brand-primary/20 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-brand-primary/5 group-hover:text-brand-primary transition-colors">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{dept.name}</h3>
                      <p className="text-[10px] text-slate-400">Head: {dept.head}</p>
                    </div>
                  </div>
                  <button className="p-1 text-slate-300 hover:text-slate-600">
                    <MoreVertical size={16} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <Users size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Faculty</span>
                    </div>
                    <p className="text-lg font-bold text-slate-900">{dept.faculty}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <BookOpen size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Students</span>
                    </div>
                    <p className="text-lg font-bold text-slate-900">{dept.students}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-amber-500" />
                    <span className="text-[10px] font-bold text-slate-600">{dept.research}</span>
                  </div>
                  <button className="text-[10px] font-bold text-brand-primary flex items-center gap-1 hover:underline">
                    Details <ArrowUpRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Components */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Performance Highlights */}
          <div className="card">
            <h3 className="font-bold text-slate-900 mb-6">Performance Highlights</h3>
            <div className="space-y-4">
              {topPerformers.map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-slate-900">{item.name}</p>
                    <span className="text-emerald-600 text-[10px] font-bold">{item.trend}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] text-slate-400">{item.metric}</p>
                    <p className="text-sm font-bold text-brand-primary">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card bg-brand-primary text-white border-none">
            <h3 className="font-bold mb-4">Admin Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl flex flex-col items-center gap-2 transition-all">
                <School size={20} />
                <span className="text-[10px] font-bold">New Dept</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl flex flex-col items-center gap-2 transition-all">
                <Award size={20} />
                <span className="text-[10px] font-bold">Accreditation</span>
              </button>
            </div>
          </div>

          {/* Student Growth Chart Placeholder */}
          <div className="card">
            <h3 className="font-bold text-slate-900 mb-6">Student Growth</h3>
            <div className="h-32 flex items-end justify-between gap-1 px-2">
              {[20, 35, 50, 45, 60, 85, 95].map((h, i) => (
                <div key={i} className="flex-1 bg-slate-50 rounded-t-lg relative group">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    className="absolute bottom-0 w-full bg-brand-primary/20 group-hover:bg-brand-primary transition-all rounded-t-lg"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-3 px-1">
              {['2018', '2019', '2020', '2021', '2022', '2023', '2024'].map(y => (
                <span key={y} className="text-[8px] font-bold text-slate-400">{y}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
