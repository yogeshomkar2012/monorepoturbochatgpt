// WarehouseCard.jsx
import BaseCard from './BaseCard';

export default function WarehouseCard({ warehouse }) {
  const { name, location, utilization, inbound, outbound, status } = warehouse;

  // Color coding for utilization
  let utilColor = 'bg-green-500';
  if (utilization > 85) utilColor = 'bg-amber-500';
  if (utilization > 95) utilColor = 'bg-red-500';

  return (
    <BaseCard className="flex flex-col gap-4">
      {/* Header: Name and Status */}
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-bold text-slate-900">{name}</h4>
          <p className="text-xs text-slate-500">📍 {location}</p>
        </div>
        <span
          className={`px-2 py-1 rounded text-[10px] font-black uppercase border ${status === 'Active' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-slate-100 text-slate-700 border-slate-200'}`}
        >
          {status}
        </span>
      </div>

      {/* Utilization Visual */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs font-bold text-slate-500">
          <span>Capacity Used</span>
          <span>{utilization}%</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className={`${utilColor} h-full transition-all duration-500`}
            style={{ width: `${utilization}%` }}
          />
        </div>
      </div>

      {/* Flow Metrics (Inbound vs Outbound) */}
      <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
        <div>
          <p className="text-[10px] text-slate-400 uppercase">
            Inbound (Today)
          </p>
          <p className="text-lg font-bold text-slate-800">{inbound} units</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-slate-400 uppercase">
            Outbound (Today)
          </p>
          <p className="text-lg font-bold text-slate-800">{outbound} units</p>
        </div>
      </div>

      {/* Action */}
      <button className="mt-2 text-xs font-bold text-blue-600 hover:text-blue-800 text-left">
        View Full Facility Report →
      </button>
    </BaseCard>
  );
}
