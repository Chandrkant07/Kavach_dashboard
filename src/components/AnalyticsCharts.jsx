import { Card } from "@/components/ui/Card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function AnalyticsCharts({ analyticsData }) {
    if (!analyticsData) return <div className="h-full bg-white/5 animate-pulse rounded"></div>;

    const COLORS = ['#00ff9d', '#00d2ff', '#ffaa00'];

    return (
        <div className="flex flex-col gap-4 h-full">
            <Card title="Sensor Fusion Confidence" className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analyticsData.fusion_confidence}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00d2ff" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#00d2ff" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="time" stroke="#4b5563" tick={{ fontSize: 10 }} />
                        <YAxis stroke="#4b5563" tick={{ fontSize: 10 }} domain={[80, 100]} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#12121a', borderColor: '#374151', color: '#fff' }}
                            itemStyle={{ color: '#00d2ff' }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#00d2ff" fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </Card>

            <Card title="Threat Classification" className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={analyticsData.threat_types}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {analyticsData.threat_types.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ backgroundColor: '#12121a', borderColor: '#374151', color: '#fff' }}
                        />
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-white text-lg font-bold">
                            AI
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </Card>
        </div>
    );
}
