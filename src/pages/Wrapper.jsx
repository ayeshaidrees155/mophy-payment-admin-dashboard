import React, { useState, useEffect } from 'react';
import Navbar from "../components/header/Navbar";
import Aside from "../components/header/Aside";

export default function Wrapper({ children }) {
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-(--bg-body) flex flex-col relative overflow-x-hidden">
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="flex flex-1 pt-17 w-full relative">

                {/* Sidebar */}
                <div
                    className={`bg-(--bg-header) transition-all duration-300 fixed top-17 left-0 h-[calc(100vh-4.25rem)] z-40 shrink-0 ${isOpen
                        ? "w-56 translate-x-0"
                        : "w-[70px] -translate-x-full lg:translate-x-0"
                        }`}
                >
                    <Aside isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>

                {/* Mobile Backdrop */}
                {isOpen && window.innerWidth < 1024 && (
                    <div
                        className="fixed inset-0 bg-black/40 z-35 lg:hidden top-17"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                <div
                    onClick={() => {
                        if (window.innerWidth < 1024) setIsOpen(false);
                    }}
                    className={`py-6 px-4 sm:px-6 bg-(--bg-body) min-h-[calc(100vh-4.25rem)] flex-1 min-w-0 flex flex-col transition-all duration-300 ml-0 ${isOpen ? "lg:ml-56" : "lg:ml-[70px]"
                        }`}
                >
                    <div className="w-full flex flex-col gap-4 mx-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}