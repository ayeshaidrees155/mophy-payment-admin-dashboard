import { useState } from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const tabs = ["Monthly", "Weekly", "Today"];

const transactions = [
    { id: 1, name: "XYZ Store ID", type: "Cashback", date: "June 4, 2024", time: "05:34", amount: 5553, status: "Completed" },
    { id: 2, name: "Chef Renata", type: "Transfer", date: "June 5, 2024", time: "05:34", amount: -167, status: "Pending" },
    { id: 3, name: "Cindy Alexandro", type: "Transfer", date: "June 5, 2024", time: "05:34", amount: 5553, status: "Canceled" },
    { id: 4, name: "Paipal", type: "Transfer", date: "June 5, 2024", time: "05:34", amount: 5553, status: "Completed" },
    { id: 5, name: "Hawkins Jr.", type: "Transfer", date: "June 4, 2024", time: "05:34", amount: -167, status: "Canceled" },
];

const statusColor = {
    Completed: "text-[var(--success)]",
    Pending: "text-orange-500",
    Canceled: "text-[var(--danger)]",
};

const TransactionTable = () => {
    const [activeTab, setActiveTab] = useState("Monthly");

    return (
        <div className="bg-[var(--bg-header)] text-[var(--black-clr)] rounded-2xl p-4 sm:p-6 w-full overflow-x-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 min-w-[320px]">
                <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[var(--heading)]">Previous Transactions</h2>
                    <p className="text-xs sm:text-sm text-[var(--text)] opacity-60 mt-1">
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                </div>

                <div className="flex gap-1 sm:gap-2 shrink-0">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition hover:opacity-80 ${activeTab === tab
                                    ? "bg-[#1EAAE7] text-[var(--white)]"
                                    : "text-[var(--text)] opacity-60"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-4 divide-y divide-gray-100 min-w-[600px]">
                {transactions.map((t) => {
                    const isCredit = t.amount > 0;
                    return (
                        <div key={t.id} className="flex items-center justify-between py-3 sm:py-4 gap-4">
                            <div className="flex items-center gap-3 w-1/3">
                                <span
                                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center shrink-0 ${isCredit
                                            ? "border-[var(--success)] text-[var(--success)]"
                                            : "border-[var(--danger)] text-[var(--danger)]"
                                        }`}
                                >
                                    {isCredit ? (
                                        <ArrowDownward fontSize="small" />
                                    ) : (
                                        <ArrowUpward fontSize="small" />
                                    )}
                                </span>
                                <div>
                                    <p className="font-semibold text-xs sm:text-sm text-[var(--heading)]">{t.name}</p>
                                    <p className="text-xs text-[var(--text)] opacity-50">{t.type}</p>
                                </div>
                            </div>

                            <p className="text-xs sm:text-sm text-[var(--text)] opacity-60 w-1/4">
                                {t.date} <br /> {t.time}
                            </p>

                            <p
                                className={`font-semibold text-xs sm:text-sm w-1/5 ${isCredit ? "text-[var(--success)]" : "text-[var(--heading)]"
                                    }`}
                            >
                                {isCredit ? "+" : "-"}${Math.abs(t.amount)}
                            </p>

                            <p className={`text-xs sm:text-sm font-medium w-1/6 text-right ${statusColor[t.status]}`}>{t.status}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TransactionTable;