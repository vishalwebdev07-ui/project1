import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Overview from './pages/Overview';
import Facilities from './pages/Facilities';
import FacultyLoad from './pages/FacultyLoad';
import Budgeting from './pages/Budgeting';
import Departments from './pages/Departments';

export default function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-surface">
        <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
        
        <main className="flex-1 flex flex-col min-w-0">
          <TopBar />
          
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/faculty-load" element={<FacultyLoad />} />
            <Route path="/budgeting" element={<Budgeting />} />
            <Route path="/departments" element={<Departments />} />
            {/* Fallback for other routes */}
            <Route path="*" element={<Overview />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
