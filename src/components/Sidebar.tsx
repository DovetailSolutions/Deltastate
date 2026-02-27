import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Map, 
  CheckSquare, 
  Award, 
  Users, 
  Settings,
  LogOut
} from "lucide-react";
import { cn } from "../lib/utils";

const navigation = [
  { name: "Executive Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Applicant Portal", href: "/applicant", icon: FileText },
  { name: "Officer Workflow", href: "/officer", icon: CheckSquare },
  { name: "GIS & Land Records", href: "/gis", icon: Map },
  { name: "Digital Certificate", href: "/certificate", icon: Award },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full w-64 flex-col bg-slate-900">
      <div className="flex h-16 shrink-0 items-center px-6 bg-slate-950">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-emerald-500 flex items-center justify-center">
            <Map className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">Delta C of O</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-3 py-4">
          <div className="mb-4 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Modules
          </div>
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  isActive
                    ? "bg-slate-800 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white",
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
                )}
              >
                <item.icon
                  className={cn(
                    isActive ? "text-emerald-400" : "text-slate-400 group-hover:text-emerald-400",
                    "mr-3 h-5 w-5 flex-shrink-0 transition-colors"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex shrink-0 border-t border-slate-800 p-4">
        <a href="#" className="group block w-full flex-shrink-0">
          <div className="flex items-center">
            <div>
              <div className="inline-block h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center">
                <Users className="h-5 w-5 text-slate-400" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs font-medium text-slate-400 group-hover:text-slate-300">
                Super Admin
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
