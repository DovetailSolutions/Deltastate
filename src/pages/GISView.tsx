import { useState } from "react";
import { Map as MapIcon, Layers, Search, Crosshair, AlertTriangle, CheckCircle } from "lucide-react";
import { clsx } from "clsx";

export function GISView() {
  const [activeLayer, setActiveLayer] = useState("parcels");

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">GIS & Land Records Integration</h1>
          <p className="text-sm text-slate-500">Validate survey coordinates and detect overlaps.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search Coordinates or Parcel ID..."
              className="h-9 w-64 rounded-md border border-slate-300 bg-white pl-9 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>
          <button className="flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800">
            <Crosshair className="h-4 w-4" />
            Locate
          </button>
        </div>
      </div>

      <div className="flex flex-1 gap-6 overflow-hidden">
        {/* Map Area (Mock) */}
        <div className="flex-1 bg-slate-200 rounded-xl shadow-sm border border-slate-300 relative overflow-hidden flex items-center justify-center">
          {/* Mock Map Background */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://picsum.photos/seed/map/1920/1080?blur=2")', backgroundSize: 'cover' }} />
          
          {/* Mock Grid */}
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          {/* Mock Parcels */}
          <div className="absolute top-1/4 left-1/4 w-32 h-48 border-2 border-emerald-500 bg-emerald-500/20 flex items-center justify-center">
            <span className="text-xs font-bold text-emerald-800">P-102</span>
          </div>
          <div className="absolute top-1/3 left-1/2 w-48 h-32 border-2 border-blue-500 bg-blue-500/20 flex items-center justify-center">
            <span className="text-xs font-bold text-blue-800">P-103</span>
          </div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 border-2 border-amber-500 bg-amber-500/20 flex items-center justify-center z-10">
            <span className="text-xs font-bold text-amber-800">Target Parcel</span>
          </div>
          <div className="absolute top-[45%] left-[30%] w-24 h-24 border-2 border-red-500 bg-red-500/40 flex items-center justify-center z-20">
            <span className="text-xs font-bold text-red-900 text-center">Overlap<br/>Detected</span>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="h-10 w-10 bg-white rounded-md shadow-sm border border-slate-200 flex items-center justify-center hover:bg-slate-50">
              <span className="text-lg font-bold text-slate-700">+</span>
            </button>
            <button className="h-10 w-10 bg-white rounded-md shadow-sm border border-slate-200 flex items-center justify-center hover:bg-slate-50">
              <span className="text-lg font-bold text-slate-700">-</span>
            </button>
            <button className="h-10 w-10 bg-white rounded-md shadow-sm border border-slate-200 flex items-center justify-center hover:bg-slate-50 mt-4">
              <Layers className="h-5 w-5 text-slate-700" />
            </button>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-md shadow-sm border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Legend</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-emerald-500 bg-emerald-500/20" />
                <span className="text-xs text-slate-700">Registered Parcel</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-amber-500 bg-amber-500/20" />
                <span className="text-xs text-slate-700">Target Application</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-red-500 bg-red-500/40" />
                <span className="text-xs text-slate-700">Overlap / Conflict</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Panel */}
        <div className="w-80 flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50">
            <h2 className="text-sm font-semibold text-slate-800">Validation Results</h2>
            <p className="text-xs text-slate-500 mt-1">Application: CO-2023-8922</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            
            {/* Coordinates */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Submitted Coordinates</h3>
              <div className="bg-slate-50 p-3 rounded-md border border-slate-200 font-mono text-xs text-slate-700 space-y-1">
                <p>Pt 1: 6.2059° N, 6.6959° E</p>
                <p>Pt 2: 6.2061° N, 6.6959° E</p>
                <p>Pt 3: 6.2061° N, 6.6962° E</p>
                <p>Pt 4: 6.2059° N, 6.6962° E</p>
              </div>
            </div>

            {/* Checks */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Automated Checks</h3>
              
              <div className="flex items-start gap-3 p-3 rounded-md border border-emerald-200 bg-emerald-50">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-emerald-900">Zoning Compliance</h4>
                  <p className="text-xs text-emerald-700 mt-1">Parcel falls within designated Commercial zone as requested.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-md border border-emerald-200 bg-emerald-50">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-emerald-900">Encumbrance Check</h4>
                  <p className="text-xs text-emerald-700 mt-1">No existing mortgages or liens detected on this parcel.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-md border border-red-200 bg-red-50">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-red-900">Overlap Detected</h4>
                  <p className="text-xs text-red-700 mt-1">15% overlap with registered parcel P-102 (CO-2019-4412).</p>
                  <button className="mt-2 text-xs font-medium text-red-800 hover:text-red-900 underline">View Details</button>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-slate-200">
              <label htmlFor="gis-comment" className="block text-xs font-medium text-slate-700 mb-1">Surveyor's Note</label>
              <textarea
                id="gis-comment"
                rows={3}
                className="block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm border p-2 mb-3"
                placeholder="Enter validation notes..."
                defaultValue="Overlap detected on the North-West boundary. Requires physical site inspection to verify beacons."
              />
              <div className="flex gap-2">
                <button className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                  Flag Issue
                </button>
                <button className="flex-1 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700">
                  Override & Pass
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
