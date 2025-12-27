import { Card } from "@/components/ui/Card";
import { Crosshair, ShieldCheck, Activity, Zap, Cpu, AlertTriangle } from "lucide-react";

export default function KPIGrid({ kpiData }) {
    if (!kpiData) return <div className="h-24 animate-pulse bg-white/5 rounded-lg w-full"></div>;

    const metrics = [
        { label: "Active Threats", value: kpiData.active_threats, icon: Crosshair, color: "text-alert" },
        { label: "Neutralized", value: kpiData.threats_neutralized, icon: ShieldCheck, color: "text-primary" },
        { label: "Avg Response", value: `${kpiData.avg_response_time}s`, icon: Zap, color: "text-secondary" },
        { label: "AI Accuracy", value: `${kpiData.ai_accuracy}%`, icon: Cpu, color: "text-purple-400" },
        { label: "Uptime", value: `${kpiData.system_uptime}%`, icon: Activity, color: "text-green-400" },
        { label: "Zone Status", value: kpiData.protected_zone_status, icon: AlertTriangle, color: kpiData.protected_zone_status === 'SECURE' ? "text-primary" : "text-alert" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {metrics.map((metric, idx) => (
                <Card key={idx} className="bg-surface/50 border-white/5">
                    <div className="flex flex-col h-full justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">{metric.label}</span>
                            <metric.icon className={`w-4 h-4 ${metric.color} opacity-80`} />
                        </div>
                        <div>
                            <div className={`text-2xl font-bold font-mono tracking-tighter ${metric.color}`}>{metric.value}</div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
