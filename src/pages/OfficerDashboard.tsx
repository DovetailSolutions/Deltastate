import { useState } from "react";
import { Search, Filter, CheckCircle, XCircle, AlertTriangle, FileText, Map, User } from "lucide-react";
import { clsx } from "clsx";

const applications = [
  {
    id: "CO-2023-8921",
    applicant: "Okonkwo Enterprises",
    lga: "Oshimili South",
    date: "Oct 24, 2023",
    status: "Pending Review",
    sla: "2 days left",
    priority: "High",
  },
  {
    id: "CO-2023-8922",
    applicant: "Jane Doe",
    lga: "Warri South",
    date: "Oct 24, 2023",
    status: "Query Sent",
    sla: "Overdue",
    priority: "Medium",
  },
  {
    id: "CO-2023-8923",
    applicant: "Delta Housing Corp",
    lga: "Ughelli North",
    date: "Oct 23, 2023",
    status: "Pending Review",
    sla: "4 days left",
    priority: "Low",
  },
  {
    id: "CO-2023-8924",
    applicant: "Michael Smith",
    lga: "Sapele",
    date: "Oct 23, 2023",
    status: "Approved",
    sla: "Completed",
    priority: "Medium",
  },
];

export function OfficerDashboard() {
  const [selectedApp, setSelectedApp] = useState(applications[0]);

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Lands Registry Workflow</h1>
          <p className="text-sm text-slate-500">Manage and review incoming C of O applications.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search ID or Applicant..."
              className="h-9 w-64 rounded-md border border-slate-300 bg-white pl-9 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>
          <button className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="flex flex-1 gap-6 overflow-hidden">
        {/* List View */}
        <div className="w-1/3 flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <h2 className="text-sm font-semibold text-slate-800">Queue (12)</h2>
            <span className="text-xs font-medium text-slate-500">Sorted by: SLA Priority</span>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-slate-100">
              {applications.map((app) => (
                <li
                  key={app.id}
                  onClick={() => setSelectedApp(app)}
                  className={clsx(
                    "p-4 hover:bg-slate-50 cursor-pointer transition-colors",
                    selectedApp.id === app.id ? "bg-emerald-50 border-l-4 border-emerald-500" : "border-l-4 border-transparent"
                  )}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-semibold text-slate-900">{app.id}</span>
                    <span className={clsx(
                      "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                      app.sla === "Overdue" ? "bg-red-100 text-red-800" :
                      app.sla === "Completed" ? "bg-emerald-100 text-emerald-800" :
                      "bg-amber-100 text-amber-800"
                    )}>
                      {app.sla}
                    </span>
                  </div>
                  <div className="text-sm text-slate-600 mb-2">{app.applicant}</div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{app.lga}</span>
                    <span>{app.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detail View */}
        <div className="flex-1 flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-xl font-bold text-slate-900">{selectedApp.id}</h2>
                <span className={clsx(
                  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                  selectedApp.status === "Approved" ? "bg-emerald-100 text-emerald-800" :
                  selectedApp.status === "Query Sent" ? "bg-red-100 text-red-800" :
                  "bg-blue-100 text-blue-800"
                )}>
                  {selectedApp.status}
                </span>
              </div>
              <p className="text-sm text-slate-500">Submitted on {selectedApp.date}</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Raise Query
              </button>
              <button className="flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-700">
                <CheckCircle className="h-4 w-4" />
                Approve & Forward
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-2 gap-8">
              {/* Applicant Info */}
              <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                  Applicant Details
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Name / Company</dt>
                    <dd className="mt-1 text-sm text-slate-900">{selectedApp.applicant}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">NIN / RC Number</dt>
                    <dd className="mt-1 text-sm text-slate-900">RC-12345678</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Contact Email</dt>
                    <dd className="mt-1 text-sm text-slate-900">contact@{selectedApp.applicant.toLowerCase().replace(' ', '')}.com</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Phone Number</dt>
                    <dd className="mt-1 text-sm text-slate-900">+234 800 123 4567</dd>
                  </div>
                </dl>
              </div>

              {/* Property Info */}
              <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                  Property Details
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Address</dt>
                    <dd className="mt-1 text-sm text-slate-900">Plot 45, Asaba GRA Phase 2</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">LGA</dt>
                    <dd className="mt-1 text-sm text-slate-900">{selectedApp.lga}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Size & Purpose</dt>
                    <dd className="mt-1 text-sm text-slate-900">1,200 sqm • Commercial</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Coordinates</dt>
                    <dd className="mt-1 text-sm text-slate-900 font-mono">6.2059° N, 6.6959° E</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                Uploaded Documents
              </h3>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Survey Plan", status: "Verified", icon: Map },
                  { name: "Deed of Transfer", status: "Pending", icon: FileText },
                  { name: "Tax Clearance", status: "Verified", icon: FileText },
                  { name: "Applicant ID", status: "Verified", icon: User },
                ].map((doc) => (
                  <li key={doc.name} className="col-span-1 flex rounded-md shadow-sm border border-slate-200">
                    <div className="flex w-12 flex-shrink-0 items-center justify-center rounded-l-md bg-slate-100 border-r border-slate-200">
                      <doc.icon className="h-5 w-5 text-slate-500" />
                    </div>
                    <div className="flex flex-1 items-center justify-between rounded-r-md bg-white truncate">
                      <div className="flex-1 px-4 py-2 text-sm truncate">
                        <a href="#" className="font-medium text-slate-900 hover:text-emerald-600">
                          {doc.name}.pdf
                        </a>
                        <p className="text-slate-500 text-xs">{doc.status}</p>
                      </div>
                      <div className="pr-2">
                        {doc.status === "Verified" ? (
                          <CheckCircle className="h-5 w-5 text-emerald-500" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-amber-500" />
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                Audit Trail & Comments
              </h3>
              <div className="flow-root">
                <ul className="-mb-8">
                  {[
                    { id: 1, content: "Application submitted by applicant", date: "Oct 24, 2023 09:00 AM", icon: FileText, iconBg: "bg-slate-400" },
                    { id: 2, content: "Automated completeness check passed", date: "Oct 24, 2023 09:05 AM", icon: CheckCircle, iconBg: "bg-emerald-500" },
                    { id: 3, content: "Assigned to Lands Registry Officer (John Doe)", date: "Oct 24, 2023 09:10 AM", icon: User, iconBg: "bg-blue-500" },
                  ].map((event, eventIdx) => (
                    <li key={event.id}>
                      <div className="relative pb-8">
                        {eventIdx !== 2 ? (
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-slate-200" aria-hidden="true" />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className={clsx(event.iconBg, "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white")}>
                              <event.icon className="h-4 w-4 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p className="text-sm text-slate-500">{event.content}</p>
                            </div>
                            <div className="whitespace-nowrap text-right text-sm text-slate-500">
                              <time dateTime={event.date}>{event.date}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex gap-3">
                <div className="flex-shrink-0">
                  <div className="inline-block h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-slate-500" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <form action="#">
                    <div>
                      <label htmlFor="comment" className="sr-only">About</label>
                      <textarea
                        id="comment"
                        name="comment"
                        rows={3}
                        className="block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-3"
                        placeholder="Add a comment or note..."
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                      >
                        Post Comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
