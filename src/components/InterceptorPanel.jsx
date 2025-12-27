import { Card } from "@/components/ui/Card";
import { Battery, Plane, Target, Zap } from "lucide-react";

export default function InterceptorPanel({ interceptors }) {
    return (
        <Card title="Interceptor Squadron">
            <div className="space-y-4">
                {(!interceptors || interceptors.length === 0) ? (
                    <div className="text-gray-500 text-xs text-center">NO DATA</div>
                ) : (
                    interceptors.map((drone) => (
                        <div key={drone.id} className="bg-white/5 border border-white/5 p-3 rounded hover:border-primary/30 transition-colors">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-2">
                                    <Plane className={`w-4 h-4 ${drone.status === 'Deployed' ? 'text-alert' : 'text-primary'}`} />
                                    <span className="font-bold text-sm tracking-wider">{drone.id}</span>
                                </div>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full ${drone.status === 'Deployed' ? 'bg-alert/20 text-alert' :
                                        drone.status === 'Patrolling' ? 'bg-secondary/20 text-secondary' :
                                            'bg-gray-700 text-gray-300'
                                    }`}>
                                    {drone.status.toUpperCase()}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Battery className={`w-3 h-3 ${drone.battery < 30 ? 'text-alert' : 'text-green-400'}`} />
                                    <span>{drone.battery}%</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Target className="w-3 h-3 text-secondary" />
                                    <span>{drone.success_rate}% Acc.</span>
                                </div>
                            </div>

                            <div className="w-full bg-gray-800 h-1 mt-3 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${drone.battery < 30 ? 'bg-alert' : 'bg-primary'}`}
                                    style={{ width: `${drone.battery}%` }}
                                ></div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Card>
    );
}
