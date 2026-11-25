export default function StatusBadge({ label, value }) {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">{label}</p>
            <p className="mt-1 font-mono text-sm text-slate-100 break-all">{value}</p>
        </div>
    );
}
