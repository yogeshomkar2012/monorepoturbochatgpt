// ProfileCard.jsx
import BaseCard from './BaseCard';

export default function ProfileCard({ user }) {
  const { name, role, avatar, status, rating, experience, contact } = user;

  // Status mapping for 2026 Logistics workflows
  const statusConfig = {
    Available: 'bg-green-500',
    'In-Transit': 'bg-blue-500',
    Maintenance: 'bg-amber-500',
    'Off-Duty': 'bg-slate-300',
  };

  return (
    <BaseCard className="flex flex-col gap-4 max-w-sm">
      <div className="flex items-center gap-4">
        {/* Profile Image with Status Ring */}
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-14 h-14 rounded-full object-cover border-2 border-slate-100"
          />
          <div
            className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${statusConfig[status]}`}
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-slate-900 leading-none">{name}</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">{role}</p>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-amber-500 text-xs">★</span>
            <span className="text-xs font-bold text-slate-700">
              {rating} Rating
            </span>
          </div>
        </div>
      </div>

      {/* Professional Metadata */}
      <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100">
        <div>
          <p className="text-[10px] text-slate-400 uppercase font-bold">
            Experience
          </p>
          <p className="text-sm font-semibold">{experience} Years</p>
        </div>
        <div>
          <p className="text-[10px] text-slate-400 uppercase font-bold">
            Preferred Route
          </p>
          <p className="text-sm font-semibold text-blue-600">Region-12</p>
        </div>
      </div>

      {/* Actionable Footer */}
      <div className="flex gap-2">
        <button className="flex-1 text-xs font-bold bg-slate-900 text-white py-2 rounded hover:bg-slate-800 transition-colors">
          Assign Task
        </button>
        <button className="px-3 text-sm bg-slate-100 rounded hover:bg-slate-200">
          📞
        </button>
      </div>
    </BaseCard>
  );
}
