'use client';

import React, { useState } from 'react';
import {
  IconSearch,
  IconHome,
  IconHeart,
  IconChartLine,
  IconCaretDown,
  IconCaretRight,
  IconStar,
  IconTrendingUp,
  IconDice,
  IconDeviceDesktop,
  IconVideo,
  IconCards,
  IconCircleDot,
  IconDeviceGamepad2,
  IconClubs,
  IconUsers,
  IconGift,
  IconTrophy,
  IconTicket,
  IconAward,
  IconSofa,
  IconWallet,
  IconReceipt,
  IconSettings,
  IconAffiliate
} from '@tabler/icons-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  hasIndicator?: boolean;
  onClick?: () => void;
}

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, hasIndicator, onClick }) => (
  <div 
    className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 cursor-pointer transition-colors"
    onClick={onClick}
  >
    <div className="flex items-center gap-3">
      <div className="w-5 h-5">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
    {hasIndicator && (
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
    )}
  </div>
);

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border-b border-gray-700">
      <div 
        className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 cursor-pointer transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-sm font-semibold">{title}</span>
        {isExpanded ? (
          <IconCaretDown className="w-4 h-4" />
        ) : (
          <IconCaretRight className="w-4 h-4" />
        )}
      </div>
      {isExpanded && (
        <div className="pb-2">
          {children}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 h-screen flex flex-col">
      {/* Search */}
      <div className="p-4 border-b border-gray-700">
        <div className="relative">
          <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-700 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Everyworld Section */}
      <div className="p-4 border-b border-gray-700">
        <div className="text-center">
          <div className="text-gray-300 text-sm">Everyworld <span className="text-xs text-gray-400">(EVERY)</span></div>
          <div className="text-white text-sm mt-1">
            $0.00026 <span className="text-green-500 text-xs">▲ 2.28%</span>
          </div>
          <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md mt-3 text-sm font-medium transition-colors">
            Buy
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        {/* Main Navigation */}
        <div className="border-b border-gray-700">
          <SidebarItem icon={<IconHome />} label="Home" />
          <SidebarItem icon={<IconHeart />} label="Favorites" />
          <SidebarItem icon={<IconChartLine />} label="Skyline Trader™" />
        </div>

        {/* Casino Section */}
        <ExpandableSection title="Casino" defaultExpanded={true}>
          <SidebarItem icon={<IconStar />} label="Otherworld Originals" />
          <SidebarItem icon={<IconTrendingUp />} label="Trending" />
          <SidebarItem icon={<IconDice />} label="Casino Classics" />
          <SidebarItem icon={<IconDeviceDesktop />} label="Slots" />
          <SidebarItem icon={<IconVideo />} label="Live Casino" />
          <SidebarItem icon={<IconCards />} label="Blackjack" />
          <SidebarItem icon={<IconCircleDot />} label="Roulette" />
          <SidebarItem icon={<IconDeviceGamepad2 />} label="Game Shows" />
          <SidebarItem icon={<IconClubs />} label="Baccarat" />
          <SidebarItem icon={<IconUsers />} label="Providers" />
        </ExpandableSection>

        {/* Offers Section */}
        <ExpandableSection title="Offers" defaultExpanded={true}>
          <SidebarItem icon={<IconTrophy />} label="Rewards" hasIndicator />
          <SidebarItem icon={<IconGift />} label="Promotions" hasIndicator />
          <SidebarItem icon={<IconTicket />} label="Redeem Code" />
        </ExpandableSection>

        {/* VIP Section */}
        <ExpandableSection title="VIP" defaultExpanded={true}>
          <SidebarItem icon={<IconAward />} label="VIP Rewards" hasIndicator />
          <SidebarItem icon={<IconSofa />} label="VIP Lounge" />
        </ExpandableSection>

        {/* Profile Section */}
        <ExpandableSection title="Profile" defaultExpanded={true}>
          <SidebarItem icon={<IconWallet />} label="Wallet" />
          <SidebarItem icon={<IconReceipt />} label="Transactions" />
          <SidebarItem icon={<IconSettings />} label="Settings" />
        </ExpandableSection>

        {/* Other Section */}
        <ExpandableSection title="Other" defaultExpanded={true}>
          <SidebarItem icon={<IconAffiliate />} label="Affiliates" />
        </ExpandableSection>
      </div>
    </div>
  );
};

export default Sidebar;
