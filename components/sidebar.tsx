import React from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaHeadphones, FaUsers, FaDownload } from 'react-icons/fa';
import '@/public/styles/sidebar.css'

const Sidebar = () => {
    return (
        <aside className="bg-green-800 text-white lg:w-64 lg:h-[90vh] lg:overflow-y-auto lg:flex-shrink-0 transition-all duration-300 ease-in-out">
            <nav className="flex lg:flex-col p-4  justify-center space-x-4 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-x-visible">
                <SidebarLink href="/" text="Home" icon={<FaHome />} />
                <SidebarLink href="/About" text="About Tinnitus" icon={<FaInfoCircle />} />
                <SidebarLink href="/Hearplay" text="Hearplay" icon={<FaHeadphones />} />
                <SidebarLink href="/Contributors" text="Contributors" icon={<FaUsers />} />
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

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, text, icon }) => (
    <Link
        href={href}
        className="flex items-center justify-center lg:justify-start py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 ease-in-out whitespace-nowrap"
    >
        <span className="mr-2">{icon}</span>
        <span className="hidden lg:inline">{text}</span>
    </Link>
);

export default Sidebar;