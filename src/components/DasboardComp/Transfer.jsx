import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "@mui/icons-material";

const contacts = [
    { id: 1, name: "Ahmed", user: "@ahmxc", img: "https://i.pravatar.cc/150?img=11" },
    { id: 2, name: "Cindy", user: "@cindyss", img: "https://i.pravatar.cc/150?img=47" },
    { id: 3, name: "Samuel", user: "@sam224", img: "https://i.pravatar.cc/150?img=12" },
    { id: 4, name: "Olivia", user: "@oliv62", img: "https://i.pravatar.cc/150?img=45" },
    { id: 5, name: "Moiz", user: "@moizx", img: "https://i.pravatar.cc/150?img=13" },
];

const Transfer = () => {
    const [start, setStart] = useState(0);
    const [selected, setSelected] = useState(3);

    const next = () => setStart((s) => Math.min(s + 1, contacts.length - 2));
    const prev = () => setStart((s) => Math.max(s - 1, 0));

    return (
        <div className="bg-[var(--bg-header)] text-[var(--black-clr)] rounded-2xl p-4 sm:p-6 w-full" >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[var(--heading)]">Quick Transfer</h2>
                    <p className="text-xs sm:text-sm text-[var(--text)] opacity-60 mt-1">
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--heading)]">$56,772.38</h2>
            </div>

            {/* avatar slider */}
            <div className="relative flex items-center mt-4 sm:mt-6">
                <button
                    onClick={prev}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--white)] shadow flex items-center justify-center z-10 -mr-4 shrink-0"
                >
                    <ChevronLeft className="text-[#1EAAE7]" />
                </button>

                <div className="flex-1 overflow-hidden mx-2">
                    <div
                        className="flex gap-2 sm:gap-4 transition-transform duration-300"
                        style={{ transform: `translateX(-${start * 75}px)` }}
                    >
                        {contacts.map((c) => (
                            <button
                                key={c.id}
                                onClick={() => setSelected(c.id)}
                                className={`flex flex-col items-center gap-1 shrink-0 w-16 sm:w-20 pt-2 rounded-xl transition ${selected === c.id ? "bg-[#E4F2FB]" : ""
                                    }`}
                            >
                                <div className="relative">
                                    <img
                                        src={c.img}
                                        alt={c.name}
                                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ${selected === c.id ? "ring-2 ring-[#1EAAE7]" : ""
                                            }`}
                                    />
                                    {selected === c.id && (
                                        <CheckCircle className="!text-xs sm:!text-sm absolute -bottom-0.5 -right-0.5 text-[#1EAAE7] bg-[var(--white)] rounded-full" />
                                    )}
                                </div>
                                <div className="text-center pb-2">
                                    <p className="text-xs font-semibold text-[var(--heading)]">{c.name}</p>
                                    <p className="text-[10px] text-[var(--text)] opacity-50">{c.user}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={next}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--white)] shadow flex items-center justify-center z-10 -ml-4 shrink-0"
                >
                    <ChevronRight className="text-[#1EAAE7]" />
                </button>
            </div>

            <div className="mt-4 sm:mt-6">
                <p className="font-semibold text-[var(--heading)] mb-2 text-sm">Amount</p>
                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="text"
                        placeholder="Enter amount"
                        className="flex-1 bg-[var(--bg-body)] rounded-lg px-4 py-2 sm:py-3 outline-none text-[var(--gray-clr)] text-sm"
                    />
                    <button className="bg-[#1EAAE7] text-[var(--white)] text-xs sm:text-sm font-semibold px-4 py-2.5 sm:px-6 rounded-lg tracking-wide hover:bg-[#1896cc] transition shrink-0">
                        TRANSFER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Transfer;