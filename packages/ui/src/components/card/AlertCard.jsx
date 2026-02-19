// AlertCard.jsx
import BaseCard from './BaseCard';

export default function AlertCard({
  severity = 'error',
  message,
  timestamp,
  onResolve,
}) {
  // Define styles based on severity (2026 Design Standards)
  const variants = {
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: '🚨',
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-800',
      icon: '⚠️',
    },
  };

  const style = variants[severity];

  return (
    <BaseCard className={`${style.bg} ${style.border} flex gap-3`}>
      <span className="text-xl">{style.icon}</span>
      <div className="flex-1">
        <div className={`font-bold ${style.text}`}>
          {severity.toUpperCase()}
        </div>
        <p className="text-sm text-slate-700">{message}</p>
        <span className="text-xs text-slate-500 mt-2 block">{timestamp}</span>
      </div>
      <button
        onClick={onResolve}
        className="text-xs font-semibold underline hover:no-underline self-start"
      >
        Resolve
      </button>
    </BaseCard>
  );
}
