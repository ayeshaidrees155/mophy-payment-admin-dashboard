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
        <div className="min-h-screen bg-(--bg-body) flex flex-col relative">
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="flex flex-1 pt-17 w-full relative">

                <div
                    style={{ width: isOpen ? '' : '70px' }}

                    className={`bg-(--bg-header) transition-all duration-300 fixed lg:sticky top-17 left-0 h-[calc(100vh-4.25rem)] z-40 ${isOpen
                            ? "w-56 translate-x-0 lg:w-[16%]"
                            : "w-[70px] -translate-x-full lg:translate-x-0 lg:w-[70px]"
                        }`}
                >
                    <Aside isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>

                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-30 lg:hidden top-17"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                <div
                    className={`p-6 bg-(--bg-body) min-h-[calc(100vh-4.25rem)] transition-all duration-300 w-full ${isOpen ? "lg:w-[84%]" : "lg:w-[calc(100%-70px)]"
                        }`}
                >
                    {children}

                </div>
            </div>
        </div>
    );
}