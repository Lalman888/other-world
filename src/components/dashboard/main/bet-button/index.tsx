"use client";

import React, { useState } from "react";
import {
  IconArrowBackUp,
  IconRefresh,
  IconHandClick,
  IconRotateClockwise,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

const BetButton: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState(5);
  const [isManualMode, setIsManualMode] = useState(true);
  const [autoCashOut, setAutoCashOut] = useState(false);
  const [fiftyPercentCashOut, setFiftyPercentCashOut] = useState(false);
  const [balance] = useState(100000.0);
  const [totalBet] = useState(0.0);

  // Gradient styles matching GradientButton
  const gradientStyle = {
    background: "linear-gradient(180deg, #18F7A7 -18.52%, #078456 89.19%)",
    boxShadow:
      "0px 4px 0px 0px rgba(0, 0, 0, 0.40), 0px -3px 0px 0px rgba(0, 0, 0, 0.25) inset",
    border: "1px solid #000",
  };

  const smallGradientStyle = {
    background: "linear-gradient(180deg, #18F7A7 -18.52%, #078456 89.19%)",
    boxShadow:
      "0px 2px 0px 0px rgba(0, 0, 0, 0.40), 0px -2px 0px 0px rgba(0, 0, 0, 0.25) inset",
    border: "1px solid #000",
  };

  const centerStyle = {
    background: "linear-gradient(180deg, #4A4A4A 0%, #262626 100%)",
    boxShadow:
      "0px 4px 0px 0px rgba(0, 0, 0, 0.40), 0px -3px 0px 0px rgba(0, 0, 0, 0.25) inset",
    border: "1px solid #000",
  };

  return (
    <div className="bg-[#1E1F27] border border-[#2D2E37] rounded-2xl p-4 mx-6 mb-6 w-fit">
      {/* Top Row - Auto Cash Out Controls */}
      <div className="flex items-center gap-6 mb-4">
        {/* Auto Cash Out */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="auto-cashout"
              name="cashout-mode"
              checked={autoCashOut}
              onChange={() => setAutoCashOut(!autoCashOut)}
              className="w-4 h-4 text-white bg-gray-700 border-gray-600 focus:ring-green-500"
            />
            <label
              htmlFor="auto-cashout"
              className="text-white text-xs leading-tight"
            >
              <div>Auto</div>
              <div>Cash Out</div>
            </label>
          </div>

          <div className="flex items-center gap-1 bg-gray-700 rounded-lg px-2 py-1">
            <button className="text-white hover:text-gray-300 p-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            <span
              className="text-white font-semibold text-sm px-1"
              style={{
                background: "linear-gradient(180deg, #2F3B49 0%, #262C30 100%)",
              }}
            >
              4.00x
            </span>
            <button className="text-white hover:text-gray-300 p-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="flex items-center justify-center w-14 h-14 rounded-full"
              style={{
                background: "linear-gradient(180deg, #4A4A4A 0%, #262626 100%)",
                border: "2px solid #9C9C9C",
                boxShadow:
                  "0px 4px 0px 0px rgba(0,0,0,0.4), 0px -3px 0px 0px rgba(0,0,0,0.25) inset",
              }}
            >
              {" "}
              <IconArrowBackUp size={28} stroke={2} color="#fff" />{" "}
            </button>
            <button
              className="flex items-center justify-center w-14 h-14 rounded-full"
              style={{
                background: "linear-gradient(180deg, #4A4A4A 0%, #262626 100%)",
                border: "2px solid #9C9C9C",
                boxShadow:
                  "0px 4px 0px 0px rgba(0,0,0,0.4), 0px -3px 0px 0px rgba(0,0,0,0.25) inset",
              }}
            >
              <IconRefresh size={28} stroke={2} color="#fff" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-10 bg-[#1E1F27]  border-t border-r border-l rounded-4xl border-[#2D2E37] absolute -top-10 left-0" />
          <button
            style={{
              display: "flex",
              width: "236px",
              height: "54px",
              // padding: '0 30px',
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              borderRadius: "105px",
              border: "1.314px solid #000",
              background:
                "linear-gradient(180deg, #18F7A7 -18.52%, #078456 89.19%)",
              boxShadow:
                "0px 8px 0px 0px rgba(0, 0, 0, 0.40), 0px -7px 0px 0px rgba(0, 0, 0, 0.25) inset",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "18px",
              fontFamily: "sans-serif",
              cursor: "pointer",
              textShadow: "0 1px 0 rgba(0,0,0,0.4)",
            }}
          >
            Confirm Bet <IconCircleCheckFilled size={20} color="#fff" />
          </button>
        </div>

        {/* Manual/Auto Toggle */}
        <div
          className="flex rounded-full overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #2F3B49 0%, #262C30 100%)",
          }}
        >
          {/* Manual Button */}
          <button
            onClick={() => setIsManualMode(true)}
            className={`flex-1 min-w-fit flex items-center justify-center gap-2 py-2 px-8 transition-colors rounded-full ${
              isManualMode ? "text-white" : "text-gray-400 hover:text-white"
            }`}
            style={
              isManualMode
                ? {
                    // background: 'linear-gradient(180deg, #2F3B49 0%, #262C30 100%)',
                    boxShadow: "inset 0px -3px 0px 0px rgba(0,0,0,0.25)",
                    background:
                      "linear-gradient(180deg, #4A4A4A 0%, #262626 100%)",
                    border: "2px solid rgba(255, 255, 255, 0.25)",
                  }
                : {}
            }
          >
            <IconHandClick size={20} />
            <span className="text-base font-semibold">Manual</span>
          </button>

          {/* Auto-Bet Button */}
          <button
            onClick={() => setIsManualMode(false)}
            className={`flex-1 min-w-fit flex items-center justify-center gap-2 py-2 px-8 transition-colors rounded-full ${
              !isManualMode ? "text-white" : "text-gray-400 hover:text-white"
            }`}
            style={
              !isManualMode
                ? {
                    // background: 'linear-gradient(180deg, #2F3B49 0%, #262C30 100%)',
                    boxShadow: "inset 0px -3px 0px 0px rgba(0,0,0,0.25)",
                    background:
                      "linear-gradient(180deg, #4A4A4A 0%, #262626 100%)",
                    border: "2px solid rgba(255, 255, 255, 0.25)",
                  }
                : {}
            }
          >
            <IconRotateClockwise size={20} />
            <span className="text-base font-semibold">Auto-Bet</span>
          </button>
        </div>
      </div>

      {/* Bottom Row - Main Betting Interface */}
      <div className="flex items-center justify-between">
        {/* Left Side - Amount Buttons and Bet Control */}
        <div className="flex items-center gap-3">
          {/* 50% Auto Cash Out */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="fifty-percent-cashout"
                name="cashout-mode"
                checked={fiftyPercentCashOut}
                onChange={() => setFiftyPercentCashOut(!fiftyPercentCashOut)}
                className="w-4 h-4 text-white bg-gray-700 border-gray-600 focus:ring-green-500"
              />
              <label
                htmlFor="fifty-percent-cashout"
                className="text-white text-xs leading-tight"
              >
                <div>50% Auto</div>
                <div>Cash Out</div>
              </label>
            </div>

            <div className="flex items-center gap-1 bg-gray-700 rounded-lg px-2 py-1">
              <button className="text-white hover:text-gray-300 p-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>
              <span
                className="text-white font-semibold text-sm px-1"
                style={{
                  background:
                    "linear-gradient(180deg, #2F3B49 0%, #262C30 100%)",
                }}
              >
                4.00x
              </span>
              <button className="text-white hover:text-gray-300 p-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* €1 Button */}
          <button
            onClick={() => setSelectedAmount(1)}
            style={{
              background: "linear-gradient(180deg, #2F3B49 0%, #262C30 100%)",
            }}
            className=" hover:bg-gray-600 text-white rounded-full w-16 h-10 flex items-center justify-center relative text-sm font-semibold"
          >
            €1
            <div
              className="absolute -top-1 left-1 rounded-full w-4 h-4 flex items-center justify-center text-black cursor-pointer"
              style={smallGradientStyle}
            >
              <span className="text-xs font-bold">+</span>
            </div>
          </button>

          {/* €5 Button */}
          <button
            onClick={() => setSelectedAmount(5)}
            style={{
              background: "linear-gradient(180deg, #2F3B49 0%, #262C30 100%)",
            }}
            className=" hover:bg-gray-600 text-white rounded-full w-16 h-10 flex items-center justify-center relative text-sm font-semibold"
          >
            €5
            <div
              className="absolute -top-1 left-1 rounded-full w-4 h-4 flex items-center justify-center text-black cursor-pointer"
              style={smallGradientStyle}
            >
              <span className="text-xs font-bold">+</span>
            </div>
          </button>

          {/* Main Bet Amount Control */}
          <div className="flex items-center">
            <button
              onClick={() => setSelectedAmount(Math.max(1, selectedAmount - 1))}
              className="text-white rounded-l-full w-10 h-12 flex items-center justify-center hover:opacity-90 transition-opacity"
              style={{
                ...gradientStyle,
                borderRadius: "50px 0 0 50px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>

            <div
              className="px-8 py-0.5 text-white font-bold"
              style={{
                ...centerStyle,
                borderRadius: "0",
                borderLeft: "none",
                borderRight: "none",
              }}
            >
              <div className="text-xs opacity-80 text-center">Bet</div>
              <div className="text-lg">€{selectedAmount}</div>
            </div>

            <button
              onClick={() => setSelectedAmount(selectedAmount + 1)}
              className="text-white rounded-r-full w-10 h-12 flex items-center justify-center hover:opacity-90 transition-opacity"
              style={{
                ...gradientStyle,
                borderRadius: "0 50px 50px 0",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>

          {/* €50 Button */}
          <button
            onClick={() => setSelectedAmount(50)}
            style={{
              background: "linear-gradient(180deg, #2F3B49 0%, #262C30 100%)",
            }}
            className=" hover:bg-gray-600 text-white rounded-full w-16 h-10 flex items-center justify-center relative text-sm font-semibold"
          >
            €50
            <div
              className="absolute -top-1 left-1 rounded-full w-4 h-4 flex items-center justify-center text-black cursor-pointer"
              style={smallGradientStyle}
            >
              <span className="text-xs font-bold">+</span>
            </div>
          </button>

          {/* €100 Button */}
          <button
            onClick={() => setSelectedAmount(100)}
            style={{
              background: "linear-gradient(180deg, #2F3B49 0%, #262C30 100%)",
            }}
            className=" hover:bg-gray-600 text-white rounded-full w-16 h-10 flex items-center justify-center relative text-sm font-semibold"
          >
            €100
            <div
              className="absolute -top-1 left-1 rounded-full w-4 h-4 flex items-center justify-center text-black cursor-pointer"
              style={smallGradientStyle}
            >
              <span className="text-xs font-bold">+</span>
            </div>
          </button>
        </div>

        {/* Right Side - Mode Toggle and Balance */}
        <div className="flex items-center gap-4 pl-24">
          {/* Balance Info */}
          <div className="bg-gray-900 rounded-2xl px-5 py-1 border border-gray-600">
            <div className="flex items-center">
              <div className="text-center flex-1">
                <div className="text-gray-400 text-sm mb-0.5">BALANCE</div>
                <div className="text-white font-bold text-sm">
                  €
                  {balance.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-px h-16 bg-gray-600 mx-4 "></div>

              <div className="text-center flex-1">
                <div className="text-gray-400 text-sm  mb-0.5">TOTAL BET</div>
                <div className="text-white font-bold text-sm">
                  €{totalBet.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetButton;
