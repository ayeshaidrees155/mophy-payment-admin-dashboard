import { MoreHoriz } from "@mui/icons-material";
import { PieChart, Pie, Cell } from "recharts";

const items = [
    { label: "Investment", spent: "$1,415", total: "$2,000", percent: 71, color: "#AC39D4", bg: "#AC39D4" },
    { label: "Installment", spent: "$1,567", total: "$5,000", percent: 30, color: "#2BC155", bg: "#2BC155" },
    { label: "Restaurant", spent: "$487", total: "$10,000", percent: 5, color: "#1EAAE7", bg: "var(--white)" },
    { label: "Property", spent: "$3,890", total: "$4,000", percent: 96, color: "#461EE7", bg: "#461EE7" },
];

const Donut = ({ percent, color, dark }) => {
    const data = [
        { value: percent },
        { value: 100 - percent },
    ];

    return (
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto" >
            <PieChart width={96} height={96}>
                <Pie
                    data={data}
                    dataKey="value"
                    innerRadius={32}
                    outerRadius={44}
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                >
                    <Cell fill={dark ? "var(--white)" : color} />
                    <Cell fill={dark ? "rgba(255,255,255,0.3)" : "#EEE"} />
                </Pie>
            </PieChart>
            <span
                className={`absolute inset-0 flex items-center justify-center font-bold text-sm sm:text-base ${dark ? "text-[var(--white)]" : "text-[var(--heading)]"
                    }`}
            >
                {percent}%
            </span>
        </div>
    );
};

const Spendings = () => {
    return (
        <div className="bg-[var(--bg-header)] text-[var(--black-clr)] rounded-2xl p-4 sm:p-6 w-full" >
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--heading)]">Spendings</h2>
                <MoreHoriz className="text-[var(--text)] opacity-50 cursor-pointer" />
            </div>

            {/* progress list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
                {items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <span
                            className="w-1.5 h-10 rounded-full shrink-0"
                            style={{ backgroundColor: item.color }}
                        />
                        <div>
                            <p className="text-xs sm:text-sm text-[var(--text)] opacity-60">{item.label}</p>
                            <p className="font-semibold text-sm sm:text-base text-[var(--heading)]">
                                {item.spent}{" "}
                                <span className="text-xs font-normal opacity-50">/{item.total}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* donut cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
                {items.map((item, i) => {
                    const isDark = item.bg !== "var(--white)";
                    return (
                        <div
                            key={i}
                            className={`rounded-2xl p-4 sm:p-6 text-center ${isDark ? "" : "border border-gray-100"
                                }`}
                            style={{ backgroundColor: item.bg }}
                        >
                            <Donut percent={item.percent} color={item.color} dark={isDark} />
                            <p
                                className={`mt-3 text-xs sm:text-sm font-medium ${isDark ? "text-[var(--white)]" : "text-[var(--heading)]"
                                    }`}
                            >
                                {item.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Spendings;