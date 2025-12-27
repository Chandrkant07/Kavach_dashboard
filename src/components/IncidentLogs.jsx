import { Card } from "@/components/ui/Card";

export default function IncidentLogs({ logs }) {
    return (
        <Card title="Mission Logs & Forensics" className="h-full">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-gray-400">
                    <thead className="text-[10px] uppercase text-gray-500 font-mono border-b border-white/10 bg-white/5">
                        <tr>
                            <th className="px-4 py-2">Time</th>
                            <th className="px-4 py-2">Event</th>
                            <th className="px-4 py-2">Severity</th>
                            <th className="px-4 py-2">Evidence</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {(!logs || logs.length === 0) ? (
                            <tr><td colSpan="4" className="text-center py-4">No logs available</td></tr>
                        ) : (
                            logs.map((log) => (
                                <tr key={log.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-4 py-2 font-mono text-gray-300">{log.timestamp}</td>
                                    <td className="px-4 py-2 text-white">{log.event}</td>
                                    <td className="px-4 py-2">
                                        <span className={`px-2 py-0.5 rounded text-[10px] ${log.severity === 'High' ? 'bg-alert/20 text-alert' :
                                                log.severity === 'Medium' ? 'bg-warning/20 text-warning' :
                                                    'bg-primary/20 text-primary'
                                            }`}>
                                            {log.severity.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 font-mono">{log.evidence}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
