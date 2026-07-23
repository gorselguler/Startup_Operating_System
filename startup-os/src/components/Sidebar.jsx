import { Link } from 'react-router-dom';
import { CheckSquare, Users, Book } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-slate-700">
        Startup OS
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link to="/tasks" className="flex items-center gap-3 p-2 rounded hover:bg-slate-700">
          <CheckSquare className="w-5 h-5" />
          <span>Tasks</span>
        </Link>
        <Link to="/crm" className="flex items-center gap-3 p-2 rounded hover:bg-slate-700">
          <Users className="w-5 h-5" />
          <span>CRM</span>
        </Link>
        <Link to="/wiki" className="flex items-center gap-3 p-2 rounded hover:bg-slate-700">
          <Book className="w-5 h-5" />
          <span>Wiki</span>
        </Link>
      </nav>
    </aside>
  );
}
