import { FileDownloadOutlined, MoreHoriz } from "@mui/icons-material";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

const data = [
    { day: "Sun", value: 45 },
    { day: "Mon", value: 12 },
    { day: "Tue", value: 65 },
    { day: "Wed", value: 20 },
    { day: "Thu", value: 88 },
    { day: "Fri", value: 68 },
    { day: "Sat", value: 78 },
];

const TransactionOverview = () => {
    return (
        <div className="bg-[var(--bg-header)] rounded-2xl p-4 sm:p-6 w-full">
            <div className="flex justify-between items-start gap-2">
                <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[var(--black-clr)]">
                        Transaction Overview
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--gray-clr)] opacity-60 mt-1">
                        Lorem ipsum dolor sit amet, consectetur
                    </p>

                    <button className="flex items-center gap-2 mt-4 bg-[#E4F2FB] text-[#1EAAE7] px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium">
                        <FileDownloadOutlined fontSize="small" />
                        Download Report
                    </button>
                </div>

                <MoreHoriz className="text-[var(--black-clr)] opacity-50 cursor-pointer" />
            </div>

            <div className="w-full h-60 sm:h-72 mt-6">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid vertical={false} stroke="#EEE" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                        <Bar dataKey="value" fill="#E5E7EB" radius={[6, 6, 0, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TransactionOverview;