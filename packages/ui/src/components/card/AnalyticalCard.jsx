// AnalyticalCard.jsx
import BaseCard from './BaseCard';
// Assume a charting library is imported: import { LineChart } from 'ChartingLibrary';

export default function AnalyticalCard({
  title,
  mainValue,
  comparisonValue,
  timeRange,
  data,
}) {
  // Logic to determine color for comparison text (up or down)
  const isPositiveChange = comparisonValue >= 0;
  const changeColor = isPositiveChange ? 'text-green-500' : 'text-red-500';
  const changeIcon = isPositiveChange ? '▲' : '▼';

  return (
    <BaseCard className="flex flex-col h-full">
      <BaseCard.Header
        title={title}
        action={<span className="text-xs text-slate-400">{timeRange}</span>}
      />

      <BaseCard.Body>
        {/* Main Metric Area */}
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-3xl font-bold text-slate-800">{mainValue}</span>
          <span className={`text-sm font-semibold ${changeColor}`}>
            {changeIcon} {Math.abs(comparisonValue)}%
          </span>
        </div>

        {/* Chart Visualization (Placeholder) */}
        <div className="h-40 w-full bg-slate-100 flex items-center justify-center rounded">
          {/* Placeholder for your charting component (e.g., <LineChart data={data} />) */}
          <span className="text-slate-500 text-sm">Mini Chart View</span>
        </div>
      </BaseCard.Body>
    </BaseCard>
  );
}
