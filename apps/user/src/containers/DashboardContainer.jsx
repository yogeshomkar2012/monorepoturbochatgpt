// import React, { useState, useEffect } from 'react';
import { CardFactory} from '@repo/factories';

export default function DashboardContainer() {

  // Mocking an API call that returns a mixed array of logistics data
  const mockData = [
    {
      id: 1,
      type: 'stats',
      title: 'Active Trucks',
      value: '142',
      unit: 'units',
      trend: 'up',
      trendValue: '4',
    },
    {
      id: 2,
      type: 'alert',
      severity: 'error',
      message: 'Engine Failure: Truck #402',
      timestamp: '10:45 AM',
    },
    {
      id: 3,
      type: 'shipment',
      name: 'SHP-901',
      status: 'In-Transit',
      origin: 'Mumbai',
      destination: 'Delhi',
      progress: 65,
      eta: '6h 20m',
    },
    {
      id: 4,
      type: 'inventory',
      warehouse: {
        name: 'Hub Bangalore',
        location: 'Whitefield',
        utilization: 88,
        inbound: 120,
        outbound: 95,
        status: 'Active',
      },
    },
    {
      id: 5,
      type: 'profile',
      user: {
        name: 'Ravi Kumar',
        role: 'Fleet Manager',
        status: 'Available',
        rating: 4.8,
        experience: 5,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Dashboard Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Logistics Control Center
        </h1>
        <p className="text-slate-500 text-sm">
          Real-time fleet and warehouse overview
        </p>
      </header>

      {/* Main Grid: Responsive 12-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockData.map((item) => (
          <div
            key={item.id}
            className={
              item.type === 'shipment' || item.type === 'data'
                ? 'lg:col-span-2'
                : 'col-span-1'
            }
          >
            <CardFactory type={item.type} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
