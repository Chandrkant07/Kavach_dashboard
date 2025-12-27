import { useState, useEffect } from "react";
import Header from "@/components/Header";
import KPIGrid from "@/components/KPIGrid";
import ThreatMap from "@/components/ThreatMap";
import LiveThreats from "@/components/LiveThreats";
import InterceptorPanel from "@/components/InterceptorPanel";
import AnalyticsCharts from "@/components/AnalyticsCharts";
import IncidentLogs from "@/components/IncidentLogs";

function App() {
  const [data, setData] = useState({
    kpis: null,
    threats: [],
    analytics: null,
    interceptors: [],
    logs: []
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [kpisRes, threatsRes, analyticsRes, interceptorsRes, logsRes] = await Promise.all([
        fetch('http://localhost:5000/api/system-status'),
        fetch('http://localhost:5000/api/threats'),
        fetch('http://localhost:5000/api/analytics'),
        fetch('http://localhost:5000/api/interceptors'),
        fetch('http://localhost:5000/api/logs')
      ]);

      const kpis = await kpisRes.json();
      const threats = await threatsRes.json();
      const analytics = await analyticsRes.json();
      const interceptors = await interceptorsRes.json();
      const logs = await logsRes.json();

      setData({ kpis, threats, analytics, interceptors, logs });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      // Keep loading false to show structure even if empty
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 2000); // Live update every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white flex flex-col font-sans overflow-hidden">
      <Header />

      <main className="flex-1 p-4 overflow-hidden flex flex-col gap-4">
        {/* Top Section: KPIs */}
        <section className="shrink-0">
          <KPIGrid kpiData={data.kpis} />
        </section>

        {/* Main Grid Layout */}
        <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">

          {/* Left Column: Threats & Interceptors (25%) */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-4 overflow-hidden">
            <div className="flex-1 min-h-0">
              <LiveThreats threats={data.threats} />
            </div>
            <div className="h-1/3 shrink-0">
              <InterceptorPanel interceptors={data.interceptors} />
            </div>
          </div>

          {/* Center Column: Map (50%) */}
          <div className="col-span-12 md:col-span-6 bg-surface/50 rounded-lg border border-white/10 relative overflow-hidden flex flex-col">
            <div className="absolute top-2 left-4 z-10 text-xs font-mono text-primary/80 uppercase tracking-widest bg-black/50 px-2 rounded">
              Airspace Monitoring // Live View
            </div>
            <div className="flex-1">
              <ThreatMap threats={data.threats} />
            </div>
            {/* Overlay Analytics at bottom of map ?? No, keep separate */}
          </div>

          {/* Right Column: Analytics & Logs (25%) */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-4 overflow-hidden">
            <div className="flex-1 min-h-0">
              <AnalyticsCharts analyticsData={data.analytics} />
            </div>
            <div className="h-1/3 shrink-0">
              <IncidentLogs logs={data.logs} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
