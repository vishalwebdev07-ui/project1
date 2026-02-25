import { 
  Wallet, 
  TrendingUp, 
  PieChart, 
  ArrowUpRight, 
  ArrowDownRight, 
  DollarSign, 
  Calendar, 
  Filter, 
  Download,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

const budgetStats = [
  { label: 'Total Budget', value: '$2.4M', icon: Wallet, color: 'text-blue-600', bg: 'bg-blue-50', trend: '+4.5%', isUp: true },
  { label: 'Total Spent', value: '$1.8M', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '+12%', isUp: true },
  { label: 'Committed', value: '$420K', icon: CheckCircle2, color: 'text-amber-600', bg: 'bg-amber-50', trend: '-2%', isUp: false },
  { label: 'Remaining', value: '$180K', icon: PieChart, color: 'text-rose-600', bg: 'bg-rose-50', trend: '-8%', isUp: false },
];

const departmentalSpending = [
  { id: 1, name: 'Computer Science', budget: 500000, spent: 425000, progress: 85, status: 'On Track' },
  { id: 2, name: 'Mechanical Engineering', budget: 650000, spent: 598000, progress: 92, status: 'Warning' },
  { id: 3, name: 'Natural Sciences', budget: 400000, spent: 240000, progress: 60, status: 'Under Budget' },
  { id: 4, name: 'Arts & Humanities', budget: 250000, spent: 112500, progress: 45, status: 'Under Budget' },
  { id: 5, name: 'Business School', budget: 350000, spent: 315000, progress: 90, status: 'On Track' },
];

const recentTransactions = [
  { id: 'TX-9021', desc: 'Lab Equipment Purchase', dept: 'Science', amount: '$12,400', date: 'Today', status: 'Approved' },
  { id: 'TX-9022', desc: 'Software Licenses', dept: 'CS', amount: '$8,200', date: 'Yesterday', status: 'Pending' },
  { id: 'TX-9023', desc: 'Conference Travel', dept: 'Arts', amount: '$2,100', date: 'Feb 24', status: 'Approved' },
];

export default function Budgeting() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Budgeting Dashboard</h1>
          <p className="text-sm text-slate-400">Manage departmental funds, track spending, and approve resource requests.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-outline">
            <Download size={18} />
            <span>Export CSV</span>
          </button>
          <button className="btn-primary">
            <DollarSign size={18} />
            <span>New Allocation</span>
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {budgetStats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-bold ${stat.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stat.isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {stat.trend}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Departmental Spending */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Departmental Allocations</h2>
            <div className="flex items-center gap-3">
              <button className="p-2 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-600">
                <Filter size={16} />
              </button>
              <button className="p-2 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-600">
                <Calendar size={16} />
              </button>
            </div>
          </div>

          <div className="card p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="px-6 py-4 font-bold text-slate-400 text-[10px] uppercase tracking-wider">Department</th>
                    <th className="px-6 py-4 font-bold text-slate-400 text-[10px] uppercase tracking-wider">Budget vs Spent</th>
                    <th className="px-6 py-4 font-bold text-slate-400 text-[10px] uppercase tracking-wider">Utilization</th>
                    <th className="px-6 py-4 font-bold text-slate-400 text-[10px] uppercase tracking-wider text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {departmentalSpending.map((dept) => (
                    <tr key={dept.id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold text-slate-900">{dept.name}</p>
                        <p className="text-[10px] text-slate-400">ID: #DEPT-{dept.id}00</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-900">${(dept.spent / 1000).toFixed(0)}K / ${(dept.budget / 1000).toFixed(0)}K</span>
                          <span className="text-[10px] text-slate-400">Remaining: ${((dept.budget - dept.spent) / 1000).toFixed(0)}K</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="w-32 space-y-1.5">
                          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${dept.progress}%` }}
                              className={`h-full rounded-full ${
                                dept.progress > 90 ? 'bg-rose-500' : 
                                dept.progress > 70 ? 'bg-brand-primary' : 'bg-emerald-500'
                              }`}
                            />
                          </div>
                          <p className="text-[10px] font-bold text-slate-400">{dept.progress}% used</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={`text-[10px] px-2 py-1 rounded-lg font-bold ${
                          dept.status === 'Warning' ? 'bg-rose-50 text-rose-600' : 
                          dept.status === 'On Track' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                        }`}>
                          {dept.status}
                        </span>
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
          {/* Spending Trend Chart Placeholder */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900">Spending Trend</h3>
              <div className="flex items-center gap-1 text-emerald-600 text-[10px] font-bold">
                <TrendingUp size={12} />
                <span>+12%</span>
              </div>
            </div>
            <div className="h-32 flex items-end justify-between gap-1 px-2">
              {[30, 45, 60, 40, 85, 70, 95].map((h, i) => (
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
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map(m => (
                <span key={m} className="text-[8px] font-bold text-slate-400">{m}</span>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900">Recent Activity</h3>
              <button className="text-[10px] font-bold text-brand-primary">View All</button>
            </div>
            <div className="space-y-4">
              {recentTransactions.map((tx, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary/5 group-hover:text-brand-primary transition-all">
                    <DollarSign size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-xs font-bold text-slate-900 truncate">{tx.desc}</p>
                      <span className="text-xs font-bold text-slate-900">{tx.amount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-400">{tx.dept}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-200" />
                      <span className="text-[10px] text-slate-400">{tx.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card bg-brand-primary text-white border-none">
            <h3 className="font-bold mb-4">Budget Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl flex flex-col items-center gap-2 transition-all">
                <ArrowUpRight size={20} />
                <span className="text-[10px] font-bold">Request Fund</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl flex flex-col items-center gap-2 transition-all">
                <Download size={20} />
                <span className="text-[10px] font-bold">Reports</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
