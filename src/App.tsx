import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ExecutiveDashboard } from "./pages/ExecutiveDashboard";
import { ApplicantPortal } from "./pages/ApplicantPortal";
import { OfficerDashboard } from "./pages/OfficerDashboard";
import { GISView } from "./pages/GISView";
import { CertificateView } from "./pages/CertificateView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ExecutiveDashboard />} />
          <Route path="applicant" element={<ApplicantPortal />} />
          <Route path="officer" element={<OfficerDashboard />} />
          <Route path="gis" element={<GISView />} />
          <Route path="certificate" element={<CertificateView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
