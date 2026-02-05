import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Bell,
  Menu,
  User,
  ChevronDown,
  Settings,
  LogOut,
  UserCircle,
  Package,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

const DashBoardHeaderComponents = ({ onMenuClick }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const profileRef = useRef(null);
  const notifRef = useRef(null);

  // Mock Notifications Data
  const notifications = [
    {
      id: 1,
      title: "New Order",
      desc: "Order #5421 was placed",
      time: "2m ago",
      icon: <Package size={16} className="text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      id: 2,
      title: "New Message",
      desc: "Support ticket updated",
      time: "1h ago",
      icon: <MessageSquare size={16} className="text-green-600" />,
      bg: "bg-green-100",
    },
    {
      id: 3,
      title: "System Alert",
      desc: "Server load is high",
      time: "5h ago",
      icon: <AlertCircle size={16} className="text-red-600" />,
      bg: "bg-red-100",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target))
        setIsProfileOpen(false);
      if (notifRef.current && !notifRef.current.contains(event.target))
        setIsNotifOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-4 md:px-6 sticky top-0 z-10 gap-2 md:gap-4">
      {/* 1. Left Side */}
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-semibold text-gray-800 hidden xl:block ml-2">
          Admin Dashboard
        </h1>
      </div>

      {/* 2. Search Bar */}
      <div className="flex-1 max-w-md mx-2 md:mx-8">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* 3. Actions & Profile */}
      <div className="flex items-center gap-1 md:gap-4 shrink-0">
        {/* Notification Dropdown */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setIsNotifOpen(!isNotifOpen);
              setIsProfileOpen(false);
            }}
            className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-72 md:w-80 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <span className="font-bold text-sm text-gray-800">
                  Notifications
                </span>
                <button className="text-xs text-primary hover:underline">
                  Mark all read
                </button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((n) => (
                  <button
                    key={n.id}
                    className="w-full flex items-start gap-3 p-4 hover:bg-gray-50 border-b border-gray-50 last:border-0 text-left transition-colors"
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${n.bg}`}>
                      {n.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {n.title}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{n.desc}</p>
                      <p className="text-[10px] text-gray-400 mt-1 uppercase font-medium">
                        {n.time}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              <button className="w-full py-2 text-xs text-center text-gray-500 hover:bg-gray-50 border-t border-gray-100 font-medium">
                View All Notifications
              </button>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
              setIsNotifOpen(false);
            }}
            className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-gray-200 group"
          >
            <div className="text-right hidden lg:block">
              <p className="text-sm font-medium text-gray-900 leading-none">
                Yogesh
              </p>
              <p className="text-xs text-gray-500 mt-1">Admin</p>
            </div>
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <User size={18} />
            </div>
            <ChevronDown
              size={14}
              className={`text-gray-400 hidden sm:block transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
              <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <UserCircle size={16} /> Profile
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 border-t border-gray-50">
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashBoardHeaderComponents;
