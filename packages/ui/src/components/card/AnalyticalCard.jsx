// AnalyticalCard.jsx
import BaseCard from './BaseCard'; // NO CURLY BRACES if it's a default export

export default function AnalyticalCard({
  title,
  mainValue,
  comparisonValue,
  timeRange,
}) {
  return (
    <BaseCard>
      {/* If BaseCard.Header is undefined, React throws the error you see */}
      <BaseCard.Header
        title={title}
        action={<span className="text-xs text-slate-400">{timeRange}</span>}
      />
      <BaseCard.Body>
        <div className="text-3xl font-bold">{mainValue}</div>
        <div className="text-green-500">{comparisonValue}%</div>
      </BaseCard.Body>
    </BaseCard>
  );
}
