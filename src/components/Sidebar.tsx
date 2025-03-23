import React from 'react';
import { TrendingUp, Award, Users, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-20 h-screen bg-white shadow-lg flex flex-col items-center py-8">
      <div className="flex flex-col space-y-8 mt-12 lg:mt-0">
        <SidebarIcon icon={<TrendingUp />} label="Predictions" />
        <SidebarIcon icon={<Award />} label="Leaderboard" />
        <SidebarIcon icon={<Users />} label="Teams" />
        <SidebarIcon icon={<Settings />} label="Settings" />
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="group relative">
    <div className="p-3 text-[#5C899D] hover:bg-[#5C899D] hover:text-white rounded-xl transition-colors cursor-pointer">
      {icon}
    </div>
    <span className="absolute left-14 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
      {label}
    </span>
  </div>
);

export default Sidebar;
