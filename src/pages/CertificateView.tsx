import { Download, Printer, Share2, CheckCircle, ShieldCheck } from "lucide-react";

export function CertificateView() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Digital Certificate Generator</h1>
          <p className="text-sm text-slate-500">Preview and issue the final Certificate of Occupancy.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
            <Printer className="h-4 w-4" />
            Print
          </button>
          <button className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
            <Download className="h-4 w-4" />
            Download PDF
          </button>
          <button className="flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700">
            <Share2 className="h-4 w-4" />
            Issue to Applicant
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Certificate Preview */}
        <div className="flex-1 bg-white p-12 rounded-xl shadow-lg border border-slate-200 relative overflow-hidden aspect-[1/1.414] max-w-2xl mx-auto">
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <div className="w-96 h-96 rounded-full border-[20px] border-emerald-900 flex items-center justify-center">
              <span className="text-6xl font-black text-emerald-900 transform -rotate-45">DELTA STATE</span>
            </div>
          </div>

          {/* Border */}
          <div className="absolute inset-6 border-4 border-double border-emerald-800 pointer-events-none" />
          <div className="absolute inset-8 border border-emerald-800/30 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full text-center px-8 py-12">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center border-2 border-emerald-600">
                <ShieldCheck className="w-12 h-12 text-emerald-700" />
              </div>
              <h1 className="text-3xl font-serif font-bold text-emerald-900 uppercase tracking-widest">Delta State Government</h1>
              <h2 className="text-xl font-serif text-emerald-800 mt-2">Federal Republic of Nigeria</h2>
            </div>

            <div className="mb-12">
              <h3 className="text-4xl font-serif font-black text-slate-900 uppercase tracking-widest border-y-2 border-emerald-800 py-4 inline-block px-8">
                Certificate of Occupancy
              </h3>
            </div>

            <div className="text-left space-y-6 text-slate-800 font-serif leading-relaxed flex-1">
              <p className="text-lg">
                This is to certify that <span className="font-bold border-b border-slate-400 pb-1 px-2">OKONKWO ENTERPRISES LTD</span> 
                is entitled to a right of occupancy in and over the land described below:
              </p>
              
              <div className="pl-6 border-l-2 border-emerald-200 space-y-2">
                <p><span className="font-semibold w-32 inline-block">Location:</span> Plot 45, Asaba GRA Phase 2, Oshimili South LGA</p>
                <p><span className="font-semibold w-32 inline-block">Size:</span> 1,200 Square Meters</p>
                <p><span className="font-semibold w-32 inline-block">Purpose:</span> Commercial</p>
                <p><span className="font-semibold w-32 inline-block">Term:</span> 99 Years commencing from 24th October 2023</p>
              </div>

              <p className="text-lg mt-6">
                Subject to the provisions of the Land Use Act 1978 and the conditions stipulated in the attached schedule.
              </p>
            </div>

            <div className="mt-12 flex justify-between items-end border-t border-slate-200 pt-8">
              <div className="text-left">
                <div className="w-32 h-32 bg-slate-100 border border-slate-300 flex items-center justify-center p-2">
                  {/* Mock QR Code */}
                  <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-contain bg-no-repeat bg-center opacity-80" />
                </div>
                <p className="text-xs text-slate-500 mt-2 font-mono">Scan to verify authenticity</p>
                <p className="text-xs font-bold text-slate-700 font-mono mt-1">Cert No: DT/CO/2023/8921</p>
              </div>

              <div className="text-center w-64">
                <div className="h-16 border-b border-slate-400 mb-2 flex items-end justify-center pb-2">
                  <span className="font-signature text-3xl text-blue-900 italic transform -rotate-6">E. Approver</span>
                </div>
                <p className="font-bold text-slate-900 uppercase text-sm">Executive Governor</p>
                <p className="text-xs text-slate-600">Delta State</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="w-80 flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              Certificate Details
            </h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-xs font-medium text-slate-500">Certificate Number</dt>
                <dd className="mt-1 text-sm font-mono font-bold text-slate-900">DT/CO/2023/8921</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Date of Issue</dt>
                <dd className="mt-1 text-sm text-slate-900">October 24, 2023</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Blockchain Hash</dt>
                <dd className="mt-1 text-xs font-mono text-emerald-600 truncate bg-emerald-50 p-1 rounded border border-emerald-100">0x7a9b...4f2e</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              Verification Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">Digital Signature Valid</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">QR Code Generated</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">Archived to Registry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
