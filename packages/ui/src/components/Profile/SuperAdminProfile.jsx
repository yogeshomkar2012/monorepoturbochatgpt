// packages/ui/src/components/profile/SuperAdminProfile.jsx
export default function SuperAdminProfile({ data }) {
  return (
    <div className="p-8 bg-slate-900 text-white rounded-2xl">
      <div className="flex justify-between border-b border-slate-700 pb-6 mb-6">
        <div>
          <h1 className="text-3xl font-black">System Superuser</h1>
          <p className="text-slate-400">Master Control Panel • All Regions</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-emerald-400">SYSTEM SECURE</p>
          <p className="text-sm">Last Audit: {data.lastAuditDate}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Global Financial Metrics */}
        <div className="bg-slate-800 p-4 rounded-xl">
          <p className="text-xs text-slate-500">Total Net Revenue</p>
          <p className="text-xl font-bold">${data.globalStats.revenue}</p>
        </div>
      </div>
    </div>
  );
}
