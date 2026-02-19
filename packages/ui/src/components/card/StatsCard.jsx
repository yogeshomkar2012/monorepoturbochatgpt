// StatsCard.jsx
import BaseCard from './BaseCard';

export default function StatsCard({
  title,
  value,
  unit,
  trend,
  trendValue,
  icon,
}) {
  const isPositive = trend === 'up';
  const trendColor = isPositive ? 'text-emerald-600' : 'text-rose-600';

  return (
    <BaseCard className="flex flex-col justify-between h-full">
      {/* Header: Title and Icon */}
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          {title}
        </h4>
        <span className="text-xl bg-slate-50 p-2 rounded-lg">{icon}</span>
      </div>

      {/* Main Metric */}
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-black text-slate-900">{value}</span>
        <span className="text-sm font-medium text-slate-400">{unit}</span>
      </div>

      {/* Trend Indicator */}
      <div className="mt-4 flex items-center gap-2">
        <span
          className={`text-xs font-bold px-1.5 py-0.5 rounded ${isPositive ? 'bg-emerald-50' : 'bg-rose-50'} ${trendColor}`}
        >
          {isPositive ? '↑' : '↓'} {trendValue}%
        </span>
        <span className="text-[10px] text-slate-400 font-medium">
          vs. last period
        </span>
      </div>
    </BaseCard>
  );
}
