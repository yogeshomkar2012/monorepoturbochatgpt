// packages/ui/src/components/profile/AdminProfile.jsx
export default function AdminProfile({ data }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">Fleet Manager Overview</h1>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm">
          Manage Drivers
        </button>
      </header>

      <div className="space-y-4">
        <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
          <p className="text-amber-800 text-sm font-bold">
            Managerial Scope: {data.region} Region
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <span className="text-xs text-slate-400 uppercase font-bold">
              Active Fleet
            </span>
            <p className="text-2xl font-bold">{data.managedUnits}</p>
          </div>
          <div className="p-4 border rounded-lg">
            <span className="text-xs text-slate-400 uppercase font-bold">
              Pending Approvals
            </span>
            <p className="text-2xl font-bold text-red-600">
              {data.pendingApprovals}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
