'use client';

import React from 'react';
import {
  IconWallet,
  IconBell,
  IconChevronDown
} from '@tabler/icons-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 h-16 flex items-center">
  

      {/* Center - Logo */}
      <div className="flex-1 flex justify-center">
        <div className="text-white text-xl font-bold tracking-wider">
          OTHERWORLD
        </div>
      </div>

      {/* Right side - Balance, Wallet, Notifications */}
      <div className="flex items-center gap-4 px-6">
        {/* Balance */}
        <div className="flex items-center gap-2 text-white">
          <span className="text-lg font-semibold">0.00</span>
          <IconChevronDown className="w-4 h-4 text-gray-400" />
        </div>

        {/* Wallet Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
          <IconWallet className="w-4 h-4" />
          Wallet
        </button>

        {/* Notification Bell */}
        <div className="relative">
          <button className="text-gray-300 hover:text-white transition-colors p-2">
            <IconBell className="w-5 h-5" />
          </button>
          {/* Green notification indicator */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">3</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
