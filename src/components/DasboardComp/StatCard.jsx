import { TrendingUp, TrendingDown } from "@mui/icons-material";
import React from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    AreaChart,
    Area,
} from "recharts";

const lineData = [
    { v: 20 }, { v: 45 }, { v: 15 }, { v: 40 }, { v: 18 },
    { v: 48 }, { v: 22 }, { v: 44 }, { v: 12 }, { v: 38 },
];

const areaData = [
    { v: 10 }, { v: 35 }, { v: 18 }, { v: 30 }, { v: 12 },
    { v: 40 }, { v: 20 }, { v: 45 }, { v: 22 }, { v: 15 }, { v: 30 },
];

const StatCard = ({ title, value, extra, change, trend, chart, wide }) => {
    const isUp = trend === "up";

    return (
        <div
            className={`text-[var(--black-clr)] bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-between ${wide ? "sm:col-span-2" : ""
                }`}

        >
            {wide ? (
                // Wide Card (Weekly Wallet Usage)
                <div>
                    <p className="text-gray-500 text-xs sm:text-sm">{title}</p>
                    <div className="flex flex-wrap justify-between items-center mt-1">
                        <div className="flex items-baseline gap-3">
                            <h3 className="text-2xl sm:text-3xl font-bold">
                                {value}
                            </h3>
                            {extra && (
                                <span className="text-xs sm:text-sm text-gray-500">
                                    {extra}
                                </span>
                            )}
                        </div>

                        {change && (
                            <div className="flex items-center gap-1 text-xs sm:text-sm shrink-0">
                                {isUp ? (
                                    <TrendingUp fontSize="small" className="!text-green-500" />
                                ) : (
                                    <TrendingDown fontSize="small" className="!text-red-500" />
                                )}
                                <span className={isUp ? "text-green-500" : "text-red-500"}>
                                    {change}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            ) : (

                <div>
                    <div className="flex justify-between items-start">
                        <p className="text-gray-500 text-xs sm:text-sm">{title}</p>
                        {change && (
                            <div className="flex items-center gap-1 text-xs shrink-0">
                                {isUp ? (
                                    <TrendingUp fontSize="small" className="!text-green-500" />
                                ) : (
                                    <TrendingDown fontSize="small" className="!text-red-500" />
                                )}
                                <span className={isUp ? "text-green-500" : "text-red-500"}>
                                    {change}
                                </span>
                            </div>
                        )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mt-1">
                        {value}{" "}
                        {extra && (
                            <span className="text-xs sm:text-sm font-normal text-gray-500 block sm:inline">
                                {extra}
                            </span>
                        )}
                    </h3>
                </div>
            )}

            {/* chart */}
            <div className={`w-full ${wide ? "h-24 mt-4" : "h-16 mt-3"}`}>
                <ResponsiveContainer width="100%" height="100%">
                    {chart === "area" || wide ? (
                        <AreaChart data={areaData}>
                            <defs>
                                <linearGradient id={`fill-${title}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#1EAAE7" stopOpacity={0.5} />
                                    <stop offset="100%" stopColor="#1EAAE7" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <Area
                                type="monotone"
                                dataKey="v"
                                stroke="#1EAAE7"
                                strokeWidth={2}
                                fill={`url(#fill-${title})`}
                            />
                        </AreaChart>
                    ) : (
                        <LineChart data={lineData}>
                            <Line
                                type="monotone"
                                dataKey="v"
                                stroke="#1EAAE7"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StatCard;