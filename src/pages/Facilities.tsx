import { 
  Plus, 
  Building2, 
  MapPin, 
  Users, 
  Search, 
  Filter, 
  Wrench, 
  Zap, 
  Thermometer, 
  Clock,
  MoreVertical,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'motion/react';

const facilityStats = [
  { label: 'Total Facilities', value: '142', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Currently Occupied', value: '86', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Maintenance', value: '12', icon: Wrench, color: 'text-rose-600', bg: 'bg-rose-50' },
  { label: 'Energy Usage', value: '4.2kW', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
];

const facilities = [
  { id: 1, name: 'Main Auditorium A1', type: 'Lecture Hall', capacity: 500, status: 'Occupied', location: 'Central Block', temp: '22°C', energy: 'High' },
  { id: 2, name: 'Chemistry Lab 302', type: 'Laboratory', capacity: 30, status: 'Available', location: 'Science Wing', temp: '20°C', energy: 'Low' },
  { id: 3, name: 'IT Center Room 10', type: 'Computer Lab', capacity: 50, status: 'Maintenance', location: 'Tech Plaza', temp: '24°C', energy: 'Medium' },
  { id: 4, name: 'Library Study Wing', type: 'Study Area', capacity: 100, status: 'Available', location: 'North Campus', temp: '21°C', energy: 'Low' },
  { id: 5, name: 'Seminar Room 4', type: 'Meeting Room', capacity: 20, status: 'Occupied', location: 'Arts Building', temp: '23°C', energy: 'Medium' },
  { id: 6, name: 'Physics Hall B', type: 'Lecture Hall', capacity: 200, status: 'Available', location: 'Science Wing', temp: '21°C', energy: 'Low' },
];

const maintenanceSchedule = [
  { task: 'HVAC Filter Replacement', facility: 'IT Center', date: 'Tomorrow', priority: 'Medium' },
  { task: 'Projector Repair', facility: 'Auditorium A1', date: 'Feb 28', priority: 'High' },
  { task: 'Lab Equipment Calibration', facility: 'Chem Lab 302', date: 'Mar 02', priority: 'Low' },
];

export default function Facilities() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Facilities Dashboard</h1>
          <p className="text-sm text-slate-400">Real-time monitoring and management of campus infrastructure.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-outline">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="btn-primary">
            <Plus size={18} />
            <span>Add Facility</span>
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilityStats.map((stat, i) => (
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
        {/* Main Facility Grid */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Active Facilities</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search facilities..." 
                className="bg-white border border-slate-100 rounded-xl py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary/20 w-64"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility, i) => (
              <motion.div 
                key={facility.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="card group hover:border-brand-primary/20 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-brand-primary/5 group-hover:text-brand-primary transition-colors">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{facility.name}</h3>
                      <p className="text-[10px] text-slate-400">{facility.type}</p>
                    </div>
                  </div>
                  <button className="p-1 text-slate-300 hover:text-slate-600">
                    <MoreVertical size={16} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <MapPin size={12} className="text-slate-300" />
                    <span>{facility.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <Users size={12} className="text-slate-300" />
                    <span>Cap: {facility.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <Thermometer size={12} className="text-slate-300" />
                    <span>{facility.temp}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <Zap size={12} className="text-slate-300" />
                    <span>{facility.energy} Usage</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className={`text-[10px] px-2 py-1 rounded-lg font-bold ${
                    facility.status === 'Available' ? 'bg-emerald-50 text-emerald-600' : 
                    facility.status === 'Maintenance' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {facility.status}
                  </span>
                  <button className="text-[10px] font-bold text-brand-primary flex items-center gap-1 hover:underline">
                    View Details <ArrowUpRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Components */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Maintenance Schedule */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900">Maintenance</h3>
              <button className="text-[10px] font-bold text-brand-primary">View All</button>
            </div>
            <div className="space-y-4">
              {maintenanceSchedule.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className={`p-2 rounded-xl shrink-0 ${
                    item.priority === 'High' ? 'bg-rose-50 text-rose-600' : 
                    item.priority === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    <Wrench size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{item.task}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-slate-400">{item.facility}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-200" />
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Clock size={10} /> {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card bg-brand-primary text-white border-none">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl flex flex-col items-center gap-2 transition-all">
                <Plus size={20} />
                <span className="text-[10px] font-bold">Book Room</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl flex flex-col items-center gap-2 transition-all">
                <Wrench size={20} />
                <span className="text-[10px] font-bold">Report Issue</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl flex flex-col items-center gap-2 transition-all">
                <Zap size={20} />
                <span className="text-[10px] font-bold">Energy Audit</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl flex flex-col items-center gap-2 transition-all">
                <Building2 size={20} />
                <span className="text-[10px] font-bold">Floor Plan</span>
              </button>
            </div>
          </div>

          {/* Usage Chart Placeholder */}
          <div className="card">
            <h3 className="font-bold text-slate-900 mb-6">Occupancy Trend</h3>
            <div className="h-32 flex items-end justify-between gap-1 px-2">
              {[40, 65, 45, 90, 75, 55, 40].map((h, i) => (
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
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
                <span key={d} className="text-[8px] font-bold text-slate-400">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
