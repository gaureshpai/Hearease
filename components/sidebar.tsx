import React from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaHeadphones, FaUsers, FaDownload } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import '@/public/styles/sidebar.css'

const Sidebar = () => {
    return (
            <aside className="bg-green-800 text-white lg:w-35 lg:h-[90vh] lg:overflow-y-auto lg:flex-shrink-0 transition-all duration-300 ease-in-out">
        
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
        className="flex items-center justify-center lg:justify-start py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 ease-in-out whitespace-nowrap"
    >
        <span className="mr-2">{icon}</span>
        <span className="hidden lg:inline">{text}</span>
    </Link>
);
*/
export default Sidebar;
