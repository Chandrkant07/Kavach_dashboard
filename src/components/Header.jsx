import { Shield, Radio, Activity } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="h-16 bg-surface border-b border-white/10 flex items-center justify-between px-6 sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full animate-pulse-slow">
                    <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h1 className="text-xl font-bold tracking-widest text-white">KAVACH <span className="text-primary text-xs font-mono ml-1">v1.0</span></h1>
                    <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] leading-3">Counter-UAS Command System</p>
                </div>
            </div>

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-alert animate-bounce" />
                    <span className="text-xs font-mono text-alert font-bold">LIVE FEED ACTIVE</span>
                </div>

                <div className="flex items-center gap-6 text-xs font-mono text-gray-400">
                    <div className="flex flex-col items-end">
                        <span className="text-gray-500 text-[10px]">SYSTEM TIME</span>
                        <span className="text-white text-sm">{time.toLocaleTimeString()}</span>
                    </div>
                    <div className="w-px h-8 bg-white/10"></div>
                    <div className="flex flex-col items-end">
                        <span className="text-gray-500 text-[10px]">STATUS</span>
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span className="text-primary font-bold">OPERATIONAL</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
