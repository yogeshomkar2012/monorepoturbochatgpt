// ShipmentStatusCard.jsx
import BaseCard from './BaseCard';

export default function ShipmentStatusCard({ id, status, origin, destination, progress, eta }) {
  // Status styling logic
  const statusStyles = {
    'In-Transit': 'bg-blue-100 text-blue-700 border-blue-200',
    'Delayed': 'bg-red-100 text-red-700 border-red-200',
    'Delivered': 'bg-green-100 text-green-700 border-green-200',
  };

  return (
    <BaseCard className="flex flex-col gap-4">
      {/* Header: ID and Status */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Shipment ID</p>
          <h4 className="font-bold text-slate-900">#{id}</h4>
        </div>
        <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase border ${statusStyles[status]}`}>
          {status}
        </span>
      </div>

      {/* Route Info */}
      <div className="flex items-center gap-3 py-2">
        <div className="flex-1">
          <p className="text-[10px] text-slate-400 uppercase">Origin</p>
          <p className="text-sm font-semibold truncate">{origin}</p>
        </div>
        <div className="text-slate-300">→</div>
        <div className="flex-1 text-right">
          <p className="text-[10px] text-slate-400 uppercase">Destination</p>
          <p className="text-sm font-semibold truncate">{destination}</p>
        </div>
      </div>

      {/* Progress Stepper */}
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] font-bold text-slate-500">
          <span>{progress}% Complete</span>
          <span>ETA: {eta}</span>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-700 ${status === 'Delayed' ? 'bg-red-500' : 'bg-blue-600'}`} 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>
      
      {/* Quick Action */}
      <button className="mt-2 text-xs font-bold text-blue-600 hover:text-blue-800 text-left">
        View Full Tracking History →
      </button>
    </BaseCard>
  );
}
