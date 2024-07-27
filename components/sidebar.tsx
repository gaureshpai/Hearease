import React from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaHeadphones, FaUsers, FaDownload } from 'react-icons/fa';
import '@/public/styles/sidebar.css'

const Sidebar = () => {
    return (
        <aside className="bg-green-800 text-white md:w-64 md:h-[90vh] md:overflow-y-auto md:flex-shrink-0 transition-all duration-300 ease-in-out">
            <nav className="flex md:flex-col p-4  justify-center space-x-4 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-x-visible">
                <SidebarLink href="/" text="Home" icon={<FaHome />} />
                <SidebarLink href="/About" text="About Tinnitus" icon={<FaInfoCircle />} />
                <SidebarLink href="/Hearplay" text="Hearplay" icon={<FaHeadphones />} />
                <SidebarLink href="/Contributors" text="Contributors" icon={<FaUsers />} />
                <div className="md:hidden"><SidebarLink href="/download" text="Download app" icon={<FaDownload />} /></div>
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
    <Link
        href={href}
        className="flex items-center justify-center md:justify-start py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 ease-in-out whitespace-nowrap"
    >
        <span className="mr-2">{icon}</span>
        <span className="hidden md:inline">{text}</span>
    </Link>
);

export default Sidebar;