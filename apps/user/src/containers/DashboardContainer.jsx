import React from 'react';
import { CardFactory } from '@repo/factories';
import { getInitials } from '@repo/utils';
export default function DashboardContainer() {
  const dashboardData = [
    // Layer 1: KPI Row (stats)
    // {
    //   id: 1,
    //   type: 'stats',
    //   title: 'Total Fuel Spent',
    //   value: '12,450',
    //   unit: 'USD',
    //   trend: 'up',
    //   trendValue: '2.5',
    // },
    // {
    //   id: 2,
    //   type: 'stats',
    //   title: 'On-Time Delivery',
    //   value: '98.2',
    //   unit: '%',
    //   trend: 'up',
    //   trendValue: '1.2',
    // },
    // {
    //   id: 3,
    //   type: 'stats',
    //   title: 'Active Fleet',
    //   value: '42',
    //   unit: 'units',
    //   trend: 'down',
    //   trendValue: '0.5',
    // },
    // {
    //   id: 4,
    //   type: 'stats',
    //   title: 'Avg Mileage',
    //   value: '324',
    //   unit: 'km',
    //   trend: 'up',
    //   trendValue: '8',
    // },

    // Layer 2: Operations & Attention (tracking, shipment, alert)
    {
      id: 5,
      type: 'tracking',
      orderId: 'TRK-001',
      currentCity: 'Bengaluru',
      progress: 75,
      eta: '2h 15m',
      status: 'On Track',
    },
    // {
    //   id: 6,
    //   type: 'alert',
    //   severity: 'error',
    //   message: 'Engine Overheat: Truck #102',
    //   timestamp: '09:30 AM',
    // },

    // Layer 3: Details & Action (inventory, profile, review)
    // {
    //   id: 7,
    //   type: 'inventory',
    //   warehouse: {
    //     name: 'North Hub',
    //     location: 'Delhi',
    //     utilization: 92,
    //     inbound: 45,
    //     outbound: 30,
    //     status: 'Active',
    //   },
    // },
    {
      id: 8,
      type: 'profile',
      user: {
        name: 'Amit S.',
        role: 'Fleet Lead',
        status: 'On-Duty',
        rating: 4.9,
        experience: 8,
        contact: { email: 'amit@logistics.com', phone: '+91 98765 43210' },
        stats: { deliveries: 1240, rating: 4.9 },
      },
    },
  ];
  return (
    <div className="min-h-screen ">
      <div className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 shadow-sm mb-2 p-2">
        <div className=" mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: User Welcome & Role */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              {getInitials('yogesh omkar')}
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900 leading-none">
                Welcome back, <span className="text-blue-600">Omkar</span>
              </h2>
              <p className="text-[11px] text-slate-500 mt-1 uppercase font-bold tracking-wider">
                System User • HQ Bangalore
              </p>
            </div>
          </div>

          {/* Center: Global Search (Universal for all roles) */}
          <div className=" flex-1 max-w-md w-full relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search Shipments, Drivers, or SKUs..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Right: Real-time Heartbeat */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">
                Network Online
              </span>
            </div>

            {/* Quick Settings Icon */}
            <button className="hidden lg:flex p-2 hover:bg-slate-100 rounded-full text-slate-500">
              ⚙️
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Fleet Operations Control
          </h1>
          <p className="text-slate-500">
            Managing {dashboardData.length} active operational nodes
          </p>
        </header>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {dashboardData.map((item) => (
            <div
              key={item.id}
              className={`
              ${item.type === 'stats' ? 'lg:col-span-3' : ''}
              ${item.type === 'tracking' ? 'lg:col-span-8' : ''}
              ${item.type === 'alert' ? 'lg:col-span-4' : ''}
              ${item.type === 'inventory' ? 'lg:col-span-7' : ''}
              ${item.type === 'profile' ? 'lg:col-span-5' : ''}
            `}
            >
              <CardFactory type={item.type} {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
