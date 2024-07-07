import React from 'react';
import Link from 'next/link';
import '@/public/styles/sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>HearEase</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/Library">Library</Link>
                <Link href="/CreatePlaylist">Create Playlist</Link>
                <Link href="/download">Download</Link>
            </nav>
        </div>
    );
};

export default Sidebar;
