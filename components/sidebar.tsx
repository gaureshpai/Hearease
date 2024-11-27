/*import React from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaHeadphones, FaUsers, FaDownload } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const Sidebar = () => {
    return (
        <aside className="flex flex-col items-center justify-center min-h-screen bg-neutral-100">
            <nav className="flex lg:flex-col p-4  justify-center space-x-3 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-x-visible">
                <SidebarLink href="/" text="Home" icon={<FaHome />} />
                <SidebarLink href="/About" text="About Tinnitus" icon={<FaInfoCircle />} />
                <SidebarLink href="/Hearplay" text="Hearplay" icon={<FaHeadphones />} />
                <SidebarLink href="/Hearelax" text="Hearelax" icon={<AiOutlineHeart />} />
                <div className="lg:hidden"><SidebarLink href="/download" text="Download app" icon={<FaDownload />} /></div>
            </nav>
        </aside>
    );
};

interface SidebarLinkProps {
    href: string;
    text: string;
    icon: React.ReactNode;
}

/*const SidebarLink: React.FC<SidebarLinkProps> = ({ href, text, icon }) => (
    <Link
        href={href}
        className="flex items-center justify-center lg:justify-start py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out whitespace-nowrap"
    >
        <span className="mr-2">{icon}</span>
        <span className="hidden lg:inline">{text}</span>
    </Link>
);

export default Sidebar;*/
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaHeadphones, FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <aside className="lg:flex lg:flex-col items-center justify-center min-h-screen bg-neutral-100 lg:w-64">
            {/* Hamburger Icon for mobile view */}
            <div className="lg:hidden p-4 flex justify-between items-center w-full bg-neutral-100">
                <h2 className="text-xl font-semibold">HearEase</h2>
                <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            
            {/* Sidebar links */}
            <nav
                className={`flex flex-col lg:flex lg:flex-col p-4 space-y-2 ${
                    isOpen ? 'block' : 'hidden'
                } lg:block lg:space-y-4 transition-all duration-300 ease-in-out bg-neutral-100 lg:bg-transparent`}
            >
                <SidebarLink href="/" text="Home" icon={<FaHome />} />
                <SidebarLink href="/About" text="About Tinnitus" icon={<FaInfoCircle />} />
                <SidebarLink href="/Hearplay" text="Hearplay" icon={<FaHeadphones />} />
                <SidebarLink href="/Hearelax" text="Hearelax" icon={<AiOutlineHeart />} />
                <SidebarLink href="/download" text="Download app" icon={<FaDownload />} />
            </nav>
        </aside>
    );
};

interface SidebarLinkProps {
    href: string;
    text: string;
    icon: React.ReactNode;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, text, icon }) => (
    <Link href={href} passHref className="flex items-center justify-center lg:justify-start py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out whitespace-nowrap">
            <span className="mr-2">{icon}</span>
            <span className="hidden lg:inline">{text}</span>
    </Link>
);

export default Sidebar;