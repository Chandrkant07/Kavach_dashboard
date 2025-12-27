import { Card } from "@/components/ui/Card";
import { AlertCircle, Wifi, Navigation } from "lucide-react";

export default function LiveThreats({ threats }) {
    return (
        <Card title="Live Threat Detection" className="col-span-1 border-alert/20 bg-alert/5">
            <div className="space-y-3 overflow-y-auto max-h-[300px] pr-1">
                {(!threats || threats.length === 0) ? (
                    <div className="text-center py-10 text-gray-500 text-sm font-mono">NO ACTIVE THREATS DETECTED</div>
                ) : (
                    threats.map((threat) => (
                        <div key={threat.id} className="p-3 bg-black/40 border border-alert/30 rounded flex items-center justify-between group hover:bg-alert/10 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-alert/20 rounded text-alert animate-pulse">
                                    <AlertCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white flex items-center gap-2">
                                        {threat.id}
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-gray-300">{threat.type}</span>
                                    </div>
                                    <div className="text-[10px] text-alert font-mono mt-1">CONFIDENCE: {threat.confidence}</div>
                                </div>
                            </div>
                            <div className="text-right font-mono text-xs text-gray-400 space-y-0.5">
                                <div className="flex items-center justify-end gap-1"><Navigation className="w-3 h-3" /> {threat.distance}</div>
                                <div className="flex items-center justify-end gap-1"><Wifi className="w-3 h-3" /> {threat.classification}</div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Card>
    );
}
