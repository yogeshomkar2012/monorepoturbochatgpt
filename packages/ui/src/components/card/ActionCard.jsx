// ActionCard.jsx
import BaseCard from './BaseCard';

export default function ActionCard({
  title,
  description,
  onAction,
  actionLabel,
  type = 'primary',
}) {
  return (
    <BaseCard className="flex flex-col h-full">
      {/* Header Area */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>

      {/* Action Footer */}
      <div className="mt-auto pt-4 border-t border-slate-100 flex gap-2">
        <button
          onClick={onAction}
          className={`px-4 py-2 rounded-md font-medium text-white transition-colors
            ${type === 'danger' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {actionLabel}
        </button>
        <button className="px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-md">
          Dismiss
        </button>
      </div>
    </BaseCard>
  );
}
