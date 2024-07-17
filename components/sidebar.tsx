import React from 'react';
import Link from 'next/link';
import '@/public/styles/sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar bg-green-800 text-white flex flex-col h-screen overflow-y-auto">
            <div className="flex flex-col space-y-4 p-4">
                <div className="button"><Link href="/">Home</Link></div>
                <div className="button"><Link href="/About">About Tinnitus</Link></div>
                <div className="button"><Link href="/Music-Player">Music Player</Link></div>
                <div className="button"><Link href="/Profiles">View all contributors</Link></div>
            </div>
        </div>
    );
};

export default Sidebar;
