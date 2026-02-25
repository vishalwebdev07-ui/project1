import { 
  Users2, 
  Clock, 
  BookOpen, 
  Search, 
  Filter, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp,
  MoreVertical,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';

const facultyStats = [
  { label: 'Total Faculty', value: '128', icon: Users2, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Avg. Weekly Load', value: '18.5h', icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Overloaded', value: '14', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
  { label: 'Research Hours', value: '420h', icon: BookOpen, color: 'text-amber-600', bg: 'bg-amber-50' },
];

const facultyData = [
  { id: 1, name: 'Dr. Alexandra Deff', dept: 'Computer Science', load: 18, maxLoad: 20, status: 'Optimal', img: 'https://picsum.photos/seed/alex/100/100' },
  { id: 2, name: 'Prof. Edwin Adenike', dept: 'Mechanical Engineering', load: 24, maxLoad: 20, status: 'Overloaded', img: 'https://picsum.photos/seed/edwin/100/100' },
  { id: 3, name: 'Dr. Isaac Oluwatemilorun', dept: 'Physics', load: 12, maxLoad: 20, status: 'Underloaded', img: 'https://picsum.photos/seed/isaac/100/100' },
  { id: 4, name: 'Prof. David Oshodi', dept: 'Mathematics', load: 20, maxLoad: 20, status: 'Optimal', img: 'https://picsum.photos/seed/david/100/100' },
  { id: 5, name: 'Dr. Sarah Johnson', dept: 'Computer Science', load: 16, maxLoad: 20, status: 'Optimal', img: 'https://picsum.photos/seed/sarah/100/100' },
  { id: 6, name: 'Prof. Michael Chen', dept: 'Engineering', load: 22, maxLoad: 20, status: 'Overloaded', img: 'https://picsum.photos/seed/michael/100/100' },
];

const upcomingReviews = [
  { name: 'Dr. Robert Wilson', dept: 'Physics', date: 'Mar 05', type: 'Annual Review' },
  { name: 'Prof. Elena Rodriguez', dept: 'Mathematics', date: 'Mar 12', type: 'Load Adjustment' },
  { name: 'Dr. James Smith', dept: 'CS', date: 'Mar 15', type: 'Tenure Review' },
];

export default function FacultyLoad() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Faculty Load Dashboard</h1>
          <p className="text-sm text-slate-400">Monitor teaching hours, research allocations, and staff distribution.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-outline">
            <Calendar size={18} />
            <span>Schedule Review</span>
          </button>
          <button className="btn-primary">
            <Users2 size={18} />
            <span>Add Faculty</span>
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facultyStats.map((stat, i) => (
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
        {/* Faculty Table */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Faculty Distribution</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                <input 
                  type="text" 
                  placeholder="Search faculty..." 
                  className="bg-white border border-slate-100 rounded-xl py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary/20 w-48"
                />
              </div>
              <button className="p-2 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-600">
                <Filter size={16} />
              </button>
            </div>
          </div>

          <div className="card overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="px-6 py-4 font-bold text-slate-400 text-[10px] uppercase tracking-wider">Faculty Member</th>
                    <th className="px-6 py-4 font-bold text-slate-400 text-[10px] uppercase tracking-wider">Department</th>
                    <th className="px-6 py-4 font-bold text-slate-400 text-[10px] uppercase tracking-wider">Load Status</th>
                    <th className="px-6 py-4 font-bold text-slate-400 text-[10px] uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {facultyData.map((member) => (
                    <tr key={member.id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={member.img} alt="" className="w-10 h-10 rounded-full border border-slate-100" referrerPolicy="no-referrer" />
                          <div>
                            <p className="text-sm font-bold text-slate-900">{member.name}</p>
                            <p className="text-[10px] text-slate-400">ID: #FAC-{member.id}024</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs text-slate-600 font-medium">{member.dept}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1.5 w-40">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className={`font-bold ${
                              member.status === 'Overloaded' ? 'text-rose-600' : 
                              member.status === 'Underloaded' ? 'text-amber-600' : 'text-emerald-600'
                            }`}>{member.load}h / {member.maxLoad}h</span>
                            <span className="text-slate-400">{Math.round((member.load / member.maxLoad) * 100)}%</span>
                          </div>
                          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${(member.load / member.maxLoad) * 100}%` }}
                              className={`h-full rounded-full ${
                                member.status === 'Overloaded' ? 'bg-rose-500' : 
                                member.status === 'Underloaded' ? 'bg-amber-500' : 'bg-emerald-500'
                              }`}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 text-slate-300 hover:text-slate-600">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Components */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Upcoming Reviews */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900">Upcoming Reviews</h3>
              <button className="text-[10px] font-bold text-brand-primary">View All</button>
            </div>
            <div className="space-y-4">
              {upcomingReviews.map((review, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary/5 group-hover:text-brand-primary transition-all">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{review.name}</p>
                    <p className="text-[10px] text-slate-400">{review.type} • {review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load Distribution Chart */}
          <div className="card">
            <h3 className="font-bold text-slate-900 mb-6">Load Distribution</h3>
            <div className="space-y-4">
              {[
                { label: 'Teaching', value: 65, color: 'bg-brand-primary' },
                { label: 'Research', value: 25, color: 'bg-brand-secondary' },
                { label: 'Admin', value: 10, color: 'bg-slate-200' },
              ].map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-bold text-slate-600">{item.label}</span>
                    <span className="text-slate-400">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      className={`h-full rounded-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-500" />
                <span className="text-[10px] font-bold text-slate-900">+4.5% efficiency</span>
              </div>
              <button className="text-[10px] font-bold text-brand-primary">Full Report</button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card bg-brand-primary text-white border-none">
            <h3 className="font-bold mb-4">Staff Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl flex flex-col items-center gap-2 transition-all">
                <Users2 size={20} />
                <span className="text-[10px] font-bold">New Hire</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl flex flex-col items-center gap-2 transition-all">
                <Clock size={20} />
                <span className="text-[10px] font-bold">Adjust Load</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
