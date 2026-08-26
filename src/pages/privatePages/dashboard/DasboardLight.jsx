import Wrapper from "../../Wrapper";
import BalanceCard from "../../../components/DasboardComp/BalanceCard";
import StatCard from "../../../components/DasboardComp/StatCard";
import TransactionOverview from "../../../components/DasboardComp/TransactionOverview";
import Spendings from "../../../components/DasboardComp/Spendings";
import Transfer from "../../../components/DasboardComp/Transfer";
import TransactionTable from "../../../components/DasboardComp/TransactionTable";

import React from "react";

const stats = [
    { title: "Income", value: "$65,123", change: "4% (30 days)", trend: "up", chart: "line" },
    { title: "Outcome", value: "$24,551", change: "4% (30 days)", trend: "down", chart: "line" },
    {
        title: "Weekly Wallet Usage",
        value: "43%",
        extra: "Than last week",
        change: "4% (30 days)",
        trend: "up",
        chart: "area",
        wide: true,
    },
];

const DashboardLight = () => {
    return (
        <Wrapper>

            <div className="p-3 sm:p-4 md:p-6 bg-[var(--backgroundColor)] min-h-screen">
                <h1 className="text-2xl sm:text-3xl font-bold text-(--black-clr) mb-4 sm:mb-6">Dashboard</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

                    <BalanceCard />


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 ">
                        {stats.map((stat, i) => (
                            <StatCard key={i} {...stat} />
                        ))}
                    </div>


                    <TransactionOverview />


                    <Spendings />


                    <Transfer />


                    <TransactionTable />
                </div>
            </div>
        </Wrapper>
    );
};

export default DashboardLight;