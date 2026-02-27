import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Layers,
  Server,
  Database,
  Network,
  GitMerge,
  Monitor,
  ShieldCheck,
  Rocket,
  Banknote,
  Activity,
  Menu,
  X,
  Map as MapIcon,
  BarChart3,
  PieChart,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Search
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', title: 'Core Objectives', icon: LayoutDashboard },
  { id: 'rbac', title: 'User Roles (RBAC)', icon: Users },
  { id: 'modules', title: 'System Modules', icon: Layers },
  { id: 'architecture', title: 'Technical Architecture', icon: Server },
  { id: 'database', title: 'Database Schema', icon: Database },
  { id: 'api', title: 'API Endpoints', icon: Network },
  { id: 'workflow', title: 'Workflow Logic', icon: GitMerge },
  { id: 'ui', title: 'UI Page Structure', icon: Monitor },
  { id: 'analytics', title: 'Dashboard & Analytics', icon: BarChart3 },
  { id: 'security', title: 'Security Framework', icon: ShieldCheck },
  { id: 'deployment', title: 'Deployment Strategy', icon: Rocket },
  { id: 'monetization', title: 'Monetization Model', icon: Banknote },
  { id: 'scalability', title: 'Scalability & Risk', icon: Activity },
];

function InteractiveGISMap() {
  const [activeLayer, setActiveLayer] = useState('all');
  const [selectedParcel, setSelectedParcel] = useState<any>(null);

  const parcels = [
    { id: 'APP-2023-001', status: 'cleared', owner: 'John Doe', area: '1,200 sqm', zone: 'Residential', style: 'top-10 left-10 w-32 h-24 bg-emerald-400/40 border-emerald-500' },
    { id: 'APP-2023-089', status: 'cleared', owner: 'Acme Corp', area: '4,500 sqm', zone: 'Commercial', style: 'bottom-10 left-32 w-48 h-20 bg-emerald-400/40 border-emerald-500' },
    { id: 'APP-2023-142', status: 'pending', owner: 'Jane Smith', area: '850 sqm', zone: 'Residential', style: 'top-10 left-80 w-24 h-40 bg-amber-400/40 border-amber-500' },
    { id: 'APP-2023-205', status: 'conflict', owner: 'Delta Holdings', area: '2,100 sqm', zone: 'Commercial', style: 'top-40 left-64 w-40 h-32 bg-red-400/40 border-red-500', conflict: 'Overlaps with Govt Land by 15%' },
    { id: 'GOVT-ZONE-A', status: 'govt', owner: 'Delta State Govt', area: '15,000 sqm', zone: 'Public', style: 'bottom-20 right-10 w-64 h-48 bg-blue-400/20 border-blue-500 border-dashed' },
  ];

  const filteredParcels = parcels.filter(p => activeLayer === 'all' || p.status === activeLayer);

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50 shrink-0">
        <div>
          <h4 className="font-bold text-slate-900 flex items-center gap-2">
            <MapIcon size={18} className="text-indigo-600" />
            Interactive GIS Parcel Viewer
          </h4>
          <p className="text-xs text-slate-500 mt-1">Click on a parcel to view details and zoning conflicts.</p>
        </div>
        <div className="flex gap-2">
          <select 
            className="text-sm border border-slate-300 rounded-lg px-3 py-1.5 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={activeLayer}
            onChange={(e) => setActiveLayer(e.target.value)}
          >
            <option value="all">All Layers</option>
            <option value="cleared">Cleared Parcels</option>
            <option value="pending">Pending Survey</option>
            <option value="conflict">Conflicts / Overlaps</option>
            <option value="govt">Government Zones</option>
          </select>
        </div>
      </div>
      
      <div className="flex-1 flex relative overflow-hidden">
        {/* Map Area */}
        <div className="flex-1 relative bg-[#e5e3df] overflow-hidden" onClick={() => setSelectedParcel(null)}>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {filteredParcels.map((parcel) => (
            <div 
              key={parcel.id}
              onClick={(e) => { e.stopPropagation(); setSelectedParcel(parcel); }}
              className={`absolute border-2 rounded cursor-pointer transition-all duration-200 ${parcel.style} ${selectedParcel?.id === parcel.id ? 'ring-4 ring-indigo-500/50 z-10 scale-[1.02]' : 'hover:opacity-80'}`}
            >
              {parcel.status === 'conflict' && (
                <MapPin className="absolute -top-3 -right-3 text-red-600 drop-shadow-md animate-bounce" size={24} />
              )}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-slate-900/10">
                <span className="bg-slate-900 text-white text-xs px-2 py-1 rounded shadow-lg font-mono">{parcel.id}</span>
              </div>
            </div>
          ))}

          {/* Map Controls */}
          <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md border border-slate-200 p-1 flex flex-col gap-1">
            <button className="p-2 hover:bg-slate-100 rounded text-slate-600 font-bold">+</button>
            <button className="p-2 hover:bg-slate-100 rounded text-slate-600 font-bold">-</button>
          </div>
        </div>

        {/* Details Sidebar */}
        {selectedParcel && (
          <div className="w-72 bg-white border-l border-slate-200 p-5 overflow-y-auto shrink-0 animate-in slide-in-from-right-8 duration-300 shadow-xl z-20">
            <div className="flex justify-between items-start mb-4">
              <h5 className="font-bold text-slate-900">Parcel Details</h5>
              <button onClick={() => setSelectedParcel(null)} className="text-slate-400 hover:text-slate-600">
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Application ID</span>
                <p className="font-mono font-medium text-slate-900">{selectedParcel.id}</p>
              </div>
              
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Status</span>
                <div className="mt-1">
                  {selectedParcel.status === 'cleared' && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Cleared</span>}
                  {selectedParcel.status === 'pending' && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Pending Survey</span>}
                  {selectedParcel.status === 'conflict' && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Overlap Conflict</span>}
                  {selectedParcel.status === 'govt' && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Govt Zone</span>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Owner</span>
                  <p className="text-sm font-medium text-slate-900 mt-1">{selectedParcel.owner}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Area</span>
                  <p className="text-sm font-medium text-slate-900 mt-1">{selectedParcel.area}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Zoning</span>
                  <p className="text-sm font-medium text-slate-900 mt-1">{selectedParcel.zone}</p>
                </div>
              </div>

              {selectedParcel.conflict && (
                <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg">
                  <h6 className="text-xs font-bold text-red-800 flex items-center gap-1 mb-1">
                    <AlertTriangle size={14} /> Conflict Warning
                  </h6>
                  <p className="text-xs text-red-600">{selectedParcel.conflict}</p>
                  <button className="mt-2 text-xs bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700 w-full transition-colors">
                    Review Overlap
                  </button>
                </div>
              )}

              {selectedParcel.status !== 'govt' && !selectedParcel.conflict && (
                <button className="w-full mt-4 bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  View Full Application
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return <Overview />;
      case 'rbac': return <RBACMatrix />;
      case 'modules': return <SystemModules />;
      case 'architecture': return <TechnicalArchitecture />;
      case 'database': return <DatabaseSchema />;
      case 'api': return <APIEndpoints />;
      case 'workflow': return <WorkflowLogic />;
      case 'ui': return <UIPageStructure />;
      case 'analytics': return <DashboardAnalytics />;
      case 'security': return <SecurityFramework />;
      case 'deployment': return <DeploymentStrategy />;
      case 'monetization': return <MonetizationModel />;
      case 'scalability': return <ScalabilityRisk />;
      default: return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-72 bg-slate-900 text-slate-300 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Delta State C of O</h1>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">System Blueprint</p>
          </div>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                      ${isActive 
                        ? 'bg-emerald-500/10 text-emerald-400' 
                        : 'hover:bg-slate-800 hover:text-white'}
                    `}
                  >
                    <Icon size={18} className={isActive ? 'text-emerald-400' : 'text-slate-500'} />
                    {section.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
          v1.0.0 &bull; Enterprise Architecture
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4 shrink-0">
          <button 
            className="md:hidden text-slate-500 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
          <h2 className="text-xl font-semibold text-slate-800">
            {SECTIONS.find(s => s.id === activeSection)?.title}
          </h2>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

// --- Section Components ---

function Overview() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Core Objectives</h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          The Automated Certificate of Occupancy (C of O) Issuance System is a statewide digital land administration ecosystem designed for the Delta State Government. It fully automates the C of O lifecycle from application submission to certificate issuance and archival.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Paperless Processing', desc: 'Eliminates manual paper-based processing and physical file movement.' },
            { title: 'Speed & Efficiency', desc: 'Drastically reduces approval delays through automated SLA-based routing.' },
            { title: 'Fraud Prevention', desc: 'Prevents land duplication and fraudulent claims via GIS validation.' },
            { title: 'Revenue Generation', desc: 'Increases Internally Generated Revenue (IGR) with automated fee assessment.' },
            { title: 'System Integration', desc: 'Seamlessly integrates GIS, land registry, and payment gateways.' },
            { title: 'Executive Visibility', desc: 'Provides real-time dashboards for leadership monitoring and decision-making.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RBACMatrix() {
  const roles = [
    { role: 'Super Admin (ICT)', desc: 'System configuration, user management, audit logs.', access: 'Full System Access' },
    { role: 'Lands Registry Officer', desc: 'Initial document review, encumbrance checks.', access: 'Applications, Land Records (R/W)' },
    { role: 'Survey Dept Officer', desc: 'Survey plan validation, coordinate verification.', access: 'GIS Module, Survey Docs (R/W)' },
    { role: 'Physical Planning Officer', desc: 'Zoning compliance, land use validation.', access: 'GIS, Planning Docs (R/W)' },
    { role: 'Legal Review Officer', desc: 'Deed verification, legal clearance.', access: 'Legal Docs, Approvals (R/W)' },
    { role: 'Revenue Officer', desc: 'Fee assessment, payment reconciliation.', access: 'Payments, Invoices (R/W)' },
    { role: 'Executive Approving Authority', desc: 'Final digital endorsement (Governor/Commissioner).', access: 'Final Approvals, Dashboard (R)' },
    { role: 'Field Inspection Officer', desc: 'On-site verification, mobile data capture.', access: 'Mobile App, Inspections (R/W)' },
    { role: 'Applicant (Citizen/Corporate)', desc: 'Application submission, tracking, payment.', access: 'Own Profile, Own Applications' },
    { role: 'Public Verification User', desc: 'Verify C of O authenticity via QR/ID.', access: 'Public Portal (R)' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-slate-50">
          <h3 className="text-lg font-bold text-slate-900">Role-Based Access Control (RBAC)</h3>
          <p className="text-sm text-slate-500 mt-1">Detailed permissions and workflows for all system actors.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Primary Responsibility</th>
                <th className="px-6 py-4">Access Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {roles.map((r, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{r.role}</td>
                  <td className="px-6 py-4 text-slate-600">{r.desc}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {r.access}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SystemModules() {
  const modules = [
    { title: 'Online Application Portal', items: ['Secure registration/login', 'Document upload (PDF, Survey, Deeds)', 'Auto-generated tracking number', 'Status tracking', 'SMS & email notifications'] },
    { title: 'Document Verification Engine', items: ['Automated completeness check', 'AI-assisted document validation', 'Flag incomplete submissions', 'Query management system'] },
    { title: 'GIS & Land Records Integration', items: ['State GIS database integration', 'Parcel validation by coordinates', 'Overlap detection logic', 'Encumbrance & Zoning validation'] },
    { title: 'Workflow Engine', items: ['Rule-based routing between MDAs', 'SLA-based deadlines', 'Escalation triggers', 'Time-stamped approvals', 'Comment logs & audit trail'] },
    { title: 'Site Inspection Module (Mobile)', items: ['Geo-tagged photo capture', 'GPS coordinate capture', 'Digital inspection reports', 'Offline sync capability'] },
    { title: 'Automated Fee Assessment', items: ['Configurable statutory fee engine', 'Invoice generation', 'Payment gateway integration', 'Real-time payment reconciliation'] },
    { title: 'Approval & Digital Endorsement', items: ['Multi-layer approval routing', 'Digital signatures', 'Executive endorsement', 'Immutable log records'] },
    { title: 'Digital Certificate Generator', items: ['Unique Certificate ID', 'QR verification code', 'Tamper-resistant PDF', 'Public verification portal'] },
    { title: 'Land Records Update & Archiving', items: ['Automatic central registry update', 'Version control', 'Long-term document storage', 'Secure digital archiving'] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {modules.map((mod, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
            <Layers size={20} />
          </div>
          <h4 className="font-bold text-slate-900 mb-3">{mod.title}</h4>
          <ul className="space-y-2">
            {mod.items.map((item, j) => (
              <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function TechnicalArchitecture() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Architecture Diagram (Textual/Visual) */}
      <div className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 text-slate-300 font-mono text-sm overflow-x-auto">
        <h3 className="text-white font-sans font-bold text-lg mb-6 flex items-center gap-2">
          <Server size={20} className="text-emerald-400" /> System Architecture Diagram
        </h3>
        <pre className="leading-relaxed">
{`[ Client Layer ]
  ├── Web Portal (React.js / Next.js)  <-- Citizens, Admins, Approvers
  ├── Mobile App (React Native)        <-- Field Inspectors
  └── Public Portal                    <-- Verification Users
         │
         ▼ (HTTPS / TLS 1.3)
[ API Gateway / Load Balancer ] (AWS API Gateway / NGINX)
  ├── Rate Limiting
  ├── WAF (Web Application Firewall)
  └── SSL Termination
         │
         ▼
[ Microservices Layer ] (Node.js / NestJS / Docker / Kubernetes)
  ├── Auth Service (OAuth2, JWT, MFA)
  ├── Application Service (CRUD, Tracking)
  ├── Workflow Engine (Rules, SLAs, Routing)
  ├── GIS Service (Spatial Queries, Overlap Checks)
  ├── Payment Service (Fee Engine, Gateway Integration)
  ├── Document Service (OCR, Storage, PDF Gen)
  └── Notification Service (Email, SMS)
         │
         ▼
[ Data Layer ]
  ├── Primary DB: PostgreSQL (Relational Data)
  ├── Spatial DB: PostGIS (Parcel Coordinates)
  ├── Cache: Redis (Session, Fast lookups)
  ├── Object Storage: AWS S3 / Azure Blob (AES-256 Encrypted Docs)
  └── Audit Log: MongoDB / ElasticSearch (Immutable logs)`}
        </pre>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4">Core Technologies</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><strong className="text-slate-900">Frontend:</strong> React.js, Tailwind CSS, Vite</li>
            <li><strong className="text-slate-900">Backend:</strong> Node.js (NestJS framework)</li>
            <li><strong className="text-slate-900">Database:</strong> PostgreSQL + PostGIS</li>
            <li><strong className="text-slate-900">Caching:</strong> Redis</li>
            <li><strong className="text-slate-900">Cloud Hosting:</strong> AWS / Azure (Gov Cloud)</li>
            <li><strong className="text-slate-900">GIS Engine:</strong> GeoServer / Esri ArcGIS</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4">Infrastructure Principles</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><strong className="text-slate-900">Microservices:</strong> Independent scaling of modules.</li>
            <li><strong className="text-slate-900">API-First:</strong> RESTful/GraphQL APIs for all interactions.</li>
            <li><strong className="text-slate-900">High Availability:</strong> Multi-AZ deployment, auto-scaling.</li>
            <li><strong className="text-slate-900">Security:</strong> AES-256 encryption at rest, TLS in transit.</li>
            <li><strong className="text-slate-900">Containerization:</strong> Docker + Kubernetes orchestration.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DatabaseSchema() {
  const tables = [
    { name: 'Users', cols: 'id, role_id, name, email, password_hash, mfa_secret, status, created_at' },
    { name: 'Roles_Permissions', cols: 'id, role_name, permissions (JSONB)' },
    { name: 'Applications', cols: 'id, tracking_no, applicant_id, status, current_stage, submitted_at' },
    { name: 'Documents', cols: 'id, app_id, doc_type, file_url, verification_status, uploaded_at' },
    { name: 'Parcels (GIS)', cols: 'id, app_id, geom (Polygon), area_sqm, lga, address, is_encumbered' },
    { name: 'Workflows', cols: 'id, app_id, stage, assigned_to, status, comments, action_date' },
    { name: 'Inspections', cols: 'id, app_id, inspector_id, report_text, gps_lat, gps_long, photos (JSON)' },
    { name: 'Invoices_Payments', cols: 'id, app_id, amount, fee_type, status, gateway_ref, paid_at' },
    { name: 'Certificates', cols: 'id, app_id, cert_number, qr_code_url, pdf_url, issued_date, expiry' },
    { name: 'Audit_Logs', cols: 'id, user_id, action, entity, entity_id, ip_address, timestamp' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Database Schema Overview</h3>
        <p className="text-sm text-slate-600 mb-6">Relational structure designed for PostgreSQL with PostGIS extension for spatial data.</p>
        
        <div className="space-y-4">
          {tables.map((t, i) => (
            <div key={i} className="border border-slate-100 rounded-lg p-4 bg-slate-50">
              <h4 className="font-mono font-semibold text-indigo-600 mb-2">{t.name}</h4>
              <p className="font-mono text-xs text-slate-600 break-all">{t.cols}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function APIEndpoints() {
  const endpoints = [
    { method: 'POST', path: '/api/v1/auth/login', desc: 'Authenticate user & return JWT' },
    { method: 'POST', path: '/api/v1/applications', desc: 'Submit new C of O application' },
    { method: 'GET', path: '/api/v1/applications/:id', desc: 'Get application details & status' },
    { method: 'POST', path: '/api/v1/documents/upload', desc: 'Upload supporting documents (Multipart)' },
    { method: 'POST', path: '/api/v1/gis/validate-parcel', desc: 'Check coordinates for overlap/encumbrance' },
    { method: 'PUT', path: '/api/v1/workflow/:app_id/advance', desc: 'Move application to next MDA stage' },
    { method: 'POST', path: '/api/v1/inspections', desc: 'Submit mobile field inspection report' },
    { method: 'GET', path: '/api/v1/payments/assess/:app_id', desc: 'Calculate statutory fees' },
    { method: 'POST', path: '/api/v1/payments/webhook', desc: 'Receive payment gateway confirmation' },
    { method: 'POST', path: '/api/v1/certificates/generate', desc: 'Generate final PDF & QR code' },
    { method: 'GET', path: '/api/v1/public/verify/:cert_no', desc: 'Public verification endpoint' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="p-6 border-b border-slate-200 bg-slate-50">
        <h3 className="text-lg font-bold text-slate-900">REST API Structure</h3>
        <p className="text-sm text-slate-500 mt-1">API-first design for web, mobile, and third-party integrations.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <tbody className="divide-y divide-slate-100">
            {endpoints.map((ep, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="px-6 py-4 w-24">
                  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold font-mono
                    ${ep.method === 'GET' ? 'bg-blue-100 text-blue-700' : ''}
                    ${ep.method === 'POST' ? 'bg-emerald-100 text-emerald-700' : ''}
                    ${ep.method === 'PUT' ? 'bg-amber-100 text-amber-700' : ''}
                  `}>
                    {ep.method}
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-slate-700">{ep.path}</td>
                <td className="px-6 py-4 text-slate-500">{ep.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function WorkflowLogic() {
  const steps = [
    { title: '1. Application Submission', desc: 'Applicant registers, fills form, uploads docs & survey plan.' },
    { title: '2. Automated Verification', desc: 'System checks doc completeness. AI flags missing signatures.' },
    { title: '3. GIS Validation', desc: 'Survey Dept verifies coordinates. System checks for overlaps/government land.' },
    { title: '4. Physical Planning', desc: 'Town planning checks zoning compliance.' },
    { title: '5. Site Inspection', desc: 'Field officer visits site, captures geo-tagged photos via mobile app.' },
    { title: '6. Legal Review', desc: 'Legal officer verifies deeds, ownership history, and drafts clearance.' },
    { title: '7. Fee Assessment & Payment', desc: 'System generates invoice. Applicant pays via integrated gateway.' },
    { title: '8. Executive Approval', desc: 'Commissioner/Governor digitally signs the approval.' },
    { title: '9. Certificate Issuance', desc: 'System generates tamper-proof PDF with QR code. Notifies applicant.' },
    { title: '10. Archival', desc: 'Records permanently stored in State Land Registry database.' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-8">End-to-End Workflow Logic</h3>
        <div className="relative border-l-2 border-slate-200 ml-4 space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
              <h4 className="font-bold text-slate-900">{step.title}</h4>
              <p className="text-sm text-slate-600 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UIPageStructure() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-6">UI Page Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-indigo-600 mb-3 border-b pb-2">Applicant Portal</h4>
            <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>Landing Page & Guidelines</li>
              <li>Registration / Login (OTP verified)</li>
              <li>Dashboard (Active Applications Status)</li>
              <li>New Application Wizard (Multi-step form)</li>
              <li>Document Upload Center</li>
              <li>Payment & Invoices Page</li>
              <li>Certificate Download Area</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-600 mb-3 border-b pb-2">Admin / MDA Dashboard</h4>
            <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>Executive Analytics Dashboard</li>
              <li>Task Inbox (Pending Approvals)</li>
              <li>Application Detail View (Split screen: Data & PDF Viewer)</li>
              <li>GIS Map Viewer Overlay</li>
              <li>Query & Messaging Center</li>
              <li>User & Role Management</li>
              <li>Audit Log Viewer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityFramework() {
  const securityItems = [
    { title: 'Authentication', desc: 'OAuth2 / OIDC, Multi-Factor Authentication (MFA) for all Admin roles. Session timeouts.' },
    { title: 'Data Encryption', desc: 'AES-256 for data at rest (database & S3). TLS 1.3 for data in transit.' },
    { title: 'Audit Trail', desc: 'Immutable, append-only logs for every action (Who, What, When, IP Address).' },
    { title: 'Compliance', desc: 'Strict adherence to NDPR (Nigeria Data Protection Regulation) and government data policies.' },
    { title: 'Fraud Detection', desc: 'Automated coordinate overlap detection. AI-flagged anomalies in document dates/names.' },
    { title: 'Infrastructure', desc: 'WAF (Web Application Firewall), DDoS protection, Private VPC for database.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {securityItems.map((item, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="text-emerald-500" size={24} />
            <h4 className="font-bold text-slate-900">{item.title}</h4>
          </div>
          <p className="text-sm text-slate-600">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

function DeploymentStrategy() {
  const phases = [
    { phase: 'Phase 1', title: 'System Configuration & Integration', desc: 'Setup cloud infrastructure, develop core modules, integrate with existing GIS and payment gateways.' },
    { phase: 'Phase 2', title: 'Data Digitization & Migration', desc: 'Scan and migrate legacy paper C of O records into the new digital database.' },
    { phase: 'Phase 3', title: 'Pilot Rollout', desc: 'Launch in a single LGA or specific commercial zone to test workflows and fix bottlenecks.' },
    { phase: 'Phase 4', title: 'Statewide Deployment', desc: 'Full public launch across all LGAs in Delta State.' },
    { phase: 'Phase 5', title: 'Training & Capacity Building', desc: 'Comprehensive training for MDA staff, ICT personnel, and public awareness campaigns.' },
    { phase: 'Phase 6', title: 'Ongoing Support & SLA', desc: '24/7 technical support, system maintenance, and continuous feature updates.' },
  ];

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {phases.map((p, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4 md:items-center">
          <div className="shrink-0 w-24 h-24 rounded-full bg-slate-50 border-4 border-slate-100 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{p.phase}</span>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900">{p.title}</h4>
            <p className="text-slate-600 mt-1">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MonetizationModel() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Public-Private Revenue Sharing Model</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
            <h4 className="font-bold text-emerald-800 mb-3">Funding Structure</h4>
            <ul className="space-y-2 text-sm text-emerald-700 list-disc list-inside">
              <li>Government pays a fraction (e.g., 20-30%) of initial setup cost.</li>
              <li>Vendor/Partner funds the remaining deployment & infrastructure cost.</li>
              <li>Zero maintenance cost burden on the government.</li>
            </ul>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <h4 className="font-bold text-indigo-800 mb-3">Revenue Recovery (ROI)</h4>
            <ul className="space-y-2 text-sm text-indigo-700 list-disc list-inside">
              <li>Recoup investment through a fixed percentage share of statutory fees processed via the portal.</li>
              <li>Convenience fee applied to online transactions.</li>
              <li>Annual subscription/maintenance model post-recovery.</li>
            </ul>
          </div>
        </div>

        <h4 className="font-bold text-slate-900 mb-4">Revenue Reconciliation Structure</h4>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-sm text-slate-700">
          <p className="mb-3">All payments are routed through a central, government-approved payment gateway (e.g., Remita, Interswitch).</p>
          <p className="mb-3"><strong>Automated Splitting:</strong> The gateway is configured for automated split-settlement at the point of transaction.</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>X% routed directly to Delta State Treasury Single Account (TSA).</li>
            <li>Y% routed to Vendor/Partner account for infrastructure recovery.</li>
          </ul>
          <p className="mt-4">Real-time financial dashboards provide full transparency to the State Ministry of Finance and Auditor General.</p>
        </div>
      </div>
    </div>
  );
}

function DashboardAnalytics() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900">Executive Dashboard</h3>
        <div className="flex gap-2">
          <select className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm">
            <option>All LGAs</option>
            <option>Asaba</option>
            <option>Warri</option>
          </select>
          <select className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm">
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Applications', value: '1,248', trend: '+12%', icon: Layers, color: 'text-blue-600', bg: 'bg-blue-100' },
          { label: 'Approved C of Os', value: '842', trend: '+8%', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-100' },
          { label: 'Pending Review', value: '315', trend: '-5%', icon: Activity, color: 'text-amber-600', bg: 'bg-amber-100' },
          { label: 'Revenue Generated', value: '₦45.2M', trend: '+24%', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-100' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${kpi.bg} ${kpi.color}`}>
                <kpi.icon size={20} />
              </div>
              <span className={`text-xs font-bold ${kpi.trend.startsWith('+') ? 'text-emerald-600' : 'text-amber-600'}`}>
                {kpi.trend}
              </span>
            </div>
            <h4 className="text-2xl font-bold text-slate-900">{kpi.value}</h4>
            <p className="text-sm text-slate-500 mt-1">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* GIS Map & Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive GIS Map Viewer */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[600px]">
          <InteractiveGISMap />
        </div>

        {/* Processing Bottlenecks */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <AlertTriangle size={18} className="text-amber-500" />
            Processing Bottlenecks
          </h4>
          <div className="space-y-4">
            {[
              { dept: 'Survey Dept (GIS)', time: '14 days', width: 'w-3/4', color: 'bg-red-500' },
              { dept: 'Legal Review', time: '8 days', width: 'w-1/2', color: 'bg-amber-500' },
              { dept: 'Physical Planning', time: '5 days', width: 'w-1/3', color: 'bg-blue-500' },
              { dept: 'Executive Approval', time: '2 days', width: 'w-1/6', color: 'bg-emerald-500' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700 font-medium">{item.dept}</span>
                  <span className="text-slate-500">{item.time} avg</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className={`${item.color} h-2 rounded-full ${item.width}`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <PieChart size={18} className="text-indigo-500" />
              Application Status
            </h4>
            <div className="flex items-center justify-center h-32 relative">
              {/* Mock Donut Chart */}
              <div className="w-24 h-24 rounded-full border-8 border-emerald-500 border-r-amber-500 border-b-blue-500 border-l-slate-200"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-xl font-bold text-slate-900">1.2k</span>
                <span className="text-[10px] text-slate-500 uppercase">Total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScalabilityRisk() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Scalability & Risk Mitigation</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-slate-900 flex items-center gap-2">
              <Activity size={18} className="text-blue-500" /> Scalability Strategy
            </h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600 list-disc list-inside ml-6">
              <li><strong>High Concurrency:</strong> Stateless microservices deployed on Kubernetes allow auto-scaling during peak application periods (e.g., amnesty programs).</li>
              <li><strong>Database Sharding/Read Replicas:</strong> Separate read-heavy operations (public verification, dashboards) from write-heavy operations (application submission).</li>
              <li><strong>CDN Integration:</strong> Serve static assets and public documents via Content Delivery Network to reduce server load.</li>
              <li><strong>10+ Year Data Retention:</strong> Implement tiered storage. Active applications in fast SSDs; archived C of Os moved to cheaper, durable cold storage (e.g., AWS S3 Glacier).</li>
            </ul>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h4 className="font-semibold text-slate-900 flex items-center gap-2">
              <ShieldCheck size={18} className="text-red-500" /> Risk Mitigation
            </h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600 list-disc list-inside ml-6">
              <li><strong>Data Loss:</strong> Automated daily cross-region backups. Point-in-time recovery enabled on databases.</li>
              <li><strong>System Downtime:</strong> Multi-Availability Zone deployment ensures 99.99% uptime. Fallback offline mode for mobile inspection app.</li>
              <li><strong>User Resistance:</strong> Comprehensive change management, intuitive UI design, and mandatory training for civil servants.</li>
              <li><strong>Vendor Lock-in:</strong> Use of open standards (REST APIs, PostgreSQL, standard GeoJSON) ensures data portability. Escrow agreement for source code.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

