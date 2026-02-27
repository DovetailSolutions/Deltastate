import { useState } from "react";
import { Upload, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { clsx } from "clsx";

const steps = [
  { id: 1, name: "Application Submitted", status: "complete" },
  { id: 2, name: "Document Verification", status: "current" },
  { id: 3, name: "GIS Validation", status: "upcoming" },
  { id: 4, name: "Fee Assessment", status: "upcoming" },
  { id: 5, name: "Executive Approval", status: "upcoming" },
  { id: 6, name: "Certificate Issuance", status: "upcoming" },
];

export function ApplicantPortal() {
  const [activeTab, setActiveTab] = useState("new");

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Applicant Portal</h1>
      </div>

      <div className="border-b border-slate-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab("new")}
            className={clsx(
              activeTab === "new"
                ? "border-emerald-500 text-emerald-600"
                : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700",
              "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
            )}
          >
            New Application
          </button>
          <button
            onClick={() => setActiveTab("track")}
            className={clsx(
              activeTab === "track"
                ? "border-emerald-500 text-emerald-600"
                : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700",
              "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
            )}
          >
            Track Status
          </button>
        </nav>
      </div>

      {activeTab === "new" && (
        <div className="bg-white shadow-sm rounded-xl border border-slate-100 overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-slate-900">Submit C of O Application</h3>
            <p className="mt-1 text-sm text-slate-500">
              Please fill in the details below and upload the required documents.
            </p>

            <form className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="applicant-name" className="block text-sm font-medium text-slate-700">
                  Applicant Full Name / Company Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="applicant-name"
                    id="applicant-name"
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="nin-bvn" className="block text-sm font-medium text-slate-700">
                  NIN / RC Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="nin-bvn"
                    id="nin-bvn"
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="property-address" className="block text-sm font-medium text-slate-700">
                  Property Address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="property-address"
                    id="property-address"
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="lga" className="block text-sm font-medium text-slate-700">
                  Local Government Area (LGA)
                </label>
                <div className="mt-1">
                  <select
                    id="lga"
                    name="lga"
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-2 bg-white"
                  >
                    <option>Oshimili South</option>
                    <option>Warri South</option>
                    <option>Ughelli North</option>
                    <option>Sapele</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="plot-size" className="block text-sm font-medium text-slate-700">
                  Plot Size (sqm)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="plot-size"
                    id="plot-size"
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="purpose" className="block text-sm font-medium text-slate-700">
                  Purpose of Use
                </label>
                <div className="mt-1">
                  <select
                    id="purpose"
                    name="purpose"
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-2 bg-white"
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Agricultural</option>
                    <option>Industrial</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Required Documents</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Survey Plan (PDF)",
                    "Deed of Transfer/Receipt (PDF)",
                    "Tax Clearance Certificate (PDF)",
                  ].map((doc) => (
                    <div key={doc} className="mt-1 flex justify-center rounded-md border-2 border-dashed border-slate-300 px-6 pt-5 pb-6 hover:border-emerald-500 transition-colors cursor-pointer bg-slate-50">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-8 w-8 text-slate-400" />
                        <div className="flex text-sm text-slate-600 justify-center">
                          <label className="relative cursor-pointer rounded-md font-medium text-emerald-600 hover:text-emerald-500">
                            <span>Upload {doc}</span>
                            <input type="file" className="sr-only" />
                          </label>
                        </div>
                        <p className="text-xs text-slate-500">PDF up to 10MB</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
          <div className="bg-slate-50 px-4 py-3 text-right sm:px-6 border-t border-slate-100">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Submit Application
            </button>
          </div>
        </div>
      )}

      {activeTab === "track" && (
        <div className="bg-white shadow-sm rounded-xl border border-slate-100 overflow-hidden p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-slate-900">Application Status</h3>
              <p className="mt-1 text-sm text-slate-500">Tracking ID: <span className="font-semibold text-slate-900">CO-2023-8922</span></p>
            </div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
              In Progress
            </span>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-between">
              {steps.map((step) => (
                <div key={step.name} className="flex flex-col items-center">
                  <div
                    className={clsx(
                      "flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-white",
                      step.status === "complete" ? "bg-emerald-600" :
                      step.status === "current" ? "bg-blue-600" :
                      "bg-slate-200"
                    )}
                  >
                    {step.status === "complete" ? (
                      <CheckCircle className="h-5 w-5 text-white" aria-hidden="true" />
                    ) : step.status === "current" ? (
                      <Clock className="h-5 w-5 text-white" aria-hidden="true" />
                    ) : (
                      <div className="h-2.5 w-2.5 rounded-full bg-transparent" />
                    )}
                  </div>
                  <p className={clsx(
                    "mt-2 text-xs font-medium text-center w-24",
                    step.status === "complete" ? "text-emerald-600" :
                    step.status === "current" ? "text-blue-600" :
                    "text-slate-500"
                  )}>
                    {step.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-md bg-blue-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Action Required</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    Your application is currently undergoing Document Verification. Please ensure your phone number is reachable in case the Lands Registry Officer needs to contact you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
