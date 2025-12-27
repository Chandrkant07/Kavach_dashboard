import { cn } from "@/lib/utils";

export function Card({ className, children, title, action }) {
    return (
        <div className={cn("bg-surface border border-white/5 rounded-lg overflow-hidden flex flex-col h-full", className)}>
            {(title || action) && (
                <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/5">
                    {title && <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{title}</h3>}
                    {action && <div>{action}</div>}
                </div>
            )}
            <div className="p-4 flex-1 relative">
                {children}
            </div>
        </div>
    );
}
