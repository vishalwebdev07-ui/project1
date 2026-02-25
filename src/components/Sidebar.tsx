import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  Users2, 
  PieChart, 
  GraduationCap, 
  Settings, 
  HelpCircle, 
  LogOut,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/' },
  { icon: Building2, label: 'Facilities', path: '/facilities', badge: 8 },
  { icon: Users2, label: 'Faculty Load', path: '/faculty-load' },
  { icon: PieChart, label: 'Budgeting', path: '/budgeting' },
  { icon: GraduationCap, label: 'Departments', path: '/departments' },
];

const generalItems = [
  { icon: Settings, label: 'System Config', path: '/settings' },
  { icon: HelpCircle, label: 'Support', path: '/support' },
  { icon: LogOut, label: 'Logout', path: '/logout' },
];

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  return (
    <motion.aside 
      initial={false}
      animate={{ width: isCollapsed ? 80 : 256 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="h-screen bg-white border-r border-slate-100 flex flex-col p-4 sticky top-0 z-30"
    >
      <div className="flex items-center justify-between mb-10 px-2">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="min-w-[32px] w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shrink-0">
            <BookOpen size={16} className="text-white" />
          </div>
          {!isCollapsed && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="text-xl font-bold text-slate-900 whitespace-nowrap"
            >
              UniAlloc
            </motion.span>
          )}
        </div>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <div className="flex-1 space-y-8 overflow-y-auto no-scrollbar">
        <div>
          {!isCollapsed && (
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Menu</p>
          )}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                title={isCollapsed ? item.label : ''}
                className={({ isActive }) => `w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-brand-primary/5 text-brand-primary font-semibold border-l-4 border-brand-primary rounded-l-none' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} className="shrink-0" />
                  {!isCollapsed && (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15 }}
                      className="text-sm whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </div>
                {!isCollapsed && item.badge && (
                  <span className="bg-brand-primary text-white text-[10px] px-1.5 py-0.5 rounded-md">
                    {item.badge}+
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          {!isCollapsed && (
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">General</p>
          )}
          <nav className="space-y-1">
            {generalItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                title={isCollapsed ? item.label : ''}
                className={({ isActive }) => `w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-brand-primary/5 text-brand-primary font-semibold border-l-4 border-brand-primary rounded-l-none' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <item.icon size={20} className="shrink-0" />
                {!isCollapsed && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className="text-sm whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-auto pt-4">
        {isCollapsed ? (
          <button 
            onClick={() => setIsCollapsed(false)}
            className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white hover:bg-brand-secondary transition-colors mx-auto"
          >
            <BookOpen size={20} />
          </button>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-primary rounded-2xl p-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap size={48} />
            </div>
            <div className="relative z-10">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                <BookOpen size={16} className="text-white" />
              </div>
              <p className="text-white text-xs font-semibold mb-1">Resource Guide</p>
              <p className="text-white/60 text-[10px] mb-3">Access policies</p>
              <button className="w-full bg-brand-secondary text-white text-[10px] py-2 rounded-lg font-bold hover:bg-brand-accent transition-colors">
                View PDF
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.aside>
  );
}
