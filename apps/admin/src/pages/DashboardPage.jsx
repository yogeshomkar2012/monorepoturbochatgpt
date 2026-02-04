import React from "react";
import { Users, DollarSign, Package, TrendingUp } from "lucide-react";

const DashboardPage = () => {
  // Mock data for top stats
  const stats = [
    { label: "Total Users", value: "2,543", icon: <Users className="text-blue-600" />, growth: "+12.5%" },
    { label: "Revenue", value: "$45,231", icon: <DollarSign className="text-green-600" />, growth: "+8.2%" },
    { label: "Orders", value: "1,120", icon: <Package className="text-purple-600" />, growth: "-2.4%" },
    { label: "Growth", value: "24.8%", icon: <TrendingUp className="text-orange-600" />, growth: "+4.1%" },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Analytics Overview</h1>
          <p className="text-gray-500 text-sm">Welcome back! Here is what's happening today.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity w-fit">
          Download Report
        </button>
      </div>

      {/* 2. Stats Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-50 rounded-lg">{stat.icon}</div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.growth.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {stat.growth}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* 3. Main Content Area: 2 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Chart/Table Area */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-gray-800">Recent Shipments</h2>
            <button className="text-primary text-sm font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-50 text-gray-400 font-medium">
                <tr>
                  <th className="pb-3 pr-4">Order ID</th>
                  <th className="pb-3 pr-4">Customer</th>
                  <th className="pb-3 pr-4">Status</th>
                  <th className="pb-3">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[1, 2, 3, 4].map((item) => (
                  <tr key={item} className="group hover:bg-gray-50/50">
                    <td className="py-4 pr-4 font-medium">#OL-542{item}</td>
                    <td className="py-4 pr-4">Client Name {item}</td>
                    <td className="py-4 pr-4">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md text-xs">Pending</span>
                    </td>
                    <td className="py-4 font-semibold">$240.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar Analytics Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-4">Traffic Source</h2>
          <div className="space-y-4">
            {['Direct', 'Social Media', 'Referral'].map((source, i) => (
              <div key={source} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{source}</span>
                  <span className="font-medium">{80 - (i * 20)}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className={`h-full bg-primary`} style={{ width: `${80 - (i * 20)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
