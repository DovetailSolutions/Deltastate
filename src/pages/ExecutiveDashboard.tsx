import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ArrowUpRight, ArrowDownRight, Users, FileText, CheckCircle, Clock } from "lucide-react";
import { clsx } from "clsx";

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 2000 },
  { name: "Apr", revenue: 2780 },
  { name: "May", revenue: 1890 },
  { name: "Jun", revenue: 2390 },
  { name: "Jul", revenue: 3490 },
];

const applicationVolume = [
  { name: "Week 1", submitted: 400, approved: 240 },
  { name: "Week 2", submitted: 300, approved: 139 },
  { name: "Week 3", submitted: 200, approved: 980 },
  { name: "Week 4", submitted: 278, approved: 390 },
];

const bottleneckData = [
  { name: "Lands Registry", value: 400 },
  { name: "Survey Dept", value: 300 },
  { name: "Physical Planning", value: 300 },
  { name: "Legal Review", value: 200 },
];

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"];

const stats = [
  {
    name: "Total Applications",
    value: "12,345",
    change: "+12%",
    trend: "up",
    icon: FileText,
  },
  {
    name: "C of O Issued",
    value: "8,234",
    change: "+18%",
    trend: "up",
    icon: CheckCircle,
  },
  {
    name: "Avg Processing Time",
    value: "14 Days",
    change: "-5%",
    trend: "down",
    icon: Clock,
  },
  {
    name: "Revenue Generated",
    value: "₦450M",
    change: "+24%",
    trend: "up",
    icon: Users,
  },
];

export function ExecutiveDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Executive Dashboard</h1>
        <div className="flex items-center gap-2">
          <select className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>Last 30 Days</option>
            <option>Last Quarter</option>
            <option>Year to Date</option>
          </select>
          <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-slate-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 truncate">{stat.name}</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">{stat.value}</p>
              </div>
              <div className="rounded-full bg-slate-50 p-3">
                <stat.icon className="h-6 w-6 text-slate-400" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              {stat.trend === "up" ? (
                <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
              ) : (
                <ArrowDownRight className="mr-1 h-4 w-4 text-emerald-500" />
              )}
              <span className="font-medium text-emerald-600">{stat.change}</span>
              <span className="ml-2 text-slate-500">from previous period</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Revenue Generation (₦ Millions)</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#64748b" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b" }} />
                <Tooltip
                  contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Application Volume</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={applicationVolume}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#64748b" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b" }} />
                <Tooltip
                  contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                />
                <Bar dataKey="submitted" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="approved" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100 lg:col-span-1">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Bottleneck Heatmap (Pending Tasks)</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={bottleneckData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {bottleneckData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {bottleneckData.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                <span className="text-xs text-slate-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100 lg:col-span-2">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Recent Approvals</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tracking ID</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Applicant</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">LGA</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {[
                  { id: "CO-2023-8921", name: "Okonkwo Enterprises", lga: "Oshimili South", status: "Issued", date: "Oct 24, 2023" },
                  { id: "CO-2023-8922", name: "Jane Doe", lga: "Warri South", status: "Executive Approval", date: "Oct 24, 2023" },
                  { id: "CO-2023-8923", name: "Delta Housing Corp", lga: "Ughelli North", status: "Fee Assessment", date: "Oct 23, 2023" },
                  { id: "CO-2023-8924", name: "Michael Smith", lga: "Sapele", status: "GIS Validation", date: "Oct 23, 2023" },
                ].map((app) => (
                  <tr key={app.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-emerald-600">{app.id}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-900">{app.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{app.lga}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span className={clsx(
                        "inline-flex rounded-full px-2 text-xs font-semibold leading-5",
                        app.status === "Issued" ? "bg-emerald-100 text-emerald-800" :
                        app.status === "Executive Approval" ? "bg-blue-100 text-blue-800" :
                        "bg-amber-100 text-amber-800"
                      )}>
                        {app.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{app.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
