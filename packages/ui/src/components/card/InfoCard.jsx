// UserInfoCard.jsx
import BaseCard from './BaseCard';

export default function UserInfoCard({ user }) {
  const { name, role, avatar, status, contact, stats } = user;

  const statusColors = {
    'On-Duty': 'bg-green-500',
    'Off-Duty': 'bg-slate-300',
    'In-Transit': 'bg-blue-500',
  };

  return (
    <BaseCard className="max-w-sm">
      {/* Header with Avatar & Status */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <img
            src={avatar || 'https://via.placeholder.com'}
            className="w-16 h-16 rounded-full object-cover border-2 border-slate-100"
            alt={name}
          />
          <span
            className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white ${statusColors[status]}`}
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 leading-tight">
            {name}
          </h3>
          <p className="text-sm text-slate-500 font-medium">{role}</p>
        </div>
      </div>

      {/* Contact List */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <span>📧</span> {contact?.email || 'No email available'}
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <span>📞</span> {contact?.phone || 'No Contact available'}
        </div>
      </div>

      {/* Mini Stats Grid (Optional for Logistics) */}
      <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
        <div className="text-center">
          <div className="text-xs text-slate-400 uppercase">Deliveries</div>
          <div className="font-bold">{stats?.deliveries || 'No status available'}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-slate-400 uppercase">Rating</div>
          <div className="font-bold text-amber-500">⭐ {stats?.rating || 'No rating available'}</div>
        </div>
      </div>
    </BaseCard>
  );
}
