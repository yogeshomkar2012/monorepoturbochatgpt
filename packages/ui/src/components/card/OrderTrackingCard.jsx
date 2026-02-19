// OrderTrackingCard.jsx
import BaseCard from './BaseCard';

export default function OrderTrackingCard({
  orderId,
  status,
  eta,
  progress,
  currentCity,
}) {
  return (
    <BaseCard className="flex flex-col gap-4">
      {/* Header: ID and Status Badge */}
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs text-slate-400 font-mono">#{orderId}</span>
          <h4 className="font-bold text-slate-800">
            Current Location: {currentCity}
          </h4>
        </div>
        <span
          className={`px-2 py-1 rounded text-xs font-bold ${status === 'Delayed' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}
        >
          {status}
        </span>
      </div>

      {/* Progress Bar/Stepper */}
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Footer: ETA and Primary Action */}
      <div className="flex justify-between items-center mt-2">
        <div className="text-sm">
          <p className="text-slate-500 text-xs uppercase">Est. Arrival</p>
          <p className="font-bold text-slate-900">{eta}</p>
        </div>
        <button className="text-blue-600 text-sm font-semibold hover:underline">
          View Live Map →
        </button>
      </div>
    </BaseCard>
  );
}
